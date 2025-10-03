import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Welcome to My Project 🚀
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
        This project provides two key modules: a <b>Student Info</b> card for 
        showcasing academic details, and a <b>Todo App</b> for managing your daily tasks.  
        Use the navigation or explore them below.
      </p>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">🎓 Student Info</h3>
          <p className="text-gray-600 mb-4">
            View detailed information about a student including profile data and academic 
            highlights. Ideal for learning component-based UI design.
          </p>
          <Link
            to="/student"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Go to Student Info →
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-green-600 mb-2">📝 Todo App</h3>
          <p className="text-gray-600 mb-4">
            Stay productive with a simple task manager. Add, track, and complete your todos 
            with a clean and responsive interface.
          </p>
          <Link
            to="/todo"
            className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Go to Todo App →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
