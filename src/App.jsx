import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import DynamicList from "./components/DynamicList/DynamicList";

function App() {
  return (
    <div className="flex justify-center items-center  flex-col min-h-screen min-w-screen m-0 p-12 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="text-6xl italic mb-8">Shahid Dhariwala Learning RTL</div>
      <Counter />
      <DynamicList />
    </div>
  );
}

export default App;
