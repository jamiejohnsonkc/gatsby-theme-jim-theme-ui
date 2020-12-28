/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Grid, Box, Text, Heading, Styled } from 'theme-ui'
import React from 'react'

import Layout from '../../Layout'

import ThemeUiColorModeToggle from '../../ThemeUiColorModeToggle'

// const RowHead = (props) => (
// 	<td
// 		{...props}
// 		bg={props.background}
// 		sx={{
// 			height: '3em',
// 		}}
// 	/>
// )

// let primaryColor = Object.values(colors.primary)

const ColorBox = ({ mode, bg, props }) => (
    <Box
        bg={mode}
        {...props}
        sx={{
            height: '80px',
            width: '80px',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Box
            {...props}
            bg={bg}
            sx={{
                height: '60px',
                width: '60px',
                position: 'relative',
                display: 'block',
            }}
        />
    </Box>
)

ColorBox.propTypes = {
    bg: PropTypes.any,
    mode: PropTypes.any,
    props: PropTypes.any,
}

ColorBox.defaultProps = {
    mode: 'background',
}

const Ch = ({ cH, props }) => (
    <span>
        <Text
            {...props}
            sx={{
                color: 'text',
                fontSize: 0,
                lineHeight: 1.2,
                fontFamily: 'caption',
                fontWeight: 'normal',
                pb: 2,
            }}
        >
            {cH}
        </Text>
    </span>
)

const Rh = ({ rH, props }) => (
    <span>
        <Text
            {...props}
            sx={{
                color: 'text',
                fontSize: 0,
                lineHeight: 1.2,
                fontFamily: 'caption',
                fontWeight: 'normal',
            }}
        >
            {rH}
        </Text>
    </span>
)

const StyledBox = (props) => (
    <Box
        className="wrapper"
        {...props}
        sx={{
            backgroundColor: 'white',
            p: 4,
            maxWidth: '129.44em',
            mb: 4,
        }}
    />
)

const StyledGrid = (props) => (
    <Grid
        {...props}
        sx={{
            maxWidth: '80em',
            margin: '0 auto',
            gridGap: '0px',
            '& > span': {
                px: 1,
                py: 1,
            },
        }}
    />
)

// const Table = (props) => (
// 	<table
// 		{...props}
// 		sx={{
// 			display: 'grid',
// 			borderCollapse: 'collapse',
// 			minWidth: '100%',
// 			gridTemplateColumns: `minmax(150px, 1fr)``minmax(150px, 1.67fr)``minmax(150px, 1.67fr)``minmax(150px, 1.67fr)``minmax(150px, 3.33fr)``minmax(150px, 1.67fr)``minmax(150px, 3.33fr)``minmax(150px, 1.67fr)`,
// 		}}
// 	/>
// )

const ReactPalettePage = (props) => (
    <>
        <Layout>
            <Section>
                <Article>
                    <ThemeUiColorModeToggle />
                    <StyledBox>
                        <Styled.h5>Palettes</Styled.h5>
                        <StyledGrid columns="repeat(11, 80px)">
                            <Ch cH="Mode" />
                            <Ch cH="primary" />
                            <Ch cH="primary light" />
                            <Ch cH="primary dark" />
                            <Ch cH="secondary" />
                            <Ch cH="text" />
                            <Ch cH="background" />
                            <Ch cH="surface" />
                            <Ch cH="highlight" />
                            <Ch cH="muted" />
                            <Ch cH="accent" />

                            <Rh rH="default" />
                            <ColorBox bg="primary" />
                            <ColorBox bg="primaryLight" />
                            <ColorBox bg="primaryDark" />
                            <ColorBox bg="secondary" />
                            <ColorBox bg="text" />
                            <ColorBox bg="background" />
                            <ColorBox bg="surface" />
                            <ColorBox bg="highlight" />
                            <ColorBox bg="muted" />
                            <ColorBox bg="accent" />

                            <Rh rH="dark" />
                            <ColorBox mode="darkBackground" bg="primary" />
                            <ColorBox mode="darkBackground" bg="primaryLight" />
                            <ColorBox mode="darkBackground" bg="primaryDark" />
                            <ColorBox mode="darkBackground" bg="secondary" />
                            <ColorBox mode="darkBackground" bg="revText" />
                            <ColorBox
                                mode="darkBackground"
                                bg="darkBackground"
                            />
                            <ColorBox mode="darkBackground" bg="darkSurface" />
                            <ColorBox mode="darkBackground" bg="revHighlight" />
                            <ColorBox mode="darkBackground" bg="darkMuted" />
                            <ColorBox mode="darkBackground" bg="darkAccent" />
                        </StyledGrid>
                    </StyledBox>
                    <StyledBox>
                        <Styled.h5>Overlays</Styled.h5>
                        <StyledGrid columns="repeat(11, 80px)">
                            <Ch cH="Mode" />
                            <Ch cH="01dp" />
                            <Ch cH="02dp" />
                            <Ch cH="03dp" />
                            <Ch cH="04dp" />
                            <Ch cH="06dp" />
                            <Ch cH="08dp" />
                            <Ch cH="12dp" />
                            <Ch cH="16dp" />
                            <Ch cH="24dp" />
                            <Ch />
                            <Rh rH="light" />
                            <ColorBox bg="bo1" />
                            <ColorBox bg="bo2" />
                            <ColorBox bg="bo3" />
                            <ColorBox bg="bo4" />
                            <ColorBox bg="bo5" />
                            <ColorBox bg="bo6" />
                            <ColorBox bg="bo7" />
                            <ColorBox bg="bo8" />
                            <ColorBox bg="bo9" />
                            <ColorBox bg="background" />

                            <Rh rH="dark" />
                            <ColorBox mode="darkBackground" bg="wo1" />
                            <ColorBox mode="darkBackground" bg="wo2" />
                            <ColorBox mode="darkBackground" bg="wo3" />
                            <ColorBox mode="darkBackground" bg="wo4" />
                            <ColorBox mode="darkBackground" bg="wo5" />
                            <ColorBox mode="darkBackground" bg="wo6" />
                            <ColorBox mode="darkBackground" bg="wo7" />
                            <ColorBox mode="darkBackground" bg="wo8" />
                            <ColorBox mode="darkBackground" bg="wo9" />
                            <ColorBox
                                mode="darkBackground"
                                bg="darkBackground"
                            />

                            <Rh rH="primary" />
                            <ColorBox mode="darkBackground" bg="po1" />
                            <ColorBox mode="darkBackground" bg="po2" />
                            <ColorBox mode="darkBackground" bg="po3" />
                            <ColorBox mode="darkBackground" bg="po4" />
                            <ColorBox mode="darkBackground" bg="po5" />
                            <ColorBox mode="darkBackground" bg="po6" />
                            <ColorBox mode="darkBackground" bg="po7" />
                            <ColorBox mode="darkBackground" bg="po8" />
                            <ColorBox mode="darkBackground" bg="po9" />
                            <ColorBox
                                mode="darkBackground"
                                bg="darkBackground"
                            />
                        </StyledGrid>
                    </StyledBox>

                    {/* <Table>
						<thead>
							<th>base</th>
							<th>light</th>
							<th>dark</th>
						</thead>
						<tbody>
							<tr>
								<RowHead>primary</RowHead>
								<ColorBox background='primary' />
								<ColorBox background='primaryLight' />
								<ColorBox background='primaryDark' />
							</tr>
							<tr>
								<RowHead>secondary</RowHead>
								<ColorBox background='secondary' />
								<ColorBox background='secondaryLight' />
								<ColorBox background='secondaryDark' />
							</tr>
							<tr>
								<RowHead>secondary</RowHead>
								<ColorBox background='secondary' />
								<ColorBox background='secondaryLight' />
								<ColorBox background='secondaryDark' />
							</tr>
						</tbody>
					</Table> */}
                </Article>
            </Section>
        </Layout>
    </>
)

export default ReactPalettePage
