import React, { Component } from 'react';
import { styled } from 'reakit';

const Nav = styled.div`
  overflow: hidden;
  background-color: #333;
`;

const NavLink = styled.a`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

const NavIcon = styled.i`
  display: none;
`;

export default class NavMenu extends Component {
  state: {
    open: false;
  };

  toggle = (e: any) => {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Nav>
        <NavLink href="#home" className="active">
          Home
        </NavLink>
        <NavLink href="#news">News</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink className="icon" onClick={this.toggle}>
          <NavIcon className="fa fa-bars" />
        </NavLink>
      </Nav>
    );
  }
}
