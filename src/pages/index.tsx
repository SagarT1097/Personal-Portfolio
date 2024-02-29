import type { GetStaticProps} from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import ContactMe from '../components/ContactMe'



type Props = {
     
}

const Home = ({ }: Props) => {
    return (
        <div className= "bg-[#1B262C] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#1B262C]20 scrollbar-thumb-[#0F4C75]/80 ">
            <Head>
            <title>Sagar Portfolio</title>
            </Head>


            
            <Header />


            {/* Hero */}
            <section id="hero" className="snap-center">
                <Hero />
            </section>


            {/* About */}
            <section id="about" className="snap-start">
                <About />
            </section>

            {/* Experience */}
            <section id="experience" className="snap-center">
                <Experience />
            </section>

            {/* Skills */}
            <section id="skills" className="snap-start">
                <Skills />
            </section>

            {/* Projects */}
            <section id="projects" className="snap-start">
            <Projects />
            </section>

            {/* Contact Me */}
            <section id="contactme" className="snap-start">
                <ContactMe />
            </section>

        </div>
    )
}





export default Home
