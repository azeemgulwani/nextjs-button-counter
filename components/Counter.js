'use client';
import { useState } from 'react';

export default function Counter({ initialCount = 0, initialStep = 1 }) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);

  const increment = () => setCount((c) => c + step);
  const decrement = () => {
    if (count - step >= 0) setCount((c) => c - step);
  };
  const reset = () => setCount(initialCount);

  const handleStepChange = (e) => {
    const value = Number(e.target.value);
    setStep(value >= 1 ? value : 1); // Enforce minimum step of 1
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h2>Counter</h2>

      {/* aria-live ensures accessibility for screen readers */}
      <div aria-live="polite" style={{ fontSize: '1.5em', margin: '10px' }}>
        Count: {count}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={increment}>+{step}</button>
        <button onClick={decrement} disabled={count - step < 0}>
          -{step}
        </button>
        <button onClick={reset}>Reset</button>
      </div>