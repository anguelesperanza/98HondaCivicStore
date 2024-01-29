import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Product from "./Product";
// import NavigationItem from "./NavigationItem";

// import { BrowserRouter } from "react-router-dom";
// import Product from "./Product";

describe("NavigationItem Component", () => {
  it("Renders", () => {
    render(
      <Product products={[{"index": 0, "productName":"Honda"}]} />
    );
    let element = screen.getByText(/Honda/i);
    expect(element).toBeInTheDocument();
  });
});
