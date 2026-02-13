import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, TrendingUp, Presentation } from 'lucide-react';

const services = [
    {
        title: "Marka Stratejisi",
        description: "Markanızın dijital dünyadaki konumunu belirleyen stratejik yol haritaları oluşturuyoruz."
    },
    {
        title: "Sosyal Medya Yönetimi",
        description: "Etkileşim odaklı içerik yönetimi ve topluluk yönetimi ile kitlenizi büyütüyoruz."
    },
    {
        title: "Video Prodüksiyon",
        description: "Reels, reklam filmleri ve profesyonel video içerikleri ile fark yaratmanızı sağlıyoruz."
    },
    {
        title: "Dijital Performans",
        description: "Veri odaklı analizler ve reklam yönetimi ile yatırım getirinizi maksimize ediyoruz."
    },
    {
        title: "Yaratıcı Tasarım",
        description: "Markanızın ruhunu yansıtan modern ve etkileyici görsel tasarımlar hazırlıyoruz."
    },
    {
        title: "İçerik Pazarlaması",
        description: "Hedef kitlenize değer katan hikaye anlatıcılığı ve stratejik içerik üretimi yapıyoruz."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-[#111111] border-t border-white/5">
            <div className="container mx-auto px-8">
                <div className="flex items-center gap-5 mb-24">
                    <div className="w-16 h-[2px] bg-primary"></div>
                    <h2 className="text-2xl font-bold tracking-tight text-white">Hizmetler</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-[#222222]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-16 bg-[#111111] border-r border-b border-[#222222] hover:bg-[#151515] transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#E53E3E] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-5 tracking-tight text-white transition-colors">{service.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm font-medium">
                                    {service.description}
                                </p>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
