/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'

const Layout = (props) => {
    return (
        <>
            <Box>{props.children}</Box>
        </>
    )
}
export default Layout
