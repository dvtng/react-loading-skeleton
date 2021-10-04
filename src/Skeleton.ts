import { CSSProperties, ReactElement, ReactNode } from "react";

export const defaultBaseColor = "#eee";

export const defaultHighlightColor = "#f5f5f5";

// export const skeletonKeyframes = keyframes`
//   0% {
//     background-position: -200px 0;
//   }
//   100% {
//     background-position: calc(200px + 100%) 0;
//   }
// `;

// export const skeletonStyles = css`
//     background-color: ${defaultBaseColor};
//     background-image: linear-gradient(
//         90deg,
//         ${defaultBaseColor},
//         ${defaultHighlightColor},
//         ${defaultBaseColor}
//     );
//     background-size: 200px 100%;
//     background-repeat: no-repeat;
//     border-radius: 4px;
//     display: inline-block;
//     line-height: 1;
//     width: 100%;
// `;

export interface SkeletonProps {
    count?: number;
    duration?: number;
    width?: string | number;
    wrapper?: ReactNode;
    height?: string | number;
    circle?: boolean;
    style?: CSSProperties;
    className?: string;
}

Skeleton.defaultProps = {
    count: 1,
    duration: 1.2,
    width: null,
    wrapper: null,
    height: null,
    circle: false,
    style: {},
    className: "",
    containerClassName: "",
};

export default function Skeleton({
    count,
    duration,
    width,
    wrapper: Wrapper,
    height,
    circle,
    style: customStyle,
    className: customClassName,
    containerClassName,
}: SkeletonProps): ReactElement {
    const elements = [];

    for (let i = 0; i < count; i++) {
        let style = {};

        if (width !== null) {
            style.width = width;
        }

        if (height !== null) {
            style.height = height;
        }

        if (width !== null && height !== null && circle) {
            style.borderRadius = "50%";
        }

        let className = "react-loading-skeleton";
        if (customClassName) {
            className += " " + customClassName;
        }

        elements.push(
            <span
                key={i}
                className={className}
                css={css`
                    ${skeletonStyles}
                    animation: ${skeletonKeyframes} ${duration}s ease-in-out infinite
                `}
                style={{
                    ...customStyle,
                    ...style,
                }}
            >
                &zwnj;
            </span>
        );
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
    );
}
