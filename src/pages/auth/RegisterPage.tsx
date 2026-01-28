import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Store, ArrowLeft, Check } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [accountType, setAccountType] = useState<'musician' | 'venue' | null>(null);

    // Form State
    const [musicianData, setMusicianData] = useState({
        name: '',
        styles: '',
        city: '',
        range: 50,
    });

    const [venueData, setVenueData] = useState({
        name: '',
        address: '',
        stylesWanted: '',
    });

    const handleTypeSelect = (type: 'musician' | 'venue') => {
        setAccountType(type);
        setStep(2);
    };

    const handleMusicianSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registering Musician:', musicianData);
        // Add registration logic here
    };

    const handleVenueSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registering Venue:', venueData);
        // Add registration logic here
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <div className="flex-grow flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-2xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Crie sua conta
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Junte-se à comunidade Houser e conecte-se com oportunidades.
                        </p>
                    </div>

                    {step === 2 && (
                        <button
                            onClick={() => setStep(1)}
                            className="mb-6 flex items-center text-sm text-gray-500 hover:text-gray-900"
                        >
                            <ArrowLeft size={16} className="mr-1" /> Voltar
                        </button>
                    )}

                    {step === 1 && (
                        <div className="grid md:grid-cols-2 gap-6">
                            <button
                                onClick={() => handleTypeSelect('musician')}
                                className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-[#fc6a03] hover:bg-orange-50 transition-all text-left"
                            >
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6 text-[#fc6a03] group-hover:bg-[#fc6a03] group-hover:text-white transition-colors">
                                    <User size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Sou Músico</h3>
                                <p className="text-gray-600 text-sm">
                                    Crie seu perfil, mostre seu talento e encontre shows na sua região.
                                </p>
                            </button>

                            <button
                                onClick={() => handleTypeSelect('venue')}
                                className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-[#fc6a03] hover:bg-orange-50 transition-all text-left"
                            >
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6 text-[#fc6a03] group-hover:bg-[#fc6a03] group-hover:text-white transition-colors">
                                    <Store size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Sou Casa de Show</h3>
                                <p className="text-gray-600 text-sm">
                                    Publique eventos, encontre artistas incríveis e lote sua casa.
                                </p>
                            </button>
                        </div>
                    )}

                    {step === 2 && accountType === 'musician' && (
                        <form onSubmit={handleMusicianSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nome Artístico / Banda</label>
                                <input
                                    type="text"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fc6a03] focus:ring-[#fc6a03] py-3 px-4 border"
                                    value={musicianData.name}
                                    onChange={(e) => setMusicianData({ ...musicianData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Estilos Musicais (separe por vírgula)</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Rock, Pop, Jazz..."
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fc6a03] focus:ring-[#fc6a03] py-3 px-4 border"
                                    value={musicianData.styles}
                                    onChange={(e) => setMusicianData({ ...musicianData, styles: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Cidade Base</label>
                                <input
                                    type="text"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fc6a03] focus:ring-[#fc6a03] py-3 px-4 border"
                                    value={musicianData.city}
                                    onChange={(e) => setMusicianData({ ...musicianData, city: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Raio de Atuação (km): {musicianData.range}km</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="500"
                                    className="mt-2 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#fc6a03]"
                                    value={musicianData.range}
                                    onChange={(e) => setMusicianData({ ...musicianData, range: parseInt(e.target.value) })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#fc6a03] hover:bg-[#e55e00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fc6a03]"
                            >
                                Criar Perfil de Músico
                            </button>
                        </form>
                    )}

                    {step === 2 && accountType === 'venue' && (
                        <form onSubmit={handleVenueSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nome do Local</label>
                                <input
                                    type="text"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fc6a03] focus:ring-[#fc6a03] py-3 px-4 border"
                                    value={venueData.name}
                                    onChange={(e) => setVenueData({ ...venueData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Endereço Completo</label>
                                <input
                                    type="text"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fc6a03] focus:ring-[#fc6a03] py-3 px-4 border"
                                    value={venueData.address}
                                    onChange={(e) => setVenueData({ ...venueData, address: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Estilos Procurados (separe por vírgula)</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Sertanejo, Pagode, Rock..."
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fc6a03] focus:ring-[#fc6a03] py-3 px-4 border"
                                    value={venueData.stylesWanted}
                                    onChange={(e) => setVenueData({ ...venueData, stylesWanted: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#fc6a03] hover:bg-[#e55e00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fc6a03]"
                            >
                                Criar Perfil de Casa de Show
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
