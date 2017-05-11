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
  if (c.indexOf(h) === -1) {
    c.push(h)
    style.appendChild(d.createTextNode(p))
  }
}

const beautify = s => toReplace.reduce((r, v) => r.replace(v[0], v[1]), s)

export default (s, props) => {
  const j = join(s, props), h = hash(j), p = stylis(`.${h}`, j)
  append(p, h)
  return h
}
