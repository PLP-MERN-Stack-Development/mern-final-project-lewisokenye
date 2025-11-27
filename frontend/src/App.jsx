import React from "react";
import BugForm from "../../frontend/src/components/BugForm.jsx";
import BugList from "../../frontend/src/components/BugList.jsx";
import ErrorBoundary from "../../frontend/src/components/ErrorBoundary.jsx";

function App() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Bug Tracker</h1>
        <BugForm onBugAdded={(bug) => console.log("New bug added", bug)} />
        <BugList />
      </div>
    </ErrorBoundary>
  );
}

export default App;
