/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import TextComposition from '../../components/text/TextComposition'

import HeadlineStories from '../../components/text/HeadlineStories/HeadlineStories'

const ReactTypographyPage = (props) => (
    <Box p={6}>
        <HeadlineStories />
        <TextComposition />
    </Box>
)

ReactTypographyPage.propTypes = {}

ReactTypographyPage.defaultProps = {}

export default ReactTypographyPage
