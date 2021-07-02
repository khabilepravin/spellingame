import React, { useState } from "react";
import firebase from "firebase";
import { Button, Container, Col, Row, Progress,Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faCheck } from "@fortawesome/free-solid-svg-icons";
import Word from "./word";
import UserAnswer from "./useranswer";

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
  const totalWordsInATest = 10;
  const [data] = useGetData(totalWordsInATest);
  const [buttonText, setButtonText] = useState("Next");
  const [buttonClass, setButtonClass] = useState("primary");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [userAnswer, setUserAnswer] = useState();

  const moveToNextWord = () => {
    console.log(`user answer is: ${userAnswer}`);
    setCurrentIndex(currentIndex+1);
    if (currentIndex === totalWordsInATest - 2) {
      setButtonText("Done");
      setButtonClass("success");
    } 
  };



  if (data.length > 0) {
    return (
      <Container>
        <Row>
          <Col>
            <Word currentWord={data[currentIndex].wordData} />
          </Col>
        </Row>
        <Row>
        <Col>
          <UserAnswer/>
          <br/>
        </Col>
      </Row>
        <Row>
          <Col>
            <Progress value={currentIndex+1} max={totalWordsInATest}>{currentIndex+1} of {totalWordsInATest}</Progress>
            <br/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color={buttonClass} onClick={moveToNextWord}>
              <FontAwesomeIcon icon={buttonText == 'Done' ? faCheck : faForward} /> {buttonText}
            </Button>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};

export default SpellTest;
