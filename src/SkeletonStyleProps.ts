export interface SkeletonStyleProps {
  baseColor?: string;
  highlightColor?: string;

  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  inline?: boolean;

  duration?: number;
  direction?: 'ltr' | 'rtl';
  enableAnimation?: boolean;
}
