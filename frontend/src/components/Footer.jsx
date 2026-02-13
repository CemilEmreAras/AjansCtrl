import React from 'react';
import { Camera, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black/40 border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            <Camera className="text-blue-400" />
                            <span>AjansCTRL</span>
                        </div>
                        <p className="text-gray-500 max-w-sm mb-6">
                            Dijital dünyada markanızı zirveye taşımak için yaratıcılık ve stratejiyi birleştiriyoruz. Görsel hikaye anlatıcılığında yeni nesil çözümler.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-500 hover:text-white transition-all"><Instagram size={20} /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-400 hover:text-white transition-all"><Twitter size={20} /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-700 hover:text-white transition-all"><Linkedin size={20} /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-red-600 hover:text-white transition-all"><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Hızlı Bağlantılar</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Ana Sayfa</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition-colors">Hizmetler</a></li>
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">Hakkımızda</a></li>
                            <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portföy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">İletişim</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li>info@ajansctrl.com</li>
                            <li>+90 (555) 123 45 67</li>
                            <li>Levent, İstanbul, Türkiye</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
                    <p>© 2026 AjansCTRL. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
