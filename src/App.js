import { ParallaxProvider } from 'react-scroll-parallax'

import Header from './components/Header'
import Sydney from './components/Sydney'
import YearOne from './components/YearOne'

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Header />
        <Sydney />
        <YearOne />
      </ParallaxProvider>
    </div>
  )
}

export default App
