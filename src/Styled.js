import React from 'react'
import process from './process'

export default (T, s) => {
  const X = <T />
  let h

  const C = props => {
    h = process(s, props)

    const newProps = {
      ...props,
      className: props.className ? props.className + ' ' + h : h,
    }

    if (newProps.innerRef) newProps.ref = props.innerRef
    if (typeof X.type === 'string') delete newProps.innerRef

    return <X.type {...newProps} />
  }

  C.displayName = `${T.name || T}-${h}`

  return C
}
