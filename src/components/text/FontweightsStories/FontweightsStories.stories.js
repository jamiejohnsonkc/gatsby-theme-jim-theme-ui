/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import TextGrid from '../../TextGrid'
import TextGridHeader from '../../TextGridHeader'
import Display from '../../../../../gatsby-theme-jim-components/src/components/text/Display'

export default {
	title: 'Design_Elements/Type/Styles/Fontweights',
}

export const standard = (props) => (
	<>
		<TextGridHeader>Font Weights</TextGridHeader>
		<TextGrid
			{...props}
			sx={{
				gridTemplateRows: '8em 8em 8em 8em 8em',
			}}
		>
			<Text variant='styles.p3'>Heavy / 900</Text>
			<Display
				{...props}
				sx={{
					variant: 'styles.d3',
					fontWeight: 900,
				}}
			>
				ABCDEFGHIJKLMNOPQRSTUVWXYZ abcefghijklmnopqrstuvwzyx 123456789!@#$%
			</Display>
			<Text variant='styles.p3'>Bold / 700</Text>
			<Display
				{...props}
				sx={{
					variant: 'styles.d3',
					fontWeight: 700,
				}}
			>
				ABCDEFGHIJKLMNOPQRSTUVWXYZ abcefghijklmnopqrstuvwzyx 123456789!@#$%
			</Display>
			<Text variant='styles.p3'>Semibold / 400</Text>
			<Display
				{...props}
				sx={{
					variant: 'styles.d3',
					fontWeight: 400,
				}}
			>
				ABCDEFGHIJKLMNOPQRSTUVWXYZ abcefghijklmnopqrstuvwzyx 123456789!@#$%
			</Display>
			<Text variant='styles.p3'>Regular / 300</Text>
			<Display
				{...props}
				sx={{
					variant: 'styles.d3',
					fontWeight: 300,
				}}
			>
				ABCDEFGHIJKLMNOPQRSTUVWXYZ abcefghijklmnopqrstuvwzyx 123456789!@#$%
			</Display>
			<Text variant='styles.p3'>Light / 100</Text>
			<Display
				{...props}
				sx={{
					variant: 'styles.d3',
					fontWeight: 100,
				}}
			>
				ABCDEFGHIJKLMNOPQRSTUVWXYZ abcefghijklmnopqrstuvwzyx 123456789!@#$%
			</Display>
		</TextGrid>
	</>
)
