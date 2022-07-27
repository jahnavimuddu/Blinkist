import { render, screen } from "@testing-library/react";
import ProgressBarComponent from ".";

test("should render progressbar", () => {
  render(<ProgressBarComponent value={60} />);
  const progressBarElement = screen.getByRole("progressbar");
  expect(progressBarElement).toBeInTheDocument();
});

test("should render progressbar with value", () => {
  render(<ProgressBarComponent value={60} />);
  const progressBarElement = screen.getByRole("progressbar");
  expect(progressBarElement.getAttribute("aria-valuenow")).toBe("60");
});

test("should render 0 for value undefined", () => {
  render(<ProgressBarComponent />);
  const progressBarElement = screen.getByRole("progressbar");
  expect(progressBarElement.getAttribute("aria-valuenow")).toBe("0");
});
