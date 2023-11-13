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
test("percentage", () => {
  render(<App />);
  // 5% should be 0.05 displayed
  const button5 = screen.getByText("5");
  fireEvent.click(button5);
  const buttonPercentage = screen.getByText("%");
  fireEvent.click(buttonPercentage);
  const buttonEqual = screen.getByText("=");
  fireEvent.click(buttonEqual);
  const display = screen.getByTestId("display");
  expect(display.textContent).toBe("0.05");
}
);
test("sqrt", () => {
  render(<App />);
  // sqrt(4) should be 2 displayed
  const button4 = screen.getByText("4");
  fireEvent.click(button4);
  const buttonSqrt = screen.getByText("sqrt");
  fireEvent.click(buttonSqrt);
  const buttonEqual = screen.getByText("=");
  fireEvent.click(buttonEqual);
  const display = screen.getByTestId("display");
  expect(display.textContent).toBe("2");
}
);
test("x^2", () => {
  render(<App />);
  // 2^2 should be 4 displayed
  const button2 = screen.getByTestId("number2");
  fireEvent.click(button2);
  const buttonSquare = screen.getByTestId("x^2");
  fireEvent.click(buttonSquare);
  const buttonEqual = screen.getByText("=");
  fireEvent.click(buttonEqual);
  const display = screen.getByTestId("display");
  expect(display.textContent).toBe("4");
}
);
test("clear", () => {
  render(<App />);
  // 2^2 should be 4 displayed
  const button2 = screen.getByTestId("number2");
  fireEvent.click(button2);
  const buttonSquare = screen.getByTestId("x^2");
  fireEvent.click(buttonSquare);
  const buttonEqual = screen.getByText("=");
  fireEvent.click(buttonEqual);
  const display = screen.getByTestId("display");
  expect(display.textContent).toBe("4");
  const buttonClear = screen.getByText("Clear");
  fireEvent.click(buttonClear);
  expect(display.textContent).toBe("");
}
);
test("clear entry", () => {
  render(<App />);
  // 2^2 should be 4 displayed
  const button2 = screen.getByTestId("number2");
  fireEvent.click(button2);
  const buttonSquare = screen.getByTestId("x^2");
  fireEvent.click(buttonSquare);
  const buttonEqual = screen.getByText("=");
  fireEvent.click(buttonEqual);
  const display = screen.getByTestId("display");
  expect(display.textContent).toBe("4");
  const buttonClear = screen.getByText("CE");
  fireEvent.click(buttonClear);
  expect(display.textContent).toBe("");
}
);
test("negative number", () => {
  render(<App />);
  // -2 should be -2 displayed
  const button2 = screen.getByTestId("number2");
  fireEvent.click(button2);
  const buttonNegative = screen.getByText("+/-");
  fireEvent.click(buttonNegative);
  const display = screen.getByTestId("display");
  expect(display.textContent).toBe("-2");
}
);
// test sqrt of negative number
test("sqrt of negative number", () => {
  render(<App />);
  // sqrt(-2) should be NaN displayed
  const button2 = screen.getByTestId("number2");
  fireEvent.click(button2);
  const buttonNegative = screen.getByText("+/-");
  fireEvent.click(buttonNegative);
  const buttonSqrt = screen.getByText("sqrt");
  fireEvent.click(buttonSqrt);
  const buttonEqual = screen.getByText("=");
  fireEvent.click(buttonEqual);
  const display = screen.getByTestId("display");
  expect(display.textContent).toBe("NaN");
}
);
// test 1/x of negative number
test("1/x of negative number", () => {
  render(<App />);
  // 1/-2 should be -0.5 displayed
  const button2 = screen.getByTestId("number2");
  fireEvent.click(button2);
  const buttonNegative = screen.getByText("+/-");
  fireEvent.click(buttonNegative);
  const button1Divide = screen.getByText("1/x");
  fireEvent.click(button1Divide);
  const buttonEqual = screen.getByText("=");
  fireEvent.click(buttonEqual);
  const display = screen.getByTestId("display");
  expect(display.textContent).toBe("-0.5");
}
);