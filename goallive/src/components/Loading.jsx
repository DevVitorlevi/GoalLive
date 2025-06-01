import React from 'react';
import { Spinner, LoadingContainer } from '../styles/Loading';

export const LoadingSpinner = () => {
    return (
        <LoadingContainer>
            <Spinner />
            <p>Carregando dados da partida...</p>
        </LoadingContainer>
    );
};