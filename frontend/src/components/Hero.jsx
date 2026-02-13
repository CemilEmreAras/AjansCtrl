import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-20">
            <div className="container mx-auto px-12 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        {/* Red Bar */}
                        <div className="w-14 h-[4px] bg-primary mb-16"></div>

                        {/* Heading - Resized to be smaller as requested */}
                        <h1 className="text-4xl md:text-7xl font-bold mb-10 leading-[1.1] text-white tracking-tight">
                            Strateji, <br />
                            Yaratıcılık ve <br />
                            Dijital Performans.
                        </h1>

                        {/* Subheading */}
                        <p className="text-gray-500 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
                            Markanızı dijital dünyada güçlendiren modern çözümler.
                        </p>

                        {/* Button */}
                        <div className="flex justify-start">
                            <button className="px-12 py-5 bg-[#A91D1D] hover:bg-red-800 text-white rounded-none font-bold transition-all uppercase tracking-[0.2em] text-[11px] shadow-2xl">
                                Bize Ulaşın
                            </button>
                        </div>
                    </motion.div>

                    {/* Decorative Circular Line Art - More subtle opacity */}
                    <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none opacity-[0.12]">
                        <div className="absolute inset-0 border-[0.5px] border-primary rounded-full"></div>
                        <div className="absolute inset-[15%] border-[0.5px] border-primary rounded-full"></div>
                        <div className="absolute inset-[30%] border-[0.5px] border-primary rounded-full"></div>
                        <div className="absolute inset-[45%] border-[0.5px] border-primary rounded-full"></div>
                        <div className="absolute inset-[60%] border-[0.5px] border-primary rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Subtle light effect on the right */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;
