import React from "react";
import SEO from "../components/seo";
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Gallery from "../components/gallery"
import Maps from "../components/maps"
const IndexPage = (props) => (
  <Layout>
      <SEO title="Home" />

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
