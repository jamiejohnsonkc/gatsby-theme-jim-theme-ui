//! COLORS

import lightBlue from './palettes/light/lightBlue'
import neutrals from './palettes/neutrals'
import kAlpha from './palettes/utilities/kAlpha'
import wAlpha from './palettes/utilities/wAlpha'
import gray from './palettes/light/gray'
import lime from './palettes/light/lime'
import whiteOverlay from './palettes/utilities/whiteOverlay'
import blackOverlay from './palettes/utilities/blackOverlay'
import primaryOverlay from './palettes/utilities/primaryOverlay'


//TODO create color function to automatically generate light/dark variants of primary & secondary colors
//TODO set up custom color inputs for brand colors

export default {
	//$ custom colors:
	// 	brand: {
	// '100': '',
	// '200': '',
	// '300': '',
	// '400': '',
	// '500': '',
	// '600': '',
	// '700': '',
	// '800': '',
	// '900': '',
	// 	},


	primary: lightBlue[500],
	primaryDark: lightBlue[700],
	primaryLight: lightBlue[400],
	secondary: lime[500],
	text: neutrals.black[900],
	mutedText: neutrals.black[300],
	accent: neutrals.black[300],
	muted: neutrals.black[300],
	highlight: neutrals.black[200],
	background: neutrals.black[100],
	backgroundMidTone: neutrals.black[300],
	line: neutrals.black[200],
	revText: neutrals.white[100],
	darkAccent: neutrals.white[800],
	darkMuted: neutrals.white[300],
	revHighlight: neutrals.black[700],
	darkBackground: neutrals.black[700],
	darkBackgroundMidTone: neutrals.black[700],
	darkLine: neutrals.white[300],
	bleed: neutrals.fullWhite, //.mainWrapper (page bg)
	liveArea: neutrals.white[600], //.siteWrapper (section bg)
	surface: neutrals.white[300],
	darkSurface: neutrals.black[900],

	//NavMenu
	get navMenuItem() {
		return this.accent
	},
	get navMenuItemHover() {
		return this.primary
	},

	get headerElement() {
		return this.primary
	},
	get headerElementHover() {
		return this.primaryLight
	},
	get headerElementBg() {
		return this.muted
	},

	get headerElementBgHover() {
		return this.muted
	},



	//$ Utilities ****************************
	error: '#f40331',
	success: 'green',

		white: neutrals.white[400],
	fullWhite: neutrals.fullWhite,

	black: neutrals.black[600],
	fullBlack: neutrals.fullBlack,

	whiteBackground: neutrals.white,
	blackBackground: neutrals.black,
	blackSurface: neutrals.black[900],
	whiteSurface: neutrals.white[300],

	wo1: whiteOverlay[100],
	wo2: whiteOverlay[200],
	wo3: whiteOverlay[300],
	wo4: whiteOverlay[400],
	wo5: whiteOverlay[600],
	wo6: whiteOverlay[800],
	wo7: whiteOverlay[120],
	wo8: whiteOverlay[160],
	wo9: whiteOverlay[240],

	bo1: blackOverlay[100],
	bo2: blackOverlay[200],
	bo3: blackOverlay[300],
	bo4: blackOverlay[400],
	bo5: blackOverlay[600],
	bo6: blackOverlay[800],
	bo7: blackOverlay[120],
	bo8: blackOverlay[160],
	bo9: blackOverlay[240],

	po1: primaryOverlay[100],
	po2: primaryOverlay[200],
	po3: primaryOverlay[300],
	po4: primaryOverlay[400],
	po5: primaryOverlay[600],
	po6: primaryOverlay[800],
	po7: primaryOverlay[120],
	po8: primaryOverlay[160],
	po9: primaryOverlay[240],

	overlay1: kAlpha[25],
	overlay2: kAlpha[50],
	overlay3: kAlpha[75],
	overlay4: kAlpha[100],
	overlay5: kAlpha[500],
	revOverlay1: wAlpha[25],
	revOverlay2: wAlpha[50],
	revOverlay3: wAlpha[75],
	revOverlay4: wAlpha[100],
	revOverlay5: wAlpha[500],
	revOverlay95: wAlpha[950],

	//$ OneOffs
	gray300: gray[300],
	gray: gray[500],

	// ! still in use; replace later
	faint: lightBlue[200],

	//! ui
	mastHeadLogo: '',
	//$  navMenuBackground: "white",
	//$  navMenuItemHover: palette.violet,
	//$  navItemActive: palette.tealBright,

