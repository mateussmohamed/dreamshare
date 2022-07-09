import React from 'react'

import {
  PartnerCard,
  PartnerHeader,
  PartnerAvatar,
  PartnerIcon,
  PartnerName,
  PartnerBio,
} from '../../atoms'

interface PartnerProps {
  name: string
  bio: string
  avatar: string
  icon: string
}

export const Partner = ({ name, bio, avatar, icon }: PartnerProps) => (
  <PartnerCard>
    <PartnerHeader>
      <PartnerAvatar src={avatar} />
      <PartnerIcon icon={icon} />
    </PartnerHeader>
    <PartnerName>{name}</PartnerName>
    <PartnerBio>{bio}</PartnerBio>
  </PartnerCard>
)
