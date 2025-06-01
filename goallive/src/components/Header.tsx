import { HeaderContainer, Title, Subtitle } from "../styles/header";

export default function Header() {
    const today = new Date().toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <HeaderContainer>
            <Title>Os jogos de hoje</Title>
            <Subtitle>{today}</Subtitle>
        </HeaderContainer>
    );
}
