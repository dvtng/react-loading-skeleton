// import React, { Component } from "react";
// import { css } from "@emotion/react";
// import { defaultBaseColor, defaultHighlightColor } from "./skeleton";

// export default class SkeletonTheme extends Component {
//   static defaultProps = {
//     color: defaultBaseColor,
//     highlightColor: defaultHighlightColor,
//     direction: "ltr",
//   };

//   render() {
//     const { color, highlightColor, direction, children } = this.props;
//     const animationDirection = direction === "rtl" ? "reverse" : "normal";
//     const themeStyles = css`
//       .react-loading-skeleton {
//         background-color: ${color};
//         background-image: linear-gradient(
//           90deg,
//           ${color},
//           ${highlightColor},
//           ${color}
//         );
//         animation-direction: ${animationDirection};
//       }
//     `;

//     return <div css={themeStyles}>{children}</div>;
//   }
// }
