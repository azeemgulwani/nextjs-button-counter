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