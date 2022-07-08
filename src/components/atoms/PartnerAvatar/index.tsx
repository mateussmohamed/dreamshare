import styled from 'styled-components'

interface PartnerAvatarProps {
  src: string;
}

export const PartnerAvatar =
  styled.div <
  PartnerAvatarProps >
  `
  width: 120px;
  height: 120px;
  border-radius: 120px;
  background-color: grey;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center center;
`
