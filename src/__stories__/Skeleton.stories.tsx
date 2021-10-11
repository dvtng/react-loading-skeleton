import React, {
    PropsWithChildren,
    useState,
    useEffect,
    useRef,
    ReactElement,
} from 'react'
import ReactDOM from 'react-dom'
import { Meta } from '@storybook/react'
import { SideBySide } from './components'
import { Skeleton } from '../Skeleton'
import './styles/Skeleton.stories.css'
import { Box } from './components/Box'

const InlineWrapper = ({ children }: PropsWithChildren<unknown>) => (
    <span>{children}</span>
)

export default {
    component: Skeleton,
    title: 'Skeleton',
} as Meta

export const Basic: React.VFC = () => <Skeleton count={5} width={400} />

export const WithWrapper: React.VFC = () => (
    <SideBySide>
        <Skeleton count={5} wrapper={Box} />
        <div>
            <Box>A</Box>
            <Box>B</Box>
            <Box>C</Box>
            <Box>D</Box>
        </div>
    </SideBySide>
)

export const WithInlineWrapper: React.VFC = () => (
    <Skeleton count={5} wrapper={InlineWrapper} width={400} />
)

export const DifferentDurations: React.VFC = () => (
    <div>
        <Skeleton duration={1} />
        <Skeleton duration={2} />
        <Skeleton duration={3} />
        <Skeleton duration={4} />
    </div>
)

export const DifferentWidths: React.VFC = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Skeleton />
        <Skeleton width={50} />
        <Skeleton width={100} />
        <Skeleton width={200} />
        <Skeleton width="50em" />
    </div>
)

export const DifferentHeights: React.VFC = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Skeleton />
        <Skeleton height={200} />
        <Skeleton height={400} />
        <Skeleton height={600} />
        <Skeleton height="50em" />
    </div>
)

export const CustomStyles: React.VFC = () => (
    <Skeleton height="100px" style={{ borderRadius: 10, height: 50, width: 50 }} />
)

export const Circle: React.VFC = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Skeleton height={50} width={50} circle />
    </div>
)

export const RightToLeft: React.VFC = () => <Skeleton direction="rtl" />

export const DisableAnimation: React.VFC = () => {
    const [enabled, setEnabled] = useState(true)
    return (
        <div>
            <label htmlFor="checkbox">
                Enable animation:
                <input
                    id="checkbox"
                    type="checkbox"
                    checked={enabled}
                    onChange={() => setEnabled(!enabled)}
                />
            </label>
            <Skeleton count={5} enableAnimation={enabled} highlightColor="#FF3384" />
        </div>
    )
}

export const PercentWidthInFlex: React.VFC = () => (
    <div>
        <p>
            This is a test for{' '}
            <a href="https://github.com/dvtng/react-loading-skeleton/issues/61">#61</a>.
            The skeleton should take up 50% of the width of the turquoise flex container.
        </p>
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'PaleTurquoise',
                width: 400,
                height: 50,
            }}
        >
            <Skeleton containerClassName="w-50" />
        </div>
    </div>
)

export const FillEntireContainer: React.VFC = () => (
    <div>
        <p>
            This is a test for{' '}
            <a href="https://github.com/dvtng/react-loading-skeleton/issues/31">#31</a>.
            The skeleton should fill the entire red container. The container has{' '}
            <code>line-height: 1</code> to make it pixel perfect.
        </p>
        <div
            style={{
                backgroundColor: 'red',
                width: 400,
                height: 100,
                lineHeight: 1,
            }}
        >
            <Skeleton height="100%" borderRadius={0} />
        </div>
    </div>
)

interface HeightComparisonProps {
    title: string
    lineHeight?: number
}

function HeightComparison({
    title,
    lineHeight = 3,
    children,
}: PropsWithChildren<HeightComparisonProps>): ReactElement {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const [height, setHeight] = useState<number>()

    useEffect(() => {
        setHeight(wrapperRef.current?.clientHeight)
    }, [])

    return (
        <div style={{ marginRight: '4rem', maxWidth: 350 }}>
            <h4>{title}</h4>

            <div ref={wrapperRef} style={{ marginBottom: '1rem', lineHeight }}>
                {children}
            </div>

            <div>Expected height: 30</div>
            <div>Actual height: {height}</div>
        </div>
    )
}

