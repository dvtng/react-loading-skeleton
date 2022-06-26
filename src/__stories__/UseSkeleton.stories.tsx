import React, { useState, useCallback } from 'react'
import { Meta } from '@storybook/react'
import { SideBySide } from './components'
import './styles/Skeleton.stories.css'
import { useSkeleton } from '../useSkeleton'

export default {
    title: 'useSkeleton',
} as Meta

const FourthDiv = () => <>Fourth Div</>

export const UseSkeletonHook: React.FC = () => {
    const [loading, setLoading] = useState(true)
    const toggleLoading = useCallback(() => setLoading((prev) => !prev), [])
    const { withSkeleton } = useSkeleton(loading)
    return (
        <SideBySide>
            <button type="button" onClick={toggleLoading}>
                Toggle Loading State
            </button>
            <div>
                <div style={{ width: 100 }}>{withSkeleton('First Div')}</div>
                <div style={{ width: 150 }}>{withSkeleton('Second Div')}</div>
                <div style={{ width: 75 }}>{withSkeleton(<div>Third Div</div>)}</div>
                <div style={{ width: 150 }}>{withSkeleton(<FourthDiv />)}</div>
            </div>
        </SideBySide>
    )
}

export const UseSkeletonHookProps: React.FC = () => {
    const [loading, setLoading] = useState(true)
    const toggleLoading = useCallback(() => setLoading((prev) => !prev), [])
    // Sets SkeletonProps: `circle` for all instances of `withSkeleton`
    const { withSkeleton } = useSkeleton(loading, {circle: true, width: '1em'})
    return (
        <SideBySide>
            <button type="button" onClick={toggleLoading}>
                Toggle Loading State
            </button>
            <div>
                <div>{withSkeleton('1em')}</div>
                <div>{withSkeleton('1em')}</div>
                {/* Override width this time only */}
                <div>{withSkeleton('4em', {width: '4em'})}</div>
                <div>{withSkeleton('1em')}</div>
            </div>
        </SideBySide>
    )
}
