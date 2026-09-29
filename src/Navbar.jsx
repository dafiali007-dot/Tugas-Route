import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/hobi">Hobi</Link>
            <Link to="/kontak">Kontak</Link>
        </nav>
    );
}

export default Navbar;