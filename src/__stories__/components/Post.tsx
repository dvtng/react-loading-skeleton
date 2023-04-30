import React, { PropsWithChildren, ReactElement } from 'react';
import { Skeleton } from '../../Skeleton.js';

export const postContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
  'Vestibulum nec justo feugiat, auctor nunc ac, volutpat arcu. Suspendisse ' +
  'faucibus aliquam ante, sit amet iaculis dolor posuere et. In ut placerat leo.';

export interface PostProps {
  loading: boolean;
  size?: 'small' | 'large';
}

export function Post({
  loading,
  size = 'small',
}: PropsWithChildren<PostProps>): ReactElement {
  return (
    <div
      style={{
        padding: '0.5rem',
        width: size === 'small' ? '20rem' : '30rem',
        fontSize: size === 'small' ? '1rem' : '1.5rem',
        lineHeight: size === 'small' ? 'normal' : 2,
      }}
    >
      <h1>{loading ? <Skeleton /> : 'A Title'}</h1>
      <p>{loading ? <Skeleton count={5} /> : postContent}</p>
    </div>
  );
}
