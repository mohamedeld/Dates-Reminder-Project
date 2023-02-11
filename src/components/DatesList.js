import React from 'react'
import {Row,Col} from "react-bootstrap";
export const DatesList = ({person}) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className=""> 
            <div className="rectangle">
              {person.length? (person.map((p)=>{
                return(
                  <div key={p.id} className="d-flex align-items-center p-3 border-bottom mx-5">
                <img src={p.img} alt="person-picture" className="myimg"/>
                <div className="px-5">
                  <h4>{p.name}</h4>
                  <p>{p.time}</p>
                </div>
              </div>
                )
              })):<h2 className="p-5 text-center">There aren't Dates today</h2>};

            </div>
          </Col>
        </Row>
  )
}
