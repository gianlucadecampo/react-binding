import Button from '../ui/Button'
import ButtonClass from '../ui/ButtonClass'
import AlignButton from '../ui/AlignButton'
import Welcome from '../ui/Welcome'
import Todo from '../ui/Todo'
import CharCounter from '../ui/CharCounter'
import NameFilter from '../ui/NameFilter'
import ChangeTitle from '../ui/ChangeTitle'
import AddTextWords from '../ui/AddTextWords'
import CheckForEnable from '../ui/CheckForEnable'
import ToggleStyle from '../ui/ToggleStyle'
import TextDimension from '../ui/TextDimension'
import ConvertPrice from '../ui/ConvertPrice'

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
      <AddTextWords />
      <CheckForEnable />
      <ToggleStyle />
      <TextDimension />
      <ConvertPrice />
    </section>
  )
}