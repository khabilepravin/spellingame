import React, { useState } from "react";
import firebase from "firebase";
import { Button, Input, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import  Word  from "./word";

export const useGetData = (numberRandomRecords) => {
  const [documents, setDocuments] = React.useState([]);
  const db = firebase.firestore();
  const max = 871;
  let recordIndexes = [];
  for (let i = 0; i < numberRandomRecords; i++) {
    recordIndexes.push(getRandomInt(max));
  }
  
  React.useEffect(() => {
    db.collection("spellingwords")
      .get()
      .then((querySnapshot) => {
        let arr = [];        
        querySnapshot.docs.map((doc) =>
          arr.push({ id: doc.id, value: doc.data() })
        );
        
        let resultArr = [];
        recordIndexes.map((i) => {         
          resultArr.push({ wordData: arr[i].value });
        });

        setDocuments(resultArr);
      });
  }, [db]);
  return [documents];
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const SpellTest = () => {
  const [data] = useGetData(10);
  const[currentIndex, setCurrentIndex] = useState(0);

  const moveToNextWord = () => {
    setCurrentIndex(currentIndex+1);
  };
  
  if (data.length > 0) {
    return (
      <Container>      
         <Word currentWord={data[currentIndex].wordData}/>
        <Button color="primary" onClick={moveToNextWord}>
          <FontAwesomeIcon icon={faForward} /> Next
        </Button>
      </Container>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};

export default SpellTest;
