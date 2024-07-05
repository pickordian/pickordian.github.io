import './App.scss'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
function App() {
  return (
    <>
    <Header/>
    <div className='content'>
      <Home/>
    </div>
   </>
  )
}

export default App
