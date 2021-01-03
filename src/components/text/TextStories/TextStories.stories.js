/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import TextGrid from '../../TextGrid'
import TextGridHeader from '../../TextGridHeader'


export default {
    title: 'Design System/Typography/Elements',
}

export const BodyText = (props) => (
    <>

            <TextGridHeader>Text</TextGridHeader>
            <TextGrid>
                <Text variant="styles.p3">22.45px / 2.33em</Text>
                <Text variant="styles.p1">p1</Text>

                <Text variant="styles.p3">16px / 3.275em</Text>
                <Text variant="styles.p2">p2</Text>

                <Text variant="styles.p3">12.41px / .78em</Text>
                <Text variant="styles.p3">p3all</Text>
            </TextGrid>

    </>
)
