import styled from 'styled-components'

export const Input = styled.input`
  padding: 10px 15px;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  border: 1px solid #d4d4d4;
  outline: 0;
  ${props => props.theme.typography.robotoStyle};
  font-size: 14px;
  @media only screen and (min-width: 320px) {
    margin: 15px 0;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 15px;
    min-width: 300px;
  }
`
