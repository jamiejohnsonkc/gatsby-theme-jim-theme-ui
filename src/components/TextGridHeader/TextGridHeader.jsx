/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import Utility from '../../../../gatsby-theme-jim-components/src/components/text/Utility'

const TextGridHeader = (props) => (
    <Utility
        {...props}
        sx={{
            borderBottom: (theme) => `.025em solid ${theme.colors.muted}`,
            my: 3,
            pb: 3,
            maxWidth: '52em',
            color: 'muted',
        }}
    />
)

export default TextGridHeader
