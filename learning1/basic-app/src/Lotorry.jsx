import { useState, useEffect } from "react";

const Lottory = () => {
    const [value, setValue] = useState(0);
    const [sum, setSum] = useState(0);
    const [count, setCount] = useState(0);
    const target = 15;

    const addValue = () => {
        const randomValue = Math.floor(Math.random() * 10) + 1;
        setValue(randomValue);
        setSum(sum + randomValue);
        setCount(count + 1);
    };

    useEffect(() => {
        if (count === 3) {
            setTimeout(() => {
                setSum(0);
                setValue(0);
                setCount(0);
            }, 2000); // Reset after 2 seconds
        }
    }, [count]);

    return (
        <div>
            <input value={value} readOnly />
            <button onClick={addValue}>Click</button>
            {count === 3 && (
                <div>
                    {sum === target ? <h1>Congratulations! {sum}</h1> : <h1> sum ={sum} Try Again</h1>}
                </div>
            )}
        </div>
    );
};

export default Lottory;
