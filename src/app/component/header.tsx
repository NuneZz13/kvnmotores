'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import {useState} from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="bg-gradient-to-r from-[#213b6a] to-[#2e4a8e] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="KVN Motores"
                        width={160}
                        height={50}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    <Link href="/" className="hover:text-gray-300 transition">Home</Link>
                    <Link href="/sobre" className="hover:text-gray-300 transition">Sobre</Link>
                    <Link href="/produtos" className="hover:text-gray-300 transition">Produtos</Link>
                    <Link href="/contactos" className="hover:text-gray-300 transition">Contactos</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={toggleMenu}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-[#213b6a] px-4 pb-4 space-y-3 text-sm font-medium">
                    <Link href="/" className="block hover:text-gray-300" onClick={toggleMenu}>Home</Link>
                    <Link href="/sobre" className="block hover:text-gray-300" onClick={toggleMenu}>Sobre</Link>
                    <Link href="/produtos" className="block hover:text-gray-300" onClick={toggleMenu}>Produtos</Link>
                    <Link href="/contactos" className="block hover:text-gray-300" onClick={toggleMenu}>Contato</Link>
                </div>
            )}
        </header>
    );
}
