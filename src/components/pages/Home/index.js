import React from 'react'

import { Page } from 'templates'
import { Hero, HowDreamshare, SearchPartners, Footer } from 'organisms'

const Home = () => (
  <Page>
    <Hero
      title="SHARE YOUR HOLIDAY DREAM"
      description="Find your holliday partner"
      srcImage="/assets/images/hero.jpg"
    />
    <HowDreamshare />
    <SearchPartners />
    <Footer />
  </Page>
)

Home.propTypes = {}

export default Home
