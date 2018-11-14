import styled from 'styled-components'

const DreamshareTitle = styled.h1`
  ${props => props.theme.typography.montserratStyle};
  color: ${props => props.theme.colors.greyishBrown};
  font-weight: bold;
  text-align: center;

  @media only screen and (min-width: 320px) {
    font-size: 26px;
    margin: 35px 0 15px 0;
  }

  @media only screen and (min-width: 768px) {
    margin: 95px 0 35px 0;
  }
`

export default DreamshareTitle
