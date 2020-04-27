import React from "react"
import { Card } from 'react-bootstrap';
import allmaps from "../images/maps/allmaps.png"

const Maps = () => {
return (
<div className="map">
<Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)",

}} >
<Card.Img variant="top" src={allmaps} style={{width:"100%"}} />
<Card.Body>
  <div className="card-text">
  <Card.Title>Кировоградская, Черкасская, Полтавская, Винницкая, Днепроперовская, Николаевская область</Card.Title>
  </div>
</Card.Body>
</Card>
</div>
)
}

export default Maps