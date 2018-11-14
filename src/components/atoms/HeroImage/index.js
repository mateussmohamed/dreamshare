import styled from 'styled-components'

const getBackGround = src => `
  linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
  url(${src})
`

const HeroImage = styled.div`
  width: 100%;
  height: 100;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
