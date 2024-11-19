// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function Button({ color, children }) {
  return (
    <button
      className="px-6 py-3 text-white text-3xl font-bold rounded transition duration-300"
      style={{ backgroundColor: color }}
      type="submit"
    >
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="flex space-x-4">
        <Button color="red">Belanja Sekarang</Button>
        <Button color="cyan">Belanja Sekarang</Button>
        <Button color="green">Belanja Sekarang</Button>
        <Button color="orange">Belanja Sekarang</Button>
        <Button color="blue">Belanja Sekarang</Button>
      </div>
    </div>
  );
}