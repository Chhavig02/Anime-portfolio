import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './sections.css';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <motion.div
                className="nav-logo"
                whileHover={{ scale: 1.05 }}
                onClick={(e) => scrollTo(e, '#hero')}
            >
                CHHAVI
            </motion.div>

            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <li key={item.href}>
                        <a href={item.href} onClick={(e) => scrollTo(e, item.href)}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <button
                className="nav-hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
                <span style={menuOpen ? { opacity: 0 } : {}} />
                <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
            </button>
        </nav>
    );
};

export default Navbar;
