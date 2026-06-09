import React from 'react';
import './App.css';
import { ChallengeProvider } from './context/ChallengeContext';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MissionsSection from './components/MissionsSection';
import DailyChecklist from './components/DailyChecklist';
import ProgressCard from './components/ProgressCard';
import DailyNotes from './components/DailyNotes';
import InspirationGrid from './components/InspirationGrid';
import FinalSection from './components/FinalSection';

function App() {
  return (
    <ChallengeProvider>
      <div className="app-container">
        <Hero />
        
        <main className="page">
          <AboutSection />
          
          <MissionsSection />
          
          <section id="roadmap" style={{ marginTop: '48px' }}>
            <div className="section-eyebrow">Acompanhe sua jornada</div>
            <h2 className="section-title">Cartão de progresso</h2>
            <ProgressCard />
          </section>

          <section id="checklist" style={{ marginTop: '48px' }}>
            <DailyChecklist />
          </section>

          <section id="notes" style={{ marginTop: '48px' }}>
            <DailyNotes />
          </section>

          <section id="inspiration" style={{ marginTop: '48px' }}>
            <InspirationGrid />
          </section>

          <FinalSection />
        </main>
        
        <style dangerouslySetInnerHTML={{ __html: `
          .page {
            max-width: 860px;
            margin: 0 auto;
            padding: 0 20px 80px;
          }
          section {
            margin-bottom: 48px;
            padding-top: 10px;
          }
          @media (max-width: 640px) {
            .page { padding: 0 16px 60px; }
          }
        ` }} />
      </div>
    </ChallengeProvider>
  );
}

export default App;
