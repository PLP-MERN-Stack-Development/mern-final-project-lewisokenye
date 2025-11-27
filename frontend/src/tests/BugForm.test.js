import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BugForm from "../components/BugForm";
import axios from "axios";

jest.mock("axios");

describe("BugForm Component", () => {
  test("shows error when title is missing", async () => {
    render(<BugForm onBugAdded={() => {}} />);
    fireEvent.click(screen.getByText(/submit/i));
    expect(screen.getByText(/title is required/i)).toBeInTheDocument();
  });

  test("submits valid data successfully", async () => {
    axios.post.mockResolvedValue({
      data: { title: "UI bug", description: "Button misaligned" },
    });

    const mockAdded = jest.fn();
    render(<BugForm onBugAdded={mockAdded} />);

    fireEvent.change(screen.getByPlaceholderText(/title/i), {
      target: { value: "UI bug" },
    });
    fireEvent.change(screen.getByPlaceholderText(/description/i), {
      target: { value: "Button misaligned" },
    });

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => expect(mockAdded).toHaveBeenCalled());
    expect(axios.post).toHaveBeenCalledWith("/bugs", {
      title: "UI bug",
      description: "Button misaligned",
    });
  });

  test("shows error if API request fails", async () => {
    axios.post.mockRejectedValueOnce(new Error("Network error"));
    render(<BugForm onBugAdded={() => {}} />);

    fireEvent.change(screen.getByPlaceholderText(/title/i), {
      target: { value: "Crash" },
    });
    fireEvent.change(screen.getByPlaceholderText(/description/i), {
      target: { value: "Page crash" },
    });
    fireEvent.click(screen.getByText(/submit/i));

    expect(await screen.findByText(/failed to create bug/i)).toBeInTheDocument();
  });
});
