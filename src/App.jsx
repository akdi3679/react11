import React, { useState } from "react";
import Header from "./Header";
import Counter from "./Counter";

function App() {
  const [title, setTitle] = useState("Bienvenue"); 
  const [count, setCount] = useState(0);  

  const increment = () => setCount(prev => prev + 1);  

  return (
    <div>
      <Header title={title} />  
      <Counter count={count} increment={increment} /> </div>
  );
}

export default App;
