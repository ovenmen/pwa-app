import React from 'react';
import { useCounterStore } from './counter.store';

const Counter = () => {
    const counter = useCounterStore((state) => state.counter);
    const increaseCounter = useCounterStore((state) => state.increaseCounter);
    const decreaseCounter = useCounterStore((state) => state.decreaseCounter);

    return (
        <div>
            <p>{counter}</p>
            <button onClick={increaseCounter}>+</button>
            <button onClick={decreaseCounter}>-</button>
        </div>
    );
};

export default Counter;
