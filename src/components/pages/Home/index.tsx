import React from 'react'

import { Page } from '../../templates/Page'
import {
  Hero,
  HowDreamshare,
  DiscoverPartners,
  SearchPartners,
} from '../../organisms'

export const Home = () => (
  <Page>
    <Hero />
    <HowDreamshare />
    <DiscoverPartners />
    <SearchPartners />
  </Page>
)
