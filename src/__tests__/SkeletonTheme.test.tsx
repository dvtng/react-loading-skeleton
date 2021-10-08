import '@testing-library/jest-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import { SkeletonTheme } from '../SkeletonTheme'
import { Skeleton } from '../Skeleton'
import { getSkeleton } from './__helpers__'

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

    const skeleton = getSkeleton()
    expect(skeleton).toHaveStyle({ borderRadius: '1rem' })
    expect(skeleton).toHaveStyle({ backgroundColor: 'black' })
})

it('is overridden by Skeleton props', () => {
    render(
        <SkeletonTheme borderRadius="1rem" baseColor="black">
            <Skeleton borderRadius="2rem" />
        </SkeletonTheme>
    )

    const skeleton = getSkeleton()
    expect(skeleton).toHaveStyle({ borderRadius: '2rem' })
    expect(skeleton).toHaveStyle({ backgroundColor: 'black' })
})

it('styles the skeleton through a portal', () => {
    const portalDestination = document.createElement('div')
    document.body.append(portalDestination)

    render(
        <SkeletonTheme borderRadius="1rem" baseColor="black">
            {ReactDOM.createPortal(<Skeleton />, portalDestination)}
        </SkeletonTheme>
    )

    const skeleton = getSkeleton()
    expect(skeleton).toHaveStyle({ borderRadius: '1rem' })
    expect(skeleton).toHaveStyle({ backgroundColor: 'black' })
})
