import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount((count) => count + 1);
  const handleDecrement = () => setCount((count) => count - 1);
  const handleReset = () => setCount(0);
  const myFunction = () => {
    const element = document.body;
    element.dataset.bsTheme = element.dataset.bsTheme === 'dark' ? 'light' : 'dark';
  }


  return (
    <div className="d-flex flex-column" data-bs-theme='dark'>
      <div className="form-check form-switch mx-4">
        <input className='form-check-input p-2' type='checkbox' role='switch' id='flexSwitchCheckChecked' checked onClick={myFunction} />
      </div>
      <div className='text-center'>
      <h1 className='text-primary'>Counter: {count}</h1>
      </div>
      <div className='text-center'>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          Increment
        </button>&nbsp;&nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecrement}
        >
          Decrement
        </button>&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-dark" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );

}

export default Counter;
