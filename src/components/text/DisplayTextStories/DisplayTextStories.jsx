/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'

import TextGrid from '../../TextGrid'
import TextGridHeader from '../../TextGridHeader'

const DisplayTextStories = (props) => (
    <>
        <TextGridHeader>Display Text</TextGridHeader>
        <TextGrid headerText="Display Text">
            <Text variant="styles.p3">37.33px / 2.33em</Text>
            <Text variant="styles.d1">Display 1</Text>

            <Text variant="styles.p3">26.6 / 1.66em</Text>
            <Text variant="styles.d2">Display 2</Text>

            <Text variant="styles.p3">22.45px / 1.40em</Text>
            <Text variant="styles.d3">Display 3</Text>

            <Text variant="styles.p3">16px / 1em</Text>
            <Text variant="styles.d4">Display 4</Text>
        </TextGrid>
    </>
)

export default DisplayTextStories
