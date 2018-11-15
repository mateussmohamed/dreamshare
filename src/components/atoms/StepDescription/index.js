import styled from 'styled-components'

const StepDescription = styled.p`
  ${props => props.theme.typography.robotoStyle};
  font-size: 14px;
  color: ${props => props.theme.colors.veryLightPinkFour};
  margin: 0;
`

export default StepDescription
