import React from "react";
import { mount } from "enzyme";
import Skeleton from "./index";

const skeletonSelector = "span.react-loading-skeleton";

it("should render a skeleton", () => {
  const skeleton = mount(<Skeleton />);
  const skeletonElements = skeleton.find(skeletonSelector);

  expect(skeletonElements.length).toBe(1);
});

it("should render the required number of skeletons", () => {
  const skeleton = mount(<Skeleton count={4} />);
  const skeletonElements = skeleton.find(skeletonSelector);

  expect(skeletonElements.length).toBe(4);
});
