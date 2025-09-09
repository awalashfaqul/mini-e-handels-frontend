export default function PersonalizedBanner({ message }) {
  if (!message) return null;
  return (
    <div
      className="bg-blue-50 shadow-sm p-4 md:p-6 rounded border mb-4"
      role="status"
      aria-live="polite"
    >
      <div className="text-center font-medium">{message}</div>
    </div>
  );
}