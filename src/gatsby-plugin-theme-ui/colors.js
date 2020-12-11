/* eslint-disable spaced-comment */
//! COLORS

//TODO create color function to automatically generate light/dark variants of primary  & secondary colors

//utility

//? Notes from Material Design Color System & Theme-UI (some material-design concepts omitted due to conflicts with theme-ui scheme)

//* via material design
//Dark
//Anatomy diagram of an app screen in dark theme with eight callouts.
//baseLine //(instead of 'text')

//background (0dp elevation surface overlay)
//surface (with 1dp elevation surface overlay)
//primary
//secondary
//onBackground
//onSurface
//onPrimary
//onSecondary

//light
//baseline
//background
//surface
//error
//primary
//secondary
//onBackground
//onSurface
//onPrimary
//onSecondary

// Text: Body foreground color

// Background: appears behind scrollable content. The baseline background and surface color is usally #FFFFFF.

// Surface colors affect surfaces of components, such as cards, sheets, and menus.
// Error indicates errors in components, such as invalid text in a text field. The baseline error color is #B00020.

// App surfaces use colors from specific categories in your color palette, such as a primary color. Whenever elements, such as text or icons, appear in front of those surfaces, those elements should use colors designed to be clear and legible against the colors behind them.

// "On Colors" This category of colors is called “on” colors, referring to the fact that they color elements that appear “on” top of surfaces that use the following colors: a primary color, secondary color, surface color, background color, or error color. When a color appears “on” top of a primary color, it’s called an “on primary color.” They are labelled using the original color category (such as primary color) with the prefix “on.”

// “On” colors are primarily applied to text, iconography, and strokes. Sometimes, they are applied to surfaces:

// Primary brand color for links, buttons, etc.

// Secondary colors are best for: Floating action buttons, selection controls (like sliders and switches), highlighting selected text, progress bars, links and headlines

//* Via Theme-Ui

//text
// Bodyforeground color
//background
// Body background color
//primary
// Primary brand color for links, buttons, etc.
//secondary
// Secondary brand color for alternative styling
//accent
// Contrast color for emphasizing UI
//highlight
// Background color for highlighting text
//muted
// faint color for backgrounds, borders, and accents that do not //require high contrast with the background color

import lightBlue from './palettes/light/lightBlue'
import neutrals from './palettes/neutrals'
import kAlpha from './palettes/utilities/kAlpha'
import wAlpha from './palettes/utilities/wAlpha'
import gray from './palettes/light/gray'
import lime from './palettes/light/lime'
import whiteOverlay from './palettes/utilities/whiteOverlay'
import blackOverlay from './palettes/utilities/blackOverlay'
import primaryOverlay from './palettes/utilities/primaryOverlay'



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

	// primary: neutrals.black[500],
	// primaryDark: neutrals.black[900],
	// primaryLight: neutrals.black[200],

	// secondary: neutrals.black[],

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



	//TODO shadow
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
//TODO extract logo style
	//Header Elements

	// get jjTop() {
	// 	return this.primary
	// 	},
	jjTop: 'green',
	jjBottom: 'transparent',
	jjBg: 'transparent',

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

	modes: {
		// light:{
		// 	primary:  neutrals.black[500],
		// 	primaryDark: neutrals.black[900],
		// 	primaryLight: neutrals.black[200],
		// 	// secondary: neutrals.black[],
		// 	accent: neutrals.black[400],
		// 	muted: neutrals.black[300],
		// 	text: neutrals.black[900],
		// 	revText: neutrals.black[100],
		// 	mutedText: neutrals.black[300],
		// 	background: neutrals.black[100],
		// 	darkBackground: neutrals.black[900],
		// 	highlight: neutrals.black[200],
		// 	revHighlight: neutrals.black[700],
		// 	line: neutrals.black[400],
		// },
		// dark: {
		// 	primary:  neutrals.white[],
		// 	primaryDark: neutrals.white[],
		// 	primaryLight: neutrals.white[],
		// 	secondary: neutrals.white[],
		// 	muted: neutrals.white[],
		// 	accent: neutrals.white[],
		// 	text: neutrals.white[],
		// 	revText: neutrals.white[],
		// 	mutedText: neutrals.white[],
		// 	background: neutrals.white[],
		// 	darkBackground: neutrals.white[],
		// 	highlight: neutrals.white[],
		// 	revHighlight: neutrals.white[],
		// 	line: neutrals.white[],
		// },
		// lightBlue: {
		// 	primary: lightBlue[500], //rgb(1.2%, 66.3%, 95.7%),
		// 	primaryDark: lightBlue[700],
		// 	primaryLight: lightBlue[300],
		// 	secondary: '',
		// 	accent: '',
		// 	text: neutrals.black,
		// 	revText: neutrals.white,
		// 	mutedText: gray[500],
		// 	background: neutrals.pureWhite,
		// 	darkBackground: lightBlue[900],
		// 	highlight: lightBlue[400],
		// 	revHighlight: '',
		// 	muted: lightBlue[600],
		// 	divider: gray[200],
		// },
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

	// Faint color for backgrounds, borders, and accents that do not require high contrast with the background color

	//! ui
	//? How to apply these in multi-schemes?

	mastHeadLogo: '',
	//$  navMenuBackground: "white",
	//$  navMenuItemHover: palette.violet,
	//$  navItemActive: palette.tealBright,

	//! Everything below for posterity
	//modes: {
	// inverse: {
	//   text: palette.white,
	//   background: palette.violetDark,
	//   primary: palette.violet,
	//   secondary: palette.gray5,
	//   accent: palette.gray6,
	//   highlight: palette.white,
	//   muted: palette.gray,
	//   navMenuBackground: palette.whiteAlpha1,
	//   navMenuItem: palette.white2,
	//   mastHeadLogo: palette.white2,
	//   navMenuItemHover: palette.gray5,
	// },
	// dark: {
	//   text: palette.white,
	//   background: palette.black2,
	//   primary: palette.gray3,
	//   secondary: palette.gray5,
	//   accent: palette.gray6,
	//   highlight: palette.white,
	//   muted: palette.gray,
	//   navMenuBackground: palette.whiteAlpha1,
	//   navMenuItem: palette.white2,
	//   mastHeadLogo: palette.white2,
	//   navMenuItemHover: palette.gray5,
	// },
	// purple: {
	//   text: "#fff",
	//   background: "#4f005e",
	//   primary: "#000",
	// },
	// gray: {
	//   text: "#fff",
	//   background: "#303030",
	//   primary: "#000",
	// },
	// blue: {
	//   text: "#146396",
	//   background: "#f7f8f8",
	//   primary: "#146396",
	//   navMenuItem: "#888",
	//   navMenuItemHover: "#43B4d8",
	//   highlight: "#43B4d8",
	// },
	// mono: {
	//   text: "#2D3B41",
	//   background: "#f7f8f8",
	//   primary: "#146396",
	//   navMenuItem: "#888",
	//   navMenuItemHover: "#43B4d8",
	//   highlight: "#43B4d8",
	// },
	//},
}
