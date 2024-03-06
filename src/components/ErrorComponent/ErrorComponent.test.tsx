import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import ErrorComponent from "./index";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
const States = {
  AppReducer: {
    userColorScheme: "light",
  },
};
const Store = mockStore(States);

describe("ErrorComponent", () => {
  test("renders error message correctly", () => {
    const errorMessage = "Something went wrong";
    const { getByText } = render(
      <Provider store={Store}>
        <ErrorComponent errorMessage={errorMessage} />
      </Provider>
    );
    const messageElement = getByText(errorMessage);
    expect(messageElement).toBeTruthy();
  });

  test("calls onRetry function when retry button is pressed", () => {
    const onRetryMock = jest.fn();
    const { getByText } = render(<ErrorComponent onRetry={onRetryMock} />);
    const retryButton = getByText("Retry");
    fireEvent.press(retryButton);
    expect(onRetryMock).toHaveBeenCalled();
  });
});
