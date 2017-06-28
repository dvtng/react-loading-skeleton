import React, { Component } from 'react';
import './index.css';

export { default as SkeletonTheme } from './skeleton-theme';

export default class Skeleton extends Component {
    static defaultProps = {
        count: 1,
        wrapper: null
    };

    render() {
        const elements = [];
        for (let i = 0; i < this.props.count; i++) {
            elements.push(
                <span key={i} className="react-loading-skeleton">&zwnj;</span>
            );
        }

        const Wrapper = this.props.wrapper;
        return (
            <span>
                {Wrapper
                    ? elements.map((element, i) =>
                        <Wrapper key={i}>{element}</Wrapper>
                    )
                    : elements
                }
            </span>
        );
    }
}