import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="text-6xl italic mb-8">Shahid Dhariwala Learning RTL</div>
      <Counter />
    </div>
  );
}

export default App;