export const HeightQuirk: React.VFC = () => (
    <div>
        <p>
            This is a demonstration of a Skeleton quirk that was reported in{' '}
            <a href="https://github.com/dvtng/react-loading-skeleton/issues/23">#23</a>.
        </p>
        <p>
            If you set the Skeleton&apos;s height to 30px, the element containing the
            Skeleton will have a height of 31px, assuming the document&apos;s line-height
            is left at the default value. The height discrepancy increases with
            line-height.
        </p>
        <p>
            This example uses a large line-height to magnify the issue. It compares a
            Skeleton with <code>height: 30px</code> to a normal span tag with{' '}
            <code>height: 30px; display: inline-block; line-height: 1;</code>. The height
            discrepancy occurs in both cases which suggests that this is not a Skeleton
            bug.
        </p>
        <div style={{ display: 'flex', marginBottom: '3rem' }}>
            <HeightComparison title="<Skeleton />">
                <Skeleton height={30} />
            </HeightComparison>
            <HeightComparison title="<span>">
                <span
                    style={{
                        height: '30px',
                        display: 'inline-block',
                        lineHeight: 1,
                        backgroundColor: 'lemonchiffon',
                    }}
                >
                    TEST
                </span>
            </HeightComparison>
        </div>

        <p>There are two ways to make the container exactly 30px tall.</p>
        <h2>Solution 1</h2>
        <p>
            Set the <code>line-height</code> of the container to 1.
        </p>
        <HeightComparison title="<div> with line-height: 1" lineHeight={1}>
            <Skeleton height={30} />
        </HeightComparison>
        <h2>Solution 2</h2>
        <p>
            Provide a <code>containerClassName</code> and apply the styles{' '}
            <code>display: block; line-height: 1;</code> to that class.
        </p>
        <HeightComparison title='<Skeleton containerClassName="..." />'>
            <Skeleton height={30} containerClassName="height-quirk-custom-container" />
        </HeightComparison>
    </div>
)

export const ShadowDOM: React.VFC = () => {
    const hostRef = useRef<HTMLDivElement | null>(null)
    const [portalDestination, setPortalDestination] = useState<HTMLDivElement>()

    useEffect(() => {
        if (!hostRef.current) throw new Error('hostRef.current is null.')

        const shadowRoot = hostRef.current.attachShadow({ mode: 'open' })

        const myPortalDestination = document.createElement('div')
        shadowRoot.append(myPortalDestination)

        setPortalDestination(myPortalDestination)
    }, [])

    // In a real app, you would insert the CSS into the Shadow DOM using one of
    // the strategies outlined here:
    // https://github.com/Wildhoney/ReactShadow#getting-started

    // This CSS does NOT need to be updated, the goal is just to prove that
    // Skeleton is capable of working in a Shadow DOM
    const skeletonCss = `
    @keyframes react-loading-skeleton {
        0% {
            background-position: -200px 0;
        }
        100% {
            background-position: calc(200px + 100%) 0;
        }
    }
    
    .react-loading-skeleton {
        /* If either color is changed, Skeleton.tsx must be updated as well */
        --base-color: #ebebeb;
        --highlight-color: #f5f5f5;
    
        background-color: var(--base-color);
        background-image: linear-gradient(
            90deg,
            var(--base-color),
            var(--highlight-color),
            var(--base-color)
        );
    
        width: 100%;
        background-size: 200px 100%;
        background-repeat: no-repeat;
        border-radius: 0.25rem;
        display: inline-block;
        line-height: 1;
    
        animation-name: react-loading-skeleton;
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }    
    `

    const shadowContent = (
        <>
            <Skeleton />
            <style>{skeletonCss}</style>
        </>
    )

    return (
        <div>
            <p>
                This story verifies that Skeleton works inside a Shadow DOM. An older
                version of Skeleton did not work inside the Shadow DOM according to{' '}
                <a href="https://github.com/dvtng/react-loading-skeleton/issues/69">
                    #69
                </a>
                .
            </p>
            <div ref={hostRef} />
            {portalDestination && ReactDOM.createPortal(shadowContent, portalDestination)}
        </div>
    )
}
