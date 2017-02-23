# react-sc 🎨
A tiny library to create styled components, it's inspired by the great [styled-components](https://github.com/styled-components/styled-components) and [styled-jsx](https://github.com/zeit/styled-jsx). These two libraries use [postcss](https://github.com/postcss/postcss) to generate proper scoped CSS, **react-sc** try to do it itself.

It's just a POC, it should be used with caution or not ...

## Example

If you're using basic css you can replace `styled-components` import with `react-sc`

```js
import React from 'react'
import styled from 'react-sc'
import 'prefixfree'

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

There is no built-in auto-prefixer bundled with **react-sc**, I advise you to use [prefixfree](https://github.com/LeaVerou/prefixfree) (**2.7kB** gzipped) it will add only the needed prefixes for your browser.

## Support

Actual support is pretty basic. Currently you can use pseudo-class and keyframes based animations.

## Comparison

|Library              |Size (gzipped)    |
|:-------------------:|:----------------:|
|styled-component     |20.4 kB           |
|react-sc + prefixfree|4.4 kB (1.7 + 2.7)|
