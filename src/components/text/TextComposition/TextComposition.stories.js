/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

import TextGridHeader from '../../TextGridHeader'
import Headline from '../../../gatsby-theme-jim-components/src/components/system/atoms/Text/Headline/Headline'
import Subhead from '../../../gatsby-theme-jim-components/src/components/system/atoms/Text/Subhead/Subhead'
import Subline from '../../../gatsby-theme-jim-components/src/components/system/atoms/Text/Subline'
import Display from '../../../gatsby-theme-jim-components/src/components/system/atoms/Text/Display/Display'
import TextStack from '../../TextStack/TextStack'

export default {
	title: 'Design Elements/Type/Composition',
}

export const standard = (props) => (
	<>
		<TextGridHeader>Heads & Subs</TextGridHeader>
		<TextStack>
			<Headline
				{...props}
				sx={{
					variant: 'styles.hxxxl',
				}}
			>
				Headline xxxl cillum domine
			</Headline>
			<Subhead
				{...props}
				sx={{
					variant: 'styles.h1',
				}}
			>
				Subhead 1 et et esse enim eiusmod cillum cupidatat consectetur
			</Subhead>
		</TextStack>

		<TextStack>
			<Headline
				{...props}
				sx={{
					variant: 'styles.h3',
				}}
			>
				Headline xxl cillum domine
			</Headline>
			<Display
				{...props}
				sx={{
					variant: 'styles.d1',
				}}
			>
				Display 1 et et esse enim eiusmod cillum cupidatat consectetur
			</Display>
		</TextStack>

		<TextStack>
			<Headline
				{...props}
				sx={{
					variant: 'styles.h1',
				}}
			>
				Headline h1 cillum domine
			</Headline>
			<Subline
				{...props}
				sx={{
					variant: 'styles.sl3',
				}}
			>
				Subline 3 et et esse enim eiusmod cillum cupidatat consectetur
			</Subline>
		</TextStack>
		<TextGridHeader>Heads & Text Blocks</TextGridHeader>
		<TextStack>
			<Headline
				{...props}
				sx={{
					variant: 'styles.h2',
				}}
			>
				Headline h2 cillum domine
			</Headline>
			<Text variant='styles.d2'>
				Display 2 Sunt id fugiat anim cupidatat consectetur sit cupidatat ad
				nisi aboris tempor pariatur eiusmod. Aute consectetur tempor ad tempor
				do anim commodo et esse enim eiusmod cillum lorem. Consectetur id duis
				fugiat et qui cupidatat minim dolor dolore minim incididunt commodo
				ipsum irure.
			</Text>
		</TextStack>
		<TextStack>
			<Headline
				{...props}
				sx={{
					variant: 'styles.h3',
				}}
			>
				Headline h3 cillum domine
			</Headline>
			<Text variant='styles.d3'>
				Display 3 Sunt id fugiat anim cupidatat consectetur sit cupidatat ad
				nisi aboris tempor pariatur eiusmod. Aute consectetur tempor ad tempor
				do anim commodo et esse enim eiusmod cillum lorem. Consectetur id duis
				fugiat et qui cupidatat minim dolor dolore minim incididunt commodo
				ipsum irure.
			</Text>
		</TextStack>
		<TextStack>
			<Headline
				{...props}
				sx={{
					variant: 'styles.h4',
				}}
			>
				Headline h4 cillum domine
			</Headline>
			<Text variant='styles.p_lg'>
				Paragraph large Sunt id fugiat anim cupidatat consectetur sit cupidatat
				ad nisi aboris tempor pariatur eiusmod. Aute consectetur tempor ad
				tempor do anim commodo et esse enim eiusmod cillum lorem. Consectetur id
				duis fugiat et qui cupidatat minim dolor dolore minim incididunt commodo
				ipsum irure.
			</Text>
		</TextStack>
		<TextStack>
			<Headline
				{...props}
				sx={{
					variant: 'styles.h5',
				}}
			>
				Headline h5 cillum domine
			</Headline>
			<Text variant='styles.p_md'>
				Paragraph medium Sunt id fugiat anim cupidatat consectetur sit cupidatat
				ad nisi aboris tempor pariatur eiusmod. Aute consectetur tempor ad
				tempor do anim commodo et esse enim eiusmod cillum lorem. Consectetur id
				duis fugiat et qui cupidatat minim dolor dolore minim incididunt commodo
				ipsum irure.
			</Text>
		</TextStack>
		<TextStack>
			<Headline
				{...props}
				sx={{
					variant: 'styles.h6',
				}}
			>
				Headline h6 cillum domine
			</Headline>
			<Text variant='styles.p_sm'>
				Paragraph small Sunt id fugiat anim cupidatat consectetur sit cupidatat
				ad nisi aboris tempor pariatur eiusmod. Aute consectetur tempor ad
				tempor do anim commodo et esse enim eiusmod cillum lorem. Consectetur id
				duis fugiat et qui cupidatat minim dolor dolore minim incididunt commodo
				ipsum irure.
			</Text>
		</TextStack>
	</>
)
