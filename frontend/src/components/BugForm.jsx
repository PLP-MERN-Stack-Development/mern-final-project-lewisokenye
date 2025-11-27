import { useState } from "react";
import { API } from "../../src/api"
import "./BugForm.css";

export default function BugForm({ onBugAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return setError("Title is required");

    try {
      const res = await API.post("/bugs", { title, description });
      onBugAdded(res.data);
      setTitle("");
      setDescription("");
      setError("");
    } catch (err) {
      setError("Failed to create bug");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
}
