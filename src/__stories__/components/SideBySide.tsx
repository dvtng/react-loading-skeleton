import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

const style = {
  alignItems: 'flex-start',
  display: 'flex',
  justifyContent: 'center',
};

const arrowStyle = {
  alignSelf: 'center',
  fontSize: 20,
  padding: '0 1.25rem',
  lineHeight: 0.5,
};

export function SideBySide({
  children,
}: PropsWithChildren<unknown>): ReactElement {
  const childrenWithArrows: ReactNode[] = [];

  React.Children.forEach(children, (child, index) => {
    if (index > 0) {
      childrenWithArrows.push(
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} style={arrowStyle}>
          →
        </div>
      );
    }
    childrenWithArrows.push(child);
  });

  return <div style={style}>{childrenWithArrows}</div>;
}
