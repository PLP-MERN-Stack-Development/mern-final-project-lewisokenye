export function validateBugData(bug) {
  if (!bug.title || !bug.description) return false;
  if (bug.status && !["open", "in-progress", "resolved"].includes(bug.status))
    return false;
  return true;
}
