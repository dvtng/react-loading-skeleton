import React, { Component } from 'react';
import './index.css';

export { default as SkeletonTheme } from './skeleton-theme';

export default class Skeleton extends Component {
    static defaultProps = {
        count: 1,
        wrapper: null,
        //add width prop (if null show nothing else change width) <skeleton width={50} /> for width:50px
        width: null
    };

    render() {
        const elements = [];
        for (let i = 0; i < this.props.count; i++) {
            elements.push(
                //add statement if width props exist change skeleton's width else print nothing
                <span key={i} className="react-loading-skeleton" style={ this.props.width? {width: this.props.width} : {} }  >&zwnj;</span>
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