[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# react-sc 🎨
A tiny library to create styled components, it's inspired by the great [styled-components](https://github.com/styled-components/styled-components) and [styled-jsx](https://github.com/zeit/styled-jsx). These two libraries use [postcss](https://github.com/postcss/postcss) to generate proper scoped CSS, **react-sc** use the new kid in town: [stylis](https://github.com/thysultan/stylis.js).

It's just a POC, it should be used with caution or not ...

## Example

If you're using basic css you can replace `styled-components` import with `react-sc`

```js
import React from 'react'
import styled from 'react-sc'

const blue = (opacity) => `rgba(63, 81, 181, ${opacity})`

const Test = styled.h1`
  cursor: pointer;
  user-select: none;
  color: ${blue(0.6)};
  padding: 20px;
  font-family: sans-serif;
  animation: appear 2s linear;

  @keyframes appear {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  &:hover {
    color: ${blue(0.8)};
  }

  &:active {
    color: ${blue(1)};
  }
`
```

## Auto-prefixing

~~There is no built-in auto-prefixer bundled with **react-sc**, I advise you to use [prefixfree](https://github.com/LeaVerou/prefixfree) (**2.7kB** gzipped) it will add only the needed prefixes for your browser.~~

[stylis](https://github.com/thysultan/stylis.js) come with some prefixing but you can always use the good old prefixfree !

## Support

Actual support is pretty basic. Currently you should be able to use every [features of stylis](https://github.com/thysultan/stylis.js/blob/master/README.md#features)

## Comparison

|Library              |Size (gzipped)    |
|:-------------------:|:----------------:|
|styled-component     |20 993 B         |
|react-sc             | 4 468 B          |
