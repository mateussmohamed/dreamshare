import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PartnerItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`

const PartnerHeader = styled.header`
  width: 120px;
  height: 120px;
  position: relative;
`

const PartnerAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  background-color: grey;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center center;
`

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

const PartnerName = styled.h3`
  ${props => props.theme.typography.montserratStyle};
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin: 15px 0;
`

const PartnerBio = styled.p`
  ${props => props.theme.typography.robotoStyle};
  font-size: 14px;
  text-align: center;
  margin: 0 0 15px 0;
`

const Partner = ({ name, bio, avatar, icon }) => (
  <PartnerItem>
    <PartnerHeader>
      <PartnerAvatar src={avatar} />
      <PartnerIcon icon={icon} />
    </PartnerHeader>
    <PartnerName>{name}</PartnerName>
    <PartnerBio>{bio}</PartnerBio>
  </PartnerItem>
)

Partner.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Partner
