import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="flex justify-center items-center  flex-col h-screen w-screen m-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="text-6xl italic mb-8">Shahid Dhariwala Learning RTL</div>
      <Counter />
    </div>
  );
}

export default App;
