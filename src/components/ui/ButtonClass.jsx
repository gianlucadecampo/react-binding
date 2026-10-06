import { useState } from "react"

export default function ButtonClass() {
    const [count, setCount] = useState(false);
    function changeStyle() {
        setCount(!count);
    }
    return (
        <div className="flex justify-center place-items-center">
            <p>Change class at click {'->'}</p>
            <button onClick={changeStyle} className={`p-3 ml-3 border-2 ${count ? 'bg-amber-400 border-black' : 'bg-fuchsia-400 border-white'}`}>Change class</button>
        </div>
    )
}