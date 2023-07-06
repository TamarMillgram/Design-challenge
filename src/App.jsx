import './App.css'
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './assets/scss/main.scss'
import { AppHeader } from './cmps/AppHeader';
import { About } from './views/About';
import { HomePage } from './views/homePage';
import { AppFooter } from './cmps/AppFooter';

function App() {

  return (
    <Router>
    <section className="main-layout app">
        <AppHeader />
        <main>
            <Routes>
                <Route element={<HomePage />} path="/" />
                <Route element={<About />} path="/about" />
            </Routes>
        </main>
        <AppFooter/>
    </section>
</Router>
  )
}

export default App
