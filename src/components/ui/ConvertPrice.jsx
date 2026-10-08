import { useState } from "react"

export default function ConvertPrice() {
    const [rate, setRate] = useState(25)
    const basePrice = 24.50
    return (
        <div className="flex justify-center place-items-center gap-4 mt-8">
            <p>The converted price is: {(basePrice * rate).toFixed(2)}</p>
            <select name="price" id="priceConversion" onChange={e => { setRate(Number(e.target.value)) }} className="border-2 border-blue-900">
                <option value={1}>Convert in €</option>
                <option value={1.12}>Convert in $</option>
                <option value={0.85}>Convert in £</option>
            </select>
        </div>
    )
}