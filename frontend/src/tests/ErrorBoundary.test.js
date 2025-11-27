import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../components/ErrorBoundary";

function ProblemComponent() {
  throw new Error("Crashed");
}

test("renders fallback message when child crashes", () => {
  render(
    <ErrorBoundary>
      <ProblemComponent />
    </ErrorBoundary>
  );
  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
});
