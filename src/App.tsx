import './App.css'
import '@mantine/core/styles.css';
import HeroBanner from './components/Banner/index';
import CarouselCharacter from './components/Carousel';

function App() {


  return (
    <>
      <div>
        <HeroBanner/>
        <CarouselCharacter></CarouselCharacter>
      </div>
    </>
  )
}

export default App
