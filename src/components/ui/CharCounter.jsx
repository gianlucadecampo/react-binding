import { useState } from "react"

export default function CharCounter() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex justify-center place-items-center mt-5">
      <label htmlFor="textInput">Type here:</label>
      <input type="text" id="textInput" className="border-2 p-1 ml-3" onChange={e => { setCount(e.target.value.length) }} />
      <p className="ml-2 font-semibold text-red-500">{count}</p>
    </div>
  )
}