export default function ExperimentBanner({ variant }) {
  // Background color mapping for more variants
  const bg =
    variant?.includes("Free") ? "#ecfccb"
    : variant?.includes("Premium") ? "#e0f2fe"
    : "#f3f4f6"; // default

  return (
    <div
      className="rounded p-4 md:p-6 mb-6 text-center shadow-sm"
      style={{ background: bg }}
      role="status"
      aria-live="polite"
    >
      <h3 className="text-xl font-bold text-gray-900">{variant || "Experiment"}</h3>
    </div>
  );
}