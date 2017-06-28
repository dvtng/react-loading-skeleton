import React, { Component } from 'react';

let counter = 0;

const css = (id, color = '#eee', highlight = '#f5f5f5') =>
`.react-loading-theme-${id} .react-loading-skeleton > span {
    background-color: ${color};
    background-image: linear-gradient(90deg, ${color}, ${highlight}, ${color});
}`;

const createStyleElement = (css) => {
    const element = document.createElement('style');
    element.textContent = css;
    document.head.appendChild(element);
    return element;
};

export default class SkeletonTheme extends Component {
    constructor(props) {
        super(props);

        this.id = counter++;
    }

    componentWillMount() {
        this.style = createStyleElement(css(
            this.id, this.props.color, this.props.highlightColor
        ));
    }

    componentWillUnmount() {
        this.style.remove();
    }
    
    render() {
        return (
            <div className={`react-loading-theme-${this.id}`}>
                {this.props.children}
            </div>
        );
    }
}