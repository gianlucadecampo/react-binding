import { useState } from "react"
import { firstNames } from "../../lib/nameList"

export default function NameFilter() {
    const [name, setName] = useState('')
    const filteredList = firstNames.filter(item => item.includes(name.toLowerCase()))
    return (
        <div className="flex justify-center place-items-center mt-8">
            <label htmlFor="firstNames" className="font-semibold">Filter first names</label>
            <input type="text" id="firstNames" className="border-2 p-1 mx-5" onChange={e => { setName(e.target.value) }} />
            <p>{filteredList.join(', ')}</p>
        </div>
    )
}