import {
    BlockContainer,
    Header,
    Logo,
    ChampionshipName,
    Round,
    GamesList,
} from "../styles/ChampionshipBlock";

interface ChampionshipBlockProps {
    logoUrl: string;
    name: string;
    round: string;
    children: React.ReactNode; // aqui você passará os cards de jogos
}

export default function ChampionshipBlock({
    logoUrl,
    name,
    round,
    children,
}: ChampionshipBlockProps) {
    return (
        <BlockContainer>
            <Header>
                <Logo src={logoUrl} alt={`${name} logo`} />
                <ChampionshipName>{name}</ChampionshipName>
                <Round>{round}</Round>
            </Header>

            <GamesList>{children}</GamesList>
        </BlockContainer>
    );
}
