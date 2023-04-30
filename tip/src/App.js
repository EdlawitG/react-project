import "./App.css";
import Home from "./Home";
import { useState } from "react";
function App() {
  const [bill, setBill] = useState();
  const [result, setResult] = useState();
  const [people, setPeople] = useState();
  const [error, setError] = useState(false);
  const [custom, setCustom] = useState();
  const reset = () => {
    setBill("");
    setPeople("");
    setCustom("");
    setResult("")
  };
  const handleCustom = (e) => {
    try{
    e.preventDefault();
    const value = e.target.value / 100;
    setCustom(e.target.value);
    const ans = ((bill * value) / people).toFixed(2);
    setResult(ans);
  }catch{
    <span>Error</span>
  }
  };
  const handleError = ()=>{
    setError(true)
    console.log('Error');

  }
  const handleBill = (e) => {
    e.preventDefault();
    setBill(e.target.value);
  };
  const handlePeople = (e) => {
    e.preventDefault();
    setPeople(e.target.value);
  };
  const handleInput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const ans = (bill * value) / people;
    setResult(ans);
  };
  return (
    <div>
      <Home
        bill={bill}
        people={people}
        reset={reset}
        error={error}
        result={result}
        custom={custom}
        handleInput={handleInput}
        handleBill={handleBill}
        setBill={setBill}
        setPeople={setPeople}
        handlePeople={handlePeople}
        handleCustom={handleCustom}
        handleError={handleError}
        setError={setError}
       
      />
    </div>
  );
}

export default App;
