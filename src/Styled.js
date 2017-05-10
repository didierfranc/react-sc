import React from 'react'

export default (T, h) => {
  const X = <T />

  const C = props => {
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
