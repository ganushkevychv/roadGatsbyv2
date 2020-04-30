import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Gallery from "../components/gallery"
import Maps from "../components/maps"
import Logo from "../images/me.png"
const IndexPage = (props) => (
  <Layout>
      <SEO title="Елисаветдорбуд" />

      <div className="background-header">
          <div className="text-overlay">
    <h1 className="header-title">Елисаветдорбуд</h1>
    <div className="header-slogan">
    <p >Ремонт дорог – наше призвание!</p>
    <p >Считается, что положить асфальт – элементарный процесс. Но чтобы сделать это правильно и качественно, нужно обратиться к нам. На счету нашего предприятия масса выполненных проектов, напрямую или косвенно связанных с дорожным покрытием.</p>
    <p >Нам под силу решить самые амбициозные задачи и масштабные проекты.</p>
    </div>
    </div>
    
    </div>
    <h2 className="tech-title">Техника и ресурсы</h2>
    <Gallery/>
    <h2 className="tech-title">География</h2>
<Maps/>
<div className="contacts">
  <h2 className="contact-title">Руководитель - Киричков Владимир Ильич</h2>
  <div className="contacts-text">
    <p className="contact-text large"><a className="contact-link" href="tel:+380992983816">+38(099)2983816</a></p>
    <p className="contact-text medium"><a className="contact-link" href="tel:+380992983816">+38(097)4055785</a></p>
    <p className="contact-text"><a className="contact-link" href="mailto:kirichkov2016@gmail.com">kirichkov2016@gmail.com</a></p>
  </div>
</div>
<div className="site-footer">
      <h4 className="text-center">All rights reserved© {new Date().getFullYear()}, Created by
            {` `}
            <a href="https://vladyslav-ganushkevych.netlify.app/"><img className="link-logo" src={Logo} width="30" 
    height="30" alt="logo"/></a></h4>
      
     
      </div>
  </Layout>
)


export default IndexPage;

export const pageQuery = graphql`
query {
  indexImage: file(relativePath: { eq: "road1.jpg" }){
    childImageSharp {
      fluid(maxWidth: 1900){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
