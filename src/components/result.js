import React from "react";
import { Table, Badge , Button} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Result = (props) => {
  const history = useHistory();
  const handleNewGameClick = () => {
    history.push("/");
  };

  if (props.location.state) {
    return (
      <>
        <Table>
          <thead>
            <tr>
              <th>Spelling</th>
              <th>Your Answer</th>
            </tr>
          </thead>
          <tbody>
            {props.location.state.map((result) => {
              return (
                <tr key={result.word}>
                  <th>
                    <Badge color="success"><h6>{result.word}</h6></Badge>
                  </th>
                  <th>
                    <Badge color={result.isCorrect ? "primary" : "danger"}>
                      <h6>{result.userEnteredAnswer}</h6>
                    </Badge> { }
                    <FontAwesomeIcon
                      icon={result.isCorrect ? faCheck : faTimes}
                      color="primary"
                    />
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button color="primary"  onClick={handleNewGameClick}><FontAwesomeIcon icon={faGamepad}/> New Game</Button>    
      </>
    );
  } else {
    return <h2>No results </h2>;
  }
};

export default Result;
