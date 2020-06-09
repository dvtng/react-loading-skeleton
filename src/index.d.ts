import { Component, ReactNode, CSSProperties } from "react";

export default class Skeleton extends Component<SkeletonProps> {}

interface SkeletonProps {
  count?: number;
  duration?: number;
  width?: string | number;
  wrapper?: ReactNode;
  height?: string | number;
  circle?: boolean;
  style?: CSSProperties;
  className?: string;
}

export class SkeletonTheme extends Component<SkeletonThemeProps> {}

interface SkeletonThemeProps {
  color?: string;
  highlightColor?: string;
}
