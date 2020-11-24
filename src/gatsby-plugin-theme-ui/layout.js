//! LAYOUT

// import links from "./links"

export default {
	// root: {},

	//TODO extract
	sectionDefault: {
		// height: ['auto', '100vh', '100vh', '100vh', '100vh'],
		// minHeight: ['100vh', '100vh', '100vh', '100vh', '100vh'],
		// px: [2, 2, 1, 1, 4],
		// py: [6, 4, 0, 0, 0],
		// scrollSnapType: 'y mandatory',
		// scrollSnapAlign: 'start',
		// zIndex: 1,

		// '@media(max-height:600px)': {
		// 	height: '100%',
		// 	minHeight: '556px',
			// overflow: 'hidden auto',
			// scrollSnapType: 'y mandatory',
			// zIndex: '1',
		// },
	},
	//TODO extract
	sectionValue: {

		height: [null, '120vh', '120vh', '120vh', '120vh', null],
		minHeight: '800px',
		scrollSnapType: 'y mandatory',
		zIndex: 1,
	},

	top: {
		bg: '#999',
		py: 4,
		px: 3,
		fontSize: 5,
	},
	bottom: {
		bg: 'transparent',
		fontSize: 0,
	},
	container: {
		maxWidth: ['100%', '100%', '60em', '79em', null, null],
		px: [3, 4, 4, 4, 4, 4],
		display: 'block',
		position: 'relative',
		margin: '0 auto',
	},
	//TODO extract
	article: {
		// maxWidth: '1100px',
		// py: [0, 2, 3, 7, 7],
		px: [0, 2, 0, 4, 7,7],
		flex: '0 0 auto',
	},
	articleCenter: {
		// maxWidth: '1100px',
		py: [1, 2, 5, 6, 6,6],
		px: [0, 0, 0, 7, 7,7],
	},
	//TODO shadow
	serviceSliderArticle: {
		// maxWidth: '100%',
		py: [1, 2, 5, 4, 4,4],

		pl: [0, 2, 0, 5, 4,4],
		pr: [0, 2, 0, 0, 4,4],
	},
	//TODO shadow
	projectArticle: {
		alignItems: 'normal',
		display: 'flex',
		pt: [0, 0, 0, 0, 0,0],
		pr: [0, 0, 0, 0, 0,0],
		pb: [0, 0, 0, 0, 0,0],
		pl: [0, 0, 0, 0, 0,0],
		alignSelf: 'center',
		flex: '1 1 0%',
		position: 'relative',
		// bg: '#f6f6f6',
	},

	containerNarrow: {
		variant: 'layout.container',
		maxWidth: ['100%', '100%', '60em', '60em', '60em', '60em'],
	},

	containerTight: {
		variant: 'layout.container',
		maxWidth: ['100%', '100%', '50em', '49em', null, null],
	},

	mastHead: {
		display: 'block',
		justifyContent: 'center',
		marginTop: [0, 0, 4, 4, 4, 4],
		position: 'relative',
		mx: 'auto',
		width: 'layout.container',
		backgroundColor: [
			'navMenuBackground',
			'navMenuBackground',
			'transparent',
			'transparent',
		],
	},

	footer: {
		backgroundColor: 'secondary',
	},

	row: {
		width: '100%',
	},
	paddedRow: {
		width: '100%',
		display: 'block',
		padding: [0, 3],
	},
	//TODO  extract intro, introShort, introShortCentered to the SpecSaas style
	//sections
	intro: {
		height: `calc(100vh - 18.75rem)`,
		maxHeight: '40.625em',
		minHeight: '26.875em',
	},

	introShort: {
		height: `calc(100vh - 4em)`,
		maxHeight: '35.625em',
		minHeight: '26.875em',
		alignItems: 'start',
		paddingTop: ['0', '0', '6', '6'],
		paddingBottom: ['0', '0', '7', '7'],
		marginTop: ['20%', '20%', '0', '0'],
		marginBottom: ['auto', 'auto', 'none', 'none'],
	},

	introShortCentered: {
		height: `calc(100vh - 4em)`,
		maxHeight: '30.625em',
		minHeight: '26.875em',
		alignItems: 'start',
		paddingTop: ['0', '0', '6', '6'],
		marginTop: ['20%', '20%', '0', '0'],
		marginBottom: ['auto', 'auto', 'none', 'none'],
	},

	splitTextLine: {
		display: ['none', 'block', 'block', 'block'],
	},
	fullLine: {
		display: ['block', 'none', 'none', 'none'],
	},

	//tabs
	//TODO refactor/isolate
	reactTabs: {
		WebkitTapHighlightColor: 'transparent',
	},
	reactTabsTabList: {
		borderBottom: '1px solid #aaa',
		margin: '0 0 10px',
		padding: '0',
	},
	reactTabsTab: {
		display: 'inline-block',
		border: '1px solid transparent',
		borderBottom: 'none',
		bottom: '-1px',
		position: 'relative',
		listStyle: 'none',
		padding: '6px 12px',
		cursor: 'pointer',
	},
	reactTabsTabSelected: {
		background: '#fff',
		borderColor: '#aaa',
		color: 'black',
		borderRadius: '5px 5px 0 0',
	},
	reactTabsTabDisabled: {
		color: 'GrayText',
		cursor: 'default',
	},
	reactTabsTabFocus: {
		boxShadow: `0 0 5px hsl(208, 99%, 50%)`,
		borderColor: `hsl(208, 99%, 50%)`,
		outline: 'none',
	},
	reactTabsTabFocusAfter: {
		content: '""',
		position: 'absolute',
		height: '5px',
		left: '-4px',
		right: '-4px',
		bottom: '-5px',
		background: '#fff',
	},
	reactTabsTabPanel: {
		display: 'none',
	},
	reactTabsTabPanelSelected: {
		display: 'block',
	},
}
