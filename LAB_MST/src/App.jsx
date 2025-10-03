import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoApp from "./todoApp";
import StudentInfo from "./studentInfoCard";
import Home from "./home"; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">My Project</h1>
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 transition font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/student"
                  className="text-gray-700 hover:text-blue-600 transition font-medium"
                >
                  Student Info
                </Link>
              </li>
              <li>
                <Link
                  to="/todo"
                  className="text-gray-700 hover:text-blue-600 transition font-medium"
                >
                  Todo App
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student" element={<StudentInfo />} />
            <Route path="/todo" element={<TodoApp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
