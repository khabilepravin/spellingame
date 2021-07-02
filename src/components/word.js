import React, { useRef } from "react";

import {
  Button,
  Input,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import AudioPlayer from "./audioplayer";

const Word = (props) => {
  const audioControlRef = useRef();

  if (audioControlRef.current) {
    audioControlRef.current.load();
  }

  return (
    <Form>
      <FormGroup>
        <Label>Word</Label>
        <AudioPlayer
          audioUrl={props.currentWord.wordAudioUrl}
          autoPlay={true}
        />
      </FormGroup>

      <FormGroup>
        <Label>Defintion</Label>

        <AudioPlayer
          audioUrl={props.currentWord.defintionAudioUrl}
          autoPlay={false}
        />
      </FormGroup>
      <FormGroup>
        <Label>Example</Label>
        <AudioPlayer
          audioUrl={props.currentWord.exampleAudioUrl}
          autoPlay={false}
        />
      </FormGroup>
      <Input
        type="text"
        placeholder="Type your spelling here"
        spellCheck="false"
      />
    </Form>
  );
};

export default Word;
