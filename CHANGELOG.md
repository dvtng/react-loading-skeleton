## 3.0.0

### Breaking Changes

-   Drop Emotion dependency, add CSS file that must be imported
    -   Add `import 'react-loading-skeleton/dist/skeleton.css'` to your code
    -   Dropping Emotion avoids conflicts when multiple Emotion versions are used
        on one page and reduces bundle size
-   Reimplement `SkeletonTheme` using React context
    -   The old `SkeletonTheme` rendered a `<div>` which was undesirable in many
        cases. The new `SkeletonTheme` does not render any DOM elements.
    -   The old `SkeletonTheme` did not work if the `Skeleton` was rendered in a
        portal. The new `SkeletonTheme` does work in this case.
-   `SkeletonTheme`: rename the `color` prop to `baseColor`
-   Convert to TypeScript
-   Publish code as ES2015
-   Require React >= 16.8.0
-   Drop Internet Explorer support

If you need to support Internet Explorer or use an old version of React, please
continue to use `react-loading-skeleton` v2.

### Features

-   Add many new style-related props to `SkeletonTheme`
-   Publish an ES module in addition to a CommonJS module
-   Add `direction` prop to support right-to-left animation
-   Add `animationEnabled` prop to allow disabling the animation
-   Add `containerClassName` prop to allow customizing the container element
-   Add `containerTestId` to make testing easier
-   Change the default `duration` from 1.2 s to 1.5 s
-   Make the default `Skeleton` base color a _tiny_ bit darker so that the
    animation is more visible
-   Add `aria-live` and `aria-busy` attributes to the skeleton container to
    improve screen reader support

### Bug Fixes

-   Fix the type of the `wrapper` prop in the type definitions

### Thanks!

-   @srmagura
-   @RoseMagura
-   @saadaouad
-   @rlaunch
