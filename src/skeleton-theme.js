import React, { Component } from "react";
import { css } from "emotion";
import { defaultBaseColor, defaultHighlightColor } from "./skeleton";

export default class SkeletonTheme extends Component {
  static defaultProps = {
    color: defaultBaseColor,
    highlightColor: defaultHighlightColor,
    height: null
  };

  render() {
    const { color, highlightColor, children, height } = this.props;
    const themeClass = css`
      .react-loading-skeleton {
        background-color: ${color};
        background-image: linear-gradient(
          90deg,
          ${color},
          ${highlightColor},
          ${color}
        );
        ${height ? `height: ${height}px;` : ''}
      }
    `;
    return <div className={themeClass}>{children}</div>;
  }
}
