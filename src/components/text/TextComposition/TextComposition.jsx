/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import React from 'react'

import TextStack from '../../TextStack/TextStack'
import TextGridHeader from '../../TextGridHeader'

import Busker from '../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Busker'
import Headline from '../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import Subhead from '../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subhead'
import Display from '../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Display'
import Subline from '../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subline'
import Body from '../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Body'
import Caption from '../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Caption'
import Paragraph from '../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Paragraph'
import Legal from '../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Legal'

const TextComposition = (props) => (
    <Box mb={6}>
        <Box mb={6}>
            <TextGridHeader>Heads & Subs</TextGridHeader>
            <TextStack>
                <Busker
                    {...props}
                    sx={{
                        variant: 'styles.bu1',
                    }}
                >
                    Busker 1 cillum domine
                </Busker>
                <Subhead
                    {...props}
                    sx={{
                        variant: 'styles.h1',
                    }}
                >
                    Subhead 1 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subhead>
            </TextStack>

            <TextStack>
                <Busker
                    {...props}
                    sx={{
                        variant: 'styles.bu2',
                    }}
                >
                    Busker 2 cillum domine
                </Busker>
                <Subhead
                    {...props}
                    sx={{
                        variant: 'styles.h2',
                    }}
                >
                    Subhead 2 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subhead>
            </TextStack>

            <TextStack>
                <Busker
                    {...props}
                    sx={{
                        variant: 'styles.bu3',
                    }}
                >
                    Busker 3 cillum domine
                </Busker>
                <Subhead
                    {...props}
                    sx={{
                        variant: 'styles.h3',
                    }}
                >
                    Subhead 3 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subhead>
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
                <Subhead
                    {...props}
                    sx={{
                        variant: 'styles.h4',
                    }}
                >
                    Subhead 4 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subhead>
            </TextStack>

            <TextStack>
                <Headline
                    {...props}
                    sx={{
                        variant: 'styles.h2',
                    }}
                >
                    Headline h2 cillum domine
                </Headline>
                <Subhead
                    {...props}
                    sx={{
                        variant: 'styles.h5',
                    }}
                >
                    Subhead 5 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subhead>
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
                <Subhead
                    {...props}
                    sx={{
                        variant: 'styles.h6',
                    }}
                >
                    Subhead 6 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subhead>
            </TextStack>
        </Box>

        <Box mb={6}>
            <TextGridHeader>Heads & Sublines</TextGridHeader>
            <TextStack>
                <Busker
                    {...props}
                    sx={{
                        variant: 'styles.bu1',
                    }}
                >
                    Busker 1 cillum domine
                </Busker>
                <Subline
                    {...props}
                    sx={{
                        variant: 'styles.h1',
                    }}
                >
                    Subline 1 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subline>
            </TextStack>

            <TextStack>
                <Busker
                    {...props}
                    sx={{
                        variant: 'styles.bu2',
                    }}
                >
                    Busker 2 cillum domine
                </Busker>
                <Subline
                    {...props}
                    sx={{
                        variant: 'styles.h2',
                    }}
                >
                    subline h2 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subline>
            </TextStack>

            <TextStack>
                <Busker
                    {...props}
                    sx={{
                        variant: 'styles.bu3',
                    }}
                >
                    Busker 3 cillum domine
                </Busker>
                <Subline
                    {...props}
                    sx={{
                        variant: 'styles.h3',
                    }}
                >
                    subline h3 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subline>
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
                        variant: 'styles.h4',
                    }}
                >
                    subline h4 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subline>
            </TextStack>
            <TextStack>
                <Headline
                    {...props}
                    sx={{
                        variant: 'styles.h2',
                    }}
                >
                    Headline h2 cillum domine
                </Headline>
                <Subline
                    {...props}
                    sx={{
                        variant: 'styles.h5',
                    }}
                >
                    subline h5 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subline>
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
                <Subline
                    {...props}
                    sx={{
                        variant: 'styles.h6',
                    }}
                >
                    subline h6 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subline>
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
                <Subline
                    {...props}
                    sx={{
                        variant: 'styles.d4',
                    }}
                >
                    Subline d4 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subline>
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
                <Subline
                    {...props}
                    sx={{
                        variant: 'styles.d5',
                    }}
                >
                    Subline d5 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subline>
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
                <Subline
                    {...props}
                    sx={{
                        variant: 'styles.d6',
                    }}
                >
                    Subline d6 et et esse enim eiusmod cillum cupidatat
                    consectetur
                </Subline>
            </TextStack>
        </Box>

        <Box mb={6}>
            <TextGridHeader>Heads & Display Blocks</TextGridHeader>
            <TextStack>
                <Headline
                    {...props}
                    sx={{
                        variant: 'styles.h1',
                    }}
                >
                    Headline h1 cillum domine
                </Headline>
                <Display variant="styles.d1">
                    Display d1 Sunt id fugiat anim cupidatat consectetur sit
                    cupidatat ad nisi aboris tempor pariatur eiusmod.
                </Display>
            </TextStack>
            <TextStack>
                <Headline
                    {...props}
                    sx={{
                        variant: 'styles.h2',
                    }}
                >
                    Headline h2 cillum domine
                </Headline>
                <Display variant="styles.d2">
                    Display d2 Sunt id fugiat anim cupidatat consectetur sit
                    cupidatat ad nisi aboris tempor pariatur eiusmod.
                </Display>
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
                <Display variant="styles.d3">
                    Display d3 Sunt id fugiat anim cupidatat consectetur sit
                    cupidatat ad nisi aboris tempor pariatur eiusmod.
                </Display>
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
                <Display variant="styles.d4">
                    Display d4 Sunt id fugiat anim cupidatat consectetur sit
                    cupidatat ad nisi aboris tempor pariatur eiusmod.
                </Display>
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
                <Display variant="styles.d5">
                    Display d5 Sunt id fugiat anim cupidatat consectetur sit
                    cupidatat ad nisi aboris tempor pariatur eiusmod.
                </Display>
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
                <Display variant="styles.d6">
                    Display d6 Sunt id fugiat anim cupidatat consectetur sit
                    cupidatat ad nisi aboris tempor pariatur eiusmod.
                </Display>
            </TextStack>
        </Box>

        <Box mb={6}>
            <TextGridHeader>Subheads & Body Blocks</TextGridHeader>
            <TextStack>
                <Subhead
                    {...props}
                    sx={{
                        variant: 'styles.h4',
                    }}
                >
                    Subhead h4 cillum domine
                </Subhead>
                <Body
                    {...props}
                    sx={{
                        variant: 'styles.b1',
                    }}
                >
                    body b1 Sunt id fugiat anim cupidatat consectetur sit
                    cupidatat ad nisi aboris tempor pariatur eiusmod. Aute
                    consectetur tempor ad tempor do anim commodo et esse enim
                    eiusmod cillum lorem. Consectetur id duis fugiat et qui
                    cupidatat minim dolor dolore minim incididunt commodo ipsum
                    irure.
                </Body>
            </TextStack>
            <TextStack>
                <Subhead
                    {...props}
                    sx={{
                        variant: 'styles.h5',
                    }}
                >
                    Subhead h5 cillum domine
                </Subhead>
                <Body
                    {...props}
                    sx={{
                        variant: 'styles.b2',
                    }}
                >
                    body b2 Sunt id fugiat anim cupidatat consectetur sit
                    cupidatat ad nisi aboris tempor pariatur eiusmod. Aute
                    consectetur tempor ad tempor do anim commodo et esse enim
                    eiusmod cillum lorem. Consectetur id duis fugiat et qui
                    cupidatat minim dolor dolore minim incididunt commodo ipsum
                    irure.
                </Body>
            </TextStack>
            <TextStack>
                <Subhead
                    {...props}
                    sx={{
                        variant: 'styles.h6',
                    }}
                >
                    Subhead h6 cillum domine
                </Subhead>
                <Body
                    {...props}
                    sx={{
                        variant: 'styles.b3',
                    }}
                >
                    body b3 Sunt id fugiat anim cupidatat consectetur sit
                    cupidatat ad nisi aboris tempor pariatur eiusmod. Aute
                    consectetur tempor ad tempor do anim commodo et esse enim
                    eiusmod cillum lorem. Consectetur id duis fugiat et qui
                    cupidatat minim dolor dolore minim incididunt commodo ipsum
                    irure.
                </Body>
            </TextStack>
        </Box>

        <Box mb={6}>
            <TextGridHeader>Subheads & Paragraphs</TextGridHeader>
            <TextStack>
                <Subhead
                    {...props}
                    sx={{
                        variant: 'styles.h6',
                    }}
                >
                    Subhead h6 cillum domine
                </Subhead>
                <Paragraph
                    {...props}
                    sx={{
                        variant: 'styles.p1',
                    }}
                >
                    Paragraph p1 Sunt id fugiat anim cupidatat consectetur sit
                    cupidatat ad nisi aboris tempor pariatur eiusmod. Aute
                    consectetur tempor ad tempor do anim commodo et esse enim
                    eiusmod cillum lorem. Consectetur id duis fugiat et qui
                    cupidatat minim dolor dolore minim incididunt commodo ipsum
                    irure.
                </Paragraph>
            </TextStack>
            <TextStack>
                <Subhead
                    {...props}
                    sx={{
                        variant: 'styles.d4',
                    }}
                >
                    Subhead d4 cillum domine
                </Subhead>
                <Paragraph
                    {...props}
                    sx={{
                        variant: 'styles.p2',
                    }}
                >
                    Paragraph p2 Sunt id fugiat anim cupidatat consectetur sit
                    cupidatat ad nisi aboris tempor pariatur eiusmod. Aute
                    consectetur tempor ad tempor do anim commodo et esse enim
                    eiusmod cillum lorem. Consectetur id duis fugiat et qui
                    cupidatat minim dolor dolore minim incididunt commodo ipsum
                    irure.
                </Paragraph>
            </TextStack>
            <TextStack>
                <Subhead
                    {...props}
                    sx={{
                        variant: 'styles.d5',
                    }}
                >
                    Subhead d5 cillum domine
                </Subhead>
                <Paragraph
                    {...props}
                    sx={{
                        variant: 'styles.p3',
                    }}
                >
                    Paragraph p3 Sunt id fugiat anim cupidatat consectetur sit
                    cupidatat ad nisi aboris tempor pariatur eiusmod. Aute
                    consectetur tempor ad tempor do anim commodo et esse enim
                    eiusmod cillum lorem. Consectetur id duis fugiat et qui
                    cupidatat minim dolor dolore minim incididunt commodo ipsum
                    irure.
                </Paragraph>
            </TextStack>
        </Box>
    </Box>
)

export default TextComposition
