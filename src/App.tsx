import { Display, Keyword } from "./components"




function App() {

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='border max-w-sm flex-grow'>
        <Display />
        <Keyword/>
      </div>
    </div>
  )
}

export default App
