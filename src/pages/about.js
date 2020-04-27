import React from "react"
import { Button } from '@material-ui/core'
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import 'bootstrap/dist/css/bootstrap.min.css';

const About = (props) => (
  <BackgroundImage className="backgroundAbout"
  fluid={props.data.aboutImage.childImageSharp.fluid}
  >
  <div className="container">
    <SEO title="about" />
    <h1 className="header">Елисаветдорбуд</h1>
    <div>
    <Card style={{
      backgroundColor:"rgba(0,0,0,0.4)"
    }}>
      <Card.Text style={{textAlign:"center"}}>
      Ремонт дорог – наше призвание!
      </Card.Text>
      <Card.Text style={{textAlign:"center"}}>
Считается, что положить асфальт – элементарный процесс. Но чтобы сделать это правильно и качественно, нужно обратиться к нам.
</Card.Text>
    </Card>
    </div>
    <div>
    <Accordion >
  <Card style={{
      backgroundColor:"rgba(0,0,0,0.4)"
    }}>
    <Card.Header>
      <Accordion.Toggle
       className="link-btn"
        as={Button}
         style={{
           color:"white",
           textDecoration:"none"
           }} 
           variant="link" 
           eventKey="0"
           >
        Спектр выполняемых нами работ
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body style={{color:"white"}}>
        <ul>
          <li>Асфальтирование дорог, площадок и других ограниченных территорий</li>
          <li>Полный и частичный ремонт дорожного асфальтного покрытия</li>
          <li>Строительство новых трасс и дорог</li>
          <li><Link to="/tech/"  
  style={{
    textDecoration:"none",
    color:""
    }}>Аренда техники для укладки асфальта и других видов покрытий</Link></li>
    <li>Проектирование дорожных работ</li>
    <li>Геодезические работы</li>
    <li>Подготовительные работы</li>
    <li>Земляные работы</li>
    <li>Устройство дорожного корыта</li>
    <li>Устройство щебеночного основания</li>
    <li>Устройство асфальтобетонного покрытия</li>
    <li>Разборка асфальтобетонных покрытий</li>
    <li>Ямочный ремонт</li>
    <li>Благоустройство дорог, площадок и ограниченных территорий:</li>
    <ol>
    <li>Ремонт тротуаров</li>
    <li>Укладка тротуаров и плитки</li>
    <li>Установка бордюрного камня</li>
    </ol>
    <li>Вывоз строительных отходов</li>
    <li>Ввоз чернозема и вывоз грунта</li>
    <li>Поставка асфальта</li>
    <li>Поставка щебня</li>
    <li>Поставка песка</li>
    </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card style={{
      backgroundColor:"rgba(0,0,0,0.4)"
    }}>
    <Card.Header>
      <Accordion.Toggle 
      className="link-btn" 
      as={Button} 
      style={{
        color:"white",
        textDecoration:"none"
      }} 
      variant="link" 
      eventKey="1"
      >
      Техника и ресурсы
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Мы обладаем полным комплектом техники, необходимой для выполнения дорожных работ. Каждый экземпляр техники прошел проверку на работоспособность, опробован на проектах, и мы готовы утверждать, что эта техника не подведет. Самосвалы, бульдозеры, экскаваторы, катки и ряд специальной гидравлической техники, могут работать на любой территории, как на обширных площадках, так и проводить асфальтирование на стесненных участках.
Строительные материалы мы заказываем только у надежных поставщиков, с которыми наша компания работает постоянно, и поэтому даем гарантию на проведенные работы.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion>
<Card style={{
      backgroundColor:"rgba(0,0,0,0.4)"
    }}>
    <Card.Header>
      <Accordion.Toggle 
      className="link-btn" 
      as={Button} 
      style={{
        color:"white",
        textDecoration:"none"
      }} 
      variant="link" 
      eventKey="0"
      >
      Локализация
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Мы работаем как с частными организациями, так и с бюджетными заказчиками, которые требуют беспрецедентного качества выполнения работ. Мы готовы предложить свои услуги всем желающим на территории  Кировоградской области, а также других близлежащих регионах, в частности, в Полтавской, Днепроперовской, Николаевской, Винницкой и Черкасской областях. Большинство наших заказчиков находятся  в городах: Александрия, Светловодск и Кропивницкий.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card style={{
      backgroundColor:"rgba(0,0,0,0.4)"
    }}>
    <Card.Header>
      <Accordion.Toggle 
      className="link-btn" 
      as={Button} 
      style={{
        color:"white",
        textDecoration:"none"
      }} 
      variant="link" 
      eventKey="1"
      >
      Финансовый вопрос
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Детали оплаты и её форма, рассматриваются в индивидуальном порядке с каждым клиентом. На конечную стоимость может влиять не только объём работ, но и локализация строительного объекта, а также ряд сопутствующих факторов, таких как тип грунта и географические особенности рельефа местности. Аналогично на стоимость работ влияют используемые материалы, поэтому все детали определяются исключительно исходя из конкретно взятых условий.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
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
    </BackgroundImage>
)

export default About

export const pageQuery = graphql`
query {
  aboutImage: file(relativePath: { eq: "road1.jpg" }){
    childImageSharp {
      fluid(maxWidth: 3426){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
