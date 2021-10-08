import React, { PropsWithChildren, ReactElement } from 'react'

const style = {
    alignItems: 'flex-start',
    display: 'flex',
    justifyContent: 'center',
}

const arrowStyle = {
    alignSelf: 'center',
    fontSize: 20,
    padding: '0 20px',
}

export function SideBySide({ children }: PropsWithChildren<unknown>) {
    const childrenWithArrows: ReactElement[] = []
    React.Children.forEach(children, (child, index) => {
        if (index > 0) {
            childrenWithArrows.push(
                <div key={index} style={arrowStyle}>
                    →
                </div>
            )
        }
        childrenWithArrows.push(child as ReactElement)
    })
    return <div style={style}>{childrenWithArrows}</div>
}
