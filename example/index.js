import React from 'react'
import { render } from 'react-dom'
import styled from '../src'
import 'prefixfree'

const blue = (opacity) => `rgba(63, 81, 181, ${opacity})`

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
  cursor: pointer;
  user-select: none;
  color: ${blue(0.6)};
  padding: 20px;
  font-family: sans-serif;
  animation: appear 2s linear;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:hover {
    color: ${blue(0.8)}
  }
`

render(<Test />, document.getElementById('root'))
