import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Enter Your Name</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <button
        onClick={() => alert(`Hello, ${name || "Guest"}!`)}
        className="w-full bg-blue-500 text-white mt-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </div>
  );
}
