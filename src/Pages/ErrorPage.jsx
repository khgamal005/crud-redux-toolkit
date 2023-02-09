import React from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useNavigate, useRouteError } from "react-router-dom"



const ErrorPage = () => {
    const navigate= useNavigate()
    const error = useRouteError();
    console.error(error);
  
  return (
   
    <Row>
      <Col className='text-center' xs={{ span: 8, offset: 2 }}>
      <div 
      id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    <button onClick={()=>navigate('/',{ replace:true})}>back</button>
      </Col>
    </Row>
 
  )
}

export default ErrorPage