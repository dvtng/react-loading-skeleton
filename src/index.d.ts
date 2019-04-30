import { Component, ReactNode } from "react";

export default class Skeleton extends Component<SkeletonProps> {}

interface SkeletonProps {
  count?: number;
  duration?: number;
  width?: string;
  wrapper?: ReactNode;
  height?: string;
  circle?: boolean;
}

export class SkeletonTheme extends Component<SkeletonThemeProps> {}

interface SkeletonThemeProps {
  color: string;
  highlightColor: string;
}
