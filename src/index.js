import elements from './elements'
import Styled from './Styled'
import process from './process'

const styled = t => (...s) => Styled(t, s)
elements.forEach(e => {
  styled[e] = styled(e)
})

export default styled
