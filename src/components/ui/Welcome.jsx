import { useState } from "react"

const welcomeMessage = [{
    ID: 1,
    lang: 'ITA',
    word: 'Ciao',
},
{
    ID: 2,
    lang: 'ENG',
    word: 'Hello',
},
{
    ID: 3,
    lang: 'ESP',
    word: 'Hola',
}
]

export default function Welcome() {
    const [lang, setLang] = useState(welcomeMessage[0].word)
    function handleLang(id) {
        setLang(welcomeMessage[id].word)
    }

    return (
        <div className="flex justify-center gap-3 mt-5 place-items-center">
            <div className="flex gap-4 place-items-center">
                <p>Change language of the text {'->'}</p>
                {welcomeMessage.map((item, index) => (
                    <button key={item.ID} onClick={() => handleLang(index)} className="border-2 border-black bg-white p-3">{item.lang}</button>
                ))}
            </div>
            <p className="ml-5 text-blue-900 font-semibold">{lang}</p>
        </div>
    )
}