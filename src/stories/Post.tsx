import React from 'react'
import Skeleton from '..'

export interface PostProps {
    title?: string
    children?: string
    size?: string
}

export default function Post({ title, children, size = 'small' }: PostProps) {
    const getStyle = () => {
        const baseStyle = {
            padding: 8,
            width: '20em',
        }
        return Object.assign(baseStyle, {
            fontSize: size === 'small' ? 16 : 25,
            lineHeight: size === 'small' ? 'normal' : 2,
        })
    }

    return (
        <div style={getStyle()}>
            <h1>{title || <Skeleton />}</h1>
            <p>{children || <Skeleton count={5} />}</p>
        </div>
    )
}
