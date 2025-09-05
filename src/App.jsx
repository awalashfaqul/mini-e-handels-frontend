import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Mini E-Commerce Store</h1>
      </header>

      <main className="flex-1 p-6">
        <p className="text-gray-700">Welcome to the store! Enjoy your stay.</p>
      </main>

      <footer className="bg-gray-200 text-center p-4">
        <p className="text-sm">© 2025 Mini E-Commerce Store</p>
      </footer>
    </div>
  );
}

export default App;
