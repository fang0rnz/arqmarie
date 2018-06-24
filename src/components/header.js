import React, { Component } from 'react'
import Link from 'gatsby-link'

import logo from '../images/logo.svg'

import {
  Container,
  Row,
  Col,
  NavbarBrand,
  NavbarToggler,
  Navbar,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap'

const ROUTES = [
  { label: 'home', path: '/', props: { exact: true } },
  { label: 'design', path: '/design' },
  { label: 'arquitetura', path: '/architecture' },
  { label: '3d', path: '/3d' },
  { label: 'sobre', path: '/about' },
]

class Header extends Component {
  state = {
    isNavBarOpen: false,
  }

  toggleNavBar = () => this.setState({ isNavBarOpen: !this.state.isNavBarOpen })

  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Navbar className="navbar-expand-lg navbar-light header">
              <NavbarBrand>
                <img
                  className="img-responsive logo col-md-12"
                  src={logo}
                  alt="Logo"
                />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggleNavBar} />
              <Collapse isOpen={this.state.isNavBarOpen} navbar>
                <Nav className="ml-auto header-navigator" navbar>
                  {ROUTES.map(({ label, path }) => (
                    <NavItem key={label}>
                      <Link
                        exact
                        activeStyle={{
                          color: 'red',
                        }}
                        to={path}
                        className="nav-link ml-4"
                      >
                        {label}
                      </Link>
                    </NavItem>
                  ))}
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Header
