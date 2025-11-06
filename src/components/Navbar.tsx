'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        const currentSection = pathname.split('/')[1] || 'home';
        setActiveSection(currentSection);
    }, [pathname]);

    const navItems = [
        { href: '/', label: 'Home', icon: '🏠', section: 'home' },
        { href: '/about', label: 'About', icon: '👤', section: 'about' },
        { href: '/skills', label: 'Skills', icon: '💻', section: 'skills' },
        { href: '/projects', label: 'Projects', icon: '🚀', section: 'projects' },
        { href: '/services', label: 'Services', icon: '🛠️', section: 'services' },
        { href: '/academics', label: 'Academics', icon: '🎓', section: 'academics' },
        { href: '/testimonials', label: 'Testimonials', icon: '💬', section: 'testimonials' },
        { href: '/contact', label: 'Contact', icon: '✉️', section: 'contact' },
    ];


    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
                {/* Logo / Brand */}
                <Link href="/" className="text-2xl font-bold text-white">
                    MyPortfolio
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-4 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center px-3 py-2 rounded-md transition-colors duration-200 ${
                                activeSection === item.section
                                    ? 'bg-blue-600 text-white'
                                    : 'hover:bg-gray-700'
                            }`}
                        >
                            <span className="mr-2">{item.icon}</span>
                            <span>{item.label}</span>
                        </Link>
                    ))}

                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800">
                    <nav className="flex flex-col space-y-1 px-4 py-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center px-3 py-2 rounded-md transition-colors duration-200 ${
                                    activeSection === item.section
                                        ? 'bg-blue-600 text-white'
                                        : 'hover:bg-gray-700'
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="mr-2">{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        ))}

                        <div className="flex space-x-2 mt-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white px-2 py-1 rounded-md"
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
