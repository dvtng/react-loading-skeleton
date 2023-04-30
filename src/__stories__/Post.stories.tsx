import React from 'react';
import { Meta } from '@storybook/react';
import { SideBySide, Post } from './components/index.js';

export default {
  component: Post,
  title: 'Post',
} satisfies Meta;

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
