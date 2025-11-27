import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/landing/Hero';
import SegregationGuide from '../components/landing/SegregationGuide';
import ImpactStats from '../components/landing/ImpactStats';
import Footer from '../components/layout/Footer';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Navbar />
            <main>
                <Hero />
                <SegregationGuide />
                <ImpactStats />
            </main>
            <Footer />
        </div>
    );
}
