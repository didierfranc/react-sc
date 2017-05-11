import stylis from 'stylis'

const join = (s, props) =>
  s[0].reduce(
    (r, v, i) =>
      typeof s[i + 1] === 'function'
        ? r + v + (s[i + 1](props) || '')
        : r + v + (s[i + 1] || ''),
    '',
  )

const m = v => v.match(/[a-zA-Z0-9]/g).join('').slice(-3)
const hash = s => m(btoa(s.length)) + m(btoa(s))

const c = [], d = document, style = d.createElement('style')

d.body.appendChild(style)

const append = (p, h) => {
  c.push(h)
  style.appendChild(d.createTextNode(p))
}

export default (s, props) => {
  const j = join(s, props), h = hash(j)
  if (c.indexOf(h) === -1) {
    const p = stylis(`.${h}`, j)
    append(p, h)
  }
  return h
}
