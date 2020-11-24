//action colors Only use to indicate which interface elements are actionable.
//ui Colors Use for non-interactive text and background interface elements.
//Support Colors Use to draw attention to a state or change in the application.
//Brand Colors Use sparingly for emphasis, large headings, and to grab attention.

//
import { darken, lighten } from '@theme-ui/color'
import { lightness } from '@theme-ui/color'
import { hue } from '@theme-ui/color'
import { shade } from '@theme-ui/color'

// let primary = '#03a9f4' //500
// let primaryFaint = '#E1F5FE' //50
// let primaryLight = '#81D4FA'//200
// let primaryDark = '#01579B'//900

// let secondary = '#ff5722'
// let secondaryFaint = '#FBE9E7'
// let secondaryLight = '#FFAB91'
// let secondaryDark = '#BF360C'

export default {
	brand: '#03A9F4',


//*

	lightBlue: {
		'100': '#f0faff',
		'200': '#b3e6fe',
		'300': '#77d3fd',
		'400': '#3abffd',
		'500': '#03a6f2',
		'600': '#0287c5',
		'700': '#026492',
		'800': '#014565',
		'900': '#012332',
	},
//*Usage


	//* nuetrals
	gray: {
		'100': '#fafafa',
		'200': '#dbdbdb',
		'300': '#bdbdbd',
		'400': '#9e9e9e',
		'500': '#808080',
		'600': '#696969',
		'700': '#525252',
		'800': '#383838',
		'900': '#212121',
	},

	kAlpha1: `rgba(0,0,0,.025)`,
	kAlpha2: `rgba(0,0,0, .05)`,
	kAlpha3: `rgba(0,0,0, .075)`,
	kAlpha4: `rgba(0,0,0, .1)`,
	kAlpha5: `rgba(0,0,0, .5)`,
	wAlpha1: `rgba(255,255,255, .5)`,
}
