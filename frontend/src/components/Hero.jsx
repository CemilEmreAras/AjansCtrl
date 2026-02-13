import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent z-0" />
            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        #1 Sosyal Medya Çözüm Ortağınız
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
                        Vizyonunuzu <br />
                        <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            Sanata Dönüştürün
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Profesyonel fotoğrafçılık, video prodüksiyon ve stratejik sosyal medya yönetimi ile markanızın hikayesini en etkileyici şekilde anlatıyoruz.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-all flex items-center justify-center gap-2 group">
                            Projeleri İncele
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold transition-all">
                            Bizimle Tanışın
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full" />
        </section>
    );
};

export default Hero;
