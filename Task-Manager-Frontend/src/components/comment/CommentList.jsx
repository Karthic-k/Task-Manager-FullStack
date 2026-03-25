import { useEffect, useState } from "react";
import { getCommentsByTaskId } from "../../services/commentService";

function CommentList({ taskId, refreshKey }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!taskId) {
      setComments([]);
      return;
    }

    setLoading(true);
    setError("");

    getCommentsByTaskId(taskId)
      .then((res) => setComments(res.data))
      .catch(() => setError("Failed to load comments"))
      .finally(() => setLoading(false));
  }, [taskId, refreshKey]);

  if (!taskId) {
    return null;
  }

  return (
    <div className="mt-3 space-y-2">
      <h4 className="text-sm font-semibold text-slate-800">Comments</h4>
      {loading && <p className="text-sm text-slate-500">Loading...</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}
      {!loading && !error && comments.length === 0 && (
        <p className="text-sm text-slate-500">No comments yet.</p>
      )}
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm"
        >
          <p className="text-sm text-slate-800">{comment.message}</p>
          <small className="text-xs text-slate-500">
            {comment.timestamp}
          </small>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
