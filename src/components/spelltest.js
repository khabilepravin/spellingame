import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import { Button, Container, Col, Row, Progress, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faCheck } from "@fortawesome/free-solid-svg-icons";
import Word from "./word";

import { useGetData } from "../useGetDataHook";

export const verifyIfCorrect = (word, userAnswer) => {
  if (word && userAnswer) {
    if (word.toUpperCase() == userAnswer.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  }
  else{
      return false;
  }
};

const SpellTest = () => {
  const history = useHistory();
  const userAnswerRef = useRef(null);
  const totalWordsInATest = 10;
  const [data] = useGetData(totalWordsInATest);
  const [buttonText, setButtonText] = useState("Next");
  const [buttonClass, setButtonClass] = useState("primary");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');
  
  const moveToNextWord = () => {
    setUserAnswer('');
    let isCorrect = verifyIfCorrect(data[currentIndex].wordData.word, userAnswer);
    setResults(results => [...results, { word: data[currentIndex].wordData.word, userEnteredAnswer: userAnswer, isCorrect: isCorrect }]);

    setCurrentIndex(currentIndex + 1);

    if(currentIndex === totalWordsInATest -2) {
      setButtonText("Done");
      setButtonClass("success");
    }

     if (currentIndex === totalWordsInATest - 1) {
       let finalResult = results.slice();
       // Push the last item before redirecting
      let isCorrect = verifyIfCorrect(data[currentIndex].wordData.word, userAnswer); 
      finalResult.push({ word: data[currentIndex].wordData.word, userEnteredAnswer: userAnswer, isCorrect: isCorrect });
      history.push("/result", finalResult);
     }
  };

  const handleUserAnswer = (event) =>{
    setUserAnswer(event.target.value);
  };

  if (data.length > 0) {
    return (
      <Container>
        <Row>
          <Col>
          <br/>
            <Word currentWord={data[currentIndex].wordData} />
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              type="text"
              placeholder="Enter Spelling"
              spellCheck="false"
              autoComplete="false"
              autoCorrect="false"
              autoCapitalize="false"
              className="input-lg"
              ref={userAnswerRef}
              value={userAnswer}
              onChange={handleUserAnswer}
            />
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Progress value={currentIndex + 1} max={totalWordsInATest}>
              {currentIndex + 1} of {totalWordsInATest}
            </Progress>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color={buttonClass} onClick={moveToNextWord}>
              <FontAwesomeIcon
                icon={buttonText == "Done" ? faCheck : faForward}
              />{" "}
              {buttonText}
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
