import React, { useState } from "react";
import { Button, Container, Col, Row, Progress,Input } from "reactstrap";

const UserAnswer = () => {
  const [userAnswer, setUserAnswer] = useState();

  const handleUserAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Enter Spelling"
      spellCheck="false"
      className="input-lg"
      value={userAnswer}
      onChange={handleUserAnswerChange}
    />
  );
};

export default UserAnswer;
