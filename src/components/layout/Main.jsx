import Button from '../ui/Button'
import ButtonClass from '../ui/ButtonClass'
import AlignButton from '../ui/AlignButton'
import Welcome from '../ui/Welcome'
import Todo from '../ui/Todo'
import CharCounter from '../ui/CharCounter'
import NameFilter from '../ui/NameFilter'
import ChangeTitle from '../ui/ChangeTitle'

export default function Main() {
  return (

    <section className="bg-blue-300 min-h-screen p-5 text-center">MAIN
      <Button />
      <ButtonClass />
      <AlignButton />
      <Welcome />
      <Todo />
      <CharCounter />
      <NameFilter />
      <ChangeTitle />
    </section>
  )
}