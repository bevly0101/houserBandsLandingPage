import { useState } from 'react';
import { Search, MapPin, Music, Filter } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// Mock Data
const MOCK_SHOWS = [
    {
        id: 1,
        name: "Bar do Luiz",
        image: "https://images.unsplash.com/photo-1514525253440-b393452e3383?w=800&auto=format&fit=crop&q=60",
        location: "São Paulo, SP - Pinheiros",
        styles: ["Rock", "Pop Rock"],
        price: "R$ 500,00",
    },
    {
        id: 2,
        name: "Espaço Cultural Som",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60",
        location: "Rio de Janeiro, RJ - Lapa",
        styles: ["Samba", "MPB"],
        price: "A negociar",
    },
    {
        id: 3,
        name: "Pub 92",
        image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=800&auto=format&fit=crop&q=60",
        location: "Curitiba, PR - Centro",
        styles: ["Jazz", "Blues"],
        price: "R$ 800,00",
    },
    {
        id: 4,
        name: "Vila Mix Local",
        image: "https://images.unsplash.com/photo-1570872626485-d8ffea69f463?w=800&auto=format&fit=crop&q=60",
        location: "Goiânia, GO - Marista",
        styles: ["Sertanejo"],
        price: "R$ 1.200,00",
    },
];

export default function ShowCatalog() {
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
                            placeholder="Buscar shows, casas ou cidades..."
                            className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-[#fc6a03] transition-all outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-50 whitespace-nowrap">
                            <MapPin size={18} /> Região
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-50 whitespace-nowrap">
                            <Music size={18} /> Estilo Musical
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-50 whitespace-nowrap text-[#fc6a03] border-[#fc6a03]">
                            <Filter size={18} /> Filtros Avançados
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <main className="flex-grow px-4 py-8 max-w-7xl mx-auto w-full">
                <h1 className="text-2xl font-bold mb-6 text-gray-900">Shows Disponíveis</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {MOCK_SHOWS.map((show) => (
                        <div key={show.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer border border-gray-100">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={show.image}
                                    alt={show.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-800">
                                    {show.price}
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-1">{show.name}</h3>
                                <div className="flex items-center text-gray-500 text-sm mb-3">
                                    <MapPin size={14} className="mr-1" />
                                    {show.location}
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {show.styles.map(style => (
                                        <span key={style} className="px-2 py-1 bg-orange-50 text-[#fc6a03] text-xs rounded-md font-medium">
                                            {style}
                                        </span>
                                    ))}
                                </div>

                                <button className="w-full py-2 border border-[#fc6a03] text-[#fc6a03] rounded-lg font-medium hover:bg-[#fc6a03] hover:text-white transition-colors">
                                    Ver Detalhes
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
