import React, { Component } from 'react';
import './index.css';

export { default as SkeletonTheme } from './skeleton-theme';

export default class Skeleton extends Component {
    static defaultProps = {
        count: 1,
        duration: 1.2,
        width: null,
        wrapper: null
    };

    render() {
        const elements = [];
        for (let i = 0; i < this.props.count; i++) {
            let style = {
                animation: "progress " + String(this.props.duration) + "s ease-in-out infinite"
            };
            if (this.props.width != null) {
                style.width = this.props.width;
            }
            elements.push(
                <span key={i} className="react-loading-skeleton" style={style}>&zwnj;</span>
            );
        }

        const Wrapper = this.props.wrapper;
        return (
            <span>
                {Wrapper
                    ? elements.map((element, i) =>
                        <Wrapper key={i}>{element}&zwnj;</Wrapper>
                    )
                    : elements
                }
            </span>
        );
    }
}
