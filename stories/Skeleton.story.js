import React from 'react';
import { storiesOf } from '@storybook/react';
import SideBySide from './SideBySide';
import Skeleton, { SkeletonTheme } from '../src';

const Box = ({ children }) =>
    <a style={{
        border: '1px solid #ccc',
        display: 'block',
        fontSize: 16,
        lineHeight: 2,
        padding: 20,
        marginBottom: 10,
        width: 100
    }}>
        {children}
    </a>;

storiesOf('Skeleton', module)
    .add('with wrapper', () =>
        <SideBySide>
            <Skeleton count={5} wrapper={Box}/>
            <div>
                <Box key={1}>A</Box>
                <Box key={2}>B</Box>
                <Box key={3}>C</Box>
                <Box key={4}>D</Box>
            </div>
        </SideBySide>
    )
    .add('with wrapper and theme', () =>
        <SideBySide>
            <SkeletonTheme color="#333" highlightColor="#555">
                <Skeleton count={5} wrapper={Box}/>
            </SkeletonTheme>
            <div>
                <Box key={1}>A</Box>
                <Box key={2}>B</Box>
            </div>
        </SideBySide>
    )
    .add('with different durations', () =>
        <div>
            <Skeleton count={1} duration={1}/>
            <Skeleton count={1} duration={2}/>
            <Skeleton count={1} duration={3}/>
            <Skeleton count={1} duration={4}/>
        </div>
    );
