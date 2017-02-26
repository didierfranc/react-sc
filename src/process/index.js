import { toReplace, toExtract } from './constants'

const join = s => s[0].reduce((r, v, i) => r + v + (s[i + 1] || ''), '')

const m = v => v.match(/[a-zA-Z0-9]/g).join('').slice(-3)
const hash = s => m(btoa(s.length)) + m(btoa(s))

const main = (s, h) => (
  `.${h} {${toExtract.reduce((r, v) => r.replace(v[1], ''), s)}}`
)

const extract = (s, h) => (
  toExtract.reduce((r, v) => (
    s.match(v[1]) ? [...r, s.match(v[1]).reduce((r, v) => r + v, '')] : r
  ), []).join('').replace(/&/g, `.${h}`)
)

const beautify = s => toReplace.reduce((r, v) => r.replace(v[0], v[1]), s)

const c = [], d = document, style = d.createElement('style')

d.body.appendChild(style)

const append = (p, h) => {
  if (c.indexOf(h) === -1) {
    c.push(h)
    style.appendChild(d.createTextNode(p))
  }
}

export default s => {
  const j = join(s), h = hash(j)
  const p = beautify(`${main(j, h)}\n${extract(j, h)}`)
  append(p, h)
  return h
}
