import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  color: red;
`;

export default () => (
  <div>
    <Wrapper>
      <ul>
        <li>
          <Link href="/a" as="/a">
            <a>a</a>
          </Link>
        </li>
        <li>
          <Link href="/b" as="/b">
            <a>b</a>
          </Link>
        </li>
      </ul>
    </Wrapper>
    <Button>Button</Button>
  </div>
);
