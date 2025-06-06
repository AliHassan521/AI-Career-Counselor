// src/pages/Dashboard.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    interests: '',
    skills: '',
    personality: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // MOCK: Fake career suggestions (until backend is ready)
    const mockSuggestions = [
      {
        title: 'Full Stack Web Developer',
        description: 'Develop both frontend and backend systems using modern tech stacks.',
        skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      },
      {
        title: 'AI/ML Engineer',
        description: 'Design machine learning models and apply AI to real-world problems.',
        skills: ['Python', 'TensorFlow', 'Data Analysis'],
      },
      {
        title: 'UI/UX Designer',
        description: 'Create intuitive and visually appealing interfaces.',
        skills: ['Figma', 'Design Thinking', 'User Research'],
      },
    ];

    // Navigate to results page with mock data
    navigate('/results', {
      state: { suggestions: mockSuggestions },
    });
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        Career Path Finder
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Your Interests</label>
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            placeholder="e.g., Technology, Art, Finance"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Your Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            placeholder="e.g., JavaScript, Writing, Problem Solving"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Your Personality</label>
          <input
            type="text"
            name="personality"
            value={formData.personality}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            placeholder="e.g., Analytical, Creative, Outgoing"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Get Career Suggestions
        </button>
      </form>
    </div>
  );
}
