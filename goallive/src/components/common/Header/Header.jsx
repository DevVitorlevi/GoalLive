import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, Nav } from './HeaderStyle';

const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <Logo onClick={() => navigate('/')}>GOALLIVE</Logo>
        </HeaderContainer>
    );
};

export default Header;