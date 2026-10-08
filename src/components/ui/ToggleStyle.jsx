import { useState } from "react"

export default function ToggleStyle() {
    const [style, setStyle] = useState(false)
    return (
        <div className="flex justify-center place-items-center mt-8">
            <section className="flex flex-col gap-2">
                <label htmlFor="box">Enable style changing?</label>
                <input type="checkbox" id="box" onChange={e => { setStyle(e.target.checked) }} />
            </section>
            <p className="p-2 ml-3">Tira una riga sulla seguente parola: <span className={`p-3 italic ${style ? 'line-through' : ''}`}>PAROLA</span></p>
        </div>
    )
}