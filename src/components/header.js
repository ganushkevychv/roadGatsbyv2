import PropTypes from "prop-types"
import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge } from 'reactstrap';
  import logoRoller from "../images/logoRoller.png"

class Header extends React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" light expand="sm">
        <div className="container">

        <NavbarBrand href="/"><img width="40px" src={logoRoller}/><Badge color="secondary">{this.props.siteTitle}</Badge></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">О Нас</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tech">Техника</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Контакты</NavLink>
              </NavItem>
            </Nav>
          </Collapse>   
        </div>
         
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"
// import { Nav, NavItem, NavLink } from 'reactstrap';

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `lightgrey`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 1900,
//         padding: `0.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `black`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//       <div>
//       <Nav>
//         <NavItem>
//           <NavLink href="/about">О Нас</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="/tech">Техника</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="/contact">Контакты</NavLink>
//         </NavItem>
//       </Nav>
//     </div>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
