import React from 'react'
import type { ReactNode } from 'react'
import type { SkeletonProps } from './Skeleton'
import { Skeleton } from './Skeleton'

const emptyProps: SkeletonProps = {}

/**
 * Returns `withSkeleton` which conditionally returns a loading skeleton in place of contents
 */
export const useSkeleton = (loading: boolean, defaultProps = emptyProps) =>
    React.useMemo(
        () => ({
            withSkeleton: <T extends ReactNode>(arg: T, props = emptyProps) =>
                // eslint-disable-next-line react/jsx-props-no-spreading
                loading ? <Skeleton {...defaultProps} {...props} /> : arg,
        }),
        [defaultProps, loading]
    )
