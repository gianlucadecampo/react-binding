import { useState } from "react"

export default function ChangeTitle() {
    const [change, setChange] = useState('Variable title')
    return (
        <div className="mt-8">
            <h1 className="font-bold text-blue-900 text-center">{change}</h1>
            <section className="flex justify-center place-items-center">
                <p>Insert the text that you wanna have in the title</p>
                <input type="text" className="border-2 ml-4 border-white p-1" onChange={(e) => { setChange(e.target.value) }} />
            </section>
        </div>
    )
}   