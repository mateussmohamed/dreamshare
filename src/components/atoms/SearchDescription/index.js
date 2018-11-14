import styled from 'styled-components'

const SearchDescription = styled.h4`
  ${props => props.theme.typography.robotoStyle};
  font-size: 16px;
  text-align: center;
  color: ${props => props.theme.colors.brownishGrey};
`

export default SearchDescription
