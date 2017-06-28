import React from 'react';
import { storiesOf } from '@storybook/react';
import SideBySide from './SideBySide';
import Skeleton, { SkeletonTheme } from '../src';

const Box = ({ children }) =>
    <div style={{
        border: '1px solid #ccc',
        padding: 20,
        marginBottom: 10,
        width: 100
    }}>
        {children}
    </div>;

storiesOf('Skeleton', module)
    .add('with wrapper', () =>
        <SideBySide>
            <Skeleton count={5} wrapper={Box}/>
            <div>
                <Box key={1}>A</Box>
                <Box key={2}>B</Box>
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
    );