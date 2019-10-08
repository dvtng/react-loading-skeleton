import React, { Component } from "react";
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

export default class Skeleton extends Component {
  static defaultProps = {
    count: 1,
    duration: 1.2,
    width: null,
    wrapper: null,
    height: null,
    circle: false
  };

  render() {
    const elements = [];
    for (let i = 0; i < this.props.count; i++) {
      let style = {
        animation:
          `${skeletonKeyframes} ` +
          String(this.props.duration) +
          "s ease-in-out infinite"
      };
      if (this.props.width != null) {
        style.width = this.props.width;
      }
      if (this.props.height != null) {
        style.height = this.props.height;
      }
      if (
        this.props.width !== null &&
        this.props.height !== null &&
        this.props.circle
      ) {
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

    const Wrapper = this.props.wrapper;
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
}
