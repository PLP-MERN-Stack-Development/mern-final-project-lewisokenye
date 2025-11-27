import { useEffect, useState } from "react";
import { API } from "../../src/api"; // Adjust path if needed
import "./BugList.css";

export default function BugList() {
  const [bugs, setBugs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const res = await API.get("/bugs");
        setBugs(res.data);
      } catch (err) {
        setError("Failed to load bugs");
      }
    };
    fetchBugs();
  }, []);

  if (error) return <p>{error}</p>;
  if (bugs.length === 0) return <p>No bugs found.</p>;

  return (
    <ul>
      {bugs.map((b) => (
        <li key={b._id}>
          {b.title} - <em>{b.status}</em>
        </li>
      ))}
    </ul>
  );
}
