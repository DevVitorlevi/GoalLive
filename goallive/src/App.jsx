import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyle } from './assets/styles/globalStyles';
import Home from './pages/Home/Home.jsx';
import MatchDetails from './pages/MatchDetails/MatchDetails.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Header from './components/common/Header/Header.jsx';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match/:id" element={<MatchDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;