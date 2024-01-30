import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Accessories from "./Accessories.jsx";
import { BrowserRouter } from "react-router-dom";

describe("Accessories Component", () => {
  it("Renders", async () => {
    render(
      <BrowserRouter>
        <Accessories />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getByText("Socket Wrench")).toBeInTheDocument();
    });
  });
});
