import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, TrendingUp, Presentation } from 'lucide-react';

const services = [
    {
        icon: <Camera size={32} className="text-blue-400" />,
        title: "Profesyonel Fotoğrafçılık",
        description: "Ürün, mekan ve lifestyle çekimleri ile markanızı en yüksek kalitede görselleştiriyoruz."
    },
    {
        icon: <Video size={32} className="text-emerald-400" />,
        title: "Video Prodüksiyon",
        description: "Reels, reklam filmleri ve kurumsal tanıtım videoları ile dijital dünyada fark yaratın."
    },
    {
        icon: <TrendingUp size={32} className="text-purple-400" />,
        title: "Sosyal Medya Yönetimi",
        description: "Stratejik planlama ve etkileşim odaklı içerik yönetimi ile kitlenizi büyütüyoruz."
    },
    {
        icon: <Presentation size={32} className="text-orange-400" />,
        title: "Marka Danışmanlığı",
        description: "Dijital kimliğinizi güçlendirecek stratejiler ve yaratıcı konseptler geliştiriyoruz."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Neler Yapıyoruz?</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Markanızın dijital dünyadaki tüm ihtiyaçlarına profesyonel çözümler sunuyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-dark border border-white/5 hover:border-blue-500/30 transition-all"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
