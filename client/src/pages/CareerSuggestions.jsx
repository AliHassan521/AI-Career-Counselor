// src/pages/CareerSuggestions.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function CareerSuggestions() {
  const location = useLocation();
  const navigate = useNavigate();

  const suggestions = location.state?.suggestions;

  // Redirect back if no suggestions were passed
  useEffect(() => {
    if (!suggestions) {
      navigate('/dashboard');
    }
  }, [suggestions, navigate]);

  return (
    <div className="max-w-4xl mx-auto mt-12 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Career Suggestions
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {suggestions?.map((career, index) => (
          <div
            key={index}
            className="border rounded p-5 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {career.title}
            </h3>
            <p className="text-gray-700 mb-2">{career.description}</p>
            <p className="text-sm text-gray-500">
              <strong>Skills:</strong> {career.skills.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
