import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import {Row} from "react-bootstrap"
import "./maingate.css"
import { mainCardItemFun } from './util'

const MainGate = () => {
  return (
   <Container fluid className='maingate-container'>
      <Row className="cards-row"> {mainCardItemFun}</Row>
   </Container>
  )
}

export default MainGate