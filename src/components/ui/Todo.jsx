import { useState } from "react"

const todoList = [
    {
        id: 1,
        box: false,
        job: 'cut the grass',
    },
    {
        id: 2,
        box: true,
        job: 'wash the car',
    },
    {
        id: 3,
        box: false,
        job: 'fix pc GPU',
    },
    {
        id: 4,
        box: false,
        job: 'study asian geography',
    },
]

export default function Todo() {
    const [mark, setMark] = useState(false)
    function handleMark() {
        setMark(!mark)
    }
    return (
        <div>
            {
                todoList.map((item) => (
                    <div key={item.id} className="flex justify-center place-items-center p-2 gap-3">
                        <button onClick={handleMark} className={`border-2 border-black mt-5 w-5 h-5 ${item.box ? 'bg-black' : 'bg-white'}`}>
                        </button>
                        <p>{item.job}</p>
                    </div>
                ))
            }
        </div>
    )
}