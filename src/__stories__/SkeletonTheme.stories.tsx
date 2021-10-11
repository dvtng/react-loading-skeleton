import React from 'react'
import { Meta } from '@storybook/react'
import { Post, SideBySide } from './components'
import { SkeletonTheme } from '../SkeletonTheme'
import { Box } from './components/Box'
import { Skeleton } from '../Skeleton'

export default {
    component: SkeletonTheme,
    title: 'SkeletonTheme',
} as Meta

const darkBaseColor = '#333'
const darkHighlightColor = '#cccccc'
const blueBaseColor = '#1D5CA6'
const blueHighlightColor = '#d0dbeb'
const lightBaseColor = '#d3d3d3'
const lightHighlightColor = '#808080'
const lightBackground = '#FFFFFF'
const darkBackground = '#000000'

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
            <Post loading />
            <Post loading />
        </SkeletonTheme>
    </div>
)

export const WrapperAndTheme: React.VFC = () => (
    <SideBySide>
        <SkeletonTheme baseColor={darkBaseColor} highlightColor={darkHighlightColor}>
            <Skeleton count={5} wrapper={Box} />
        </SkeletonTheme>
        <div>
            <Box>A</Box>
            <Box>B</Box>
            <Box>C</Box>
            <Box>D</Box>
            <Box>E</Box>
        </div>
    </SideBySide>
)

export const LightAndDarkThemes: React.VFC = () => {
    const [theme, setTheme] = React.useState('light')
    const skeletonColor = theme === 'light' ? darkBaseColor : lightBaseColor
    const skeletonHighlight = theme === 'light' ? darkHighlightColor : lightHighlightColor

    const handleToggle = () => {
        setTheme((oldTheme) => (oldTheme === 'light' ? 'dark' : 'light'))
    }

    const backgroundColor = theme === 'light' ? lightBackground : darkBackground

    return (
        <div style={{ backgroundColor }}>
            <button onClick={handleToggle} type="button">
                Toggle Theme
            </button>
            <SideBySide>
                <SkeletonTheme
                    baseColor={skeletonColor}
                    highlightColor={skeletonHighlight}
                >
                    <Skeleton count={5} wrapper={Box} />
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
