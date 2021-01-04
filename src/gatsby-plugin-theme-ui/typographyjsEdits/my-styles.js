// theme.styles object for use with typography.js-generated theme object
// similar to typography.js style output, with these differences
// - only includes styles for markdown elements
// - does not include color styles
// - does not include responsive styles

import assign from 'object-assign'

// const heading = {
//   fontFamily: 'heading',
// }

// const body = {
//   fontFamily: 'body',
// }

// const mono = {
//   fontFamily: 'monoFontFamily',
// }

export const styles = {
  root: {
    fontFamily: 'body',
    fontSize: 2,
    fontWeight: 'normal',
    lineHeight: 'body',
  },
  img: {
    maxWidth: '100%',
  },
  bu1: assign({
    fontSize: 12,
    fontWeight: 'heavy',
  }),
  bu2: assign({
    fontSize: 11,
    fontWeight: 'heavy',
  }),
  bu3: assign({
    fontSize: 10,
    fontWeight: 'heavy',
  }),

  h1: assign({
    fontSize: 9,
  }),
  h2: assign({
    fontSize: 8,
  }),
  h3: assign({
    fontSize: 7,
  }),
  h4: assign({
    fontSize: 6,
  }),
  h5: assign({
    fontSize: 5,
  }),
  h6: assign({
    fontSize: 4,
  }),
  d1: assign({
    fontSize: 7,
  }),
  d2: assign({
    fontSize: 6,
  }),
  d3: assign({
    fontSize: 5,
  }),
  d4: assign({
    fontSize: 4,
  }),
  d5: assign({
    fontSize: 3,
  }),
  d6: assign({
    fontSize: 2,
  }),

  b1: assign({
    fontSize: 5,
  }),
  b2: assign({
    fontSize: 4,
  }),
  b3: assign({
    fontSize: 3,
  }),
  p1: assign({
    fontSize: 3,
  }),
  p2: assign({
    fontSize: 2,
  }),
  p3: assign({
    fontSize: 1,
  }),
  u1: assign({
    fontSize: 2,
  }),
  u2: assign({
    fontSize: 1,
  }),
  u3: assign({
    fontSize: 0,
  }),

  ul: {
    listStylePosition: 'outside',
    listStyleImage: 'none',
    ml: 3,
  },
  ol: {
    listStylePosition: 'outside',
    listStyleImage: 'none',
    ml: 3,
  },
  li: {
    mb: 2,
    pl: 0,
    ol: {
      my: 2,
      ml: 3,
    },
    ul: {
      my: 2,
      ml: 3,
    },
  },

  table: {
    borderCollapse: 'collapse',
    width: '100%',
  },
  th: {
    textAlign: 'left',
    borderBottom: '1px solid',
    px: 2,
    py: 1,
    ':first-child': {
      pl: 0,
    },
    ':last-child': {
      pr: 0,
    },
  },
  td: {
    textAlign: 'left',
    borderBottom: '1px solid',
    px: 2,
    py: 1,
    mt: '-1px',
    ':first-child': {
      pl: 0,
    },
    ':last-child': {
      pr: 0,
    },
  },
  blockquote: {
    mx: 3,
  },
  hr: {
    border: 0,
    borderBottom: '1px solid',
    mt: '-1px',
    mb: 3,
  },
  b: {
    fontWeight: 'bold',
  },
  strong: {
    fontWeight: 'heavy',
  },
  code: {
    fontSize: '85%',
  },
  pre: {
    fontSize: '85%',
    padding: 3,
  },
}

const headings = [
  'bu1',
  'bu2',
  'bu3',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'd1',
  'd2',
  'd3',
  'd4',
  'd5',
  'd6',
]
const blockElements = [
  // ...headings,
  'ul',
  'ol',
  // 'p',
  'pre',
  'table',
  'blockquote',
  'img',
  'hr',
]

blockElements.forEach((tag) => {
  assign(styles, {
    [tag]: assign(
      {
        padding: 0,
        // margin: 0,
        // marginBottom: 2,
      },
      styles[tag]
    ),
  })
})

export default styles
