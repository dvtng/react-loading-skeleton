import React, { Component, Fragment } from "react";
import { css, Global } from "@emotion/core";
import { defaultBaseColor, defaultHighlightColor } from "./skeleton";

export default class SkeletonTheme extends Component {
  static defaultProps = {
    color: defaultBaseColor,
    highlightColor: defaultHighlightColor
  };

  render() {
    const { color, highlightColor, children } = this.props;
    const themeStyles = css`
      span.react-loading-skeleton {
        background-color: ${color};
        background-image: linear-gradient(
          90deg,
          ${color},
          ${highlightColor},
          ${color}
        );
      }
    `;
    return (
      <Fragment>
        <Global styles={themeStyles} />
        {children}
      </Fragment>
    );
  }
}
