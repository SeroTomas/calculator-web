import Button from "./Components/Button"

function Keyword() {

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2 p-4">
      <Button value="C" type="function"/>
      <Button value="/" type="operators"/>
      <Button value="X" type="operators"/>
      <Button value="<-" type="function"/>
      <Button value="7" type="numbers"/>
      <Button value="8" type="numbers"/>
      <Button value="9" type="numbers"/>
      <Button value="-" type="operators"/>
      <Button value="4" type="numbers"/>
      <Button value="5" type="numbers"/>
      <Button value="6" type="numbers"/>
      <Button value="+" type="operators"/>
      <Button value="1" type="numbers"/>
      <Button value="2" type="numbers"/>
      <Button value="3" type="numbers"/>
      <Button value="=" type="function" classname="row-span-2"/>
      <Button value="." type="operators"/>
      <Button value="0" type="numbers"/>
        <Button value="%" type="operators"/>

    </div>
  )
}

export default Keyword