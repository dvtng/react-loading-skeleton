import '@testing-library/jest-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import { SkeletonTheme } from '../SkeletonTheme'
import { Skeleton } from '../Skeleton'

const skeletonSelector = 'span.react-loading-skeleton'

it('does not render anything', () => {
    render(
        <div data-testid="container">
            <SkeletonTheme borderRadius="1rem" />
        </div>
    )

    expect(screen.getByTestId('container')).toBeEmptyDOMElement()
})

it('styles the skeleton', () => {
    render(
        <SkeletonTheme borderRadius="1rem" baseColor="black">
            <Skeleton />
        </SkeletonTheme>
    )

    const skeleton = document.querySelector<HTMLElement>(skeletonSelector)!
    expect(skeleton.style.borderRadius).toBe('1rem')
    expect(skeleton.style.backgroundColor).toBe('black')
})

it('styles the skeleton through a portal', () => {
    const portalDestination = document.createElement('div')
    document.body.append(portalDestination)

    render(
        <SkeletonTheme borderRadius="1rem" baseColor="black">
            {ReactDOM.createPortal(<Skeleton />, portalDestination)}
        </SkeletonTheme>
    )

    const skeleton = document.querySelector<HTMLElement>(skeletonSelector)!
    expect(skeleton.style.borderRadius).toBe('1rem')
    expect(skeleton.style.backgroundColor).toBe('black')
})
