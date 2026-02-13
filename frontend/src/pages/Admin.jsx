import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Upload, Trash2, CheckCircle, AlertCircle, Image as ImageIcon, Film } from 'lucide-react';
import { motion } from 'framer-motion';

const Admin = () => {
    const [items, setItems] = useState([]);
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        client: '',
        type: 'image',
        category: 'project',
        subcategory: ''
    });
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:5001/api/portfolio');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            const type = selectedFile.type.startsWith('video') ? 'video' : 'image';
            setFormData({ ...formData, type });
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return;

        setUploading(true);
        const data = new FormData();
        data.append('media', file);
        data.append('title', formData.title);
        data.append('client', formData.client);
        data.append('type', formData.type);
        data.append('category', formData.category);
        data.append('subcategory', formData.category === 'photo' ? formData.subcategory : '');

        try {
            await axios.post('http://localhost:5001/api/upload', data);
            setMessage({ type: 'success', text: 'Başarıyla yüklendi!' });
            setFile(null);
            setFormData({ title: '', client: '', type: 'image', category: 'project', subcategory: '' });
            e.target.reset();
            fetchItems();
        } catch (error) {
            console.error('Upload error:', error);
            setMessage({ type: 'error', text: 'Yükleme sırasında bir hata oluştu.' });
        } finally {
            setUploading(false);
            setTimeout(() => setMessage(null), 3000);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Bu öğeyi silmek istediğinize emin misiniz?')) return;
        try {
            await axios.delete(`http://localhost:5001/api/portfolio/${id}`);
            fetchItems();
        } catch (error) {
            console.error('Delete error:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <header className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Yönetim Paneli</h1>
                <p className="text-gray-400">İçeriklerinizi buradan yönetin ve yeni projeler/fotoğraflar ekleyin.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Upload Form */}
                <form onSubmit={handleUpload} className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6 h-fit">
                    <h2 className="text-xl font-bold mb-4">Yeni Ekle</h2>

                    <div>
                        <label className="block text-sm font-medium mb-2">Kategori</label>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                className={`py-2 rounded-lg border transition-all ${formData.category === 'project' ? 'bg-blue-600 border-blue-600' : 'bg-transparent border-white/10 text-gray-400'}`}
                                onClick={() => setFormData({ ...formData, category: 'project' })}
                            >
                                Proje (Ana Vitrin)
                            </button>
                            <button
                                type="button"
                                className={`py-2 rounded-lg border transition-all ${formData.category === 'photo' ? 'bg-emerald-600 border-emerald-600' : 'bg-transparent border-white/10 text-gray-400'}`}
                                onClick={() => setFormData({ ...formData, category: 'photo' })}
                            >
                                Fotoğraf (Galeri)
                            </button>
                        </div>
                    </div>

                    {formData.category === 'photo' && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="space-y-2"
                        >
                            <label className="block text-sm font-medium mb-2">Alt Kategori (Örn: Katalog, Logo, Sosyal Medya)</label>
                            <input
                                type="text"
                                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-emerald-500 transition-colors text-white"
                                placeholder="Alt kategori yazın..."
                                value={formData.subcategory}
                                onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                            />
                        </motion.div>
                    )}

                    <div>
                        <label className="block text-sm font-medium mb-2">Başlık</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                            placeholder="Çekim veya Proje adı..."
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Müşteri / Detay</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                            placeholder="Müşteri adı veya açıklama..."
                            value={formData.client}
                            onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                        />
                    </div>

                    <div className="relative group">
                        <label className="block text-sm font-medium mb-2">Medya Dosyası</label>
                        <div className="h-40 border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center group-hover:border-blue-500 transition-colors cursor-pointer relative">
                            <input
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={handleFileChange}
                                accept="image/*,video/*"
                                required
                            />
                            <Upload className="text-gray-400 mb-2" />
                            <p className="text-sm text-gray-400 px-4 text-center">
                                {file ? file.name : 'Dosya seçin veya sürükleyin'}
                            </p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={uploading}
                        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${uploading ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-emerald-500 hover:scale-[1.02]'
                            }`}
                    >
                        {uploading ? 'Yükleniyor...' : 'Yüklemeyi Başlat'}
                    </button>

                    {message && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`flex items-center gap-2 p-4 rounded-lg ${message.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                                }`}
                        >
                            {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                            <span>{message.text}</span>
                        </motion.div>
                    )}
                </form>

                {/* Items List */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 h-[600px] flex flex-col">
                    <h2 className="text-xl font-bold mb-6">Yüklü İçerikler ({items.length})</h2>
                    <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                        {items.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 p-3 bg-black/20 rounded-xl border border-white/5 group">
                                <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
                                    {item.type === 'image' ? (
                                        <img src={`http://localhost:5001${item.url}`} className="w-full h-full object-cover" alt="" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                                            <Film size={24} />
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold truncate">{item.title}</h4>
                                    <p className="text-xs text-gray-500 flex items-center gap-2">
                                        <span className={`px-1.5 py-0.5 rounded uppercase font-bold text-[10px] ${item.category === 'photo' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                            {item.category === 'photo' ? 'Foto' : 'Proje'}
                                        </span>
                                        {item.subcategory && (
                                            <span className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] text-gray-300">
                                                {item.subcategory}
                                            </span>
                                        )}
                                        <span className="truncate">{item.client}</span>
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="p-2 text-gray-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                        {items.length === 0 && <p className="text-center text-gray-500 py-10">Henüz içerik yüklenmemiş.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
