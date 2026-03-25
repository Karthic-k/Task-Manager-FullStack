import { useState } from "react";
import { addComment } from "../../services/commentService";

function CommentBox({ taskId, userId, onCommentAdded }) {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!message.trim()) {
      setError("Comment cannot be empty");
      return;
    }

    if (!taskId || !userId) {
      setError("Missing task or user information");
      return;
    }

    setSubmitting(true);
    addComment(taskId, userId, message.trim())
      .then(() => {
        setMessage("");
        if (onCommentAdded) {
          onCommentAdded();
        }
      })
      .catch(() => setError("Failed to add comment"))
      .finally(() => setSubmitting(false));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3 space-y-2">
      <textarea
        rows={3}
        placeholder="Write a comment..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {submitting ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
}

export default CommentBox;
