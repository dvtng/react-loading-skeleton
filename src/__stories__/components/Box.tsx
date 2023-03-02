import React, { PropsWithChildren, ReactElement } from 'react';

export const Box = ({ children }: PropsWithChildren<unknown>): ReactElement => (
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
);
