import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import { darkTheme } from './styles/theme';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;