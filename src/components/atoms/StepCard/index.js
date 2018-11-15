import styled from 'styled-components'

const StepCard = styled.article`
  width: auto;
  border-radius: 3px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.6)
    ),
    url(${props => props.image});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;

  @media only screen and (min-width: 320px) {
    height: 240px;
    padding: 60px 20px 20px 20px;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 768px) {
    height: 400px;
    padding: 220px 25px 25px 25px;
  }
`

export default StepCard
