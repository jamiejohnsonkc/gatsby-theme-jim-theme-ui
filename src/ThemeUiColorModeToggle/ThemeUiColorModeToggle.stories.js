/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import ThemeUiColorModeToggle from './ThemeUiColorModeToggle'

export default {
	title: 'Ui/Inputs/Toggles',
}

export const LightDark= (props) => (
	<>
		{/* <Box>
			<ThemeUiColorModeToggle id="ToggleColor" />
		</Box>
		<Box>
			<ThemeUiColorModeToggle id="ToggleColorSmall" Small="True" />
		</Box> */}
		<ThemeUiColorModeToggle id="id" onChange={function (e) { console.log("Checkbox Current State: " + e.target.checked); }} />
	</>
)
