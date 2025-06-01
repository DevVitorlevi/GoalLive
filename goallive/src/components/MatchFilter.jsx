import React, { useState } from 'react';
import { FiltersContainer, FilterButton, SearchInput } from '../styles/MatchFilter';

export const MatchFilters = ({ matches, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    const competitions = [...new Set(matches?.matches?.map(match => match.competition.name))];

    const handleFilter = (type) => {
        setActiveFilter(type);
        onFilter({ type, searchTerm });
    };

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onFilter({ type: activeFilter, searchTerm: term });
    };

    return (
        <FiltersContainer>
            <div className="filter-buttons">
                <FilterButton
                    active={activeFilter === 'all'}
                    onClick={() => handleFilter('all')}
                >
                    Todas
                </FilterButton>
                <FilterButton
                    active={activeFilter === 'live'}
                    onClick={() => handleFilter('live')}
                >
                    Ao Vivo
                </FilterButton>
                <FilterButton
                    active={activeFilter === 'scheduled'}
                    onClick={() => handleFilter('scheduled')}
                >
                    Agendadas
                </FilterButton>
                <FilterButton
                    active={activeFilter === 'finished'}
                    onClick={() => handleFilter('finished')}
                >
                    Encerradas
                </FilterButton>
            </div>

            <div className="search-section">
                <SearchInput
                    type="text"
                    placeholder="Buscar por time ou competição..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <select onChange={(e) => handleFilter(e.target.value)}>
                    <option value="all">Todas Competições</option>
                    {competitions.map(comp => (
                        <option key={comp} value={comp}>{comp}</option>
                    ))}
                </select>
            </div>
        </FiltersContainer>
    );
};