import React, { useState } from 'react';
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
import TabsNav from './components/TabsNav';
import WeeklyGoals from './components/WeeklyGoals';

function App() {
  const [activeTab, setActiveTab] = useState('diario');

  return (
    <ChallengeProvider>
      <div className="app-container">
        <Hero />
        
        <main className="page">
          <AboutSection />
          
          <MissionsSection />

          <section id="roadmap" style={{ marginTop: '48px', marginBottom: '16px' }}>
            <div className="section-eyebrow">Seu Esforço Real</div>
            <h2 className="section-title">Barra de progresso</h2>
            <ProgressCard />
          </section>

          <TabsNav activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === 'diario' && (
            <div className="tab-content animate-fade-in">
              <section id="checklist">
                <DailyChecklist />
              </section>

              <section id="notes">
                <DailyNotes />
              </section>
            </div>
          )}

          {activeTab === 'quinzenal' && (
            <div className="tab-content animate-fade-in">
              <section id="weekly-goals">
                <WeeklyGoals />
              </section>
            </div>
          )}

          {activeTab === 'produtos' && (
            <div className="tab-content animate-fade-in">
              <section id="inspiration">
                <InspirationGrid />
              </section>
            </div>
          )}

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
          .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
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
