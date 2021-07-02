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
    <Container>
      <Row>
        <Col>
          <Label>Word</Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <AudioPlayer
            audioUrl={props.currentWord.wordAudioUrl}
            autoPlay={true}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Label>Defintion</Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <AudioPlayer
            audioUrl={props.currentWord.defintionAudioUrl}
            autoPlay={false}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>Example</Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <AudioPlayer
            audioUrl={props.currentWord.exampleAudioUrl}
            autoPlay={false}
          />
        </Col>
      </Row>

    </Container>
  );
};

export default Word;
