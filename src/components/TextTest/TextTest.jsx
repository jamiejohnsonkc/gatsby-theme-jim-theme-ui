/** @jsx jsx */
import { jsx, Styled, Text } from 'theme-ui'
import React from 'react'
import Busker from '../../../../../gatsby-theme-jim-components/src/components/text/Busker'
import Headline from '../../../../../gatsby-theme-jim-components/src/components/text/Headline'
import Subhead from '../../../../../gatsby-theme-jim-components/src/components/text/Subhead'
import Display from '../../../../../gatsby-theme-jim-components/src/components/text/Display'
import Subline from '../../../../../gatsby-theme-jim-components/src/components/text/Subline'
import Body from '../../../../../gatsby-theme-jim-components/src/components/text/Body'
import Caption from '../../../../../gatsby-theme-jim-components/src/components/text/Caption'
import Paragraph from '../../../../../gatsby-theme-jim-components/src/components/text/Paragraph'
import Legal from '../../../../../gatsby-theme-jim-components/src/components/text/Legal'
import Utility from '../../../../../gatsby-theme-jim-components/src/components/text/Utility'

const TextTest = (props) => (
    <div>
        <Headline
            {...props}
            sx={{
                variant: 'styles.hxxxl',
            }}
        >
            Headline xxxl
        </Headline>
        <Headline
            {...props}
            sx={{
                variant: 'styles.h3',
            }}
        >
            Headline xxl
        </Headline>
        <Headline
            {...props}
            sx={{
                variant: 'styles.hxl',
            }}
        >
            Headline xl
        </Headline>
        <Headline
            {...props}
            sx={{
                variant: 'styles.h1',
            }}
        >
            Headline h1
        </Headline>
        <Headline
            {...props}
            sx={{
                variant: 'styles.h2',
            }}
        >
            Headline h2
        </Headline>
        <Headline
            {...props}
            sx={{
                variant: 'styles.h3',
            }}
        >
            Headline h3
        </Headline>
        <Headline
            {...props}
            sx={{
                variant: 'styles.h4',
            }}
        >
            Headline h4
        </Headline>
        <Headline
            {...props}
            sx={{
                variant: 'styles.h5',
            }}
        >
            Headline h5
        </Headline>
        <Headline
            {...props}
            sx={{
                variant: 'styles.h6',
            }}
        >
            Headline h6
        </Headline>

        <Subhead
            {...props}
            sx={{
                variant: 'styles.h1',
            }}
        >
            Subhead 1
        </Subhead>

        <Subhead
            {...props}
            sx={{
                variant: 'styles.h2',
            }}
        >
            Subhead 1
        </Subhead>

        <Subhead
            {...props}
            sx={{
                variant: 'styles.h3',
            }}
        >
            Subhead 1
        </Subhead>

        <Subhead
            {...props}
            sx={{
                variant: 'styles.h4',
            }}
        >
            Subhead 1
        </Subhead>

        <Subhead
            {...props}
            sx={{
                variant: 'styles.h5',
            }}
        >
            Subhead 1
        </Subhead>

        <Subhead
            {...props}
            sx={{
                variant: 'styles.h6',
            }}
        >
            Subhead 1
        </Subhead>

        <Subline
            {...props}
            sx={{
                variant: 'styles.h1',
            }}
        >
            Subline 1
        </Subline>

        <Subline
            {...props}
            sx={{
                variant: 'styles.h2',
            }}
        >
            Subline 2
        </Subline>

        <Subline
            {...props}
            sx={{
                variant: 'styles.h3',
            }}
        >
            Subline 3
        </Subline>

        <Subline
            {...props}
            sx={{
                variant: 'styles.h4',
            }}
        >
            Subline 4
        </Subline>

        <Subline
            {...props}
            sx={{
                variant: 'styles.h5',
            }}
        >
            Subline 5
        </Subline>

        <Subline
            {...props}
            sx={{
                variant: 'styles.h6',
            }}
        >
            Subline 6
        </Subline>

        <Display
            {...props}
            sx={{
                variant: 'styles.d1',
            }}
        >
            Display 1
        </Display>
        <Display
            {...props}
            sx={{
                variant: 'styles.d2',
            }}
        >
            Display 2
        </Display>
        <Display
            {...props}
            sx={{
                variant: 'styles.d3',
            }}
        >
            Display 3
        </Display>
        <Display
            {...props}
            sx={{
                variant: 'styles.d4',
            }}
        >
            Display 4
        </Display>
        <Text
            {...props}
            sx={{
                variant: 'text.p1',
            }}
        >
            p1
        </Text>
        <Text
            {...props}
            sx={{
                variant: 'styles.p2',
            }}
        >
            p2
        </Text>
        <Text
            {...props}
            sx={{
                variant: 'styles.p3',
            }}
        >
            p3
        </Text>
        <Utility
            {...props}
            sx={{
                variant: 'styles.utility_lg',
            }}
        >
            Utility Lg
        </Utility>
        <Utility
            {...props}
            sx={{
                variant: 'styles.utility_md',
            }}
        >
            Utility Lg
        </Utility>
        <Utility
            {...props}
            sx={{
                variant: 'styles.utility_sm',
            }}
        >
            Utility Lg
        </Utility>

        <Caption>Caption Lg</Caption>
        {/* <div>
      <Styled.div
        sx={{
          variant: "links.MainNavLink",
        }}
      >
        Main Nav Link 1
      </Styled.div>
      <Styled.div
        sx={{
          variant: "links.mainNavLink",
        }}
      >
        Main Nav Link 2
      </Styled.div>
      <Styled.div
        sx={{
          variant: "links.mainNavLink",
        }}
      >
        Main Nav Link 3
      </Styled.div>
    </div> */}

        <Styled.p
            sx={{
                fontWeight: 'bold',
            }}
        >
            The following is standard body font size:
        </Styled.p>

        <Styled.p
            {...props}
            sx={{
                width: ['100%', '83.82%', '61.8%', '50%'],
            }}
        >
            Styled Paragraph Esse sunt qui nostrud non quis nisi adipisicing do
            veniam elit quis eu veniam. Qui dolore ullamco nisi minim do
            cupidatat esse. Consectetur occaecat consequat incididunt voluptate
            duis ut dolor consequat ex proident irure dolor pariatur
            consectetur.
        </Styled.p>
        <Styled.p
            {...props}
            sx={{
                width: ['100%', '83.82%', '61.8%', '50%'],
            }}
        >
            Styled Paragraph Esse sunt qui nostrud non quis nisi adipisicing do
            veniam elit quis eu veniam. Qui dolore ullamco nisi minim do
            cupidatat esse. Consectetur occaecat consequat incididunt voluptate
            duis ut dolor consequat ex proident irure dolor pariatur
            consectetur.
        </Styled.p>

        <Text
            variant="styles.p2"
            sx={{
                fontWeight: 'bold',
            }}
        >
            The following is the large body font size:
        </Text>
        <Text
            variant="styles.p2"
            {...props}
            sx={{
                width: ['100%', '83.82%', '61.8%', '50%'],
            }}
        >
            Qui pariatur ut ea laboris Lorem eu voluptate consectetur sit nulla
            ex adipisicing amet consectetur. Minim duis elit dolor commodo sint
            enim do consequat. Occaecat pariatur consectetur ipsum id magna.
            Veniam non ad do ipsum ut nulla veniam eiusmod cupidatat sit
            aliquip.
        </Text>

        <Text
            variant="styles.p2"
            {...props}
            sx={{
                width: ['100%', '83.82%', '61.8%', '50%'],
            }}
        >
            Styled Paragraph Esse sunt qui nostrud non quis nisi adipisicing do
            veniam elit quis eu veniam. Qui dolore ullamco nisi minim do
            cupidatat esse. Consectetur occaecat consequat incididunt voluptate
            duis ut dolor consequat ex proident irure dolor pariatur
            consectetur.
        </Text>
    </div>
)

export default TextTest
