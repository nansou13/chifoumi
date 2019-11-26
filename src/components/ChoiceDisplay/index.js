import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const ChoiceDisplay = ({ value, image }) => (
  <SCChoiceDisplay>
    {value ? <img alt={`imageChoice-${value}`} src={image} /> : <div>??</div>}
  </SCChoiceDisplay>
)

export default ChoiceDisplay

const SCChoiceDisplay = styled('div')`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  overflow: hidden;
  border-radius: 50%;
  justify-content: space-around;
  align-items: center;
  align-self: flex-end;
  &:nth-of-type(1) {
    align-self: flex-start;
  }
  img {
    width: 100%;
    height: 100%;
  }
`
