import React from "react";
import { mount } from "enzyme";
import Skeleton from "./index";
import { skeletonClass } from "./skeleton";

const skeletonSelector = "." + String(skeletonClass);

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
