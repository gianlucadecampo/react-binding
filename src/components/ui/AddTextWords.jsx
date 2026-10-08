import { useState } from "react"

export default function AddTextWords() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    return (
        <div className="mt-8">
            <section className="flex justify-center place-items-center">
                <label htmlFor="firstName" className="font-semibold uppercase p-1">First name</label>
                <input type="text" id="firstName" className="border-2 p-3" onChange={e => { setFirstName(e.target.value) }} />
                <label htmlFor="lastName" className="font-semibold uppercase p-1">Last name</label>
                <input type="text" id="lastName" className="border-2 p-3" onChange={e => { setLastName(e.target.value) }} />
            </section>
            <p className="mt-3">Ciao! io mi chiamo {firstName} e il mio cognome è {lastName}</p>
        </div>
    )
}