import React from "react";
import { Table,Badge } from 'reactstrap';


const Result = (props) =>{

    if(props.location.state){
        return <Table>
            <thead>
                <tr>
                    <th>Correct Spelling</th>
                    <th>Your Answer</th>
                </tr>
            </thead>
            <tbody>
            {props.location.state.map((result) =>{
                return (
                  <tr key={result.word}>
                    <th>{result.word}</th>
                    <th>
                      <Badge>{result.userEnteredAnswer}</Badge>
                    </th>
                  </tr>
                );
            } )}
            </tbody>
        </Table>
        
    }
    else{
        return <h2>No results </h2>
    }

    
};

export default Result;
