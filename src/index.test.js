import React from 'react';
import Skeleton from './index';
import { mount } from 'enzyme';

it('should render a skeleton', () => {
    const skeleton = mount(<Skeleton/>);
    const skeletonElements = skeleton.find('.react-loading-skeleton');

    expect(skeletonElements.length).toBe(1);
});

it('should render the required number of skeletons', () => {
    const skeleton = mount(<Skeleton count={4}/>);
    const skeletonElements = skeleton.find('.react-loading-skeleton');

    expect(skeletonElements.length).toBe(4);
});
