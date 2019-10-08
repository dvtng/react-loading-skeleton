import React from "react";
import { css, keyframes } from "emotion";

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

export const skeletonClass = css`
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
  circle
}) {
  const elements = [];

  for (let i = 0; i < count; i++) {
    let style = {
      animation:
        `${skeletonKeyframes} ` + String(duration) + "s ease-in-out infinite"
    };

    if (width !== null) {
      style.width = width;
    }

    if (height !== null) {
      style.height = height;
    }

    if (width !== null && height !== null && circle) {
      style.borderRadius = "50%";
    }

    elements.push(
      <span
        key={i}
        className={`${skeletonClass} react-loading-skeleton`}
        style={style}
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
  circle: false
};
