import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 5px;
    color: white;
    margin-top: 20px;
`;

const Nav = styled.div`
    width: 100%;
    height: 50px;
    background-color: black;
`

const Navbar = () => {
  return (
    <>
        <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/employees">Employees</StyledLink>
        </Nav>
    </>
  )
}

export default Navbar