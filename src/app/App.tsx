import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const imgImage1 = "/src/assets/4cae23605be7c6075f9ea1847f58a2694b68f9f4.png";

import videoBackground from "../assets/vieo/video_BG_Desktop.mp4";
import videoBackgroundMobile from "../assets/vieo/0127.mp4";
import imgBusinessBg from "../assets/25d4a9ba6d456c8d53adccd1e78651afc1d0b61b.png";
import imgChuttersnapD271DSogr8Unsplash1 from "../assets/052fbb54fde50d6d30fe0288d0f76757b392a49f.png";
import imgWhyKei8E2GalGie8Unsplash2 from "../assets/2b4639ccc4b1ff8c36f13928ca954d9e69b9048c.png";
import imgDriverAppLogo1 from "../assets/c35a1d1896b151c32b632f9c4751d451518ee488.png";
import imgRiderAppLogo1 from "../assets/bacdd6f4e1ebeae3eebadaaa3e494480fdf1f8d4.png";
import svgPaths from "@/imports/svg-h9g25ytp4u";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#101010] px-4 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <svg className="w-full h-full" viewBox="0 0 76.0001 69.9999" fill="none">
                <path d="M2.50005 32.3789L37.8163 2.5L73.5001 32.3789" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                <path d="M17.5658 36.0786L17.3208 53.8545" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                <path d="M58.7306 36.9753L58.8939 53.8535" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                <path d="M38.0002 22.7012V67.4999" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                <path d="M51.8699 30.1531L51.7064 60.6772" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                <path d="M24.2633 60.6772L24.3449 30.1531" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                <path d="M31.2057 36.0786L31.2875 53.8545" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                <path d="M45.0091 38.5916V51.7888" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                <path d="M10.4601 48.0184V41.7341" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
                <path d="M65.8366 48.0184L65.9182 41.7341" stroke="#FC6A03" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5" />
              </svg>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 ml-8">
              <a href="#" className="text-white text-sm hover:text-[#fc6a03] transition-colors">como funciona</a>
              <a href="#" className="text-white text-sm hover:text-[#fc6a03] transition-colors">para músicos</a>
              <a href="#" className="text-white text-sm hover:text-[#fc6a03] transition-colors">para casas de show</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-white text-sm hover:text-[#fc6a03] transition-colors">Criar Conta</a>
            <button className="bg-[#fc6a03] text-white py-2 px-6 rounded-md text-sm hover:bg-[#e55e00] transition-colors">
              Entrar
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2 md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="mt-4 flex flex-col gap-3 pb-4 md:hidden">
            <a href="#" className="text-white text-base">como funciona</a>
            <a href="#" className="text-white text-base">para músicos</a>
            <a href="#" className="text-white text-base">para casas de show</a>
            <a href="#" className="text-white text-base">Criar Conta</a>
            <button className="bg-[#fc6a03] text-white py-2 px-6 rounded-md text-base">
              Entrar
            </button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          {/* Desktop Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden md:block w-full h-full object-cover"
          >
            <source src={videoBackground} type="video/mp4" />
          </video>

          {/* Mobile Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="md:hidden w-full h-full object-cover"
          >
            <source src={videoBackgroundMobile} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 px-4 py-12 w-full md:max-w-7xl md:mx-auto md:px-8 h-full flex items-center">
          <div className="p-6 md:p-0 md:w-1/2">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Conecte músicos e casas de show.
            </h1>
            <p className="text-white/80 text-sm md:text-lg mb-6 md:mb-8 font-light max-w-xl">
              O Houser Band é o marketplace onde casas de show encontram artistas certos e músicos fecham shows com mais facilidade, na sua região e no seu estilo.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="bg-[#fc6a03] text-white py-3 px-8 rounded-md font-medium text-sm md:text-base hover:bg-[#e55e00] transition-colors">
                buscar shows
              </button>
              <p className="text-white/70 text-xs md:text-sm mt-4 md:mt-3 underline cursor-pointer hover:text-white transition-colors">
                saiba mais sobre musico e casa de show
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Houser Bands for Business Section */}
      <section
        className="px-4 py-12 md:py-24 bg-gray-50 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imgBusinessBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Houser Bands for Busines
          </h2>
          <p className="text-white/90 text-base md:text-xl mb-8 max-w-2xl">
            Crie chamados para seus eventos, filtre artistas por estilo musical, localização e disponibilidade, e receba propostas direto de músicos interessados no seu palco.
          </p>
          <button className="bg-black text-white py-3 px-8 rounded-md font-medium text-sm md:text-base inline-flex items-center gap-2 hover:bg-gray-900 transition-colors">
            publicar show
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d={svgPaths.p2abd3300} fill="white" />
            </svg>
          </button>
        </div>
      </section>

      {/* Features Cards */}
      <section className="px-4 py-12 md:py-20 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-left md:text-left text-[#101010]">
          Mais segurança e menos dor de cabeça
        </h2>

        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
          {/* Card 1 */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={imgChuttersnapD271DSogr8Unsplash1}
              alt="Perfis verificados"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-6 md:p-8 bg-white h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3 md:text-2xl">Perfis verificados</h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                  Casas de show e músicos com perfis completos, histórico de eventos e avaliações da comunidade.
                </p>
              </div>
              <div className="flex gap-4 text-xs font-medium text-black underline">
                <a href="#">Read About Our Community Guidelines</a>
                <a href="#">See all safety features</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={imgWhyKei8E2GalGie8Unsplash2}
              alt="Contratações claras"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-6 md:p-8 bg-white h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3 md:text-2xl">Contratações claras</h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                  Negocie valores, datas, estilo musical e estrutura diretamente pela plataforma, sem ruído ou mal-entendido.
                </p>
              </div>
              <div>
                <a href="#" className="text-xs font-medium text-black underline">View All Cities</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Cards Section */}
      <section className="bg-black py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-10 text-left md:text-left">
            Tudo o que você precisa em um só lugar
          </h2>

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            {/* Musician Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-6">
                <img
                  src={imgDriverAppLogo1}
                  alt="App Músico"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md"
                />
                <h3 className="text-xl md:text-2xl font-bold">Acessar como músico</h3>
              </div>
              <button className="flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 68 58" fill="none" className="transform hover:translate-x-1 transition-transform">
                  <path d="M13.4763 9.16658L9.00633 4.69658L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z" fill="black" transform="scale(3)" />
                </svg>
              </button>
            </div>

            {/* Venue Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-6">
                <img
                  src={imgRiderAppLogo1}
                  alt="App Casa de Show"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md"
                />
                <h3 className="text-xl md:text-2xl font-bold">Acessar como<br />casa de show</h3>
              </div>
              <button className="flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 68 58" fill="none" className="transform hover:translate-x-1 transition-transform">
                  <path d="M13.4763 9.16658L9.00633 4.69658L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z" fill="black" transform="scale(3)" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="px-4 py-12 md:py-16 md:px-8 max-w-7xl mx-auto bg-white">
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-12">
          {/* Card 1 */}
          <div>
            <div className="w-10 h-10 mb-4">
              <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                <g>
                  <path clipRule="evenodd" d={svgPaths.p3a4fb600} fill="black" fillRule="evenodd" />
                </g>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#101010]">Sobre a Houser Band</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Conectamos músicos e casas de show para tornar a contratação artística mais simples, rápida e justa.
            </p>
            <a href="#" className="text-sm font-medium underline text-[#101010]">Learn more</a>
          </div>

          {/* Card 2 */}
          <div>
            <div className="w-10 h-10 mb-4">
              <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                <g>
                  <path clipRule="evenodd" d={svgPaths.p3a148880} fill="black" fillRule="evenodd" />
                </g>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#101010]">Newsroom</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              See announcements about our latest releases, initiatives, and partnerships.
            </p>
            <a href="#" className="text-sm font-medium underline text-[#101010]">Learn more</a>
          </div>

          {/* Card 3 */}
          <div>
            <div className="w-10 h-10 mb-4">
              <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                <g>
                  <path d={svgPaths.p36a85d40} fill="black" />
                </g>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#101010]">Global Citizenship</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Read about our commitment to making a positive impact in the cities we serve.
            </p>
            <a href="#" className="text-sm font-medium underline text-[#101010]">Learn more</a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <li><a href="#" className="hover:text-white transition-colors">Encontrar shows</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Criar perfil</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Classificados</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ozymandias music</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-4">Para casas de show</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Publicar eventos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Encontrar artistas</a></li>
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
    </div>
  );
}
