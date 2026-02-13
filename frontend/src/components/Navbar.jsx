import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Globe } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-4 border-b border-gray-100' : 'bg-black py-8'
            }`}>
            <div className="container mx-auto px-12 flex justify-between items-center transition-colors duration-500">
                <Link to="/" className="flex items-center gap-3">
                    <div className={`w-4 h-4 transition-colors duration-500 ${scrolled ? 'bg-[#A91D1D]' : 'bg-white'}`}></div>
                    <span className={`text-xl font-black uppercase tracking-tight transition-colors duration-500 ${scrolled ? 'text-black' : 'text-white'}`}>
                        Ajans Ctrl
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    <div className={`flex gap-8 text-[11px] font-bold uppercase tracking-widest transition-colors duration-500 ${scrolled ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                        <a href="#about" className={`hover:text-primary transition-colors ${scrolled ? 'hover:text-black font-semibold' : 'hover:text-white'}`}>Biz Kimiz?</a>
                        <a href="#about" className={`hover:text-primary transition-colors ${scrolled ? 'hover:text-black font-semibold' : 'hover:text-white'}`}>Hakkımızda</a>
                        <a href="#services" className={`hover:text-primary transition-colors ${scrolled ? 'hover:text-black font-semibold' : 'hover:text-white'}`}>Hizmetler</a>
                        <a href="#partners" className={`hover:text-primary transition-colors ${scrolled ? 'hover:text-black font-semibold' : 'hover:text-white'}`}>İş Ortaklarımız</a>
                        <a href="#contact" className={`hover:text-primary transition-colors ${scrolled ? 'hover:text-black font-semibold' : 'hover:text-white'}`}>İletişim</a>
                    </div>

                    <div className={`h-6 w-[1.5px] transition-colors duration-500 ${scrolled ? 'bg-black/10' : 'bg-white/10'} mx-2`}></div>

                    <div className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-colors duration-500 cursor-pointer group ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-primary'
                        }`}>
                        <Globe size={14} />
                        <span>En</span>
                    </div>

                    <Link to="/admin" className={`ml-4 transition-all ${scrolled ? 'text-gray-400 hover:text-black' : 'text-gray-700 hover:text-white'}`}>
                        <LayoutDashboard size={14} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
