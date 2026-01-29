import { Link } from 'react-router-dom';
import svgPaths from "@/imports/svg-h9g25ytp4u";

export default function Footer() {
    return (
        <footer className="bg-black text-white px-4 py-12">
            {/* Footer Links */}
            <div className="space-y-8 mb-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-12 md:max-w-7xl md:mx-auto">
                {/* Logo Column */}
                <div className="mb-8 md:mb-0">
                    <div className="w-16 h-16 mb-6">
                        <svg className="w-full h-full" viewBox="0 0 165.293 152" fill="none">
                            <path d={svgPaths.pca19000} stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="8" />
                            <path d={svgPaths.p3f139b40} stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="8" />
                            <path d={svgPaths.p2f427440} stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="8" />
                            <path d="M82.6466 48.7534V148" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="8" />
                            <path d={svgPaths.p59f5400} stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="8" />
                            <path d={svgPaths.p24f09f00} stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="8" />
                            <path d={svgPaths.pc50f900} stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="8" />
                            <path d="M98.174 83.9568V113.194" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="8" />
                            <path d="M21.6346 104.841V90.9188" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="8" />
                            <path d={svgPaths.pb4a500} stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="8" />
                        </svg>
                    </div>
                    <p className="text-[#fc6a03] text-xl font-medium mb-6">Houser band</p>
                </div>

                <div>
                    <h4 className="text-xl font-medium mb-4">Para músicos</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link to="/marketplace/shows" className="hover:text-white transition-colors">Encontrar shows</Link></li>
                        <li><Link to="/register" className="hover:text-white transition-colors">Criar perfil</Link></li>
                        <li><Link to="/marketplace/shows" className="hover:text-white transition-colors">Classificados</Link></li>
                        <li><a href="#" className="hover:text-white transition-colors"><span className="text-[#D3AF37]">Ozymandias music</span> </a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-medium mb-4">Para casas de show</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link to="/publish" className="hover:text-white transition-colors">Publicar eventos</Link></li>
                        <li><Link to="/marketplace/musicians" className="hover:text-white transition-colors">Encontrar artistas</Link></li>
                        <li><a href="#" className="hover:text-white transition-colors">Gerenciar propostas</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-medium mb-4">Legal / Comunidade</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Diretrizes da comunidade</a></li>
                    </ul>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
                <a href="#" className="w-10 h-10">
                    <svg viewBox="0 0 40 40" fill="none">
                        <path d={svgPaths.p2164d200} fill="white" />
                    </svg>
                </a>
                <a href="#" className="w-10 h-10">
                    <svg viewBox="0 0 40 40" fill="none">
                        <path clipRule="evenodd" d={svgPaths.p2ef19680} fill="white" fillRule="evenodd" />
                    </svg>
                </a>
                <a href="#" className="w-10 h-10">
                    <svg viewBox="0 0 40 40" fill="none">
                        <path clipRule="evenodd" d={svgPaths.p935c800} fill="white" fillRule="evenodd" />
                    </svg>
                </a>
                <a href="#" className="w-10 h-10">
                    <svg viewBox="0 0 40 40" fill="none">
                        <path d={svgPaths.p2e79700} fill="white" />
                    </svg>
                </a>
            </div>

            {/* Language & Location */}
            <div className="flex gap-4 mb-8 text-base">
                <span>🌐 English</span>
                <span>📍 Jaipur</span>
            </div>

            {/* Help Center */}
            <p className="text-base mb-8">Visit Help Center</p>

            {/* Copyright */}
            <div className="border-t border-white/20 pt-6">
                <p className="text-base text-center">© 2026 Houser Band.</p>
            </div>
        </footer>
    );
}
