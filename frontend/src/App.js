import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">n8n One-Click Installer</h1>
        <p className="text-lg">The fastest and simplest way to deploy n8n</p>
      </header>
      <main className="container mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
          <p className="text-gray-600">This is the new React frontend for the n8n one-click installer.</p>
        </div>
      </main>
    </div>
  );
}

export default App;