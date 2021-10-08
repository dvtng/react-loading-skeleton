import React, { PropsWithChildren } from 'react'
import { SideBySide } from './SideBySide'
import { Skeleton } from '../src/Skeleton'
import { Meta } from '@storybook/react'

const Box = ({ children }: PropsWithChildren<unknown>) => (
    <div
        style={{
            border: '1px solid #ccc',
            fontSize: 16,
            lineHeight: 2,
            padding: 20,
            marginBottom: 10,
            width: 100,
        }}
    >
        {children}
    </div>
)

export default {
    component: Skeleton,
    title: 'Skeleton',
} as Meta

export const WithWrapper: React.VFC = () => (
    <SideBySide>
        <Skeleton count={5} wrapper={Box} />
        <div>
            <Box>A</Box>
            <Box>B</Box>
            <Box>C</Box>
            <Box>D</Box>
        </div>
    </SideBySide>
)

export const DifferentDurations: React.VFC = () => (
    <div>
        <Skeleton count={1} duration={1} />
        <Skeleton count={1} duration={2} />
        <Skeleton count={1} duration={3} />
        <Skeleton count={1} duration={4} />
    </div>
)

export const DifferentWidths: React.VFC = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Skeleton count={1} />
        <Skeleton count={1} width={50} />
        <Skeleton count={1} width={100} />
        <Skeleton count={1} width={200} />
        <Skeleton count={1} width="50em" />
    </div>
)

export const DifferentHeights: React.VFC = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Skeleton count={1} />
        <Skeleton count={1} height={200} />
        <Skeleton count={1} height={400} />
        <Skeleton count={1} height={600} />
        <Skeleton count={1} height="50em" />
    </div>
)

export const CustomStyles: React.VFC = () => (
    <Skeleton height="100px" style={{ borderRadius: 10, height: 50, width: 50 }} />
)

export const Circle: React.VFC = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Skeleton count={1} height={50} width={50} circle={true} />
    </div>
)

//export const WrapperAndTheme: React.VFC = () => (
//     <SideBySide>
//         <SkeletonTheme color="#333" highlightColor="#666">
//             <Skeleton count={5} wrapper={Box} />
//         </SkeletonTheme>
//         <div>
//             <Box key={1}>A</Box>
//             <Box key={2}>B</Box>
//         </div>
//     </SideBySide>
//)

// export const LightTheme: React.VFC = () => {
//     const [theme, setTheme] = React.useState('light')
//     const skeletonColor =
//         theme === 'light' ? 'rgba(0, 0, 0, .1)' : 'rgba(255, 255, 255, .1)'
//     const skeletonHighlight =
//         theme === 'light' ? 'rgba(0, 0, 0, .2)' : 'rgba(255,255,255, .2)'

//     const handleToggle = () => {
//         setTheme((oldTheme) => (oldTheme === 'light' ? 'dark' : 'light'))
//     }

//     const backgroundColor = theme === 'light' ? 'white' : '#222'

//     return (
//         <div style={{ backgroundColor }}>
//             <button onClick={handleToggle}>Toggle Theme</button>
//             <SideBySide>
//                 <SkeletonTheme color={skeletonColor} highlightColor={skeletonHighlight}>
//                     <Skeleton count={5} wrapper={Box} />
//                 </SkeletonTheme>
//                 <div>
//                     <Box key={1}>A</Box>
//                     <Box key={2}>B</Box>
//                 </div>
//             </SideBySide>
//         </div>
//     )
// }
