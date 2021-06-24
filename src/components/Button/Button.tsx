import { forwardRef } from 'react';
import { StyledButton } from '../../styles/styled-components/Button';

type ButtonProps = {
  text: string;
};

const Button = forwardRef<HTMLAnchorElement, ButtonProps & React.HTMLProps<HTMLAnchorElement>>(
  (props, ref): JSX.Element => (
    <StyledButton ref={ref} onClick={props.onClick} onMouseOver={props.onMouseOver}>
      {props.text}
    </StyledButton>
  )
);

Button.displayName = 'Button';

export default Button;
