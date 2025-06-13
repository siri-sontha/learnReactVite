import { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(10)

    return (
        <>
            <p>Counter - {count}</p>
            <button onClick={() => setCount(count + 1)} className="Counter-btn">Increase</button>
            <button onClick={() => setCount(count - 1)} className="Counter-btn">Decrease</button>
            <p>The value is {count % 2 === 0 ? 'even' : 'odd'}</p>
        </>
    )
}