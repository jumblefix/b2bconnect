import React, { Component } from 'react';
import { Title, SubTitle, Paragraph } from '../components/Text/Text';

export default class About extends Component {
  render() {
    return (
      <div>
        <Title>About Us</Title>
        <SubTitle>This is an about us page.</SubTitle>
        <Paragraph>Welcome to the about us page.</Paragraph>
        <Paragraph>This is an example using styled component</Paragraph>
      </div>
    );
  }
}
