import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { MessageCircle, Users, Unlock, Zap } from 'lucide-react';

export default function NoBureaucracyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-[#101010] text-white py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
                            <Unlock className="w-6 h-6 text-[#fc6a03] mr-2" />
                            <span className="font-semibold text-sm tracking-uppercase">Liberdade Total</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Você conversa direto. <span className="text-[#fc6a03]">Sem atravessadores.</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Eliminamos o medo de "mais uma plataforma que complica". Aqui a gente descomplica.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="py-20 px-4 max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Na Houser Band, não existe intermediário.</h2>
                                <p className="text-lg text-gray-600">
                                    Ninguém controla seu contato ou negociação. A plataforma organiza o encontro, mas a decisão continua sendo 100% sua.
                                </p>
                            </div>

                            <ul className="space-y-6">
                                <li className="flex">
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                                        <MessageCircle className="w-6 h-6 text-[#fc6a03]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Chat Direto</h3>
                                        <p className="text-gray-600">Músicos e casas de show se falam diretamente.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                                        <Users className="w-6 h-6 text-[#fc6a03]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Contexto Certo</h3>
                                        <p className="text-gray-600">Nenhum perfil aparece fora do contexto certo.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                                        <Zap className="w-6 h-6 text-[#fc6a03]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Você Decide</h3>
                                        <p className="text-gray-600">Você escolhe com quem negociar e quando.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 text-white p-10 rounded-2xl relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#fc6a03] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

                            <h3 className="text-2xl font-bold mb-8 relative z-10">O que nós NÃO somos:</h3>

                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                    Sem contratos engessados
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                    Sem processos desnecessários
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                    Sem perda de tempo
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-800 relative z-10">
                                <Link
                                    to="/register"
                                    className="block w-full text-center bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    Entrar na plataforma agora
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
