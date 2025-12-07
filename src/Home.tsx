import React from 'react';
import HeroSection from './components/HeroSection';
import AboutVVLF from './components/AboutVVLF';
import VisionMission from './components/VisionMission';
import PartnersSection from './components/PartnersSection';
import FocusAreas from './components/FocusAreas';
import StartupSupport from './components/StartupSupport';

import StatsSection from './components/StatsSection';

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <div id="about-vvlf">
                <AboutVVLF />
            </div>
            <StatsSection />
            <VisionMission />
            <PartnersSection />
            <FocusAreas />
            <StartupSupport />
        </>
    );
};

export default Home;
