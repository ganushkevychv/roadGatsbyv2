import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { Button } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Logo from "../images/me.png"
import { graphql } from "gatsby"

const Contact = (props) => (
<Layout>
  <div className="container">
    <SEO title="Контакты | Елисаветдорбуд" />
    <div className="contacts-h1">
    <h1>Контакты</h1>
    </div>
    <div className="contacts">
  <h2 className="contact-title" padding-top="30px">Руководитель - Киричков Владимир Ильич</h2>
  <div className="contacts-text">
    <p className="contact-text large"><a className="contact-link" href="tel:+380992983816">+38(099)2983816</a></p>
    <p className="contact-text medium"><a className="contact-link" href="tel:+380992983816">+38(097)4055785</a></p>
    <p className="contact-text"><a className="contact-link" href="mailto:kirichkov2016@gmail.com">kirichkov2016@gmail.com</a></p>
  </div>
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
  <div className="contact-footer">
      <h4 className="text-center">All rights reserved© {new Date().getFullYear()}, Created by
            {` `}
            <a href="https://vladyslav-ganushkevych.netlify.app/"><img className="link-logo" src={Logo} width="30" 
    height="30" alt="logo"/></a></h4>
      </div>
  </Layout>
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
