import React from 'react'
import {Row,Col} from "react-bootstrap";
export const DatesButton = ({deleteData,showData}) => {
  return (
    <Row className="justify-content-center m-2">
          <Col sm="8" className=""> 
            <div className="d-flex justify-content-between">
              <button onClick={deleteData} className="btn_style py-3 my-5">Delete All</button>
              <button onClick={showData} className="btn_style py-3 my-5">Show Data</button>
            </div>
          </Col>
        </Row>
  )
}
