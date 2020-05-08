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

it("should render a skeleton with styles", () => {
  const style = { boarderRadius: 10, height: 50, width: 50 };
  const skeleton = mount(<Skeleton style={style} />);
  expect(skeleton.find(skeletonSelector).prop("style")).toEqual(style);
});

it("inline style prop should overwrite custom styles", () => {
  const style = { boarderRadius: 10, height: 50, width: 50 };
  const skeleton = mount(<Skeleton height={100} style={style} />);
  expect(skeleton.find(skeletonSelector).prop("style")).toEqual({
    ...style,
    height: 100,
  });
});
