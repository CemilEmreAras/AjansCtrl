import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-12">
                <div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
                    {/* Left: Logo & Description */}
                    <div className="md:w-1/3">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-4 h-4 bg-[#A91D1D]"></div>
                            <h2 className="text-xl font-bold tracking-tight uppercase">AJANS CTRL</h2>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                            Dijital dünyada iz bırakan markalar yaratıyoruz.
                        </p>
                    </div>

                    {/* Middle: Menu */}
                    <div className="md:w-1/4">
                        <h4 className="font-bold mb-8 text-sm">Menu</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-gray-500 hover:text-white transition-colors text-sm">Biz Kimiz?</a></li>
                            <li><a href="#services" className="text-gray-500 hover:text-white transition-colors text-sm">Hizmetler</a></li>
                            <li><a href="#contact" className="text-gray-500 hover:text-white transition-colors text-sm">İletişim</a></li>
                        </ul>
                    </div>

                    {/* Right: Sosyal */}
                    <div className="md:w-1/4">
                        <h4 className="font-bold mb-8 text-sm">Sosyal</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:border-white/30 hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:border-white/30 hover:text-white transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:border-white/30 hover:text-white transition-all">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
                        © 2024 AJANS CTRL. TÜM HAKLARI SAKLIDIR.
                    </p>
                    <div className="flex gap-8 text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
