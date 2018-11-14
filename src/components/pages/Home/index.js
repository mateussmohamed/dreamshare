import React from 'react'

import { Page } from 'templates'
import {
  Hero,
  HowDreamshare,
  SearchPartners,
  DiscoverPartners,
} from 'organisms'

const Home = () => (
  <Page>
    <Hero />
    <HowDreamshare />
    <DiscoverPartners />
    <SearchPartners />
  </Page>
)

Home.propTypes = {}

export default Home
