import styled from 'styled-components'
import { position, size } from 'polished'

const getBackGround = src => `
  linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
  url(${src})
`

const HeroImage = styled.div`
  ${size('100%', '100%')};
  ${position('absolute', '0')};

  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  z-index: 0;

  @media only screen and (min-width: 320px) {
    background-image: ${() => getBackGround('/assets/images/hero-mobile.jpg')};
  }

  @media only screen and (min-width: 768px) {
    background-image: ${() => getBackGround('/assets/images/hero-tablet.jpg')};
  }

  @media only screen and (min-width: 768px) {
    background-image: ${() => getBackGround('/assets/images/hero.jpg')};
  }
`

export default HeroImage
