// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">AI Career Counselor</Link>
      <div className="space-x-4">
        {!token ? (
          <>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
            <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
            <button onClick={logout} className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
