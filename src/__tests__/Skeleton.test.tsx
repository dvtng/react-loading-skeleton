import React, { PropsWithChildren } from 'react';
import { it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Skeleton } from '../Skeleton.js';
import {
  getAllSkeletons,
  getSkeleton,
  hasLineBreak,
  skeletonSelector,
} from './__helpers__/index.js';

afterEach(cleanup);

it('renders a skeleton', () => {
  render(<Skeleton />);

  const skeletonElements = getAllSkeletons();

  expect(skeletonElements).toHaveLength(1);
  expect(skeletonElements[0]).toBeVisible();

  // No inline styles should be rendered by default
  expect(skeletonElements[0]).not.toHaveAttribute('style');
});

it('renders the required number of skeletons', () => {
  render(<Skeleton count={4} />);

  const skeletonElements = getAllSkeletons();

  expect(skeletonElements).toHaveLength(4);
});

it('changes the color of the skeleton', () => {
  render(<Skeleton baseColor="purple" highlightColor="red" />);

  const skeleton = getSkeleton();

  expect(skeleton.style.getPropertyValue('--base-color')).toBe('purple');
  expect(skeleton.style.getPropertyValue('--highlight-color')).toBe('red');
});

it('renders a skeleton with styles', () => {
  const style = { borderRadius: 10, height: 50, width: 50 };
  render(<Skeleton style={style} />);

  const skeleton = getSkeleton();

  expect(skeleton).toHaveStyle({
    borderRadius: `${style.borderRadius}px`,
    height: `${style.height}px`,
    width: `${style.width}px`,
  });
});

it('prioritizes explicit props over style prop', () => {
  const style = { borderRadius: 10, height: 10, width: 10 };
  render(<Skeleton borderRadius={20} height={21} width={22} style={style} />);

  const skeleton = getSkeleton();

  expect(skeleton).toHaveStyle({
    borderRadius: '20px',
    height: '21px',
    width: '22px',
  });
});

it('ignores borderRadius if circle=true', () => {
  render(<Skeleton borderRadius={1} height={25} width={25} circle />);

  expect(getSkeleton()).toHaveStyle({ borderRadius: '50%' });
});

it('adds a line break when inline is false', () => {
  const { rerender } = render(<Skeleton />);
  expect(hasLineBreak()).toBe(true);

  rerender(<Skeleton inline={false} />);
  expect(hasLineBreak()).toBe(true);

  rerender(<Skeleton inline />);
  expect(hasLineBreak()).toBe(false);
});

it('disables the animation if and only if enableAnimation is false', () => {
  const { rerender } = render(<Skeleton containerTestId="container" />);
  expect(getSkeleton().style.getPropertyValue('--pseudo-element-display')).toBe(
    ''
  );
  expect(screen.getByTestId('container')).toHaveAttribute('aria-busy', 'true');

  rerender(<Skeleton enableAnimation containerTestId="container" />);
  expect(getSkeleton().style.getPropertyValue('--pseudo-element-display')).toBe(
    ''
  );
  expect(screen.getByTestId('container')).toHaveAttribute('aria-busy', 'true');

  rerender(<Skeleton enableAnimation={false} containerTestId="container" />);
  expect(getSkeleton().style.getPropertyValue('--pseudo-element-display')).toBe(
    'none'
  );
  expect(screen.getByTestId('container')).toHaveAttribute('aria-busy', 'false');
});

it('uses a custom className', () => {
  render(<Skeleton className="test-class" />);

  const skeleton = getSkeleton();

  expect(skeleton).toHaveClass('react-loading-skeleton');
  expect(skeleton).toHaveClass('test-class');
});

it('applies the containerClassName and containerTestId', () => {
  render(
    <Skeleton containerClassName="test-class" containerTestId="myTestId" />
  );

  const container = screen.getByTestId('myTestId');
  expect(container).toHaveClass('test-class');
});

it('renders a skeleton with a wrapper', () => {
  const Wrapper: React.FC<PropsWithChildren<unknown>> = ({ children }) => (
    <div className="box">{children}</div>
  );

  render(<Skeleton wrapper={Wrapper} />);

  const box = document.querySelector<HTMLElement>('.box');
  if (!box) throw new Error('box is null.');

  expect(box.querySelector(skeletonSelector)).toBeVisible();
});

it('renders a half-width skeleton when count = 1.5', () => {
  render(<Skeleton count={1.5} />);

  const skeletons = getAllSkeletons();
  expect(skeletons).toHaveLength(2);

  expect(skeletons[0]).toHaveStyle({ width: '' });
  expect(skeletons[1]).toHaveStyle({ width: 'calc(100% * 0.5)' });
});

it('renders a 3/4-width skeleton when count = 1.75 and width is set in pixels', () => {
  render(<Skeleton count={1.75} width={100} />);

  const skeletons = getAllSkeletons();
  expect(skeletons).toHaveLength(2);

  expect(skeletons[0]).toHaveStyle({ width: '100px' });
  expect(skeletons[1]).toHaveStyle({ width: '75px' });
});
