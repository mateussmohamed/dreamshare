import styled from 'styled-components'

const PartnerIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: #f35e5a;
  border: 4px solid #ffffff;
  position: absolute;
  right: -1px;
  bottom: -1px;
  background-image: url(${props => props.icon});
  background-size: 16px 16px;
  background-position: center center;
  background-repeat: no-repeat;
`

export default PartnerIcon
