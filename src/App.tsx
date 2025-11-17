import './App.css'
import FacebookLocationNotice from './components/FacebookLocationNotice'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuNoticeDetails from './components/MenuNoticeDetails'
import Nav from './components/Nav'

function App(): JSX.Element {

  return (
    <>
      <Header />
      <Nav />
      <Hero />
      <MenuNoticeDetails />
      <FacebookLocationNotice />
      <Footer />
    </>
  )
}

export default App
