/* eslint-disable react/prop-types */

import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ bgcolor }) => bgcolor || 'transparent'};
  color: ${({ textcolor }) => textcolor || 'white'}; 
  border: none;
  cursor: pointer;
`;

const Button = ({ children, bgcolor, onClick,textcolor}) => {
  return (
    <StyledButton bgcolor={bgcolor} onClick={onClick} textcolor={textcolor}>
      {children}
    </StyledButton>
  );
};


export default Button;