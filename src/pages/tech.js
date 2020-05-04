import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Card, CardDeck } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import loader from "../images/loader.jpg"
import bulldozer from "../images/bulldozer.jpg"
import excavator from "../images/excavator.jpg"
import maz from "../images/maz.jpg"
import carTrailer from "../images/carTrailer.jpg"
import stuff from "../images/stuff.jpg"
import mini from "../images/mini.jpg"
import roller from "../images/roller.jpg"
import ford from "../images/ford.jpg"
import dumper from "../images/dumper.jpg"
import reno from "../images/reno.jpg"
import trailer from "../images/trailer.jpg"
import call from "../images/call.jpg"
import grader from "../images/grader.jpg"
import tral from "../images/tral.jpg"
import Logo from "../images/me.png"
import 'bootstrap/dist/css/bootstrap.min.css';


const Tech = (props) => (
  <Layout>
  <div className="container-tech">
    <SEO title="Техника | Елисаветдорбуд" keywords={[`аренда техники`, `Кировоградская область`, `строительство дорог Кропивницкий`, `ремонт тротуаров Кропивницкий`]}/>
    <h1 className="header">Наша техника</h1>
    <div className="cards">
    <CardDeck>
  <Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}} >
    <Card.Img variant="top" src={roller} alt="roller" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title >Каток</Card.Title>
      <Card.Text >
      DYNAPAC vibrationswalze CC 82/92
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    color:""
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}}>
    <Card.Img variant="top" src={excavator} alt="excavator" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title >Экскаватор</Card.Title>
      <Card.Text >
      HANIX S&B 30, с тремя ковшами
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    color:""
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}}>
    <Card.Img variant="top" src={grader} alt="grader" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title >Бульдозер</Card.Title>
      <Card.Text >
      ДТ-75
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    color:""
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
<div className="cards-one">
<CardDeck>
<Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
 }} >
    <Card.Img variant="top" src={bulldozer} alt="bulldozer" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Автогрейдер</Card.Title>
      <Card.Text >
      ДЗ-99
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    color:""
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}} >
    <Card.Img variant="top" src={loader} alt="loader" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Погрузчик</Card.Title>
      <Card.Text>
      ZTS UN-053
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    color:""
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}} >
    <Card.Img variant="top" src={maz} alt="maz" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Грузовой автотранспорт</Card.Title>
      <Card.Text>
      МАЗ-555 с прицепом
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9",
    textAlign:"center"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
  </CardDeck>
  </div>
  <div className="cards-three">
  
  <CardDeck>
<Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
 }} >
    <Card.Img variant="top" src={trailer} alt="trailer" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Прицеп</Card.Title>
      <Card.Text >
      Грузоподъемность 10 тонн
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    color:""
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}} >
    <Card.Img variant="top" src={tral} alt="tral" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Трал</Card.Title>
      <Card.Text>
      Грузоподъемность 8 тонн
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    color:""
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}} >
    <Card.Img variant="top" src={dumper} alt="dumper" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Думпер</Card.Title>
      <Card.Text>
      Aures G400
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9",
    textAlign:"center"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
  </CardDeck>
</div>
<div className="cards-four">
  
  <CardDeck>
<Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
 }} >
    <Card.Img variant="top" src={mini} alt="mini" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Минигудронатор</Card.Title>
      <Card.Text >
      TICAB БР-500
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    color:""
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}} >
    <Card.Img variant="top" src={reno} alt="reno" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Легковой автотранспорт</Card.Title>
      <Card.Text>
      RENO TRAFFIC с прицепом
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    color:""
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}} >
    <Card.Img variant="top" src={ford} alt="ford" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Легковой автотранспорт</Card.Title>
      <Card.Text>
      FORD TRANSIT с прицепом
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9",
    textAlign:"center"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
  </CardDeck>
</div>
<div className="cards-five">
  
  <CardDeck>
<Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
 }} >
    <Card.Img variant="top" src={carTrailer} alt="car trailer" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Прицеп</Card.Title>
      <Card.Text >
      Грузоподъемность 2 тонны
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    color:""
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}} >
    <Card.Img variant="top" src={stuff} alt="stuff" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Персонал</Card.Title>
      <Card.Text>
      Персонал с опытом
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    color:""
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem',
backgroundColor:"rgba(0,0,0,0.4)"
}} >
    <Card.Img variant="top" src={call} alt="call" style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Консультации</Card.Title>
      <Card.Text>Консультации специалистов</Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button style={{
    backgroundColor:"#90caf9",
    textAlign:"center"
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    
    }}>Заказать</Link></Button>
    </Card.Footer>
  </Card>
  </CardDeck>
</div>
<div className="button-back">
<Button style={{
    border:"3px solid grey",
    backgroundColor:"rgba(0,0,0,0.4)"
  }}><Link to="/"  
  style={{
    textDecoration:"none",
    color:"white"
    }}>Назад</Link></Button>
    </div>
    </div>
    <div className="tech-footer">
      <h4 className="text-center">All rights reserved© {new Date().getFullYear()}, Created by
            {` `}
            <a href="https://vladyslav-ganushkevych.netlify.app/"><img className="link-logo" src={Logo} width="30" 
    height="30" alt="logo"/></a></h4>
      
     
      </div>
    </Layout>
)

export default Tech

export const pageQuery = graphql`
query {
  techImage: file(relativePath: { eq: "road1.jpg" }){
    childImageSharp {
      fluid(maxWidth: 3426){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
