import React, { Component } from "react";
import { css } from "emotion";
import { defaultBaseColor, defaultHighlightColor } from "./skeleton";

export default class SkeletonTheme extends Component {
  static defaultProps = {
    color: defaultBaseColor,
    highlightColor: defaultHighlightColor
  };

  render() {
    const { color, highlightColor, children } = this.props;
    const themeClass = css`
      .react-loading-skeleton {
        background-color: ${color};
        background-image: linear-gradient(
          90deg,
          ${color},
          ${highlightColor},
          ${color}
        );
      }
    `;
    return <div className={themeClass}>{children}</div>;
  }
}
