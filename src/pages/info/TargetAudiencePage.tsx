import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Music, Store, Check } from 'lucide-react';

export default function TargetAudiencePage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-[#101010] text-white py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            A Houser Band é para quem quer tocar mais e contratar melhor.
                        </h1>
                        <p className="text-xl text-gray-400 mt-4">
                            Filtramos o público certo e afastamos curiosos. Mais conversão, menos ruído.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-20 px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Musicians Section */}
                        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#fc6a03] rounded-full flex items-center justify-center mb-8">
                                <Music className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Para músicos e bandas</h2>

                            <div className="mb-8">
                                <p className="text-lg font-medium mb-4 text-gray-700">Se você é músico ou banda e:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-[#fc6a03] mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-600">Quer encontrar shows sem depender só de indicações</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-[#fc6a03] mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-600">Busca oportunidades compatíveis com seu estilo</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-[#fc6a03] mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-600">Quer ser encontrado por casas de show da sua região</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-gray-600 italic border-l-4 border-gray-300 pl-4">
                                "A Houser Band mostra apenas os shows que fazem sentido para você. Você define seu perfil e aparece para quem realmente procura seu som."
                            </p>
                        </div>

                        {/* Venues Section */}
                        <div className="bg-[#1a1a1a] text-white rounded-2xl p-8 md:p-12 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-8">
                                <Store className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold mb-6">Para casas de show</h2>

                            <div className="mb-8">
                                <p className="text-lg font-medium mb-4 text-gray-300">Se você é dono ou produtor e:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-[#fc6a03] mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-400">Precisa encontrar músicos rápido</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-[#fc6a03] mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-400">Quer filtrar por estilo, avaliação e localização</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-[#fc6a03] mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-400">Quer evitar negociações longas e desalinhadas</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-gray-400 italic border-l-4 border-[#fc6a03] pl-4">
                                "A Houser Band te conecta diretamente aos artistas certos, no momento certo."
                            </p>
                        </div>
                    </div>

                    {/* CTA Footer */}
                    <div className="mt-16 text-center">
                        <Link
                            to="/register"
                            className="inline-block bg-[#fc6a03] text-white py-4 px-10 rounded-full font-bold text-xl hover:bg-[#e55e00] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200"
                        >
                            Crie sua conta e comece agora
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
