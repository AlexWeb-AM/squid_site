import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Figure from '../components/Figure'
import Boxes from '../components/Boxes'
import Guide from '../components/Guide'
import Companies from '../components/Companies'
import Join from '../components/Join'
import Touch from '../components/Touch'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
       <Header />
      <Main />
      <Figure /> 
      <Boxes />
      <Guide />
      <Companies />
      <div className="container">
      <Join />
      </div>
      <Touch />
      <Footer />
    </div>
  )
}

export default Home
