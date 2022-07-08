import React from 'react'

import PropTypes from 'prop-types'

import {
  PartnerCard,
  PartnerHeader,
  PartnerAvatar,
  PartnerIcon,
  PartnerName,
  PartnerBio,
} from '../../atoms'

export const Partner = ({ name, bio, avatar, icon }) => (
  <PartnerCard>
    <PartnerHeader>
      <PartnerAvatar src={avatar} />
      <PartnerIcon icon={icon} />
    </PartnerHeader>
    <PartnerName>{name}</PartnerName>
    <PartnerBio>{bio}</PartnerBio>
  </PartnerCard>
)

Partner.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
