import React from 'react'

import { Page } from 'templates'
import {
  Hero,
  HowDreamshare,
  SearchPartners,
  DiscoverPartners,
  Footer,
} from 'organisms'

const Home = () => (
  <Page>
    <Hero />
    <HowDreamshare />
    <DiscoverPartners />
    <SearchPartners />
    <Footer />
  </Page>
)

Home.propTypes = {}

export default Home
