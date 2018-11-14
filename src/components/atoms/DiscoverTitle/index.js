import styled from 'styled-components'

const DiscoverTitle = styled.h2`
  ${props => props.theme.typography.montserratStyle};
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.greyishBrown};

  @media only screen and (min-width: 320px) {
    padding: 0 25px;
    margin: 0;
  }
`

export default DiscoverTitle
