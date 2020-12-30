/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import TextGrid from '../../TextGrid'
import TextGridHeader from '../../TextGridHeader'
import Paragraph from '../../../../../gatsby-theme-jim-components/src/components/text/Paragraph'

const ParagraphStories = (props) => (
    <>
        <TextGridHeader>Paragraph</TextGridHeader>
        <TextGrid
            {...props}
            sx={{
                gridTemplateRows: '14em 10em 8em',
            }}
        >
            <Paragraph
                variant="styles.p1"
                {...props}
                sx={{
                    maxWidth: [
                        '33em',
                        null,
                        null,
                        null,
                        '39em',
                        '40em',
                        null,
                        null,
                    ],
                }}
            >
                Large: Sint proident ea fugiat in fugiat elit est nulla ex enim
                excepteur excepteur consequat proident. Amet duis velit officia
                proident. Aute aliqua voluptate nisi ea anim labore ea laboris.
                Dolore sunt excepteur consectetur incididunt. Deserunt occaecat
                consequat culpa aliquip velit. Lorem proident laborum sit amet
                sunt ex non ipsum in minim. Minim id tempor veniam reprehenderit
                consequat fugiat consectetur magna non sunt anim.
            </Paragraph>

            <Paragraph
                variant="styles.p2"
                {...props}
                sx={{
                    maxWidth: [
                        '33em',
                        null,
                        null,
                        null,
                        '39em',
                        '40em',
                        null,
                        null,
                    ],
                }}
            >
                Medium: Sint proident ea fugiat in fugiat elit est nulla ex enim
                excepteur excepteur consequat proident. Amet duis velit officia
                proident. Aute aliqua voluptate nisi ea anim labore ea laboris.
                Dolore sunt excepteur consectetur incididunt. Deserunt occaecat
                consequat culpa aliquip velit. Lorem proident laborum sit amet
                sunt ex non ipsum in minim. Minim id tempor veniam reprehenderit
                consequat fugiat consectetur magna non sunt anim.
            </Paragraph>

            <Paragraph
                variant="styles.p1"
                {...props}
                sx={{
                    maxWidth: [
                        '33em',
                        null,
                        null,
                        null,
                        '39em',
                        '40em',
                        null,
                        null,
                    ],
                }}
            >
                Small: Sint proident ea fugiat in fugiat elit est nulla ex enim
                excepteur excepteur consequat proident. Amet duis velit officia
                proident. Aute aliqua voluptate nisi ea anim labore ea laboris.
                Dolore sunt excepteur consectetur incididunt. Deserunt occaecat
                consequat culpa aliquip velit. Lorem proident laborum sit amet
                sunt ex non ipsum in minim. Minim id tempor veniam reprehenderit
                consequat fugiat consectetur magna non sunt anim.
            </Paragraph>
        </TextGrid>
    </>
)

export default ParagraphStories
