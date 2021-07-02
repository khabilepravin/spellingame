import React,{ useRef} from "react";

import { Button, Input } from "reactstrap";

const Word = (props) => {
  const audioRef = useRef();

  audioRef.current.load();

  return (
    <>
      <audio controls autoPlay ref={audioRef}>
        <source src={props.currentWord.wordAudioUrl} type="audio/mp3" />
      </audio>
      <h4>{props.currentWord.defintion}</h4>
      <Input type="text" placeholder="Type your spelling here" />
    </>
  );
};

export default Word;
