import { useState } from 'react';
import { Search, MapPin, Music, Star, Filter } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// Mock Data
const MOCK_MUSICIANS = [
    {
        id: 1,
        name: "Banda Radiola",
        image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800&auto=format&fit=crop&q=60",
        location: "São Paulo, SP",
        rating: 4.8,
        reviews: 24,
        styles: ["Rock Alternativo", "Indie"],
    },
    {
        id: 2,
        name: "João da Viola",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
        location: "Belo Horizonte, MG",
        rating: 5.0,
        reviews: 12,
        styles: ["Sertanejo", "Modão"],
    },
    {
        id: 3,
        name: "Jazz Trio Groove",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&auto=format&fit=crop&q=60",
        location: "Rio de Janeiro, RJ",
        rating: 4.9,
        reviews: 35,
        styles: ["Jazz", "Instrumental"],
    },
    {
        id: 4,
        name: "DJ Luna",
        image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=800&auto=format&fit=crop&q=60",
        location: "Curitiba, PR",
        rating: 4.7,
        reviews: 18,
        styles: ["Eletrônica", "House"],
    },
];

export default function MusicianCatalog() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            {/* Header / Filters */}
            <div className="bg-white border-b sticky top-[72px] z-40 px-4 py-4 shadow-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar músicos, bandas ou instrumentos..."
                            className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-[#fc6a03] transition-all outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-50 whitespace-nowrap">
                            <MapPin size={18} /> Raio de Distância
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-50 whitespace-nowrap">
                            <Music size={18} /> Estilo Musical
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-50 whitespace-nowrap">
                            <Star size={18} /> Avaliação
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <main className="flex-grow px-4 py-8 max-w-7xl mx-auto w-full">
                <h1 className="text-2xl font-bold mb-6 text-gray-900">Músicos em Destaque</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {MOCK_MUSICIANS.map((musician) => (
                        <div key={musician.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer border border-gray-100">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={musician.image}
                                    alt={musician.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 text-white">
                                    <h3 className="font-bold text-xl">{musician.name}</h3>
                                    <div className="flex items-center text-white/90 text-sm">
                                        <MapPin size={14} className="mr-1" />
                                        {musician.location}
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-1 text-yellow-500 font-bold">
                                        <Star size={16} fill="currentColor" />
                                        <span>{musician.rating}</span>
                                        <span className="text-gray-400 font-normal text-xs">({musician.reviews})</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {musician.styles.map(style => (
                                        <span key={style} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                                            {style}
                                        </span>
                                    ))}
                                </div>

                                <button className="w-full py-2 bg-[#fc6a03] text-white rounded-lg font-medium hover:bg-[#e55e00] transition-colors shadow-sm">
                                    Ver Perfil
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
