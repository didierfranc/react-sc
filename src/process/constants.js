export const toReplace = [
  [/ {2,}/g, ' '],
  [/(\n( |))+/g, '\n'],
  [/}(.|@)/g, '}\n$1']
]

export const toExtract = [
  [ 'PSEUDO_CLASS', /&:[\w-()]+ *{[\n\d\w {}%:;,.()\-#]+}/g ],
  [ 'KEYFRAMES', /@keyframes +\w+ *{[\n\d\w {}%:;,.()\-#]+}/g ],
]
