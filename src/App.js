import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AchievementsSection from './components/AchievementsSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import "./index.css"
function App() {
  return (
        <main className="bg-[#121212]">
            <Navbar/>
            <div className="sped">
              <HeroSection />
              <AchievementsSection/>
              <AboutSection />
              <ProjectsSection/>
              <EmailSection/>
            </div>
            <Footer/>
        </main>
  );
}

export default App;
