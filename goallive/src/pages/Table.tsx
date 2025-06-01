import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Container } from "../styles/Table";

export default function Table() {
    const { championshipId } = useParams();

    return (
        <Container>
            <Header />
            <h2 style={{ color: "#fff" }}>
                Classificação do campeonato: {championshipId}
            </h2>
            {/* Aqui vai a tabela de classificação, buscar dados da API */}
        </Container>
    );
}
