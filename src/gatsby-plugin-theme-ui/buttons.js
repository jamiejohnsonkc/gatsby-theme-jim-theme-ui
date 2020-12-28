//! BUTTONS
import React from 'react'
import { lighten, darken } from '@theme-ui/color'
// import theme from './theme'
// /** @jsx jsx */
// import { jsx, theme } from 'theme-ui'
// import colors from './colors'
// import { letterSpacings } from './theme'
// import palette from './palette'

// buttonSize = {
//   sm: (t) => `${t.space[6]} ${t.space[8]}`,
// }

import gradients from './ex-theme-ui/gradients'

const buttonDefault = {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    textTransform: 'capitalize',
    m: 0,
    borderStyle: 'solid',
    fontFamily: 'heading',

    // border: 'none',
    // borderStyle: 'solid',
    cursor: 'pointer',
}

const buttonSm = {
    px: 3,
    py: [0, 0, 1, 1, 1, 1],
    // fontSize: '10px',
    minWidth: '56px',
    // letterSpacing: 'lazy',
}

const buttonMd = {
    px: 3,
    py: 1,
    // fontSize: 1,
    // letterSpacing: 'lazy',
    minWidth: ['unset', '212px', 'unset', '80px', '80px', '80px'],
}

const buttonLg = {
    px: [4, 4, 2, 2, 3],
    py: [3, 4, 2, 2, 2],
    // letterSpacing: 'lazy',
    // fontSize: 1,
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

const ltrHoverGrad = {
    ...buttonDefault,
    backgroundSize: '300% 100%',
    transition: 'all .4s ease-in-out',
    '&:hover': {
        backgroundPosition: '100% 0',
        transition: 'all .4s ease-in-out',
    },
    '&:focus': {
        outline: 'none',
    },
}

// const stylesTest = gradients.primary.buttonLtr

export default {
    solid: {
    primary: {
        lg: {
            ...buttonLg,
            ...primarySolid,
            ...buttonDefault,
            // color: 'background',
            // bg: 'primary',
        },
        md: {
            ...buttonMd,
            ...primarySolid,
            ...buttonDefault,
            // color: 'background',
            // bg: 'primary',
        },
        sm: {
            ...buttonSm,
            ...primarySolid,
            ...buttonDefault,
            // color: 'background',
            // bg: 'primary',
        },
    },
    secondary: {
        lg: {
            ...buttonLg,
            ...secondarySolid,
            ...buttonDefault,
            // color: 'background',
            // bg: 'secondary',
        },
        md: {
            ...buttonMd,
            ...secondarySolid,
            ...buttonDefault,
            // color: 'background',
            // bg: 'secondary',
        },
        sm: {
            ...buttonSm,
            ...secondarySolid,
            ...buttonDefault,
            // color: 'background',
            // bg: 'secondary',
        },
    },
    gray: {
        sm: {
            ...buttonSm,
            ...graySolid,
            ...buttonDefault,
            // color: 'background',
            // bg: 'gray',
            // border: 'none',
        },
        md: {
            ...buttonMd,
            ...graySolid,
            ...buttonDefault,
            // color: 'background',
            // bg: 'gray',
            // border: 'none',
        },
        lg: {
            ...buttonLg,
            ...graySolid,
            ...buttonDefault,
            // color: 'background',
            // bg: 'gray',
            // border: 'none',
        },
    },
},

    outline: {
        primary: {
            sm: {
                ...buttonSm,
                ...buttonDefault,
                ...buttonBorder,
                ...primaryOutline,
            },
            md: {
                ...buttonMd,
                ...buttonDefault,
                ...buttonBorder,
                ...primaryOutline,
            },
            lg: {
                ...buttonLg,
                ...buttonDefault,
                ...buttonBorder,
                ...primaryOutline,
            },
        },
        secondary: {
            sm: {
                ...buttonSm,
                ...buttonDefault,
                ...buttonBorder,
                ...secondaryOutline,
            },
            md: {
                ...buttonMd,
                ...buttonDefault,
                ...buttonBorder,
                ...secondaryOutline,
            },
            lg: {
                ...buttonLg,
                ...buttonDefault,
                ...buttonBorder,
                ...secondaryOutline,
            },
        },
        gray: {
            sm: {
                ...buttonSm,
                ...buttonDefault,
                ...buttonBorder,
                ...grayOutline,
            },
            md: {
                ...buttonMd,
                ...buttonDefault,
                ...buttonBorder,
                ...grayOutline,
            },
            lg: {
                ...buttonLg,
                ...buttonDefault,
                ...buttonBorder,
                ...grayOutline,
            },
        },
    },

    ltrHoverGrad: {
        primary: {
            sm: {
                ...buttonSm,
                ...buttonDefault,
                ...ltrHoverGrad,
                ...gradients.buttonLtr.primary,
                color: 'revText',
            },
            md: {
                ...buttonMd,
                ...buttonDefault,
                ...ltrHoverGrad,
                ...gradients.buttonLtr.primary,
                color: 'revText',
            },
            lg: {
                ...buttonLg,
                ...buttonDefault,
                ...ltrHoverGrad,
                ...gradients.buttonLtr.primary,
                color: 'revText',
            },
        },
        secondary: {
            sm: {
                ...buttonSm,
                ...buttonDefault,
                ...ltrHoverGrad,
                ...gradients.buttonLtr.secondary,
                color: 'text',
            },
            md: {
                ...buttonMd,
                ...buttonDefault,
                ...ltrHoverGrad,
                ...gradients.buttonLtr.secondary,
                color: 'text',
            },
            lg: {
                ...buttonLg,
                ...buttonDefault,
                ...ltrHoverGrad,
                ...gradients.buttonLtr.secondary,
                color: 'text',
            },
        },
        gray: {
            sm: {
                ...buttonSm,
                ...buttonDefault,
                ...ltrHoverGrad,
                ...gradients.buttonLtr.gray,
                color: 'revText',
            },
            md: {
                ...buttonMd,
                ...buttonDefault,
                ...ltrHoverGrad,
                ...gradients.buttonLtr.gray,
                color: 'revText',
            },
            lg: {
                ...buttonLg,
                ...ltrHoverGrad,
                ...gradients.buttonLtr.gray,
                color: 'revText',
            },
        },
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
