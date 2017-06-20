# react-loading-skeleton

Make beautiful, animated skeleton screens that automatically adapt to your app.

![Gif of skeleton in action](https://media.giphy.com/media/l0Iyk4bAAjac3AU2k/giphy.gif)

## Basic usage

Install by `npm`/`yarn` with `react-loading-skeleton`.

```javascript
import Skeleton from 'react-loading-skeleton';

<Skeleton/> // Simple, single-line loading skeleton
<Skeleton count={5}/> // Five-line loading skeleton
```

## Adapts to the styles you have defined

The `<Skeleton>` component is designed to be used directly in your components,
in place of content while it's still loading.
Rather than meticulously crafting a skeleton screen to match the particular
`font-size`, `line-height` or `margin`s your content takes on,
use a `<Skeleton>` component in every piece of empty content to have it
automatically fill the correct dimensions.

For example:

```javascript
class Blogpost extends Component {
    render() {
        return (
            <div style={{fontSize: 20, lineHeight: 2}}>
                <h1>{this.props.blog.title || <Skeleton/>}</h1>
                {this.props.blog.body || <Skeleton count={10}/>}
            </div>
        );
    }
}
```