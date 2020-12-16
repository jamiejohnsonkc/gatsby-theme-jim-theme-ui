/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

import TextGrid from '../../TextGrid'
import Headline from '../../../gatsby-theme-jim-components/src/components/system/atoms/Text/Headline/Headline'
import TextGridHeader from '../../TextGridHeader'

export default {
	title: 'Design Elements/Type/Headings',
}

export const Headings = (props) => (
	<>
		<TextGridHeader>Headlines</TextGridHeader>
		<TextGrid>
			<Text variant='styles.p3'>87.11px / 5.44em</Text>
			<Headline
				{...props}
				sx={{
					variant: 'styles.hxxxl',
				}}
			>
				Headline xxxl
			</Headline>

			<Text variant='styles.p3'>62.07px / 3.879em</Text>
			<Headline
				{...props}
				sx={{
					variant: 'styles.h3',
				}}
			>
				Headline xxl
			</Headline>

			<Text variant='styles.p3'>52.4px / 3.275em</Text>
			<Headline
				{...props}
				sx={{
					variant: 'styles.hxl',
				}}
			>
				Headline xl
			</Headline>

			<Text variant='styles.p3'>37.33px / 2.333em</Text>
			<Headline
				{...props}
				sx={{
					variant: 'styles.h1',
				}}
			>
				Headline h1
			</Headline>

			<Text variant='styles.p3'>26.6px / 1.663em</Text>
			<Headline
				{...props}
				sx={{
					variant: 'styles.h2',
				}}
			>
				Headline h2
			</Headline>

			<Text variant='styles.p3'>22.45px / 1.403em</Text>
			<Headline
				{...props}
				sx={{
					variant: 'styles.h3',
				}}
			>
				Headline h3
			</Headline>

			<Text variant='styles.p3'>16px / 1em</Text>
			<Headline
				{...props}
				sx={{
					variant: 'styles.h4',
				}}
			>
				Headline h4
			</Headline>

			<Text variant='styles.p3'>13.5px / .844em</Text>
			<Headline
				{...props}
				sx={{
					variant: 'styles.h5',
				}}
			>
				Headline h5
			</Headline>

			<Text variant='styles.p3'>12.41px / .776em</Text>
			<Headline
				{...props}
				sx={{
					variant: 'styles.h6',
				}}
			>
				Headline h6
			</Headline>
		</TextGrid>
	</>
)
