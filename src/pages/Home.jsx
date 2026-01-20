import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Leaderboard from '../components/Leaderboard';
import FooterCTA from '../components/FooterCTA';

const Home = () => {
    return (
        <main className="flex flex-col">
            <Hero />
            <Features />
            <Stats />
            <Leaderboard />
            <FooterCTA />
        </main>
    );
};

export default Home;
