import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { JogosDoDia } from '../pages/JogosdoDia';
import { Tabela } from '../pages/Tabela';
import { DetalheJogo } from '../pages/Detalhe';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<JogosDoDia />} />
                <Route path="/tabela/:leagueId" element={<Tabela />} />
                <Route path="/jogo/:matchId" element={<DetalheJogo />} />
            </Routes>
        </BrowserRouter>
    );
}
