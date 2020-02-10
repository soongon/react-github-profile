import React from 'react';
import './Header.css';
import logo from '../../GitHub-Mark-Light-64px.png';
import Link from '../Link/Link';

const Header = () => (
    <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>
            My Github Profile
        </h1>
    </header>
);

export default Header;