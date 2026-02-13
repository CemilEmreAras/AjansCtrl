import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    { name: "BRAND 1", id: 1 },
    { name: "BRAND 2", id: 2 },
    { name: "BRAND 3", id: 3 },
    { name: "BRAND 4", id: 4 },
    { name: "BRAND 5", id: 5 },
    { name: "BRAND 6", id: 6 },
];

const Partners = () => {
    return (
        <section id="partners" className="py-32 bg-white">
            <div className="container mx-auto px-12">
                {/* Centered Headers */}
                <div className="text-center mb-24">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">İş Ortaklarımız</h2>
                    <p className="text-gray-500 text-sm">Birlikte başarı hikayeleri yazdığımız değerli markalar.</p>
                </div>

                {/* Brands Grid */}
                <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
                    {partners.map((partner) => (
                        <div key={partner.id} className="flex items-center gap-4 group cursor-default">
                            <div className="w-8 h-8 bg-gray-100 rounded-full transition-colors duration-300 group-hover:bg-[#A91D1D]/20"></div>
                            <span className="text-sm font-bold text-gray-400 tracking-widest uppercase transition-colors duration-300 group-hover:text-gray-900">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
