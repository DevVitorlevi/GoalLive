import { GlobalStyle } from './styles/global';
import { ThemeProvider } from './context/ThemeContext';
import { Router } from './routes/index';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
