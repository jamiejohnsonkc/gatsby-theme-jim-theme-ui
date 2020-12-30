/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

import TextGrid from '../../TextGrid'
import TextGridHeader from '../../TextGridHeader'

const TextVariationsStories = (props) => (
    <>
        <TextGridHeader>Style Variations</TextGridHeader>
        <TextGrid
            {...props}
            sx={{
                gridTemplateRows: '4em 4em 4em 4em 4em',
                maxWidth: 'none',
            }}
        >
            <Text variant="styles.p3">Legal</Text>
            <Text variant="legal">
                Officia excepteur aute reprehenderit eiusmod sint dolore do ex.
            </Text>
            <Text variant="styles.p3">Utility</Text>
            <Text variant="styles.utility">
                Officia excepteur aute reprehenderit eiusmod sint dolore do ex.
            </Text>
            <Text variant="styles.p3">caption</Text>
            <Text variant="caption">
                Officia excepteur aute reprehenderit eiusmod sint dolore do ex.
            </Text>
            <Text variant="styles.p3">Caps</Text>
            <Text variant="caps">AllCaps</Text>
            <Text variant="styles.p3">Caps Bold</Text>
            <Text variant="capsBold">AllCaps Bold</Text>
        </TextGrid>
    </>
)

export default TextVariationsStories
