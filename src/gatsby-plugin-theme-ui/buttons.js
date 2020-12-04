//! BUTTONS
import React from 'react'
import theme from './theme'
// /** @jsx jsx */
// import { jsx, theme } from 'theme-ui'
// import { colors } from './colors'
// import { letterSpacings } from './theme'
// import palette from './palette'

// buttonSize = {
//   sm: (t) => `${t.space[6]} ${t.space[8]}`,
// }

const buttonDefault = {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    fontWeight: ['normal', 'normal', 'light', 'light', 'light', 'light'],
    letterSpacing: 0,
    textTransform: 'capitalize',
    m: 0,
    fontFamily: 'heading',
    border: 'none',
}

const buttonSm = {
    px: 3,
    py: [0, 0, 1, 1, 1, 1],
    fontSize: '10px',
    minWidth: '56px',
    letterSpacing: 'lazy',
}

const buttonMd = {
    px: 3,
    py: 1,
    fontSize: 1,
    letterSpacing: 'lazy',
    minWidth: ['unset', '212px', 'unset', '80px', '80px', '80px'],
}

const buttonLg = {
    px: [4, 4, 2, 2, 3],
    py: [3, 4, 2, 2, 2],
    letterSpacing: 'lazy',
    fontSize: 1,
    minWidth: ['unset', '212px', 'unset', '112px', '112px', '136px'],
}

const buttonBorder = {
    borderWidth: '.1618em',
    borderStyle: 'solid',
    background: 'transparent',
}

const primarySolid = {
    color: 'background',
    bg: 'primary',
}

const primaryOutline = {
    color: 'primary',
    borderColor: 'primary',
}

const secondarySolid = {
    color: 'background',
    borderColor: 'secondary',
}

const secondaryOutline = {
    color: 'secondary',
    borderColor: 'secondary',
}

const graySolid = {
    color: 'background',
    borderColor: 'gray',
}

const grayOutline = {
    color: 'gray',
    borderColor: 'gray',
}

export default {
    primaryLg: {
        ...buttonLg,
        ...primarySolid,
        ...buttonDefault,
        color: 'background',
        bg: 'primary',
    },
    primaryMd: {
        ...buttonMd,
        ...primarySolid,
        ...buttonDefault,
        color: 'background',
        bg: 'primary',
    },
    primarySm: {
        ...buttonSm,
        ...primarySolid,
        ...buttonDefault,
        color: 'background',
        bg: 'primary',
    },

    secondaryLg: {
        ...buttonLg,
        ...secondarySolid,
        ...buttonDefault,
        color: 'background',
        bg: 'secondary',
    },
    secondaryMd: {
        ...buttonMd,
        ...secondarySolid,
        ...buttonDefault,
        color: 'background',
        bg: 'secondary',
    },
    secondarySm: {
        ...buttonSm,
        ...secondarySolid,
        ...buttonDefault,
        color: 'background',
        bg: 'secondary',
    },
    graySm: {
        ...buttonSm,
        ...graySolid,
        ...buttonDefault,
        color: 'background',
        bg: 'gray',
        border: 'none',
    },
    grayMd: {
        ...buttonMd,
        ...graySolid,
        ...buttonDefault,
        color: 'background',
        bg: 'gray',
        border: 'none',
    },
    grayLg: {
        ...buttonLg,
        ...graySolid,
        ...buttonDefault,
        color: 'background',
        bg: 'gray',
        border: 'none',
    },

    primaryOutlineSm: {
        ...buttonSm,
        ...buttonDefault,
        ...buttonBorder,
        ...primaryOutline,
    },
    primaryOutlineMd: {
        ...buttonMd,
        ...buttonDefault,
        ...buttonBorder,
        ...primaryOutline,
    },
    primaryOutlineLg: {
        ...buttonLg,
        ...buttonDefault,
        ...buttonBorder,
        ...primaryOutline,
    },
    secondaryOutlineSm: {
        ...buttonSm,
        ...buttonDefault,
        ...buttonBorder,
        ...secondaryOutline,
    },
    secondaryOutlineMd: {
        ...buttonMd,
        ...buttonDefault,
        ...buttonBorder,
        ...secondaryOutline,
    },
    secondaryOutlineLg: {
        ...buttonLg,
        ...buttonDefault,
        ...buttonBorder,
        ...secondaryOutline,
    },
    grayOutlineSm: {
        ...buttonSm,
        ...buttonDefault,
        ...buttonBorder,
        ...grayOutline,
    },
    grayOutlineMd: {
        ...buttonMd,
        ...buttonDefault,
        ...buttonBorder,
        ...grayOutline,
    },
    grayOutlineLg: {
        ...buttonLg,
        ...buttonDefault,
        ...buttonBorder,
        ...grayOutline,
    },

    scrollTop: {
        fixed: {
            position: 'fixed',
            display: 'inline-grid',
            alignContent: 'center',
            justifyContent: 'center',
            height: '2em',
            zIndex: 4,
            bottom: '2em',
            right: '2em',
            verticalAlign: 'sub',
        },
        fixedRound: {
            position: 'fixed',
            display: 'inline-grid',
            alignContent: 'center',
            justifyContent: 'center',
            height: '2em',
            width: '2em',
            zIndex: 4,
            bottom: '2em',
            right: '2em',
            verticalAlign: 'sub',
            borderRadius: '100%',
        },
    },
    radialSelected: {
        borderColor: 'transparent',
        outline: 'none',
        paddingTop: 0,
        paddingBottom: 0,
        lineHeight: 1,
        '& > svg > path': {
            stroke: 'muted',
        },

        verticalAlign: 'middle',
        '&:focus': {
            backgroundColor: 'none',
            border: 'none',
            outline: 'none',
            '& > svg > path': {
                stroke: 'background',
            },
        },
    },
}

// add variants for box, pill, rounded, outline, solid
