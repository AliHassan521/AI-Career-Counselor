// src/pages/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to AI Career Counselor</h1>
      <p className="text-gray-600 mb-6 max-w-xl">
        Get personalized, AI-powered career advice tailored to your interests, skills, and background. Start exploring your future today!
      </p>
      <Link to="/dashboard" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</Link>
    </div>
  );
}
