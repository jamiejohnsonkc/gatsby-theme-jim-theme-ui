/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

import TextGrid from '../../TextGrid'
import TextGridHeader from '../../TextGridHeader'
import Headline from '../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import Busker from '../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Busker'

const HeadlineStories = (props) => (
    <Box mb={6}>
        <TextGridHeader>Headings</TextGridHeader>

        {/* <Text variant="styles.p3">87.11px / 5.44em</Text> */}
        <Busker
            {...props}
            sx={{
                variant: 'styles.bu1',
            }}
        >
            Busker 1
        </Busker>

        {/* <Text variant="styles.p3">62.07px / 3.879em</Text> */}
        <Busker
            {...props}
            sx={{
                variant: 'styles.bu2',
            }}
        >
            Busker 2
        </Busker>

        {/* <Text variant="styles.p3">52.4px / 3.275em</Text> */}
        <Busker
            {...props}
            sx={{
                variant: 'styles.bu3',
            }}
        >
            Busker 3
        </Busker>

        {/* <Text variant="styles.p3">37.33px / 2.333em</Text> */}
        <Headline
            {...props}
            sx={{
                variant: 'styles.h1',
            }}
        >
            Headline h1
        </Headline>

        {/* <Text variant="styles.p3">26.6px / 1.663em</Text> */}
        <Headline
            {...props}
            sx={{
                variant: 'styles.h2',
            }}
        >
            Headline h2
        </Headline>

        {/* <Text variant="styles.p3">22.45px / 1.403em</Text> */}
        <Headline
            {...props}
            sx={{
                variant: 'styles.h3',
            }}
        >
            Headline h3
        </Headline>

        {/* <Text variant="styles.p3">16px / 1em</Text> */}
        <Headline
            {...props}
            sx={{
                variant: 'styles.h4',
            }}
        >
            Headline h4
        </Headline>

        {/* <Text variant="styles.p3">13.5px / .844em</Text> */}
        <Headline
            {...props}
            sx={{
                variant: 'styles.h5',
            }}
        >
            Headline h5
        </Headline>

        {/* <Text variant="styles.p3">12.41px / .776em</Text> */}
        <Headline
            {...props}
            sx={{
                variant: 'styles.h6',
            }}
        >
            Headline h6
        </Headline>
    </Box>
)

export default HeadlineStories
