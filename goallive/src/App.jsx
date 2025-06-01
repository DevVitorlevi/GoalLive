import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MatchDetails } from './pages/MatchDetails';
import { Header } from './components/Header';
import { AppContainer } from './styles/app';
import { GlobalStyle } from './styles/Global';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estatisticas/:matchId" element={<MatchDetails />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;