import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default class Home extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <ul>
            <li>
              <Link href="/contact" as="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="/about" as="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </Wrapper>
      </div>
    );
  }
}
