import React from "react";
import firebase from "firebase";

export const useGetData = () => {
    const [documents, setDocuments] = React.useState([]);
    const db = firebase.firestore();
    React.useEffect(() => {
      db.collection("spellingwords")
        .get()
        .then((querySnapshot) => {
          let arr = [];
          querySnapshot.docs.map((doc) =>
            arr.push({ id: doc.id, value: doc.data() })
          );
          setDocuments(arr);
        });
    }, [db]);
    return [documents];
};

const Spell = () => {
    const[data] = useGetData();
    console.log(data);
    return <button>Click to start</button>;
}

export default Spell;
