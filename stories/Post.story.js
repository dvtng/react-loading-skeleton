import React from 'react';
import { storiesOf } from '@storybook/react';
import SideBySide from './SideBySide';
import Post from './Post';

storiesOf('Post', module)
    .add('default', () => (
        <SideBySide>
            <Post/>
            <Post title="A title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nec justo feugiat, auctor nunc ac, volutpat arcu.
                Suspendisse faucibus aliquam ante, sit amet iaculis dolor posuere et.
                In ut placerat leo.
            </Post>
        </SideBySide>
    ))
    .add('with large size', () => (
        <SideBySide>
            <Post size="large"/>
            <Post size="larger" title="A title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nec justo feugiat, auctor nunc ac, volutpat arcu.
                Suspendisse faucibus aliquam ante, sit amet iaculis dolor posuere et.
                In ut placerat leo.
            </Post>
        </SideBySide>
    ))
    ;