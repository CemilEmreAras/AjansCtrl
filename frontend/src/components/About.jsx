import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="w-full h-[500px] rounded-3xl bg-gradient-to-br from-blue-600 to-emerald-600 opacity-20 absolute -top-4 -left-4" />
                            <div className="w-full h-[500px] rounded-3xl overflow-hidden border border-white/10 relative z-10 bg-white/5 flex items-center justify-center text-gray-500">
                                {/* Buraya bir kurumsal görsel gelecek */}
                                <span className="text-2xl italic font-serif">Yaratıcılığın Merkezi</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold mb-8">Hikayenizi Birlikte Yazalım</h2>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            Biz, görselliğin gücüne inanan, her markanın kendine has bir ruhu olduğunu düşünen yaratıcı bir ekibiz. 5 yılı aşkın süredir, onlarca mutluluğa ve markanın büyüme yolculuğuna eşlik ettik.
                        </p>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            Sadece resim çekmiyor, markanızın geleceğini şekillendiren dijital varlıklar oluşturuyoruz. Modern estetik anlayışımız ve teknolojik donanımımızla her çekimde "mükemmeli" hedefliyoruz.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-3xl font-bold text-blue-400">100+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">Memnun Müşteri</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-emerald-400">500+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">Tamamlanan Proje</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
