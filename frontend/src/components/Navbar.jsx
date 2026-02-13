import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Biz Kimiz?", href: "#about" },
        { name: "Hakkımızda", href: "#hakkimizda" },
        { name: "Hizmetler", href: "#services" },
        { name: "İş Ortaklarımız", href: "#partners" },
        { name: "İletişim", href: "#contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled || isOpen ? 'bg-white shadow-lg py-4 border-b border-gray-100' : 'bg-black py-8'
            }`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 relative z-[110]" onClick={() => setIsOpen(false)}>
                    <div className={`w-4 h-4 transition-colors duration-500 ${scrolled || isOpen ? 'bg-[#A91D1D]' : 'bg-white'}`}></div>
                    <span className={`text-xl font-black uppercase tracking-tight transition-colors duration-500 ${scrolled || isOpen ? 'text-black' : 'text-white'}`}>
                        Ajans Ctrl
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <div className={`flex gap-8 text-[11px] font-bold uppercase tracking-widest transition-colors duration-500 ${scrolled ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`hover:text-primary transition-colors ${scrolled ? 'hover:text-black font-semibold' : 'hover:text-white'}`}
                            >
                                {link.name}
                            </a>
                        ))}
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

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden relative z-[110] p-2 transition-colors duration-500 ${scrolled || isOpen ? 'text-black' : 'text-white'}`}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Drawer */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-white z-[105] md:hidden flex flex-col justify-center items-center px-12"
                        >
                            <div className="flex flex-col items-center gap-8 w-full max-w-xs">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-black text-black uppercase tracking-tighter hover:text-[#A91D1D] transition-colors w-full text-center"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="w-full h-[1px] bg-gray-100 my-4"
                                ></motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="flex items-center justify-center gap-10 w-full"
                                >
                                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black">
                                        <Globe size={18} />
                                        <span>English</span>
                                    </div>
                                    <Link
                                        to="/admin"
                                        onClick={() => setIsOpen(false)}
                                        className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-black transition-all"
                                    >
                                        <LayoutDashboard size={20} />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
