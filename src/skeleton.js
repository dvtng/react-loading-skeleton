/** @jsx jsx */
import React from "react";
import { css, keyframes, jsx } from "@emotion/react";

export const defaultBaseColor = "#eee";

export const defaultHighlightColor = "#f5f5f5";

export const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const skeletonStyles = css`
  background-color: ${defaultBaseColor};
  background-image: linear-gradient(
    90deg,
    ${defaultBaseColor},
    ${defaultHighlightColor},
    ${defaultBaseColor}
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  display: inline-block;
  line-height: 1;
  width: 100%;
`;

export default function Skeleton({
  count,
  duration,
  width,
  wrapper: Wrapper,
  height,
  circle,
  style: customStyle,
  className: customClassName,
}) {
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
    <span>
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

Skeleton.defaultProps = {
  count: 1,
  duration: 1.2,
  width: null,
  wrapper: null,
  height: null,
  circle: false,
};
