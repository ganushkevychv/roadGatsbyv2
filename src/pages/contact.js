import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { Button } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';

import tel from "../images/tel.png"
import gmail from "../images/gmail.png"
import ListGroup from 'react-bootstrap/ListGroup'
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"

const Contact = (props) => (
  <BackgroundImage className="backgroundContacts"
    fluid={props.data.contactsImage.childImageSharp.fluid}
    >
  <div className="container">
    <SEO title="contact" />
    <div className="contacts-h1">
    <h1>Контакты</h1>
    </div>
    <div className="contact-card">
    <ListGroup style={{
      backgroundColor:"rgba(0,0,0,0.4)",
      border:"3px solid grey",
      borderRadius:"3px"
    }}>
  <ListGroup.Item style={{backgroundColor:"transparent"}}><p className="text"><a className="link-text" href="tel:+380992983816"><img className="tel" src={tel} alt="tel"/> +380992983816</a></p></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor:"transparent"}}><p className="text"><a className="link-text" href="tel:+380974055785"><img className="tel" src={tel} alt="tel"/> +380974055785</a></p></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor:"transparent"}}><p className="text"><a className="link-text" href="mailto:kirichkov2016@gmail.com"><img className="gmail" src={gmail} alt="gmail"/> kirichkov2016@gmail.com</a></p></ListGroup.Item>
</ListGroup>
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

export default Contact
export const pageQuery = graphql`
query {
  contactsImage: file(relativePath: { eq: "road1.jpg" }){
    childImageSharp {
      fluid(maxWidth: 3426){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
