import React from 'react'
import process from './process'

export default (T, s) => {
  const Tag = typeof T === 'function' ? eval(T) : T
  const setDisplayName = h => (Styled.displayName = `${T.name || T}-${h}`)

  const Styled = props => {
    const h = process(s, props)

    const newProps = {
      ...props,
      className: props.className ? props.className + ' ' + h : h,
    }

    if (newProps.innerRef) newProps.ref = props.innerRef
    if (typeof T === 'string') delete newProps.innerRef
    setDisplayName(h)
    return <Tag {...newProps} />
  }

  return Styled
}
