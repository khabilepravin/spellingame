import React from "react";
import { Table, Badge } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
//import ResultPie from "./resultpie";

const Result = (props) => {
  if (props.location.state) {
    return (
      <>
        {/* <ResultPie /> */}
        <Table>
          <thead>
            <tr>
              <th>Correct Spelling</th>
              <th>Your Answer</th>
              <th>Is Correct</th>
            </tr>
          </thead>
          <tbody>
            {props.location.state.map((result) => {
              return (
                <tr key={result.word}>
                  <th>
                    <Badge color="success">{result.word}</Badge>
                  </th>
                  <th>
                    <Badge color={result.isCorrect ? "primary" : "danger"}>
                      {result.userEnteredAnswer}
                    </Badge>
                  </th>
                  <th>
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
      </>
    );
  } else {
    return <h2>No results </h2>;
  }
};

export default Result;
