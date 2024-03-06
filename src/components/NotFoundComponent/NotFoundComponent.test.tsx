import React from "react";
import { render } from "@testing-library/react-native";
import NotFoundComponent from "./index";

const testID = "errorcomponent";
const title = "Page Not Found";

describe("NotFoundComponent", () => {
  test("renders component with correct title", () => {
    const { getByTestId } = render(<NotFoundComponent title={title} />);
    const component = getByTestId(`${testID}-container-view`);
    const titleElement = getByTestId(`${testID}-title-text`);
    expect(component).toBeTruthy();
    expect(titleElement.props.children).toBe(title);
  });
});
