import { useState } from "react"

export default function CheckForEnable() {
    const [status, setStatus] = useState(false)
    const [bg, setBg] = useState(false)
    return (
        <div className="mt-8 flex justify-center place-items-center">
            <section className="flex flex-col">
                <label htmlFor="enable" className={`font-semibold p-1 ${bg ? 'bg-amber-300' : ''}`}>Enable change bg?</label>
                <input type="checkbox" id="enable" onChange={e => { setStatus(e.target.checked) }} />
            </section>
            <button disabled={!status} className="ml-3 border-2 border-white p-2" onClick={() => setBg(!bg)}>Change label bg {'(toggle)'}</button>
        </div>
    )
}