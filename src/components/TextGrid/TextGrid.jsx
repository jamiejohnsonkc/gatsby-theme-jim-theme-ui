/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import React from 'react'

const TextGrid = (props) => (
	<Grid
		{...props}
		sx={{
			gridTemplateColumns: '1fr 3fr',
			gridTemplateRows: 'auto',
			alignItems: 'first baseline',
			justifyContent: 'center',
			width: '48em',
			mb: 5,
		}}
		gap={2}
	/>
)

export default TextGrid
