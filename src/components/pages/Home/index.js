import React from 'react'

import { Page } from 'templates'
import {
  Hero,
  HowDreamshare,
  DiscoverPartners,
  SearchPartners,
} from 'organisms'

const Home = () => (
  <Page>
    <Hero />
    <HowDreamshare />
    <DiscoverPartners />
    <SearchPartners />
  </Page>
)

export default Home
