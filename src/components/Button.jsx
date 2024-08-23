import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.$primary ? "#ff0000" : "#1a1a1a")};
  &:hover {
    background-color: ${(props) => (props.$primary ? "#CC0000" : "#000000")};
  }
`;

export default Button;
