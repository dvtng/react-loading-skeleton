import React from 'react'
import { render, screen } from '@testing-library/react'
import { Skeleton } from '../Skeleton'
import { getAllSkeletons, getSkeleton } from './__helpers__'

it('renders a skeleton', () => {
    render(<Skeleton />)

    const skeletonElements = getAllSkeletons()

    expect(skeletonElements).toHaveLength(1)
    expect(skeletonElements[0]).toBeVisible()
})

it('renders the required number of skeletons', () => {
    render(<Skeleton count={4} />)

    const skeletonElements = getAllSkeletons()

    expect(skeletonElements).toHaveLength(4)
})

it('renders a skeleton with styles', () => {
    const style = { borderRadius: 10, height: 50, width: 50 }
    render(<Skeleton style={style} />)

    const skeleton = getSkeleton()

    expect(skeleton).toHaveStyle({ borderRadius: `${style.borderRadius}px` })
    expect(skeleton).toHaveStyle({ height: `${style.height}px` })
    expect(skeleton).toHaveStyle({ width: `${style.width}px` })
})

it('prioritizes explicit props over style prop', () => {
    const style = { borderRadius: 10, height: 10, width: 10 }
    render(<Skeleton borderRadius={20} height={21} width={22} style={style} />)

    const skeleton = getSkeleton()

    expect(skeleton).toHaveStyle({ borderRadius: '20px' })
    expect(skeleton).toHaveStyle({ height: '21px' })
    expect(skeleton).toHaveStyle({ width: '22px' })
})

it('disables the animation if and only if enableAnimation is false', () => {
    const { rerender } = render(<Skeleton />)
    let skeleton = getSkeleton()
    expect(skeleton).toHaveStyle({ animation: '' })

    rerender(<Skeleton enableAnimation />)
    skeleton = getSkeleton()
    expect(skeleton).toHaveStyle({ animation: '' })

    rerender(<Skeleton enableAnimation={false} />)
    skeleton = getSkeleton()
    expect(skeleton).toHaveStyle({ animation: 'none' })
})

it('uses a custom className', () => {
    render(<Skeleton className="test-class" />)

    const skeleton = getSkeleton()

    expect(skeleton).toHaveClass('react-loading-skeleton')
    expect(skeleton).toHaveClass('test-class')
})

it('applies the containerClassName and containerTestId', () => {
    render(<Skeleton containerClassName="test-class" containerTestId="myTestId" />)

    const container = screen.getByTestId('myTestId')
    expect(container).toHaveClass('test-class')
})
