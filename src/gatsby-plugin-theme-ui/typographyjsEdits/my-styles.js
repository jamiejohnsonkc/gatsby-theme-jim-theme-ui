// theme.styles object for use with typography.js-generated theme object
// similar to typography.js style output, with these differences
// - only includes styles for markdown elements
// - does not include color styles
// - does not include responsive styles

import assign from 'object-assign'

const heading = {
    fontFamily: 'heading',
}

const body = {
	fontFamily: 'body',
}

export const styles = {
    root: {
        fontFamily: 'body',
        fontSize: 2,
        fontWeight: 'regular',
        lineHeight: 'body',
    },
    img: {
        maxWidth: '100%',
    },
    bu1: assign(
        {
            fontSize: 12,
            fontWeight: 'heavy',
        },
        heading
    ),
    bu2: assign(
        {
            fontSize: 11,
            fontWeight: 'heavy',
        },
        heading
    ),
    bu3: assign(
        {
            fontSize: 10,
            fontWeight: 'heavy',
        },
        heading
    ),

    h1: assign(
        {
            fontSize: 9,
        },
        heading
    ),
    h2: assign(
        {
            fontSize: 8,
        },
        heading
    ),
    h3: assign(
        {
            fontSize: 7,
        },
        heading
    ),
    h4: assign(
        {
            fontSize: 6,
        },
        heading
    ),
    h5: assign(
        {
            fontSize: 5,
        },
        heading
    ),
    h6: assign(
        {
            fontSize: 4,
        },
        heading
    ),
    d1: assign(
        {
            fontSize: 7,
        },
        heading
    ),
    d2: assign(
        {
            fontSize: 6,
        },
        heading
    ),
    d3: assign(
        {
            fontSize: 5,
        },
        heading
    ),
    d4: assign(
        {
            fontSize: 4,
        },
        heading
		),
		d5: assign(
			{
					fontSize: 3,
			},
			heading
	),
	d6: assign(
		{
				fontSize: 2,
		},
		heading
),

    b1: assign(
        {
            fontSize: 5,
        },
        body
    ),
    b2: assign(
        {
            fontSize: 4,
        },
        body
    ),
    b3: assign(
        {
            fontSize: 3,
        },
        body
    ),
    p1: assign(
        {
            fontSize: 3,
        },
        body
    ),
    p2: assign(
        {
            fontSize: 2,
        },
        body
    ),
    p3: assign(
        {
            fontSize: 1,
        },
        body
    ),

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
        p: {
            mb: 2,
        },
    },
    p: {
        fontSize: 1,
    },
    p2: {
        fontSize: 1,
    },

    p3: {
        fontSize: 0,
    },

    p2: {
        fontSize: 1,
    },
    p1: {
        fontSize: 2,
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
    ...headings,
    'ul',
    'ol',
    'p',
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
                margin: 0,
                marginBottom: 2,
            },
            styles[tag]
        ),
    })
})

export default styles
