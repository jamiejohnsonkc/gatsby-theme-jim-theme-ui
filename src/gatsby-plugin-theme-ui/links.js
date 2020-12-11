//! LINKS

//TODO strip out styles related to netlify challenge
//TODO determine proper 'vanilla' theme-ui base theme elements
//TODO figure out shadowing to avoid future theme-conflict issues/enable true customization


import palette from './palette'

export default {
	nav: {
		lineHeight: 1.5,
		fontWeight: 600,
		fontFamily: 'heading',
		color: 'navMenuItem',
		letterSpacing: '-.025em',
		textTransform: 'captilalize',
		textDecoration: 'none',
		transition: 'all 0.3s ease-in',
		fontSize: [3, 2, 1, 1],
		'&.active': { color: 'navItemActive' },
		'&:hover': {
			color: 'navMenuItemHover',
			textDecoration: 'underline',
			'&::after': {
				width: '100%',
				backgroundColor: 'navMenuItemHover',
				// transition: "all 0.5s ease-in",
			},
		},
		'&::after': {
			position: 'absolute',
			bottom: '0',
			left: '0',
			right: '0',
			width: '0%',
			content: "'.'",
			color: 'transparent',
			height: '0.1em',
			top: '85%',
			zIndex: '1',
		},
	},

	navLinkSearchIcon: {
		color: 'navMenuItem',
		width: '2em',
		height: '1.5em',
		verticalAlign: 'sub',
		transition: 'all 0.5s ease-in',
		'&:hover': {
			color: 'navMenuItemHover',
			'&::after': {
				width: '100%',
				backgroundColor: 'transparent',
			},
		},
	},

	navSearch: {
		display: ['none', 'none', 'flex', 'flex'],
		visibility: ['hidden', 'hidden', 'visible', 'visible'],
		padding: 1,
		'&:hover': {
			color: 'background',
			'&::after': {
				width: '100%',
				backgroundColor: 'transparent',
			},
		},
	},

  ctaLink: {
    mb: [0, 0, 0, 0, 0, 4],
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: ['left', 'left', 'left', 'center', 'center', 'center'],
    gridColumnStart: '1',
    gridColumnEnd: '5',
    '&:hover':{
cursor: 'pointer',
    },
    '& .linkText': {
      fontSize: [1, 3, 3, 3, 2, 2],
      mr: 2,
      fontFamily: 'heading',
      color: 'primary',
      fontWeight: 'bold',
    },
    '& .linkVisual': {
      '& > svg': {
        height: ['.5em', '.75em', '.5em', '.5em', '.65em', '.65em'],
        width: ['.5em', '.75em', '.5em', '.5em', '.65em', '.65em'],
        fill: 'primary',
      },
    },
    arrowRight: {
      lineHeight: 1,
      alignItems: 'center',
    },
  },

	searchButton: {
		lineHeight: 1,
		visibility: ['visible', 'visible', 'hidden', 'hidden'],
		display: ['flex', 'flex', 'none', 'none'],
		alignItems: 'center',
		color: 'navMenuBackground_SM',
		'&:hover': {
			color: 'navMenuItemHover',
		},
	},

	navSubLink: {
		lineHeight: 2,
		display: 'block',
		minWidth: '20em',
		color: 'navMenuItem',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},

	jumpLink: {
		textDecoration: 'none',
		color: palette.gray1,
	},

	megaNavLink: {
		display: 'block',
		fontSize: 2,
		fontWeight: '500',
		marginBottom: 2,
		color: '#000',
	},

	//? rightNav

	rightNavLink: {
		lineHeight: 1.5,
		fontWeight: 600,
		fontFamily: 'heading',
		color: 'navMenuItem',
		letterSpacing: '-.025em',
		textTransform: 'captilalize',
		textDecoration: 'none',
		transition: 'all 0.3s ease-in',
		fontSize: [3, 4, 1, 1, 1],
		'&.active': { color: 'navItemActive' },
		'&:hover': {
			color: 'navMenuItemHover',
			textDecoration: 'underline',
			'&::after': {
				width: '100%',
				backgroundColor: 'navMenuItemHover',
				// transition: "all 0.5s ease-in",
			},
		},
		'&::after': {
			position: 'absolute',
			bottom: '0',
			left: '0',
			right: '0',
			width: '0%',
			content: "'.'",
			color: 'transparent',
			height: '0.1em',
			top: '85%',
			zIndex: '1',
		},
		'@media(max-width: 40em)': {
			color: '#fff',
		},
	},

	fullOverlayNavLink: {
		color: 'navMenuItem',
		lineHeight: 1.5,
		fontWeight: 900,
		fontFamily: 'heading',
		letterSpacing: '-.025em',
		textTransform: 'captilalize',
		textDecoration: 'none',
		fontSize: [3, 3, 6, 8],
		transition: 'all 0.3s ease-in',
		position: 'relative',
		// '&.active': { color: 'navItemActive' },
		'&:hover': {
			// color: 'navMenuItem',
			// textDecoration: 'underline',
			// transition: "all 5ms ease-in",
			// '&::after': {
			// 	width: '100%',
			// 	backgroundColor: 'blue',
			// 	transition: "all 0.5s ease-in",
			// },
		},
		'&::after': {
			position: 'absolute',
			bottom: '0',
			left: '0',
			right: '0',
			width: '0%',
			content: "'.'",
			color: 'transparent',
			height: '0.1em',
			top: '90%',
			zIndex: '1',
		},
		'@media(max-width: 40em)': {
			color: '#fff',
		},
	},
}
