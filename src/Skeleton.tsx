import React, { CSSProperties, ReactElement, useContext } from 'react'
import { SkeletonThemeContext } from './SkeletonThemeContext'
import { SkeletonStyleProps } from './SkeletonStyleProps'

// If either color is changed, skeleton.css must be updated as well
const defaultBaseColor = '#eee'
const defaultHighlightColor = '#f5f5f5'

function styleOptionsToCssProperties({
    baseColor,
    highlightColor,

    width,
    height,
    borderRadius,
    circle,

    direction,
    duration,
}: SkeletonStyleProps & { circle: boolean }): CSSProperties {
    const style: CSSProperties = {
        animationDirection: direction === 'rtl' ? 'reverse' : 'normal',
    }

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
        baseColor ??= defaultBaseColor
        highlightColor ??= defaultHighlightColor

        style.backgroundColor = baseColor
        style.backgroundImage = `linear-gradient(
            90deg,
            ${baseColor},
            ${highlightColor},
            ${baseColor}
        )`
    }

    return style
}

export interface SkeletonProps extends SkeletonStyleProps {
    count?: number
    wrapper?: React.FunctionComponent

    className?: string
    containerClassName?: string

    /**
     * A string that will be added to the container element as a `data-testid`
     * attribute.
     */
    containerTestId?: string

    circle?: boolean

    /**
     * This is an escape hatch for advanced use cases and is not the preferred
     * way to configure the skeleton.
     *
     * Props (e.g. `width`, `borderRadius`) take priority over this style object.
     */
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
    const contextStyleOptions = useContext(SkeletonThemeContext)

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
    if (customClassName) className += ' ' + customClassName

    const elements: ReactElement[] = []

    for (let i = 0; i < count; i++) {
        elements.push(
            <span key={i} className={className} style={style}>
                &zwnj;
            </span>
        )
    }

    return (
        <span className={containerClassName} data-testid={containerTestId}>
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
