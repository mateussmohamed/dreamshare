import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const defaultStyle = css`
  border: 2px solid #fff;
  background-color: rgba(255, 255, 255, 0);
  color: #fff;

  :hover {
    background-color: #fff;
    border-color: #fff;
    color: ${props => props.theme.colors.brownGrey};
  }
`

const primaryStyle = css`
  border: 2px solid ${props => props.theme.colors.lightRed};
  background-color: rgba(255, 255, 255, 0);
  color: ${props => props.theme.colors.lightRed};
  font-weight: bold;

  :hover {
    background-color: ${props => props.theme.colors.lightRed};
    border-color: ${props => props.theme.colors.lightRed};
    color: #fff;
  }
`

const secondaryStyle = css`
  border: 0;
  background-color: ${props => props.theme.colors.lightRed};
  color: #fff;
  font-weight: bold;

  :hover {
    background-color: #c7191b;
    color: #fff;
  }
`

const ghostStyle = css`
  color: #fff;
  border: 0;
  background-color: rgba(255, 255, 255, 0);

  :hover {
    color: ${props => props.theme.colors.brownGrey};
    border: 2px solid #fff;
  }
`

interface ButtonProps {
  readonly children: React.ReactNode
  readonly primary: boolean
  readonly secondary: boolean
  readonly ghost: boolean
}

const ButtonStyled = styled.button<ButtonProps>`
  ${defaultStyle};
  ${props => props.theme.typography.montserratStyle};
  ${props => props.primary && primaryStyle};
  ${props => props.secondary && secondaryStyle};
  ${props => props.ghost && ghostStyle};
  border-radius: 40px;
  margin: 0.25em;
  padding: 0.25em 1em;
  min-width: 90px;
  height: 40px;
  outline: 0;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border 0.2s ease-in-out;
`

export const Button = props => (
  <ButtonStyled {...props}>{props.children}</ButtonStyled>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  ghost: PropTypes.bool,
}
