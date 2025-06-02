import React from 'react';
import { Spinner, LoadingContainer } from './LoadingStyle';

const Loading = () => {
    return (
        <LoadingContainer>
            <Spinner />
            <span>Carregando...</span>
        </LoadingContainer>
    );
};

export default Loading;