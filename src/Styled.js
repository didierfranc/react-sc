import React from 'react'
import process from './process'

export default (T, s) => {
  const f = typeof T === 'function'
  const Tag = f ? eval(T) : T
  const setDisplayName = h => (Styled.displayName = `${T.name || T}-${h}`)

  const Styled = props => {
    const h = process(s, props)

    const { className, htmlFor, innerRef, ...others } = props

    const newClassName = props.class ? props.class + ' ' + h : h

    const newProps = {
      ...others,
      is: true,
      class: newClassName,
      className: f ? newClassName : undefined,
      for: htmlFor,
      ref: innerRef,
    }

    setDisplayName(h)
    return <Tag {...newProps} />
  }

  return Styled
}
