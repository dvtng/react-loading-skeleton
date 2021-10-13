import React from 'react'
import { Meta } from '@storybook/react'
import { Post, SideBySide, Box } from './components'
import { SkeletonTheme } from '../SkeletonTheme'
import { Skeleton } from '../Skeleton'

export default {
    component: SkeletonTheme,
    title: 'SkeletonTheme',
} as Meta

const darkBaseColor = '#333'
const darkHighlightColor = '#999'
const blueBaseColor = '#1D5CA6'
const blueHighlightColor = '#5294e0'
const lightBaseColor = '#d3d3d3'
const lightHighlightColor = '#808080'

export const WithColors: React.VFC = () => (
    <div>
        <SkeletonTheme baseColor={blueBaseColor} highlightColor={blueHighlightColor}>
            <Post loading />
        </SkeletonTheme>
        <SkeletonTheme baseColor={darkBaseColor} highlightColor={darkHighlightColor}>
            <Post loading />
        </SkeletonTheme>
    </div>
)

export const NoBorderRadius: React.VFC = () => (
    <div>
        <SkeletonTheme
            baseColor={blueBaseColor}
            highlightColor={blueHighlightColor}
            borderRadius="0"
        >
            <Post loading />
        </SkeletonTheme>
    </div>
)

export const LightAndDarkThemes: React.VFC = () => {
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

    const handleToggle = () => {
        setTheme((oldTheme) => (oldTheme === 'light' ? 'dark' : 'light'))
    }

    const skeletonColor = theme === 'light' ? darkBaseColor : lightBaseColor
    const skeletonHighlight = theme === 'light' ? darkHighlightColor : lightHighlightColor

    const backgroundColor = theme === 'light' ? 'white' : '#333'
    const color = theme === 'light' ? 'unset' : '#eee'

    return (
        <div style={{ backgroundColor, color }}>
            <button onClick={handleToggle} type="button">
                Toggle Theme
            </button>
            <SideBySide>
                <SkeletonTheme
                    baseColor={skeletonColor}
                    highlightColor={skeletonHighlight}
                >
                    <div>
                        <Box>
                            <Skeleton />
                        </Box>
                        <Box>
                            <Skeleton />
                        </Box>
                        <Box>
                            <Skeleton />
                        </Box>
                        <Box>
                            <Skeleton />
                        </Box>
                        <Box>
                            <Skeleton />
                        </Box>
                    </div>
                </SkeletonTheme>
                <div>
                    <Box>A</Box>
                    <Box>B</Box>
                    <Box>C</Box>
                    <Box>D</Box>
                    <Box>E</Box>
                </div>
            </SideBySide>
        </div>
    )
}
