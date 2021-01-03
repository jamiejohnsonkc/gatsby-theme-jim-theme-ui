/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import TextComposition from '../text/TextComposition'

import HeadlineStories from '../text/HeadlineStories/HeadlineStories'

const ReactTypographyPage = (props) => (
    <>
        <HeadlineStories />
        <TextComposition />
    </>
)

ReactTypographyPage.propTypes = {}

ReactTypographyPage.defaultProps = {}

export default ReactTypographyPage
