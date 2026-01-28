import { Link } from 'react-router-dom';
import { Music, Store, Search, Calendar, Star, DollarSign, CheckCircle } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

interface InfoPageProps {
    variant: 'how-it-works' | 'musicians' | 'venues';
}

export default function InfoPage({ variant }: InfoPageProps) {
    const content = {
        'how-it-works': {
            title: 'Como funciona o Houser Band',
            subtitle: 'Simples, transparente e direto ao ponto.',
            cta: 'Começar agora',
            link: '/register',
            steps: [
                {
                    icon: <Search className="w-8 h-8 text-[#fc6a03]" />,
                    title: '1. Busque',
                    text: 'Músicos procuram shows. Casas de show procuram artistas. Use nossos filtros inteligentes.'
                },
                {
                    icon: <CheckCircle className="w-8 h-8 text-[#fc6a03]" />,
                    title: '2. Conecte-se',
                    text: 'Negocie diretamente pela plataforma ou veja os contatos para combinar os detalhes.'
                },
                {
                    icon: <Star className="w-8 h-8 text-[#fc6a03]" />,
                    title: '3. Show Time',
                    text: 'Realize o evento e avalie a experiência para fortalecer a comunidade.'
                }
            ]
        },
        'musicians': {
            title: 'Houser Band para Músicos',
            subtitle: 'Mais palcos, menos ""corre"" desnecessário.',
            cta: 'Criar Perfil de Músico',
            link: '/register',
            steps: [
                {
                    icon: <Calendar className="w-8 h-8 text-[#fc6a03]" />,
                    title: 'Encontre Gigs',
                    text: 'Vizualize casas de show que buscam exatamente o seu estilo musical.'
                },
                {
                    icon: <DollarSign className="w-8 h-8 text-[#fc6a03]" />,
                    title: 'Sem Taxas Ocultas',
                    text: 'O que você combina é o que você recebe. Transparência total.'
                },
                {
                    icon: <Store className="w-8 h-8 text-[#fc6a03]" />,
                    title: 'Ganhe Visibilidade',
                    text: 'Seja visto pelas melhores casas da sua região e construa sua reputação.'
                }
            ]
        },
        'venues': {
            title: 'Houser Band para Casas de Show',
            subtitle: 'A curadoria perfeita para o seu evento.',
            cta: 'Cadastrar Casa de Show',
            link: '/register',
            steps: [
                {
                    icon: <Music className="w-8 h-8 text-[#fc6a03]" />,
                    title: 'Variedade de Artistas',
                    text: 'Do sertanejo ao rock, encontre o som que seu público quer ouvir.'
                },
                {
                    icon: <CheckCircle className="w-8 h-8 text-[#fc6a03]" />,
                    title: 'Perfis Verificados',
                    text: 'Chega de surpresas. Veja vídeos, fotos e avaliações antes de contratar.'
                },
                {
                    icon: <Calendar className="w-8 h-8 text-[#fc6a03]" />,
                    title: 'Agenda Otimizada',
                    text: 'Publique suas datas livres e receba propostas de quem quer tocar.'
                }
            ]
        }
    };

    const data = content[variant];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-grow">
                {/* Hero */}
                <div className="bg-[#101010] text-white py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.title}</h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">{data.subtitle}</p>
                        <Link
                            to={data.link}
                            className="inline-block bg-[#fc6a03] text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-[#e55e00] transition-transform hover:scale-105"
                        >
                            {data.cta}
                        </Link>
                    </div>
                </div>

                {/* Steps Grid */}
                <div className="py-20 px-4 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        {data.steps.map((step, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                                <div className="mb-6 flex justify-center bg-white w-20 h-20 mx-auto rounded-full items-center shadow-sm">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="bg-orange-50 py-16 px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Pronto para começar?</h2>
                    <Link
                        to="/register"
                        className="inline-block bg-black text-white py-3 px-8 rounded-md font-bold hover:bg-gray-800 transition-colors"
                    >
                        Criar minha conta gratuita
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
