import About from './Comp/About'
import Header from './Comp/Header'
import Logos from './Comp/Logos'
import Navbar from './Comp/Navbar'
import Content from './Comp/Content'


function App() {

  return (
    <div className='bg-rose-100'>
      <Navbar/>
      <Header/>
      <Logos/>
      <About/>
      <Content/>
    </div>
  )
}

export default App
