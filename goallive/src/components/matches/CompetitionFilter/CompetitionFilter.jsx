import React from 'react';
import { COMPETITIONS, COMPETITION_PRIORITY } from '../../../utils/competions';
import { FilterContainer, FilterGroup, FilterTitle, FilterItem } from './CompetitionFilterStyle';

const CompetitionFilter = ({ selectedCompetitions, setSelectedCompetitions }) => {
    const competitionsByType = {
        league: [],
        cup: []
    };

    // Organizar competições por tipo
    Object.entries(COMPETITIONS).forEach(([id, comp]) => {
        competitionsByType[comp.type].push({ ...comp, id });
    });

    const toggleCompetition = (id) => {
        setSelectedCompetitions(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    return (
        <FilterContainer>
            <FilterGroup>
                <FilterTitle>Ligas Nacionais</FilterTitle>
                {competitionsByType.league.map(comp => (
                    <FilterItem
                        key={`league-${comp.id}`}
                        $active={selectedCompetitions.includes(Number(comp.id))}
                        $priority={comp.priority}
                        onClick={() => toggleCompetition(Number(comp.id))}
                    >
                        {comp.name} ({comp.country})
                    </FilterItem>
                ))}
            </FilterGroup>

            <FilterGroup>
                <FilterTitle>Competições Continentais</FilterTitle>
                {competitionsByType.cup.filter(c => !['International'].includes(c.country)).map(comp => (
                    <FilterItem
                        key={`cup-${comp.id}`}
                        $active={selectedCompetitions.includes(Number(comp.id))}
                        $priority={comp.priority}
                        onClick={() => toggleCompetition(Number(comp.id))}
                    >
                        {comp.name}
                    </FilterItem>
                ))}
            </FilterGroup>

            <FilterGroup>
                <FilterTitle>Competições Internacionais</FilterTitle>
                {competitionsByType.cup.filter(c => c.country === 'International').map(comp => (
                    <FilterItem
                        key={`international-${comp.id}`}
                        $active={selectedCompetitions.includes(Number(comp.id))}
                        $priority={comp.priority}
                        onClick={() => toggleCompetition(Number(comp.id))}
                    >
                        {comp.name}
                    </FilterItem>
                ))}
            </FilterGroup>
        </FilterContainer>
    );
};

export default CompetitionFilter;