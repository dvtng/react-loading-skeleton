import { CSSProperties, ReactElement } from "react";

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

// css={css`
//     ${skeletonStyles}
//     animation: ${skeletonKeyframes} ${duration}s ease-in-out infinite
// `}

export interface SkeletonProps {
    count?: number;
    duration?: number;
    width?: string | number;
    wrapper?: React.FunctionComponent;
    height?: string | number;
    circle?: boolean;
    style?: CSSProperties;
    className?: string;
    containerClassName?: string;
}

export default function Skeleton({
    count = 1,
    duration = 1.2,
    width,
    wrapper: Wrapper,
    height,
    circle = false,
    style: customStyle = {},
    className: customClassName,
    containerClassName,
}: SkeletonProps): ReactElement {
    const elements = [];

    const style: CSSProperties = {
        animationDuration: `${duration}s`,
    };

    if (typeof width === "string" || typeof width === "number")
        style.width = width;

    if (typeof height === "string" || typeof height === "number")
        style.height = height;

    if (
        typeof style.width !== "undefined" &&
        typeof style.height !== "undefined" &&
        circle
    ) {
        style.borderRadius = "50%";
    }

    for (let i = 0; i < count; i++) {
        let className = "react-loading-skeleton";
        if (customClassName) className += " " + customClassName;

        elements.push(
            <span
                key={i}
                className={className}
                style={{
                    ...style,
                    ...customStyle,
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
