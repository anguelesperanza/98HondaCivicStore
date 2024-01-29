import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Gallery from "./Gallery";
// import NavigationItem from "./NavigationItem";

// import { BrowserRouter } from "react-router-dom";
// import Product from "./Product";

describe("Gallery Component", () => {
  it("Renders", () => {
    render(
      <Gallery
        images={[
          {
            index: 0,
            imageURL:"Goodbye",
          },
        ]}
      />
    );
    let element = screen.getByText(/Goodbye/i);
    expect(element).toBeInTheDocument();
  });
});
