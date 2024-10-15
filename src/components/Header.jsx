import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleClickOutside = (event) => {
            if (isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !burgerRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="logo">Unsada Fanbase</div>
            <div
                ref={burgerRef}
                className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <nav ref={menuRef} className={`${isMenuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Beranda</Link></li>
                    <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>Tentang</Link></li>
                    <li><Link to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
                    <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Kontak</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;