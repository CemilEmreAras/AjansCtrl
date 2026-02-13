import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Gallery = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/portfolio');
                const filtered = response.data.filter(item => !item.category || item.category === 'project');
                setPortfolio(filtered);
            } catch (error) {
                console.error('Error fetching portfolio:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPortfolio();
    }, []);

    if (loading) {
        return <div className="text-center py-20">Yükleniyor...</div>;
    }

    return (
        <section id="portfolio" className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Portföyümüz</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Seçkin müşterilerimiz için hazırladığımız en son çalışmalarımız.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolio.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all"
                        >
                            {item.type === 'image' ? (
                                <img
                                    src={`http://localhost:5001${item.url}`}
                                    alt={item.title}
                                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            ) : (
                                <video
                                    src={`http://localhost:5001${item.url}`}
                                    className="w-full h-72 object-cover"
                                    controls
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-blue-400 text-sm font-medium">{item.client}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {portfolio.length === 0 && (
                    <div className="text-center py-20 text-gray-500 border-2 border-dashed border-white/10 rounded-2xl">
                        Henüz içerik bulunmuyor.
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
