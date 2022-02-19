import { useState } from "react";
import Counter from "./components/Counter";


function App() {
  const [show, setShow] = useState(true)
  const toggle = ()=>{
    setShow(prev => !prev)
  }
  return (
    <div className="container mt-5">
      <button onClick={toggle} className="btn btn-outline btn-lg rounded-pill bg-light p-3 mb-3" >{show? "Hide Counter" : "Show Counter"}</button>
      {show && <Counter/>}
    </div>
  );
}

export default App;
