import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#101010] px-4 py-4 sticky top-0 z-50">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10">
                        <svg className="w-full h-full" viewBox="0 0 76.0001 69.9999" fill="none">
                            <path d="M2.50005 32.3789L37.8163 2.5L73.5001 32.3789" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                            <path d="M17.5658 36.0786L17.3208 53.8545" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                            <path d="M58.7306 36.9753L58.8939 53.8535" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                            <path d="M38.0002 22.7012V67.4999" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                            <path d="M51.8699 30.1531L51.7064 60.6772" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                            <path d="M24.2633 60.6772L24.3449 30.1531" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                            <path d="M31.2057 36.0786L31.2875 53.8545" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                            <path d="M45.0091 38.5916V51.7888" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                            <path d="M10.4601 48.0184V41.7341" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                            <path d="M65.8366 48.0184L65.9182 41.7341" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                        </svg>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 ml-8">
                    <Link to="/how-it-works" className="text-white text-sm hover:text-[#fc6a03] transition-colors">como funciona</Link>
                    <Link to="/for-musicians" className="text-white text-sm hover:text-[#fc6a03] transition-colors">para músicos</Link>
                    <Link to="/for-venues" className="text-white text-sm hover:text-[#fc6a03] transition-colors">para casas de show</Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link to="/register" className="text-white text-sm hover:text-[#fc6a03] transition-colors">Criar Conta</Link>
                    <Link to="/login" className="bg-[#fc6a03] text-white py-2 px-6 rounded-md text-sm hover:bg-[#e55e00] transition-colors">
                        Entrar
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white p-2 md:hidden"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="mt-4 flex flex-col gap-3 pb-4 md:hidden">
                    <Link to="/how-it-works" className="text-white text-base">como funciona</Link>
                    <Link to="/for-musicians" className="text-white text-base">para músicos</Link>
                    <Link to="/for-venues" className="text-white text-base">para casas de show</Link>
                    <Link to="/register" className="text-white text-base">Criar Conta</Link>
                    <Link to="/login" className="bg-[#fc6a03] text-white py-2 px-6 rounded-md text-base text-center">
                        Entrar
                    </Link>
                </nav>
            )}
        </header>
    );
}
