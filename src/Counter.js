import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Compteur: {count}</p>
      <button onClick={increment}>Incrémenter</button>
    </div>
  );
}

export default Counter;
