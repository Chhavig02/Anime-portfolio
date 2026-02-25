import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
