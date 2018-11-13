import React from 'react'

import { Page } from 'templates'
import { Hero, HowDreamshare } from 'organisms'

const Home = () => (
  <Page>
    <Hero
      title="SHARE YOUR HOLIDAY DREAM"
      description="Find your holliday partner"
      srcImage="/assets/images/hero.jpg"
    />
    <HowDreamshare />
  </Page>
)

Home.propTypes = {}

export default Home
