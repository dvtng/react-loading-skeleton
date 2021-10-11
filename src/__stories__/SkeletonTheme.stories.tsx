import React from 'react'
import { Meta } from '@storybook/react'
import { Post, SideBySide } from './components'
import { SkeletonTheme } from '../SkeletonTheme'
import { Box } from './Skeleton.stories'
import { Skeleton } from '../Skeleton'

export default {
    component: SkeletonTheme,
    title: 'SkeletonTheme',
} as Meta

export const WithColors: React.VFC = () => (
    <div>
        <SkeletonTheme baseColor="#1D5CA6" highlightColor="#164999">
            <Post loading />
        </SkeletonTheme>
        <SkeletonTheme baseColor="#333" highlightColor="#4a4a4a">
            <Post loading />
        </SkeletonTheme>
    </div>
)

export const NoBorderRadius: React.VFC = () => (
    <div>
        <SkeletonTheme baseColor="#1D5CA6" borderRadius="0">
            <Post loading />
            <Post loading />
            <Post loading />
        </SkeletonTheme>
    </div>
)

export const WrapperAndTheme: React.VFC = () => (
    <SideBySide>
        <SkeletonTheme baseColor="#333" highlightColor="#666">
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

export const LightTheme: React.VFC = () => {
    const [theme, setTheme] = React.useState('light')
    const skeletonColor =
        theme === 'light' ? 'rgba(0, 0, 0, .1)' : 'rgba(255, 255, 255, .1)'
    const skeletonHighlight =
        theme === 'light' ? 'rgba(0, 0, 0, .2)' : 'rgba(255,255,255, .2)'

    const handleToggle = () => {
        setTheme((oldTheme) => (oldTheme === 'light' ? 'dark' : 'light'))
    }

    const backgroundColor = theme === 'light' ? 'white' : '#222'

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
                    <Box key={1}>A</Box>
                    <Box key={2}>B</Box>
                </div>
            </SideBySide>
        </div>
    )
}
