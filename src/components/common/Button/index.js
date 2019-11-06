import React from 'react';
import { PropTypes as PT } from 'prop-types';
import container from './container';
import { StyledButton } from './styled';

const Button = ({ value, disabled, handleClick, type }) => {
  // eslint issue - https://github.com/yannickcr/eslint-plugin-react/issues/1555
  /* eslint-disable react/button-has-type */
  return (
    <StyledButton type={type} disabled={disabled} onClick={handleClick}>
      {value}
    </StyledButton>
  );
  /* eslint-enable react/button-has-type */
};

Button.propTypes = {
  value: PT.string.isRequired,
  disabled: PT.bool.isRequired,
  handleClick: PT.func.isRequired,
  type: PT.oneOf(['submit', 'button']).isRequired,
};

export default container(Button);