import React from 'react';
import { motion } from 'framer-motion';

const Hakkimizda = () => {
    return (
        <section id="hakkimizda" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Column: Content */}
                    <div className="lg:w-1/2">
                        <div className="flex items-start gap-4 mb-12">
                            <div className="w-1.5 h-10 bg-[#A91D1D]"></div>
                            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Hakkımızda</h2>
                        </div>

                        <div className="space-y-12 mb-16">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
                                <p className="text-gray-500 leading-relaxed max-w-lg">
                                    Markaların potansiyelini en üst düzeye çıkarmak için veri odaklı stratejiler ve estetik mükemmelliği birleştiriyoruz.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
                                <p className="text-gray-500 leading-relaxed max-w-lg">
                                    Global standartlarda dijital deneyimler yaratarak, iş ortaklarımızın sektörlerinde lider konuma gelmelerini sağlamak.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <h4 className="text-4xl font-black text-[#A91D1D] mb-2">50+</h4>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Mutlu Müşteri</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-black text-[#A91D1D] mb-2">120+</h4>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Tamamlanan Proje</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-black text-[#A91D1D] mb-2">5</h4>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Yıllık Deneyim</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="/hakkimizda_office.png"
                                alt="Kurumsal Ofis"
                                className="w-full h-[500px] object-cover grayscale brightness-90 contrast-110"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hakkimizda;
