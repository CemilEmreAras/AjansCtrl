import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-dark/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    <Camera className="text-blue-400" />
                    <span>AjansCTRL</span>
                </Link>
                <div className="hidden md:flex gap-8 items-center">
                    <a href="#" className="hover:text-blue-400 transition-colors">Ana Sayfa</a>
                    <a href="#services" className="hover:text-blue-400 transition-colors">Hizmetler</a>
                    <a href="#gallery" className="hover:text-blue-400 transition-colors">Fotoğraflar</a>
                    <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portföy</a>
                    <a href="#about" className="hover:text-blue-400 transition-colors">Hakkımızda</a>
                    <Link to="/admin" className="flex items-center gap-1 bg-white/10 px-4 py-1.5 rounded-full hover:bg-emerald-500/20 hover:text-emerald-400 transition-all border border-white/10 ml-4">
                        <LayoutDashboard size={18} />
                        <span>Panel</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
