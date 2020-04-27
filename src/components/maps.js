import React from "react"
import { Card, CardDeck } from 'react-bootstrap';
import cherkasy from "../images/maps/Cherkasy.png"
import dnipropetrovsk from "../images/maps/Dnipropetrovsk.png"
import kirovohrad from "../images/maps/Kirovohrad.png"
import mykolaiv from "../images/maps/Mykolaiv.png"
import poltava from "../images/maps/Poltava.png"
import vinnytsia from "../images/maps/Vinnytsia.png"
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
  <Card.Title>Черкасская, Полтавская, Винницкая, Днепроперовская, Кировоградская, Николаевская область</Card.Title>
  </div>
</Card.Body>
</Card>
</div>
)
}

export default Maps