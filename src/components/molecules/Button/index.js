import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  border,
  borderRadius,
  transparentize,
  margin,
  padding,
  transitions,
  em,
} from 'polished'

const defaultStyle = css`
  ${border('2px', 'solid', '#fff')};
  background-color: ${transparentize(100, '#fff')};
  color: #fff;

  :hover {
    background-color: #fff;
    border-color: #fff;
    color: ${props => props.theme.colors.brownGrey};
  }
`

const primaryStyle = css`
  ${border('2px', 'solid', '#ff4e50')};
  background-color: ${transparentize(100, '#fff')};
  color: #ff4e50;
  font-weight: bold;

  :hover {
    background-color: #ff4e50;
    border-color: #ff4e50;
    color: #fff;
  }
`

const secondaryStyle = css`
  border: 0;
  background-color: #ff4e50;
  color: #fff;
  font-weight: bold;

  :hover {
    background-color: #ff4e50;
    color: #fff;
  }
`

const ghostStyle = css`
  color: #fff;
  border: 0;
  background-color: ${transparentize(100, '#fff')};

  :hover {
    color: ${props => props.theme.colors.brownGrey};
    ${border('2px', 'solid', '#fff')};
  }
`

const ButtonStyled = styled.button`
  ${borderRadius('top', '40px')};
  ${borderRadius('bottom', '40px')};
  ${margin('0.25em')};
  ${padding('0.25em', '1em', '0.25em', '1em')};
  ${transitions(['color', 'background-color', 'border'], '.2s ease-in-out')};

  display: 'inline-flex';
  min-width: 90px;
  height: 40px;

  outline: 0;
  cursor: pointer;

  ${defaultStyle};
  ${props => props.theme.typography.montserratStyle};
  font-size: 14px;
  ${props => props.primary && primaryStyle};
  ${props => props.secondary && secondaryStyle};
  ${props => props.ghost && ghostStyle};
`

const Button = props => <ButtonStyled {...props}>{props.children}</ButtonStyled>

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  ghost: PropTypes.bool,
}

export default Button
