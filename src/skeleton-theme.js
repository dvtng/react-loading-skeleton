import React, { Component } from "react";
import { css } from "emotion";
import { defaultBaseColor, defaultHighlightColor } from "./skeleton";

export default class SkeletonTheme extends Component {
  static defaultProps = {
    color: defaultBaseColor,
    highlightColor: defaultHighlightColor
  };

  constructor(props) {
    super(props);

    this.themeClass = css`
      .react-loading-skeleton {
        background-color: ${props.color};
        background-image: linear-gradient(
          90deg,
          ${props.color},
          ${props.highlightColor},
          ${props.color}
        );
      }
    `;
  }

  render() {
    return <div className={this.themeClass}>{this.props.children}</div>;
  }
}
