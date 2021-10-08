import React from 'react'
import { Skeleton } from '../Skeleton'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

const skeletonSelector = 'span.react-loading-skeleton'

it('renders a skeleton', () => {
    render(<Skeleton />)

    const skeletonElements = Array.from(document.querySelectorAll(skeletonSelector))

    expect(skeletonElements).toHaveLength(1)
    expect(skeletonElements[0]).toBeVisible()
})

it('renders the required number of skeletons', () => {
    render(<Skeleton count={4} />)

    const skeletonElements = Array.from(document.querySelectorAll(skeletonSelector))

    expect(skeletonElements).toHaveLength(4)
})

it('renders a skeleton with styles', () => {
    const style = { borderRadius: 10, height: 50, width: 50 }
    render(<Skeleton style={style} />)

    const skeleton = document.querySelector(skeletonSelector) as HTMLElement

    expect(skeleton.style.borderRadius).toBe(style.borderRadius + 'px')
    expect(skeleton.style.height).toBe(style.height + 'px')
    expect(skeleton.style.width).toBe(style.width + 'px')
})

it('prioritizes explicit props over style prop', () => {
    const style = { borderRadius: 10, height: 10, width: 10 }
    render(<Skeleton borderRadius={20} height={20} width={20} style={style} />)

    const skeleton = document.querySelector(skeletonSelector) as HTMLElement

    expect(skeleton.style.borderRadius).toBe('20px')
    expect(skeleton.style.height).toBe('20px')
    expect(skeleton.style.width).toBe('20px')
})

it('uses a custom className', () => {
    render(<Skeleton className="test-class" />)

    const skeleton = document.querySelector(skeletonSelector) as HTMLElement

    expect(skeleton).toHaveClass('react-loading-skeleton')
    expect(skeleton).toHaveClass('test-class')
})

it('uses a custom containerClassName', () => {
    render(<Skeleton containerClassName="test-class" />)

    const skeleton = document.querySelector(skeletonSelector) as HTMLElement
    const container = skeleton.parentElement

    expect(container).toHaveClass('test-class')
})
