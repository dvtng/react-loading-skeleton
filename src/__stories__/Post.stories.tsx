import React from 'react'
import { Meta } from '@storybook/react'
import { SideBySide, Post } from './components'

export default {
    component: Post,
    title: 'Post',
} as Meta

export const Default: React.VFC = () => (
    <SideBySide>
        <Post loading />
        <Post loading={false} />
    </SideBySide>
)

export const Large: React.VFC = () => (
    <SideBySide>
        <Post loading size="large" />
        <Post loading={false} size="large" />
    </SideBySide>
)

// export const WithColors: React.VFC = () => (
//     <div>
//         <SkeletonTheme color="#1D5CA6" highlightColor="#164999">
//             <Post />
//         </SkeletonTheme>
//         <SkeletonTheme color="#333" highlightColor="#4a4a4a">
//             <Post />
//         </SkeletonTheme>
//     </div>
// )
