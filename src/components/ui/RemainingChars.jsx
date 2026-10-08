import { useState } from "react"

export default function RemainingChars() {
    const maxChars = 40
    const [count, setCount] = useState(maxChars)
    return (
        <div className="flex justify-center place-items-center gap-5 mt-8">
            <label htmlFor="chars" className="p-2">Insert text:</label>
            <textarea name="" disabled={count < 1} id="chars" className="border-2" onChange={e => { setCount(maxChars - e.target.value.length) }}></textarea>
            <span>Remaining chars: {count}</span>
        </div>
    )
}