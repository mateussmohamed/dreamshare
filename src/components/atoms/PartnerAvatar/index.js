import styled from 'styled-components'

const PartnerAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  background-color: grey;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center center;
`

export default PartnerAvatar
