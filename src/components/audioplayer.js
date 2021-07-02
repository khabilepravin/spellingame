import React, { useRef } from "react";
import { Badge } from "reactstrap";

const AudioPlayer = (props) => {
  const audioControlRef = useRef();

  if (audioControlRef.current) {
    audioControlRef.current.load();
  }

  console.log(props.audioUrl);

  if (props.audioUrl === null) {
    return <Badge color="warning">Not Available</Badge>;
  } else {
    return (
      <audio controls autoPlay={props.autoPlay} ref={audioControlRef}>
        <source src={props.audioUrl} type="audio/mp3" />
      </audio>
    );
  }
};

export default AudioPlayer;
