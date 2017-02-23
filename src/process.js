const PSEUDO_CLASS = /&:[\w-()]+ *{[\n\d\w {}%:;,.()\-#]+}/g
const KEYFRAMES = /@keyframes +\w+ *{[\n\d\w {}%:;,.()\-#]+}/g

const join = value => (
  value[0].reduce((r, v, i) => r + v + (value[i + 1] || ''), '').replace(/\n| {2,}/g, '')
)

export const hash = (s) => {
  const j = join(s)
  const l = btoa(j.length).match(/[a-zA-Z0-9]/g).join('')
  const h = l + btoa(j).match(/[a-z0-9]/g).join('').slice(0, 2)
  const p = generate(j, h)
  return { p, h }
}

const main = (s, h) => (
  `.${h} {${s.replace(PSEUDO_CLASS, '').replace(KEYFRAMES, '')}\n}`
)

const pseudo = (s, h) => (
  (s.match(PSEUDO_CLASS) || []).reduce((r, v) => r + v, '').replace(/&/g, `.${h}`)
)

const keyframes = (s) => (
  (s.match(KEYFRAMES) || []).reduce((r, v) => r + v, '')
)

const beautify = value => (
  value
    .replace(/{/g, '{\n')
    .replace(/}/g, '}\n')
    .replace(/;/g, ';\n')
    .replace(/\n /g, '\n')
    .replace(/;\n}/g, '\n}')
    .replace(/;\n}/g, '\n}')
    .replace(/\n\n/g, '\n')
)

export const generate = (s, h) => (
  beautify(`${main(s, h)}${pseudo(s, h)}${keyframes(s, h)}`)
)
