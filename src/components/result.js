import React from "react";
import { Table } from 'reactstrap';


const Result = (props) =>{

    if(props.location.state){
        return <Table>
            <thead>
                <tr>
                    <th>Correct Spelling</th>
                    <th>Your Answer</th>
                </tr>
            </thead>
            {props.location.state.map((result) =>{
                return <tr>
                    <th>{result.word}</th>
                    <th>{result.userEnteredAnswer}</th>
                </tr>;
            } )}
        </Table>
        
    }
    else{
        return <h2>No results </h2>
    }

    
};

export default Result;
