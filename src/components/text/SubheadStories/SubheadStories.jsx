/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

import TextGrid from '../../TextGrid'
import TextGridHeader from '../../TextGridHeader'
import Subhead from '../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Subhead'

const SubheadStories = (props) => (
    <>
        <TextGridHeader>Subheads</TextGridHeader>
        <TextGrid>
            <Text variant="styles.p3">37.33px / 2.333em</Text>
            <Subhead
                {...props}
                sx={{
                    variant: 'styles.h1',
                }}
            >
                Subhead h1
            </Subhead>

            <Text variant="styles.p3">26.6px / 1.663em</Text>
            <Subhead
                {...props}
                sx={{
                    variant: 'styles.h2',
                }}
            >
                Subhead h2
            </Subhead>

            <Text variant="styles.p3">22.45px / 1.403em</Text>
            <Subhead
                {...props}
                sx={{
                    variant: 'styles.h3',
                }}
            >
                Subhead h3
            </Subhead>

            <Text variant="styles.p3">16px / 1em</Text>
            <Subhead
                {...props}
                sx={{
                    variant: 'styles.h4',
                }}
            >
                Subhead h4
            </Subhead>

            <Text variant="styles.p3">13.5px / .844em</Text>
            <Subhead
                {...props}
                sx={{
                    variant: 'styles.h5',
                }}
            >
                Subhead h5
            </Subhead>

            <Text variant="styles.p3">12.41px / .776em</Text>
            <Subhead
                {...props}
                sx={{
                    variant: 'styles.h6',
                }}
            >
                Subhead h6
            </Subhead>
        </TextGrid>
    </>
)

export default SubheadStories
