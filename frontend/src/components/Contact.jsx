import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-[#F9FAFB]">
            <div className="container mx-auto px-12">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left Side: Contact Information */}
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">İletişim</h2>
                        <p className="text-gray-500 mb-16 leading-relaxed">
                            Projeleriniz için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
                        </p>

                        <div className="space-y-10">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg text-[#A91D1D]">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Adres</h4>
                                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                                        Muradiye, 31/OSB Sokak No:4/5 B <br />
                                        45140 Yunusemre / Manisa
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-13 bg-white rounded-full flex items-center justify-center shadow-lg text-[#A91D1D]">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">E-posta</h4>
                                    <p className="text-sm text-gray-500 mt-1">hello@ajansctrl.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg text-[#A91D1D]">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Telefon</h4>
                                    <p className="text-sm text-gray-500 mt-1">+90 (236) 123 45 67</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form Card */}
                    <div className="lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-12 shadow-2xl rounded-none"
                        >
                            <form className="space-y-8">
                                <div className="flex flex-col gap-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Adınız Soyadınız</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-50 border-none p-5 text-sm outline-none focus:ring-1 focus:ring-gray-200"
                                    />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">E-posta Adreiniz</label>
                                    <input
                                        type="email"
                                        className="w-full bg-gray-50 border-none p-5 text-sm outline-none focus:ring-1 focus:ring-gray-200"
                                    />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Mesajınız</label>
                                    <textarea
                                        rows="6"
                                        className="w-full bg-gray-50 border-none p-5 text-sm outline-none focus:ring-1 focus:ring-gray-200 resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full py-5 bg-black hover:bg-gray-900 text-white font-black text-[11px] uppercase tracking-[0.3em] transition-all">
                                    Gönder
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
