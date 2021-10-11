/* eslint-disable react/no-array-index-key */
import React, { CSSProperties, ReactElement } from 'react'
import { SkeletonThemeContext } from './SkeletonThemeContext'
import { SkeletonStyleProps } from './SkeletonStyleProps'

// If either color is changed, skeleton.css must be updated as well
const defaultBaseColor = '#ebebeb'
const defaultHighlightColor = '#f5f5f5'

// For performance & cleanliness, don't add any inline styles unless we have to
function styleOptionsToCssProperties({
    baseColor,
    highlightColor,

    width,
    height,
    borderRadius,
    circle,

    direction,
    duration,
    enableAnimation = true,
}: SkeletonStyleProps & { circle: boolean }): CSSProperties {
    const style: CSSProperties = {}

    if (direction === 'rtl') style.animationDirection = 'reverse'

    if (typeof duration === 'number') style.animationDuration = `${duration}s`

    if (typeof width === 'string' || typeof width === 'number') style.width = width
    if (typeof height === 'string' || typeof height === 'number') style.height = height

    if (typeof borderRadius === 'string' || typeof borderRadius === 'number')
        style.borderRadius = borderRadius

    if (
        typeof style.width !== 'undefined' &&
        typeof style.height !== 'undefined' &&
        circle
    ) {
        style.borderRadius = '50%'
    }

    if (typeof baseColor !== 'undefined' || typeof highlightColor !== 'undefined') {
        style.backgroundColor = baseColor ?? defaultBaseColor
        style.backgroundImage = `linear-gradient(
            90deg,
            ${baseColor ?? defaultBaseColor},
            ${highlightColor ?? defaultHighlightColor},
            ${baseColor ?? defaultBaseColor}
        )`
    }

    if (!enableAnimation) style.backgroundImage = 'none'

    return style
}

export interface SkeletonProps extends SkeletonStyleProps {
    count?: number
    wrapper?: React.FunctionComponent

    className?: string
    containerClassName?: string
    containerTestId?: string

    circle?: boolean
    style?: CSSProperties
}

export function Skeleton({
    count = 1,
    wrapper: Wrapper,

    className: customClassName,
    containerClassName,
    containerTestId,

    circle = false,

    style: styleProp,
    ...propsStyleOptions
}: SkeletonProps): ReactElement {
    const contextStyleOptions = React.useContext(SkeletonThemeContext)

    // Props take priority over context
    const styleOptions = {
        ...contextStyleOptions,
        ...propsStyleOptions,
        circle,
    }

    // `styleProp` has the least priority out of everything
    const style = {
        ...styleProp,
        ...styleOptionsToCssProperties(styleOptions),
    }

    let className = 'react-loading-skeleton'
    if (customClassName) className += ` ${customClassName}`

    const elements: ReactElement[] = []

    for (let i = 0; i < count; i++) {
        elements.push(
            <span key={i} className={className} style={style}>
                &zwnj;
            </span>
        )
    }

    // Reference on accessible loading indicators
    // https://dockyard.com/blog/2020/03/02/accessible-loading-indicatorswith-no-extra-elements

    // Without the <br /> elements, the skeleton lines will all run together if
    // `width` is specified
    return (
        <span
            className={containerClassName}
            data-testid={containerTestId}
            aria-live="polite"
            aria-busy
        >
            {Wrapper
                ? elements.map((element, i) => (
                      <Wrapper key={i}>
                          {element}
                          &zwnj;
                      </Wrapper>
                  ))
                : elements.map((element, i) => [element, <br key={`br-${i}`} />])}
        </span>
    )
}
