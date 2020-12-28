/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import ParagraphStories from './ParagraphStories'
import TextGrid from '../../TextGrid'
import TextGridHeader from '../../TextGridHeader'

export default {
	title: 'Design Elements/Type/Paragraphs',
}

export const standard = (props) => (
	<>
		{' '}
		<TextGridHeader>Paragraphs</TextGridHeader>
		<TextGrid
			{...props}
			sx={{
				gridTemplateRows: '14em 10em 8em',
			}}
		>
			<Text variant='styles.p3'>16px / 3.275em</Text>
			<p
				{...props}
				sx={{
					variant: 'styles.p_lg',
				}}
			>
				Large: Sint proident ea fugiat in fugiat elit est nulla ex enim
				excepteur excepteur consequat proident. Amet duis velit officia
				proident. Aute aliqua voluptate nisi ea anim labore ea laboris. Dolore
				sunt excepteur consectetur incididunt. Deserunt occaecat consequat culpa
				aliquip velit. Lorem proident laborum sit amet sunt ex non ipsum in
				minim. Minim id tempor veniam reprehenderit consequat fugiat consectetur
				magna non sunt anim.
			</p>

			<Text variant='styles.p3'>13.5px / .844em</Text>
			<p
				{...props}
				sx={{
					variant: 'styles.p_md',
				}}
			>
				Medium: Sint proident ea fugiat in fugiat elit est nulla ex enim
				excepteur excepteur consequat proident. Amet duis velit officia
				proident. Aute aliqua voluptate nisi ea anim labore ea laboris. Dolore
				sunt excepteur consectetur incididunt. Deserunt occaecat consequat culpa
				aliquip velit. Lorem proident laborum sit amet sunt ex non ipsum in
				minim. Minim id tempor veniam reprehenderit consequat fugiat consectetur
				magna non sunt anim.
			</p>

			<Text variant='styles.p3'>12.41px / .78em</Text>
			<p
				{...props}
				sx={{
					variant: 'styles.p_sm',
				}}
			>
				Small: Sint proident ea fugiat in fugiat elit est nulla ex enim
				excepteur excepteur consequat proident. Amet duis velit officia
				proident. Aute aliqua voluptate nisi ea anim labore ea laboris. Dolore
				sunt excepteur consectetur incididunt. Deserunt occaecat consequat culpa
				aliquip velit. Lorem proident laborum sit amet sunt ex non ipsum in
				minim. Minim id tempor veniam reprehenderit consequat fugiat consectetur
				magna non sunt anim.
			</p>
		</TextGrid>
	</>
)
