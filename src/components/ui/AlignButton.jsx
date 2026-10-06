import { useState } from "react"

export default function AlignButton() {
    const [alignment, setAlignment] = useState('text-left');
    function handleAlign(pos) {
        setAlignment(pos);
    }
    return (
        <div>
            <div className="flex justify-center gap-5 mt-8 mb-3">
                <button onClick={() => handleAlign('text-left')} className="border-2 border-white p-3">LEFT</button>
                <button onClick={() => handleAlign('text-center')} className="border-2 border-white p-3">CENTER</button>
                <button onClick={() => handleAlign('text-right')} className="border-2 border-white p-3">RIGHT</button>
            </div>
            <p className={`border-2 mx-25 p-2 ${alignment}`}>Aligned paragraph text</p>
        </div >
    )
}   