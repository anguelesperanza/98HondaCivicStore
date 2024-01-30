import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Footer from "./Footer";

describe("footer Component", () => {
  it("Renders", () => {
    render(<Footer title={"Copyright Copyright 2024"} />);
    let element = screen.getByText(/2024/i);
    expect(element).toBeInTheDocument();
  });
});
