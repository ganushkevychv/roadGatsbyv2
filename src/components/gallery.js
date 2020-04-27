import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Badge } from 'reactstrap';
import loader from "../images/loader.jpg"
import bulldozer from "../images/bulldozer.jpg"
import excavator from "../images/excavator.png"
import maz from "../images/maz.jpg"
import carTrailer from "../images/carTrailer.jpg"
import stuff from "../images/stuff.jpg"
import mini from "../images/mini.png"
import roller from "../images/roller.png"
import ford from "../images/ford.jpg"
import dumper from "../images/dumper.jpg"
import reno from "../images/reno.jpg"
import trailer from "../images/trailer.jpg"
import call from "../images/call.jpg"
import grader from "../images/grader.jpg"
import tral from "../images/tral.jpg"
const Gallery = () => {
return (
<div className="carousel">
<Carousel style={{width:"30rem"}}>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={roller}
      alt="roller"
    />
    <Carousel.Caption>
    <Badge color="secondary">Каток DYNAPAC vibrationswalze CC 82/92</Badge>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={excavator}
      alt="excavator"
    />

    <Carousel.Caption>
    
    <Badge color="secondary">Экскаватор HANIX S&B 30, с тремя ковшами</Badge>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={grader}
      alt="grader"
    />

    <Carousel.Caption>
    <Badge color="secondary">Бульдозер ДТ-75</Badge>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bulldozer}
      alt="bulldozer"
    />

    <Carousel.Caption>
    
    <Badge color="secondary">Автогрейдер ДЗ-99</Badge>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={loader}
      alt="loader"
    />

    <Carousel.Caption>
    
    <Badge color="secondary">Погрузчик ZTS UN-053</Badge>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={maz}
      alt="maz"
    />

    <Carousel.Caption>
    <Badge color="secondary">МАЗ-555 с прицепом</Badge>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={trailer}
      alt="trailer"
    />

    <Carousel.Caption>
    <Badge color="secondary">Прицеп грузоподъемность 10 тонн</Badge>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tral}
      alt="tral"
    />

    <Carousel.Caption>
    <Badge color="secondary">Трал грузоподъемность 8 тонн</Badge>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={dumper}
      alt="dumper"
    />

    <Carousel.Caption>
    <Badge color="secondary">Думпер Aures G400</Badge>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={mini}
      alt="mini"
    />

    <Carousel.Caption>
    <Badge color="secondary">Минигудронатор TICAB БР-500</Badge>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={reno}
      alt="reno"
    />

    <Carousel.Caption>
    
    <Badge color="secondary">RENO TRAFFIC с прицепом</Badge>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ford}
      alt="ford"
    />

    <Carousel.Caption>
    <Badge color="secondary">FORD TRANSIT с прицепом</Badge>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carTrailer}
      alt="carTrailer"
    />

    <Carousel.Caption>
   
    <Badge color="secondary">Прицеп грузоподъемность 2 тонны</Badge>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={stuff}
      alt="stuff"
    />

    <Carousel.Caption>
    
    <Badge color="secondary">Персонал с опытом</Badge>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={call}
      alt="call"
    />

    <Carousel.Caption>
    
    <Badge color="secondary">Консультации специалистов</Badge>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
)
}

export default Gallery