// theme.styles object for use with typography.js-generated theme object
// similar to typography.js style output, with these differences
// - only includes styles for markdown elements
// - does not include color styles
// - does not include responsive styles

import assign from 'object-assign'

const heading = {
	fontFamily: 'heading',
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
	hxxxl: assign(
		{
			fontSize: 8,
			fontWeight: 'heading',
		},
		heading
	),
	hxxl: assign(
		{
			fontSize: 7,
		},
		heading
	),
	hxl: assign(
		{
			fontSize: 6,
		},
		heading
	),
	h1: assign(
		{
			fontSize: 5,
		},
		heading
	),
	h2: assign(
		{
			fontSize: 4,
		},
		heading
	),
	h3: assign(
		{
			fontSize: 3,
		},
		heading
	),
	h4: assign(
		{
			fontSize: 2,
		},
		heading
	),
	h5: assign(
		{
			fontSize: 1,
		},
		heading
	),
	h6: assign(
		{
			fontSize: 0,
		},
		heading
	),
	d1: assign(
		{
			fontSize: 5,
		},
		heading
	),
	d2: assign(
		{
			fontSize: 4,
		},
		heading
	),
	d3: assign(
		{
			fontSize: 3,
		},
		heading
	),
	d4: assign(
		{
			fontSize: 2,
		},
		heading
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


	text_sm: {
		fontSize: 0,
	},

	text_md: {
		fontSize: 1,
	},
	text_lg: {
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
	'hxxxl',
	'hxxxl',
	'hxl',
	'h6',
	'h5',
	'h4',
	'h3',
	'h2',
	'h1',
	'd3',
	'd2',
	'd1',
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
