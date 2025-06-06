// src/components/CareerCard.jsx
export default function CareerCard({ career }) {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{career.title}</h3>
      <p className="text-gray-600 mb-2"><strong>Why?</strong> {career.reason}</p>
      <p className="text-gray-600"><strong>Recommended Skills:</strong> {career.skills.join(', ')}</p>
    </div>
  );
}
