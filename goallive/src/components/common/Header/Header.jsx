import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, Nav } from './Header';

const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <Logo onClick={() => navigate('/')}>GOALLIVE</Logo>
            <Nav>
                <button onClick={() => navigate('/')}>Today's Matches</button>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;