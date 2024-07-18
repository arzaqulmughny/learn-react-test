import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button
                type='button'
                data-testid="decrease"
                onClick={() => setCount((currentValue) => currentValue - 1)}
            >
                Decrease
            </button>
            <h1 data-testid="current">{count}</h1>
            <button
                type='button'
                data-testid="increase"
                onClick={() => setCount((currentValue) => currentValue + 1)}
            >
                Increase
            </button>
        </div>
    );
};

export default Counter;
