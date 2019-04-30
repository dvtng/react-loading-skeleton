import { Component, ReactNode } from "react";

export default class Skeleton extends Component<Props> {}

interface Props {
  count?: number;
  duration?: number;
  width?: number;
  wrapper?: ReactNode;
  height?: number;
  circle?: boolean;
}
