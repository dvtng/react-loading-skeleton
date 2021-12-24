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
const lightBaseColor = '#c0c0c0'
const lightHighlightColor = '#A0A0A0'

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
    <SkeletonTheme
        baseColor={blueBaseColor}
        highlightColor={blueHighlightColor}
        borderRadius="0"
    >
        <Post loading />
    </SkeletonTheme>
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

export const PropsExplicitlySetToUndefined: React.VFC = () => (
    <div>
        <p>
            This is a test for{' '}
            <a href="https://github.com/dvtng/react-loading-skeleton/issues/128">#128</a>.
            The skeleton should have Christmas colors.
        </p>
        <SkeletonTheme baseColor="green" highlightColor="red">
            <Skeleton baseColor={undefined} highlightColor={undefined} />
        </SkeletonTheme>
    </div>
)
