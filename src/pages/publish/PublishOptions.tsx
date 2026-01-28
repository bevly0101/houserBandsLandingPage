import { Link } from 'react-router-dom';
import { User, Megaphone, ArrowRight } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function PublishOptions() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            <main className="flex-grow flex items-center justify-center px-4 py-12">
                <div className="max-w-4xl w-full">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            O que você deseja fazer hoje?
                        </h1>
                        <p className="text-lg text-gray-600">
                            Escolha como você quer encontrar o talento ideal para o seu palco.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contratar Músico */}
                        <Link
                            to="/marketplace/musicians"
                            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-[#fc6a03] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <User size={120} />
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                                    <User size={32} />
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                    Contratar Músico
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Navegue pelo catálogo de artistas, verifique avaliações e entre em contato direto com quem combina com sua casa.
                                </p>

                                <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                                    Buscar talentos <ArrowRight size={20} className="ml-2" />
                                </div>
                            </div>
                        </Link>

                        {/* Anunciar Show */}
                        <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-gray-300 relative overflow-hidden grayscale opacity-70 cursor-not-allowed">
                            <div className="absolute top-4 right-4 bg-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">
                                EM BREVE
                            </div>

                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Megaphone size={120} />
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 text-[#fc6a03]">
                                    <Megaphone size={32} />
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                    Anunciar Show
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Crie uma vaga aberta para o seu evento e deixe que os músicos enviem propostas para você.
                                </p>

                                <div className="flex items-center text-gray-400 font-medium">
                                    Funcionalidade indisponível
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
