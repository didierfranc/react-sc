import React, { DOM } from 'react'
import { render } from 'react-dom'
import { hash } from './process'
import { Style, Styled } from './Components'

const d = document

if (!d.querySelector('sc')) {
  render(<Style />, d.body.appendChild(d.createElement('sc')))
}

const styled = t => (...s) => Styled(t, hash(s))
Object.keys(DOM).forEach((e) => { styled[e] = styled(e) })

export default styled
