import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/Global';
import { darkTheme } from './styles/theme';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Standings from './pages/Standings';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tabela" element={<Standings />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;