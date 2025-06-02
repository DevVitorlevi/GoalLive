import React from 'react';
import { ErrorContainer, ErrorIcon } from './ErrorStyle';

const Error = ({ message = 'Ocorreu um erro' }) => {
    return (
        <ErrorContainer>
            <ErrorIcon>⚠️</ErrorIcon>
            <p>{message}</p>
        </ErrorContainer>
    );
};

export default Error;