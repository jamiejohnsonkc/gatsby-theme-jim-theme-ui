/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import TextGridHeader from '../../TextGridHeader'
import TextGrid from '../../TextGrid'
import Display from '../../../gatsby-theme-jim-components/src/components/system/atoms/Text/Display'

export default {
	title: 'Design_Elements/Type/Styles/Font Families',
}

export const standard = (props) => (
	<>
		<TextGridHeader>Font Families</TextGridHeader>
		<TextGrid
			{...props}
			sx={{
				gridTemplateRows: '8em 8em 8em 8em 8em',
			}}
		>
			<Text variant='styles.p3'>Roboto</Text>
			<Display
				{...props}
				sx={{
					variant: 'styles.d3',
					fontFamily: 'Roboto',
					fontWeight: 'regular',
				}}
			>
				ABCDEFGHIJKLMNOPQRSTUVWXYZ abcefghijklmnopqrstuvwzyx 123456789!@#$%
			</Display>
			<Text variant='styles.p3'>Roboto Slab</Text>
			<Display
				{...props}
				sx={{
					variant: 'styles.d3',
					fontFamily: 'Roboto slab',
					fontWeight: 'regular',
				}}
			>
				ABCDEFGHIJKLMNOPQRSTUVWXYZ abcefghijklmnopqrstuvwzyx 123456789!@#$%
			</Display>
			<Text variant='styles.p3'>Source Code Pro</Text>
			<Display
				{...props}
				sx={{
					variant: 'styles.d3',
					fontFamily: 'Source Code Pro',
					fontWeight: 'regular',
				}}
			>
				ABCDEFGHIJKLMNOPQRSTUVWXYZ abcefghijklmnopqrstuvwzyx 123456789!@#$%
			</Display>
		</TextGrid>
	</>
)
