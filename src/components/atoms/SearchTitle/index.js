import styled from 'styled-components'

const SearchTitle = styled.h2`
  ${props => props.theme.typography.montserratStyle};
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.greyishBrown};
`

export default SearchTitle
