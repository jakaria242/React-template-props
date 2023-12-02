import { useState } from 'react'
import Navbar from './section/navbar/Navbar'
import Banner from './section/banner/Banner'
import Brand from './section/brand/Brand'
import Solution from './section/solution/Solution'
import Goals from './section/goals/Goals'
import Distribution from './section/distribution/Distribution'
import Plan from './section/plan/Plan'
import Counter from './section/counter/Counter'
import Team from './section/team/Team'
import News from './section/news/News'
import Footer from './section/footer/Footer'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Banner/>
     <Brand/>
     <Solution/>
     <Goals/>
     <Distribution/>
     <Plan/>
     <Counter/>
     <Team/>
     <News/>
     <Footer/>
    </>
  )
}

export default App
