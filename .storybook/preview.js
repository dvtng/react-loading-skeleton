import './storybook.css'
import '../src/skeleton.css'

export const parameters = {
    options: {
        storySort: {
            order: ['Skeleton', 'UseSkeleton', 'SkeletonTheme', 'Post'],
        },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
