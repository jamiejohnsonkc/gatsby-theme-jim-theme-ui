/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

const TextStack = (props) => (
	<Box
		{...props}
		sx={{
			my: 5,
			paddingBottom: 5,
			borderBottom: (theme) => `.125em solid ${theme.colors.muted}`,
		}}
	/>
)

export default TextStack
