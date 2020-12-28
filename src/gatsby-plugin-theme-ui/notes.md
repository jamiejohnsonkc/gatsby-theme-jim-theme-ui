Notes from Material Design Color System & Theme-UI (some material-design concepts omitted due to conflicts with theme-ui scheme)

via material design
Dark
Anatomy diagram of an app screen in dark theme with eight callouts.
baseLine (instead of 'text')

background (0dp elevation surface overlay)
surface (with 1dp elevation surface overlay)
primary
secondary
onBackground
onSurface
onPrimary
onSecondary

light
baseline
background
surface
error
primary
secondary
onBackground
onSurface
onPrimary
onSecondary

Text: Body foreground color

Background: appears behind scrollable content. The baseline background and surface color is usally #FFFFFF.

Surface colors affect surfaces of components, such as cards, sheets, and menus.
Error indicates errors in components, such as invalid text in a text field. The baseline error color is #B00020.

App surfaces use colors from specific categories in your color palette, such as a primary color. Whenever elements, such as text or icons, appear in front of those surfaces, those elements should use colors designed to be clear and legible against the colors behind them.

"On Colors" This category of colors is called “on” colors, referring to the fact that they color elements that appear “on” top of surfaces that use the following colors: a primary color, secondary color, surface color, background color, or error color. When a color appears “on” top of a primary color, it’s called an “on primary color.” They are labelled using the original color category (such as primary color) with the prefix “on.”

“On” colors are primarily applied to text, iconography, and strokes. Sometimes, they are applied to surfaces:

Primary brand color for links, buttons, etc.

Secondary colors are best for: Floating action buttons, selection controls (like sliders and switches), highlighting selected text, progress bars, links and headlines

Via Theme-Ui

text: Bodyforeground color
background: Body background color
primary: Primary brand color for links, buttons, etc.
secondary: Secondary brand color for alternative styling
accent: Contrast color for emphasizing UI
highlight: Background color for highlighting text
muted: faint color for backgrounds, borders, and accents that do not require high contrast with the background color

modes: {
// light:{
// primary: neutrals.black[500],
// primaryDark: neutrals.black[900],
// primaryLight: neutrals.black[200],
// // secondary: neutrals.black[],
// accent: neutrals.black[400],
// muted: neutrals.black[300],
// text: neutrals.black[900],
// revText: neutrals.black[100],
// mutedText: neutrals.black[300],
// background: neutrals.black[100],
// darkBackground: neutrals.black[900],
// highlight: neutrals.black[200],
// revHighlight: neutrals.black[700],
// line: neutrals.black[400],
// },
// dark: {
// primary: neutrals.white[],
// primaryDark: neutrals.white[],
// primaryLight: neutrals.white[],
// secondary: neutrals.white[],
// muted: neutrals.white[],
// accent: neutrals.white[],
// text: neutrals.white[],
// revText: neutrals.white[],
// mutedText: neutrals.white[],
// background: neutrals.white[],
// darkBackground: neutrals.white[],
// highlight: neutrals.white[],
// revHighlight: neutrals.white[],
// line: neutrals.white[],
// },
// lightBlue: {
// primary: lightBlue[500], //rgb(1.2%, 66.3%, 95.7%),
// primaryDark: lightBlue[700],
// primaryLight: lightBlue[300],
// secondary: '',
// accent: '',
// text: neutrals.black,
// revText: neutrals.white,
// mutedText: gray[500],
// background: neutrals.pureWhite,
// darkBackground: lightBlue[900],
// highlight: lightBlue[400],
// revHighlight: '',
// muted: lightBlue[600],
// divider: gray[200],
// },
},

//! Everything below for posterity
//modes: {
// inverse: {
// text: palette.white,
// background: palette.violetDark,
// primary: palette.violet,
// secondary: palette.gray5,
// accent: palette.gray6,
// highlight: palette.white,
// muted: palette.gray,
// navMenuBackground: palette.whiteAlpha1,
// navMenuItem: palette.white2,
// mastHeadLogo: palette.white2,
// navMenuItemHover: palette.gray5,
// },
// dark: {
// text: palette.white,
// background: palette.black2,
// primary: palette.gray3,
// secondary: palette.gray5,
// accent: palette.gray6,
// highlight: palette.white,
// muted: palette.gray,
// navMenuBackground: palette.whiteAlpha1,
// navMenuItem: palette.white2,
// mastHeadLogo: palette.white2,
// navMenuItemHover: palette.gray5,
// },
// purple: {
// text: "#fff",
// background: "#4f005e",
// primary: "#000",
// },
// gray: {
// text: "#fff",
// background: "#303030",
// primary: "#000",
// },
// blue: {
// text: "#146396",
// background: "#f7f8f8",
// primary: "#146396",
// navMenuItem: "#888",
// navMenuItemHover: "#43B4d8",
// highlight: "#43B4d8",
// },
// mono: {
// text: "#2D3B41",
// background: "#f7f8f8",
// primary: "#146396",
// navMenuItem: "#888",
// navMenuItemHover: "#43B4d8",
// highlight: "#43B4d8",
// },
//},
}
