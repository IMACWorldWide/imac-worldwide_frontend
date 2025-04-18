/* Header.tsx */

// Import scss styles
import { Link } from 'react-router-dom';
import './Header.scss';

import AddIcon from '@mui/icons-material/Add';

export default function Header() {

    const search = new URLSearchParams(window.location.search).get('search')

    return (
        <header className="header">
            <a href="/">
                <img src="/vite.svg" alt="logo" id='logo' />
            </a>
            <form id="search" action="/search" method="get">
                <input type='search' placeholder={search ? search : 'Search...'} id='search' name='search' />
                <input type='submit' value='Search' />
            </form>
            <button id='new'><AddIcon />New</button>
        </header>
    );
}