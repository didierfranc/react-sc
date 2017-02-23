import React from 'react'

const c = {
  style: {},
}

export class Style extends React.Component {
  componentWillMount = () => c.add = this.add

  add = (s, h) => {
    const exist = Object.keys(c.style).filter(item => item.h === h)[0]
    if (!exist) c.style[h] = s; this.forceUpdate()
  }

  render = () => (
    <section>
      {Object.keys(c.style).map(item =>
        <style key={item}>
          {c.style[item]}
        </style>)}
    </section>
  )
}

export const Styled = (T, { p, h }) => (
  class C extends React.Component {
    static displayName = `${T.name || T}-${h}`
    c = this.props.className ? this.props.className + ' ' : ''
    X = <T />
    componentWillMount = () => c.add(p, h)
    render = () => (
      <this.X.type {...this.props} className={this.c + h} />
    )
  }
)
