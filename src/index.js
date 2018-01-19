import React, { Component } from 'react';
import './index.css';

export { default as SkeletonTheme } from './skeleton-theme';

export default class Skeleton extends Component {
    static defaultProps = {
        count: 1,
        wrapper: null,
        duration: 1.2
    };

    render() {
        const elements = [];
        for (let i = 0; i < this.props.count; i++) {
            elements.push(
                <span key={i} className="react-loading-skeleton" style={{ animation: "progress " + String(this.props.duration) + "s ease-in-out infinite" }}>&zwnj;</span>
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
