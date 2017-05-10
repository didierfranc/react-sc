import React from 'react'
import { render } from 'react-dom'
import styled from '../src'

const blue = 'rgba(63, 81, 181, 1)'

const Hello = ({ className }) => (
  <div>
    <h1 className={className}>Hello</h1>
    <Input innerRef={e => console.log(e)} />
  </div>
)

const Input = styled.input`
  color: blue;
`

const Test = styled(Hello)`

  @media (max-width: 600px) {
    & { color: red }
  }

  &:hover {
    color: orange
  }
`

render(<Test />, document.getElementById('root'))
