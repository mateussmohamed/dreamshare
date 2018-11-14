import styled from 'styled-components'

const StepBadge = styled.span`
  padding: 3px 8px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.lightRed};
  ${props => props.theme.typography.montserratStyle};
  font-size: 12px;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`

export default StepBadge
