export default function Toast({ message }) {
  if (!message) return null;
  return <div className="toast-message" role="status">{message}</div>;
}
