import React from 'react';
import { Meta } from '@storybook/react';
import { SideBySide, Post } from './components';

export default {
  component: Post,
  title: 'Post',
} as Meta;

export const Default: React.FC = () => (
  <SideBySide>
    <Post loading />
    <Post loading={false} />
  </SideBySide>
);

export const Large: React.FC = () => (
  <SideBySide>
    <Post loading size="large" />
    <Post loading={false} size="large" />
  </SideBySide>
);
