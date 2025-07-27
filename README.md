# ⚽ GoalLive

> Uma plataforma moderna e responsiva para acompanhar jogos de futebol em tempo real, com placares atualizados ao vivo, organização por campeonato e acesso à tabela de classificação. Inspirado no layout do OneFootball.

---

## 🚀 Funcionalidades

- ✅ **Listagem de jogos do dia** (ao vivo, finalizados e que ainda vão começar)
- ✅ **Atualização em tempo real** (via WebSocket ou requisições periódicas)
- ✅ **Filtragem por campeonato ou time**
- ✅ **Agrupamento por campeonato** (ex: Brasileirão, Série B)
- ✅ **Exibição de detalhes do jogo**: escudos, placar, horário, tempo de jogo, substituições e cartões
- ✅ **Acesso à TABELA de classificação em tempo real**
- ✅ **Design escuro elegante**, com escudos e ícones coloridos
- ✅ **Responsivo para mobile e desktop**

---

## 🧑‍💻 Stack utilizada

- **ReactJS**
- **Styled-Components** (estilização)
- **Axios** (requisições HTTP)
- **React Router DOM** (navegação entre jogos e tabela)
- **API-Football by API-Sports** (dados de jogos e classificação)

---

## 🎨 Design inspirado em OneFootball

### Página de Jogos
- Tema escuro: fundo preto e blocos cinza escuro
- Tipografia clara (branco e cinza)
- Blocos por campeonato (com logo + rodada)
- Cards de jogos com escudos, nomes dos times e horário centralizado
- Link “Ver a Tabela ›” abaixo dos jogos de cada campeonato

### Página de Tabela
- Título: “Classificação”
- Tabela compacta, sem bordas visíveis
- Colunas:
  - Posição com seta de variação (🔼🔽⚪)
  - Escudo + nome do time
  - J | V | E | D | DG | PTS (em negrito)
- Ícones circulares dos times

---

## 🛠️ Instalação e uso

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/goallive.git
cd goallive
npm i
npm run dev
