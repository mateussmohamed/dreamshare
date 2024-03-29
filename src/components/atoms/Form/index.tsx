import styled from 'styled-components'

export const Form = styled.form`
  @media only screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`
