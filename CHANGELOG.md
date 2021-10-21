## 3.0.1

### Bug Fixes

-   Fix circle skeleton animation being broken in Safari (#120)
-   Fix `SkeletonProps` not being exported from the main entry point (#118)
-   Fix `enableAnimation` prop having no effect. This was a regression.

## 3.0.0

### Migration Guide

1. Add the new required CSS import:

    ```js
    import 'react-loading-skeleton/dist/skeleton.css'
    ```

2. Read the full list of breaking changes to see if any affect you.

### Breaking Changes

-   Drop Emotion dependency, add CSS file that must be imported
    -   Dropping Emotion avoids conflicts when multiple Emotion versions are used
        on one page and reduces bundle size
-   Reimplement `SkeletonTheme` using React context
    -   The old `SkeletonTheme` rendered a `<div>` which was undesirable in many
        cases. The new `SkeletonTheme` does not render any DOM elements.
    -   The old `SkeletonTheme` did not work if the `Skeleton` was rendered in a
        portal. The new `SkeletonTheme` does work in this case.
-   `SkeletonTheme`: rename the `color` prop to `baseColor`
-   Convert to TypeScript
-   Publish code as ES2018 to reduce bundle size
-   Require React >= 16.8.0
-   Drop Internet Explorer support

If you need to support Internet Explorer or use an old version of React, please
continue to use `react-loading-skeleton` v2.

### Features

-   Add many new style-related props to `SkeletonTheme`
-   Publish an ES module in addition to a CommonJS module
-   Add `direction` prop to support right-to-left animation
-   Add `enableAnimation` prop to allow disabling the animation
-   Add `containerClassName` prop to allow customizing the container element
-   Add `containerTestId` to make testing easier
-   Add `aria-live` and `aria-busy` attributes to the skeleton container to
    improve screen reader support

### Other Changes

-   Optimize animation performance:
    -   The old animation animated the `background-position` property which made
        the browser repaint the gradient on every frame.
    -   The new animation animates the `transform` of a pseudoelement. This
        avoids repaints and results in an observable decrease in CPU usage.
-   No longer require `width` and `height` to be set for the `circle` prop to
    work
-   Change the default `duration` from 1.2 s to 1.5 s
-   Make the default `Skeleton` base color a _tiny_ bit darker so that the
    animation is more visible

### Bug Fixes

-   Several common issues are now resolved as a result of removing Emotion
-   Fix multi-line skeletons not working with the `width` prop
-   Fix the type of the `wrapper` prop in the type definitions

### Thanks!

-   @srmagura
-   @aboodz
-   @RoseMagura
-   @saadaouad
-   @rlaunch
