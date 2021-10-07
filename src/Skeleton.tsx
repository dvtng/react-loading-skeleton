import React, { CSSProperties, ReactElement } from 'react'
import { SkeletonStyleProps } from './StyleProps'

// If either color is changed, skeleton.css must be updated as well
const defaultBaseColor = '#eee'
const defaultHighlightColor = '#f5f5f5'

export interface SkeletonProps extends SkeletonStyleProps {
    count?: number
    wrapper?: React.FunctionComponent

    className?: string
    containerClassName?: string

    circle?: boolean

    duration?: number
    width?: string | number
    height?: string | number
    baseColor?: string
    highlightColor?: string
    direction?: 'ltr' | 'rtl'

    style?: CSSProperties
}

export function Skeleton({
    count = 1,
    wrapper: Wrapper,

    className: customClassName,
    containerClassName,

    circle = false,
    duration = 1.2,
    width,
    height,
    direction,
    baseColor,
    highlightColor,
    style: userProvidedStyle,
}: SkeletonProps): ReactElement {
    const style: CSSProperties = {
        animationDuration: `${duration}s`,
        animationDirection: direction === 'rtl' ? 'reverse' : 'normal',
    }

    if (typeof width === 'string' || typeof width === 'number') style.width = width

    if (typeof height === 'string' || typeof height === 'number') style.height = height

    if (typeof baseColor !== 'undefined' || typeof highlightColor !== 'undefined') {
        baseColor ??= defaultBaseColor
        highlightColor ??= defaultHighlightColor

        style.backgroundColor = baseColor
        style.backgroundImage = `linear-gradient(
            90deg,
            ${baseColor},
            ${highlightColor},
            ${baseColor}
        );`
    }

    if (
        typeof style.width !== 'undefined' &&
        typeof style.height !== 'undefined' &&
        circle
    ) {
        style.borderRadius = '50%'
    }

    let className = 'react-loading-skeleton'
    if (customClassName) className += ' ' + customClassName

    const combinedStyle: CSSProperties = {
        ...userProvidedStyle,
        ...style,
    }

    const elements: ReactElement[] = []

    for (let i = 0; i < count; i++) {
        elements.push(
            <span key={i} className={className} style={combinedStyle}>
                &zwnj;
            </span>
        )
    }

    return (
        <span className={containerClassName}>
            {Wrapper
                ? elements.map((element, i) => (
                      <Wrapper key={i}>
                          {element}
                          &zwnj;
                      </Wrapper>
                  ))
                : elements}
        </span>
    )
}
