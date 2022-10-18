/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import PeepRender from "../peepRender";

test("renders learn react link", () => {
  render(<PeepRender />);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});
