import { useState } from "react"

export default function TextAdvice() {
    const [advice, setAdvice] = useState(0)
    return (
        <div className="flex justify-center place-items-center gap-5 mt-8">
            <label htmlFor="box">Text length quality:</label>
            <textarea name="par" id="box" onChange={e => { setAdvice(e.target.value.length) }} className="h-20"></textarea>
            <div className="flex flex-col">
                <span className={`text-yellow-400 margin-1 bg-black p-1 ${(advice <= 20) ? 'visible' : 'invisible'}`}>Troppo corto</span>
                <span className={`text-green-500 margin-1 bg-black p-1 ${(advice > 20 && advice < 40) ? 'visible' : 'invisible'}`}>Lunghezza ottimale</span>
                <span className={`text-red-600 margin-1 bg-black p-1 ${(advice >= 40) ? 'visible' : 'invisible'}`}>Troppo lungo</span>
            </div>
        </div>
    )
}