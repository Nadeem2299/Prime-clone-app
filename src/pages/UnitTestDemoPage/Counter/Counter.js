import { useState } from 'react';
const Counter = () => {
  const [ticker, setTicker] = useState(0);
  const handleIncrement = () => {
    if (ticker < 10) {
      setTicker(ticker + 1);
    }
  };
  const handleDecrement = () => {
    if (ticker > 0) {
      setTicker(ticker - 1);
    }
  };
  return (
    <div>
      <h2>Counter | Testing State with Event</h2>
      <p data-testid="counterValue">Counter Value: {ticker}</p>
      <button
        type="button"
        data-testid="incrementBtn"
        onClick={handleIncrement}
        className="btn btn-sm btn-success"
      >
        Increment
      </button>
      <button
        type="button"
        data-testid="decrementBtn"
        onClick={handleDecrement}
        className="btn btn-sm btn-danger"
      >
        Decrement
      </button>
    </div>
  );
};
export default Counter;
