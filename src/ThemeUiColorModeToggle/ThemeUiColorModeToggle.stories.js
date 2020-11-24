/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import ThemeUiColorModeToggle from './ThemeUiColorModeToggle'

export default {
	title: 'Design Elements/Inputs/Toggles/Color Mode Toggle',
}

export const standard = (props) => (
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
