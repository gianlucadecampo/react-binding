import { useState } from "react"

export default function Button() {
    const [count, setCount] = useState(0);
    function adding() {
        setCount(count + 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="flex gap-3 justify-center place-items-center">
            <p>Incrementing and resetting {'->'}</p>
            <button onClick={adding} className="border-2 m-5 border-white p-2 bg-blue-800 text-white">Add 1</button>
            <button onClick={reset} className="border-3 m-5 border-white p-3 bg-blue-700 text-white">reset</button>
            <span className="font-bold text-3xl">{count}</span>
        </div>
    )
}