import styled, {css} from "styled-components";

type ButtonProps = {
    variant: "filled" | "outlined"
}
export const Button = styled.button<ButtonProps>`
  display: inline-block;
  width: 86px;
  height: 30px;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  border-radius: 5px;

  ${props => props.variant === "filled" && css<ButtonProps>`
    background-color: #4E71FE;
    color: white;
    border: 2px solid transparent;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    &:hover {
      background-color: #7a91f6;
    }
  `}
  
  ${props => props.variant === "outlined" && css<ButtonProps>`
    background-color: white;
    color: #4E71FE;
    border: 2px solid #4E71FE;
    &:hover {
      color:  #7a91f6;
      border: 2px solid  #7a91f6;
    }
  `}
`
