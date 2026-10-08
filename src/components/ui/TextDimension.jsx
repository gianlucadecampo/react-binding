import { useState } from "react"

const sizes = [
    {
        id: 'small',
        label: 'Small size',
        value: 'text-sm'
    },
    {
        id: 'medium',
        label: 'Medium size',
        value: 'text-lg'
    },
    {
        id: 'large',
        label: 'Large size',
        value: 'text-2xl'
    },
]

export default function TextDimension() {
    const [size, setSize] = useState('text-sm')
    return (
        <div className="flex justify-center place-items-center mt-8 gap-6">
            {
                sizes.map((item) => (
                    < div key={item.id} className="flex flex-col gap-4" >
                        <label htmlFor={item.id}>{item.label}</label>
                        <input type="radio" name="size" value={item.value} id={item.id} checked={size === item.value} onChange={e => { setSize(e.target.value) }} className="border-2 border-white p-2" />
                    </div>
                ))
            }

            <p className={`${size}`}>Questo paragrafo è scritto a mano. <br />
                Con il radio posso decidere la dimensione, <br />
                ingrandendo o diminuendo lo spazio occupato
            </p>
        </div >
    )
}