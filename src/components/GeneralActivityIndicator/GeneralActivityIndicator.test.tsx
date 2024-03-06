import React from "react";
import { render } from "@testing-library/react-native";
import GeneralActivityIndicator from "./index";

const testID = "generalactivityindicator";
describe("GeneralActivityIndicator", () => {
  test("renders activity indicator with correct color", () => {
    const { getByTestId } = render(<GeneralActivityIndicator />);
    const activityIndicator = getByTestId(
      `${testID}-container-activityindicator`
    );
    expect(activityIndicator.props.color).toBe("#f27a1a");
  });

  test("renders activity indicator with correct size", () => {
    const { getByTestId } = render(<GeneralActivityIndicator />);
    const activityIndicator = getByTestId(
      `${testID}-container-activityindicator`
    );
    expect(activityIndicator.props.size).toBe("large");
  });

  test("renders activity indicator text correctly", () => {
    const text = "Loading...";
    const { getByText } = render(<GeneralActivityIndicator text={text} />);
    const textElement = getByText(text);
    expect(textElement).toBeTruthy();
  });

  test("renders default activity indicator text when no text prop is provided", () => {
    const { getByText } = render(<GeneralActivityIndicator />);
    const defaultText = "Loading...";
    const textElement = getByText(defaultText);
    expect(textElement).toBeTruthy();
  });
});
