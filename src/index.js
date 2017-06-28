import React, { Component } from 'react';
import './index.css';

export { default as SkeletonTheme } from './skeleton-theme';

export default class Skeleton extends Component {
    static defaultProps = {
        count: 1,
    };

    render() {
        const elements = [];
        for (let i = 0; i < this.props.count; i++) {
            elements.push(<span key={i}>&zwnj;</span>);
        }

        return (
            <span className="react-loading-skeleton">
                {elements}
            </span>
        );
    }
}