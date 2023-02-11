import React,{useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import {person} from "./data";
import DateCounts from "./components/DateCounts";
import { DatesList } from "./components/DatesList";
import { DatesButton } from "./components/DatesButton";

function App() {

  const [personData,setPersonData] = useState(person);
  const onDelete = ()=>{
    setPersonData([]);
  }
  const onViewData =()=>{
    setPersonData(person)
  }
  return (
    <div className="header">
      <Container className="py-5">
        <DateCounts person ={personData}/>
        <DatesList person={personData}/>
        <DatesButton deleteData={onDelete} showData={onViewData}/>
      </Container>
    </div>
  );
}

export default App;
