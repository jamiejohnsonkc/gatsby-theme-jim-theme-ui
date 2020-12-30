/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

import Subline from '../../../../../gatsby-theme-jim-components/src/components/text/Subline'
import TextGrid from '../../TextGrid'
import TextGridHeader from '../../TextGridHeader'

export default {
	title: 'Design Elements/Type/Sublines',
}

export const standard = (props) => (
	<>
		<TextGridHeader>Sublines</TextGridHeader>
		<TextGrid>
			<Text variant='styles.p3'>37.33px / 2.333em</Text>
			<Subline
				{...props}
				sx={{
					variant: 'styles.sl1',
				}}
			>
				Subline 1
			</Subline>

			<Text variant='styles.p3'>26.6px / 1.663em</Text>
			<Subline
				{...props}
				sx={{
					variant: 'styles.sl2',
				}}
			>
				Subline 2
			</Subline>

			<Text variant='styles.p3'>22.45px / 1.403em</Text>
			<Subline
				{...props}
				sx={{
					variant: 'styles.sl3',
				}}
			>
				Subline 3
			</Subline>

			<Text variant='styles.p3'>16px / 1em</Text>
			<Subline
				{...props}
				sx={{
					variant: 'styles.sl4',
				}}
			>
				Subline 4
			</Subline>

			<Text variant='styles.p3'>13.5px / .844em</Text>
			<Subline
				{...props}
				sx={{
					variant: 'styles.sl5',
				}}
			>
				Subline 5
			</Subline>

			<Text variant='styles.p3'>12.41px / .776em</Text>
			<Subline
				{...props}
				sx={{
					variant: 'styles.sl6',
				}}
			>
				Subline 6
			</Subline>
		</TextGrid>
	</>
)
