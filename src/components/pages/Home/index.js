import React from 'react'

import { Page } from 'templates'
import { Hero } from 'organisms'
// import { Page, Hero } from 'components'

const Home = () => (
  <Page>
    <Hero
      title="SHARE YOUR HOLIDAY DREAM"
      description="Find your holliday partner"
      srcImage="/assets/images/hero.jpg"
    />
  </Page>
)

Home.propTypes = {}

export default Home
