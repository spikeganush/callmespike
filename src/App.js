import { ParallaxProvider } from 'react-scroll-parallax'

import Header from './components/Header'
import Sydney from './components/Sydney'
import Subjects from './components/Subjects'

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Header />
        <Sydney />
        <Subjects />
      </ParallaxProvider>
    </div>
  )
}

export default App
