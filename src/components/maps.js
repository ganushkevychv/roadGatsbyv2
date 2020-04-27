import React from "react"
import { Card, CardDeck } from 'react-bootstrap';
import cherkasy from "../images/maps/Cherkasy.png"
import dnipropetrovsk from "../images/maps/Dnipropetrovsk.png"
import kirovohrad from "../images/maps/Kirovohrad.png"
import mykolaiv from "../images/maps/Mykolaiv.png"
import poltava from "../images/maps/Poltava.png"
import vinnytsia from "../images/maps/Vinnytsia.png"

const Maps = () => {
return (
    <div className="cards-maps">
<div className="map">
<CardDeck>
<Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}} >
<Card.Img variant="top" src={cherkasy} style={{width:"100%"}} />
<Card.Body>
  <Card.Title >Черкасская область</Card.Title>
</Card.Body>
</Card>
<Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}}>
<Card.Img variant="top" src={dnipropetrovsk} style={{width:"100%"}} />
<Card.Body>
  <Card.Title >Днепроперовская область</Card.Title>
</Card.Body>
</Card>
<Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}}>
<Card.Img variant="top" src={kirovohrad} style={{width:"100%"}} />
<Card.Body>
  <Card.Title >Кировоградская область</Card.Title>
</Card.Body>
</Card>
</CardDeck>
</div>
<div className="map-one">
<CardDeck>
<Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}} >
<Card.Img variant="top" src={mykolaiv} style={{width:"100%"}} />
<Card.Body>
  <Card.Title >Николаевская область</Card.Title>
</Card.Body>
</Card>
<Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}}>
<Card.Img variant="top" src={poltava} style={{width:"100%"}} />
<Card.Body>
  <Card.Title >Полтавская область</Card.Title>
</Card.Body>
</Card>
<Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}}>
<Card.Img variant="top" src={vinnytsia} style={{width:"100%"}} />
<Card.Body>
  <Card.Title >Винницкая область</Card.Title>
</Card.Body>
</Card>
</CardDeck>
</div>
</div>
)
}

export default Maps