import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Filter } from 'lucide-react';

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([]);
    const [categories, setCategories] = useState(['Hepsi']);
    const [activeCategory, setActiveCategory] = useState('Hepsi');
    const [loading, setLoading] = useState(true);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/portfolio');
                const photoItems = response.data.filter(item => item.category === 'photo');
                setPhotos(photoItems);

                // Extract unique subcategories
                const subcats = ['Hepsi', ...new Set(photoItems
                    .map(p => p.subcategory)
                    .filter(s => s && s.trim() !== '')
                )];
                setCategories(subcats);
            } catch (error) {
                console.error('Error fetching photos:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPhotos();
    }, []);

    const filteredPhotos = activeCategory === 'Hepsi'
        ? photos
        : photos.filter(p => p.subcategory === activeCategory);

    if (loading) return null;
    if (photos.length === 0) return null;

    return (
        <section id="gallery" className="py-24 bg-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Anı Yakalıyoruz</h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-8">
                        Objektifimizden yansıyan özel kareler ve sanatsal çalışmalarımız.
                    </p>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20'
                                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-blue-500/50 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry Layout with CSS Columns */}
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPhotos.map((photo, index) => (
                            <motion.div
                                key={photo.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10 break-inside-avoid"
                                onClick={() => setSelectedPhoto(photo)}
                            >
                                <img
                                    src={`http://localhost:5001${photo.url}`}
                                    alt={photo.title}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <Maximize2 className="mx-auto mb-2 text-blue-400" />
                                        <h4 className="font-bold">{photo.title}</h4>
                                        <p className="text-xs text-gray-300">
                                            {photo.subcategory && <span className="text-blue-400 mr-2">[{photo.subcategory}]</span>}
                                            {photo.client}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredPhotos.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        Bu kategoride henüz fotoğraf bulunmuyor.
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            <X size={24} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="max-w-5xl w-full max-h-full flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={`http://localhost:5001${selectedPhoto.url}`}
                                alt={selectedPhoto.title}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            />
                            <div className="mt-6 text-center">
                                <h3 className="text-2xl font-bold mb-1">{selectedPhoto.title}</h3>
                                <p className="text-blue-400">
                                    {selectedPhoto.subcategory && <span className="bg-blue-500/10 px-2 py-0.5 rounded mr-3 text-sm">{selectedPhoto.subcategory}</span>}
                                    {selectedPhoto.client}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PhotoGallery;
