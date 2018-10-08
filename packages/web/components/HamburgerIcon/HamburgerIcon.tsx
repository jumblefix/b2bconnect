import React, { Component } from 'react';
import { css, styled } from 'reakit';

interface BarProps {
  open: boolean;
  position: number;
}

const BarContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Bar = styled.div<BarProps>`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
  ${({ open, position }) =>
    open &&
    position === 1 &&
    css`
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    `};
  ${({ open, position }) =>
    open &&
    position === 2 &&
    css`
      opacity: 0;
    `};
  ${({ open, position }) =>
    open &&
    position === 3 &&
    css`
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    `};
`;

export default class HamburgerIcon extends Component {
  state = {
    open: false,
  };

  toggle = (e: any) => {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  render() {
    const { open } = this.state;
    return (
      <BarContainer onClick={this.toggle}>
        <Bar open={open} position={1} />
        <Bar open={open} position={2} />
        <Bar open={open} position={3} />
      </BarContainer>
    );
  }
}
