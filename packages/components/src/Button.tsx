import * as React from 'react';

interface ButtonProps {
  onClick: () => void;
}

interface ButtonState {}

class Button extends React.Component<ButtonProps, ButtonState> {
  public render(): JSX.Element {
    return <button>Button</button>;
  }
}

export default Button;
