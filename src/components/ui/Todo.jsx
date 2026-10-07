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
    const [mark, setMark] = useState(todoList)

    function handleMark(id) {
        const updatedTodos = mark.map(item => {
            if (item.id === id) {
                return { ...item, box: !item.box }
            }
            return item
        })
        setMark(updatedTodos)
    }
    return (
        <div>
            <h2 className="text-left font-bold text-cyan-600 mt-5">Dynamic todo list:</h2>
            {
                mark.map((item) => (
                    <div key={item.id} className="flex justify-start place-items-center p-2 mt-5 gap-2">
                        <button onClick={() => handleMark(item.id)} className={`border-2 border-black w-5 h-5 ${item.box ? 'bg-black' : 'bg-white'}`}>
                        </button>
                        <p className={`font-stretch-extra-condensed ${item.box ? 'line-through' : ''}`}>{item.job}</p>
                    </div>
                ))
            }
        </div>
    )
}