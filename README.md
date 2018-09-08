# react-loading-skeleton

Make beautiful, animated loading skeletons that automatically adapt to your app.

![Gif of skeleton in action](https://media.giphy.com/media/l0Iyk4bAAjac3AU2k/giphy.gif)

## Basic usage

Install by `npm`/`yarn` with `react-loading-skeleton`.

```javascript
import Skeleton from 'react-loading-skeleton';

<Skeleton/> // Simple, single-line loading skeleton
<Skeleton count={5}/> // Five-line loading skeleton
```

## Principles

### Adapts to the styles you have defined

The `<Skeleton>` component is designed to be used directly in your components,
in place of content while it's still loading.
Unlike other libraries, rather than meticulously crafting a skeleton screen to
match the `font-size`, `line-height` or `margin`s your content takes on,
use a `<Skeleton>` component to have it automatically fill the correct dimensions.

For example:

```javascript
class Blogpost extends Component {
  render() {
    return (
      <div style={{ fontSize: 20, lineHeight: 2 }}>
        <h1>{this.props.title || <Skeleton />}</h1>
        {this.props.body || <Skeleton count={10} />}
      </div>
    );
  }
}
```

...will produce the correctly-sized skeletons for the heading and body sections
without any further configuration of the `<Skeleton>` component.

This ensures the loading state remains up-to-date with any changes
to your layout or typography.

### Don't make dedicated skeleton screens

Instead, make components with _built-in_ skeleton states.

In addition to keeping the styling in-sync, here are some other reasons to do this:

1.  Components represent all possible states it can be in - loading included.
1.  It allows for more flexible loading patterns - in the `Blogpost` example, it's possible to have the `title` load first, and then the `body`, while having both pieces of content show loading skeletons at the right time.

## Theming

Using a `<SkeletonTheme>` component, you can easily change the colors of all
skeleton components below it in the React hierarchy:

```javascript
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

<SkeletonTheme color="#202020" highlightColor="#444">
  <p>
    <Skeleton count={3} />
  </p>
</SkeletonTheme>;
```

## Duration

```javascript
<Skeleton duration={2} />
```

`duration`: Number, defaults to 1.2

Duration is how long it takes do one cycle of the skeleton animation.

## Width

`width`: Number | String | null, defaults to null

```javascript
<Skeleton width={100} />
```

Width of the skeleton. Useful when the skeleton is inside an inline element with
no width of its own.

## Height

`Height`: Number | String | null, defaults to null

```javascript
<Skeleton height={100} />
```

Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance
a card. Also needed for the prop `circle` (see below).

## Circle

`Circle`: Boolean | false, defaults to false

```javascript
<Skeleton circle={true} height={50} width={50} />
```

Prop for making the skeleton look like a circle, for when you are creating a user card with a profile picture for instance.
