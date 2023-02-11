import React from 'react'
import {Row,Col} from "react-bootstrap";

const DateCounts = (person) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className=""> 
            <h3 className="font mb-5">You have {person.length} dates tody</h3>
          </Col>
        </Row>
  )
}
export default DateCounts;
