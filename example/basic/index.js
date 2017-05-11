import React from 'react'
import { render } from 'react-dom'

import Main from './components/Main'

export const App = () => (
  <div>
    <Main />
  </div>
)

export const root = document.getElementById('root')
if (!module.hot) render(<App />, root)
