import React from 'react'
import { Meta } from '@storybook/react'
import { SideBySide } from './SideBySide'
import Post from './Post'
//import { SkeletonTheme } from '../src'

export default {
    component: Post,
    title: 'Post',
} as Meta

export const Default: React.VFC<{}> = () => (
    <SideBySide>
        <Post />
        <Post title="A title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec justo
            feugiat, auctor nunc ac, volutpat arcu. Suspendisse faucibus aliquam ante, sit
            amet iaculis dolor posuere et. In ut placerat leo.
        </Post>
    </SideBySide>
)

export const LargeSize: React.VFC<{}> = () => (
    <SideBySide>
        <Post size="large" />
        <Post size="large" title="A title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec justo
            feugiat, auctor nunc ac, volutpat arcu. Suspendisse faucibus aliquam ante, sit
            amet iaculis dolor posuere et. In ut placerat leo.
        </Post>
    </SideBySide>
)

// export const WithColors: React.VFC<{}> = () => (
//     <div>
//         <SkeletonTheme color="#1D5CA6" highlightColor="#164999">
//             <Post />
//         </SkeletonTheme>
//         <SkeletonTheme color="#333" highlightColor="#4a4a4a">
//             <Post />
//         </SkeletonTheme>
//     </div>
// )
