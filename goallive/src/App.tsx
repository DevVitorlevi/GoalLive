import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home";
import Table from "./pages/Table";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:championshipId" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
