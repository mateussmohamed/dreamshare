import styled from 'styled-components'

export const SearchTitle = styled.h2`
  ${props => props.theme.typography.montserratStyle};
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.greyishBrown};
`
