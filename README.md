<div style="text-align: center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 style="text-align: center">project_title</h3>

  <p style="text-align: center">
    project_description
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</div>
# react-loading-skeleton

Make beautiful, animated loading skeletons that automatically adapt to your app.

![Gif of skeleton in action](https://media.giphy.com/media/l0Iyk4bAAjac3AU2k/giphy.gif)

## Basic Usage

Install via one of:

```bash
yarn add react-loading-skeleton
npm install react-loading-skeleton
```

```js
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

<Skeleton/> // Simple, single-line loading skeleton
<Skeleton count={5}/> // Five-line loading skeleton
```

## Principles

### Adapts to the styles you have defined

The `Skeleton` component should be used directly in your components in place of
content that is loading. While other libraries require you to meticulously craft
a skeleton screen that matches the font size, line height, and margins of your
content, the `Skeleton` component is automatically sized to the correct
dimensions.

For example:

```tsx
function BlogPost(props) {
    return (
        <div>
            <h1>{props.title || <Skeleton />}</h1>
            {props.body || <Skeleton count={10} />}
        </div>
    )
}
```

...will produce the correctly-sized skeletons for the heading and body sections
without any further configuration.

This ensures the loading state remains up-to-date with any changes
to your layout or typography.

### Don't make dedicated skeleton screens

Instead, make components with _built-in_ skeleton states.

This approach is beneficial because:

1. It keeps styles in sync.
2. Components should represent all possible states — loading included.
3. It allows for more flexible loading patterns. In the blog post example above, it's possible to have the title load before the body, while having both pieces of content show loading skeletons at the right time.

## Theming

Customize individual skeletons with props, or render a `SkeletonTheme` to style all skeletons below it in the React hierarchy:

```tsx
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <p>
            <Skeleton count={3} />
        </p>
    </SkeletonTheme>
)
```

## Props Reference

### Props on `Skeleton` only

<table>
<thead>
  <tr>
    <th>Prop</th>
    <th>Description</th>
    <th>Default</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>circle?: boolean</code></td>
    <td>Makes the skeleton circular by setting <code>border-radius</code> to <code>50%</code>.</td>
    <td><code>false<code></td>
  </tr>
  <tr>
    <td><code>className?: string</code></td>
    <td>A custom class name for the individual skeleton elements which is used alongside the default class, <code>react-loading-skeleton</code>.</td>
    <td></td>
  </tr>
  <tr>
    <td><code>containerClassName?: string</code></td>
    <td>A custom class name for the <code>&lt;span&gt;</code> that wraps the individual skeleton elements.</td>
    <td></td>
  </tr>
  <tr>
    <td><code>containerTestId?: string</code></td>
    <td>A string that is added to the container element as a <code>data-testid</code> attribute. Use it with <code>screen.getByTestId('...')</code> from React Testing Library.</td>
    <td></td>
  </tr>
  <tr>
    <td><code>count?: number</code></td>
    <td>The number of lines of skeletons to render.</td>
    <td>1</td>
  </tr>
  <tr>
    <td><code>style?: React.CSSProperties</code></td>
    <td>This is an escape hatch for advanced use cases and is not the preferred way to style the skeleton. Props (e.g. <code>width</code>, <code>borderRadius</code>) take priority over this style object.</td>
    <td></td>
  </tr>
  <tr>
    <td><code>wrapper?: React.FunctionComponent</code></td>
    <td>A custom wrapper component that goes around the individual skeleton elements.</td>
    <td></td>
  </tr>
</tbody>
</table>                                                                                          |         |

### Props on both `Skeleton` and `SkeletonTheme`

## Count

`count`: Number, defaults to 1

```javascript
<Skeleton count={5} />
```

Number of loading skeleton lines.

## Direction

You can set the animation direction to right-to-left on `<SkeletonTheme>` component by using `direction="rtl"`, e.g:

```javascript
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

return (
    <SkeletonTheme color="#202020" highlightColor="#444" direction="rtl">
        <p>
            <Skeleton />
        </p>
    </SkeletonTheme>
)
```

The default value is `ltr`.

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

`height`: Number | String | null, defaults to null

```javascript
<Skeleton height={100} />
```

Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance
a card. Also needed for the prop `circle` (see below).

## Wrapper

`wrapper`: ReactNode | null, defaults to null

```javascript
const Box = ({ children }) => (
    <a
        style={{
            border: '1px solid #ccc',
            display: 'block',
            fontSize: 16,
            lineHeight: 2,
            padding: 20,
            marginBottom: 10,
            width: 100,
        }}
    >
        {children}
    </a>
)

;<Skeleton wrapper={Box} />
```

Prop for wrap the skeleton in a custom component.

## Circle

`circle`: Boolean, defaults to false

```javascript
<Skeleton circle={true} height={50} width={50} />
```

Prop for making the skeleton look like a circle, for when you are creating a user card with a profile picture for instance.

## Style

`style`: CSSProperties, defaults to {}

```javascript
<Skeleton style={{ borderRadius: 10 }} />
```

Prop for adding custom CSS styles to the skeleton.

## ClassName

`className`: String, defaults to ""

```javascript
<Skeleton className="foobar" />
```

Prop for adding custom CSS classname to the skeleton.

# TODO Document setting width in flex/grid, see PercentWidthInFlex story

## Acknowledgements

Thank you to [Font Awesome](https://fontawesome.com/license/free) for the original SVG used in our logo.
