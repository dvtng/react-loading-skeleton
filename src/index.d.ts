import { Component, ReactNode } from "react";

export default class Skeleton extends Component<Props> {}

interface Props {
  count?: number;
  duration?: number;
  width?: string;
  wrapper?: ReactNode;
  height?: string;
  circle?: boolean;
}
