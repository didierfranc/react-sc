import { DOM } from 'react'
import Styled from './Styled'
import process from './process'

const styled = t => (...s) => Styled(t, s)
Object.keys(DOM).forEach(e => {
  styled[e] = styled(e)
})

export default styled
