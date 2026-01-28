import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Store } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function LoginPage() {
    const [accountType, setAccountType] = useState<'musician' | 'venue'>('musician');

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <div className="flex-grow flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                            Bem-vindo de volta
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Ou{' '}
                            <Link to="/register" className="font-medium text-[#fc6a03] hover:text-[#e55e00]">
                                crie sua conta agora
                            </Link>
                        </p>
                    </div>

                    <div className="mt-8 space-y-6">
                        <div className="flex gap-4 mb-6">
                            <button
                                onClick={() => setAccountType('musician')}
                                className={`flex-1 flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${accountType === 'musician'
                                        ? 'border-[#fc6a03] bg-orange-50 text-[#fc6a03]'
                                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                                    }`}
                            >
                                <User size={32} className="mb-2" />
                                <span className="font-medium">Músico</span>
                            </button>
                            <button
                                onClick={() => setAccountType('venue')}
                                className={`flex-1 flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${accountType === 'venue'
                                        ? 'border-[#fc6a03] bg-orange-50 text-[#fc6a03]'
                                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                                    }`}
                            >
                                <Store size={32} className="mb-2" />
                                <span className="font-medium">Casa de Show</span>
                            </button>
                        </div>

                        <form className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div className="mb-4">
                                    <label htmlFor="email-address" className="sr-only">E-mail</label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#fc6a03] focus:border-[#fc6a03] focus:z-10 sm:text-sm"
                                        placeholder="Endereço de e-mail"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">Senha</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#fc6a03] focus:border-[#fc6a03] focus:z-10 sm:text-sm"
                                        placeholder="Senha"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-[#fc6a03] focus:ring-[#fc6a03] border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Lembrar de mim
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-[#fc6a03] hover:text-[#e55e00]">
                                        Esqueceu sua senha?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#fc6a03] hover:bg-[#e55e00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fc6a03]"
                                >
                                    Entrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
