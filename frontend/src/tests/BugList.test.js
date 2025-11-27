import { render, screen, waitFor } from "@testing-library/react";
import BugList from "../components/BugList";
import axios from "axios";

jest.mock("axios");

describe("BugList Component", () => {
  test("renders no bugs message", async () => {
    axios.get.mockResolvedValueOnce({ data: [] });
    render(<BugList />);
    expect(await screen.findByText(/no bugs found/i)).toBeInTheDocument();
  });

  test("renders bug list successfully", async () => {
    axios.get.mockResolvedValueOnce({
      data: [
        { _id: "1", title: "Login bug", status: "open" },
        { _id: "2", title: "Signup issue", status: "in-progress" },
      ],
    });
    render(<BugList />);
    expect(await screen.findByText(/login bug/i)).toBeInTheDocument();
    expect(await screen.findByText(/signup issue/i)).toBeInTheDocument();
  });

  test("shows error message when API fails", async () => {
    axios.get.mockRejectedValueOnce(new Error("Network error"));
    render(<BugList />);
    expect(await screen.findByText(/failed to load bugs/i)).toBeInTheDocument();
  });
});
