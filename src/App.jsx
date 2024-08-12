import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Linechart from './Components/ReCharts/Linechart'

function App() {

  return (
    <>
      <DaisyNav></DaisyNav>
      <h1 className="text-7xl font-bold bg-rose-600">
        Hello world!
      </h1>

      

      <br />
      <Linechart></Linechart>
    </>
  )
}

export default App
