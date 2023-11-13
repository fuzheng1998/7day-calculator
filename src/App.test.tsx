import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("test symbol use", () => {
  test("too much decimal click", () => {
    render(<App />);
    // Mock window.alert
    window.alert = jest.fn();
    // get by test id and click
    const button = screen.getByTestId("decimal");
    fireEvent.click(button);
    fireEvent.click(button);
    // expect alert to be called
    expect(window.alert).toBeCalledWith(
      "Decimal can only be used once per number"
    );
  });
  test("consecutive operator add", () => {
    render(<App />);
    // Mock window.alert
    window.alert = jest.fn();
    // get by test id and click
    const button = screen.getByTestId("add");
    fireEvent.click(button);
    fireEvent.click(button);
    // expect alert to be called
    expect(window.alert).toBeCalledWith(
      "Operator cannot be used as first input and cannot be used consecutively"
    );
  });
  test("consecutive operator minus", () => {
    render(<App />);
    // Mock window.alert
    window.alert = jest.fn();
    // get by test id and click
    const button = screen.getByTestId("minus");
    fireEvent.click(button);
    fireEvent.click(button);
    // expect alert to be called
    expect(window.alert).toBeCalledWith(
      "Operator cannot be used as first input and cannot be used consecutively"
    );
  });
  test("consecutive operator multiply", () => {
    render(<App />);
    // Mock window.alert
    window.alert = jest.fn();
    // get by test id and click
    const button = screen.getByTestId("multiply");
    fireEvent.click(button);
    fireEvent.click(button);
    // expect alert to be called
    expect(window.alert).toBeCalledWith(
      "Operator cannot be used as first input and cannot be used consecutively"
    );
  });
  test("consecutive operator divide", () => {
    render(<App />);
    // Mock window.alert
    window.alert = jest.fn();
    // get by test id and click
    const button = screen.getByTestId("divide");
    fireEvent.click(button);
    fireEvent.click(button);
    // expect alert to be called
    expect(window.alert).toBeCalledWith(
      "Operator cannot be used as first input and cannot be used consecutively"
    );
  });
});
describe("test divide by zero", () => {
  test("divide by zero", () => {
    render(<App />);
    // 5/0 should be infinity displayed
    const button5 = screen.getByText("5");
    fireEvent.click(button5);
    const buttonDivide = screen.getByTestId("divide");
    fireEvent.click(buttonDivide);
    const button0 = screen.getByTestId("number0");
    fireEvent.click(button0);
    const buttonEqual = screen.getByText("=");
    fireEvent.click(buttonEqual);
    const display = screen.getByTestId("display");
    expect(display.textContent).toBe("Infinity");
  });
  test("zero divide by zero", () => {
    render(<App />);
    // 0/0 should be NaN displayed
    const button0 = screen.getByTestId("number0");
    fireEvent.click(button0);
    const buttonDivide = screen.getByTestId("divide");
    fireEvent.click(buttonDivide);
    fireEvent.click(button0);
    const buttonEqual = screen.getByText("=");
    fireEvent.click(buttonEqual);
    const display = screen.getByTestId("display");
    expect(display.textContent).toBe("NaN");
  });
  test("1/x of zero should be infinity", () => {
    render(<App />);
    // 1/0 should be infinity displayed
    const button0 = screen.getByTestId("number0");
    fireEvent.click(button0);
    const button1Divide = screen.getByText("1/x");
    fireEvent.click(button1Divide);
    const buttonEqual = screen.getByText("=");
    fireEvent.click(buttonEqual);
    const display = screen.getByTestId("display");
    expect(display.textContent).toBe("Infinity");
  }
  );
});
