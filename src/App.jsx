import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>Count: {count}</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
