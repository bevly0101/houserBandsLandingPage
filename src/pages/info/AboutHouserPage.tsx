import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Search, Music, Home } from 'lucide-react';

export default function AboutHouserPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-[#101010] text-white py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Conectar músicos e casas de show não deveria ser complicado.
                        </h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="py-20 px-4 max-w-3xl mx-auto">
                    <div className="prose prose-lg mx-auto text-gray-700">
                        <p className="mb-6">
                            Hoje, a contratação artística ainda depende muito de indicações, mensagens espalhadas e falta de visibilidade.
                            Músicos perdem oportunidades. Casas de show perdem tempo procurando o artista certo.
                        </p>
                        <p className="mb-6">
                            A <span className="font-bold text-[#fc6a03]">Houser Band</span> nasceu para resolver isso de forma simples: um marketplace onde músicos e casas de show se encontram por localização, estilo e necessidade real.
                        </p>
                        <p className="text-xl font-medium text-gray-900 border-l-4 border-[#fc6a03] pl-4">
                            Aqui, a conexão é direta, transparente e pensada para quem vive de música — no palco ou na produção.
                        </p>
                    </div>
                </div>

                {/* Bottom CTA Block */}
                <div className="bg-orange-50 py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-10 text-gray-900">Comece agora:</h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/marketplace/shows" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center group">
                                <Search className="w-10 h-10 text-[#fc6a03] mb-4 group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-gray-900">Buscar shows na sua região</span>
                            </Link>

                            <Link to="/register" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center group">
                                <Music className="w-10 h-10 text-[#fc6a03] mb-4 group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-gray-900">Criar perfil como músico</span>
                            </Link>

                            <Link to="/register" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center group">
                                <Home className="w-10 h-10 text-[#fc6a03] mb-4 group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-gray-900">Encontrar músicos para seu espaço</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
