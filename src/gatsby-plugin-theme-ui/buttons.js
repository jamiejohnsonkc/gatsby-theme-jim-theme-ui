//! BUTTONS
import theme from './theme'
// /** @jsx jsx */
// import { jsx, theme } from 'theme-ui'
 import React from 'react'
// import { colors } from './colors'
// import { letterSpacings } from './theme'
// import palette from './palette'

// buttonSize = {
//   sm: (t) => `${t.space[6]} ${t.space[8]}`,
// }

export default {
	basic: {
		appearance: 'none',
		display: 'inline-block',
		textAlign: 'center',
		lineHeight: 'inherit',
		textDecoration: 'none',
		fontWeight: ['normal', 'normal', 'light','light','light'],
		letterSpacing: 0,
		textTransform: 'capitalize',
		m: 0,
		border: 0,
		borderRadius: 4,
		fontSize: [2,3,2,2,2],
		minWidth: '80px',
		fontFamily: 'heading',
	},

	sm: {
		px: 2,
		py: 0,
		fontSize: 0,
		letterSpacing: 0,
	},
	md: {
		px: 3,
		py: 1,
		fontSize: 0,
		letterSpacing: 'loose',
		fontWeight: 'thin',
	},

	lg: {
		px: [4,4,2,2,3],
		py: [3,4,2,2,2],
		minWidth: ['unset', '212px', 'unset','112px','136px'],
	},

	primary: {
		color: 'background',
		backgroundColor: 'primary',
	},
	secondary: {
		color: 'background',
		backgroundColor: 'secondary',
	},
	gray: {
		color: 'background',
		backgroundColor: 'pink',
	},

	scrollTop: {
		fixed: {
			position: 'fixed',
			display: 'inline-grid',
			alignContent: 'center',
			justifyContent: 'center',
			height: '2em',
			zIndex: 4,
			bottom: '2em',
			right: '2em',
		},
	},
	radialSelected: {
		borderColor: 'transparent',
		outline: 'none',
		paddingTop: 0,
		paddingBottom: 0,
		lineHeight: 1,
		'& > svg > path': {
			stroke: 'muted',
		},

		verticalAlign: 'middle',
		'&:focus': {
			backgroundColor: 'none',
			border: 'none',
			outline: 'none',
			'& > svg > path': {
				stroke: 'background',
			},
		},
	},
}

//add variants for box, pill, rounded, outline, solid
