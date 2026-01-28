import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const imgImage1 = "./assets/4cae23605be7c6075f9ea1847f58a2694b68f9f4.png";
const imgImage2 = "./assets/3e6adb084347625f38d3ae6717fea43db4fccc85.png";
import videoBackground from "../assets/vieo/0127.mp4";
const imgChuttersnapD271DSogr8Unsplash1 = "./assets/052fbb54fde50d6d30fe0288d0f76757b392a49f.png";
const imgWhyKei8E2GalGie8Unsplash2 = "./assets/2b4639ccc4b1ff8c36f13928ca954d9e69b9048c.png";
const imgDriverAppLogo1 = "./assets/c35a1d1896b151c32b632f9c4751d451518ee488.png";
const imgRiderAppLogo1 = "./assets/bacdd6f4e1ebeae3eebadaaa3e494480fdf1f8d4.png";
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
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="mt-4 flex flex-col gap-3 pb-4">
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
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoBackground} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 px-4 py-12 w-full">
          <div className="p-6">
            <h1 className="text-white text-3xl font-medium mb-4">
              Conecte músicos e casas de show.
            </h1>
            <p className="text-white/80 text-sm mb-6">
              O Houser Band é o marketplace onde casas de show encontram artistas certos e músicos fecham shows com mais facilidade, na sua região e no seu estilo.
            </p>
            <button className="bg-[#fc6a03] text-white py-3 px-6 rounded-md font-medium text-sm">
              buscar shows
            </button>
            <p className="text-white/70 text-xs mt-4">
              saiba mais sobre musico e casa de show
            </p>
          </div>
        </div>
      </section>

      {/* Houser Bands for Business Section */}
      <section className="px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-medium mb-4">
          Houser Bands for Busines
        </h2>
        <p className="text-gray-700 text-base mb-6">
          Crie chamados para seus eventos, filtre artistas por estilo musical, localização e disponibilidade, e receba propostas direto de músicos interessados no seu palco.
        </p>
        <button className="bg-black text-white py-3 px-6 rounded-md font-medium text-sm inline-flex items-center gap-2">
          publicar show
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d={svgPaths.p2abd3300} fill="white" />
          </svg>
        </button>
      </section>

      {/* Features Cards */}
      <section className="px-4 py-12">
        <h2 className="text-2xl font-medium mb-8 text-center">
          Mais segurança e menos dor de cabeça
        </h2>

        <div className="space-y-6">
          {/* Card 1 */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={imgChuttersnapD271DSogr8Unsplash1}
              alt="Perfis verificados"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-medium mb-3">Perfis verificados</h3>
              <p className="text-gray-600 text-sm mb-4">
                Cuidar de show e músicos com perfis completos, histórico de feedbacks e certificação de habilidades.
              </p>
              <a href="#" className="text-sm font-medium underline">Learn more</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={imgWhyKei8E2GalGie8Unsplash2}
              alt="Contratações claras"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-medium mb-3">Contratações claras</h3>
              <p className="text-gray-600 text-sm mb-4">
                Negócios diretos, tudo por mensagem e estrutura transparente para garantir que tudo saia do jeito que foi acordado.
              </p>
              <a href="#" className="text-sm font-medium underline">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      {/* Access Cards Section */}
      <section className="bg-black py-12 px-4">
        <h2 className="text-white text-2xl font-medium mb-8 text-center">
          Tudo o que você precisa em um só lugar
        </h2>

        <div className="space-y-6 max-w-md mx-auto">
          {/* Musician Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <img
                src={imgDriverAppLogo1}
                alt="App Músico"
                className="w-20 h-20 rounded-xl shadow-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2">Acessar como músico</h3>
                <button className="mt-2">
                  <svg width="40" height="40" viewBox="0 0 68 58" fill="none">
                    <path d="M13.4763 9.16658L9.00633 4.69658L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z" fill="black" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Venue Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <img
                src={imgRiderAppLogo1}
                alt="App Casa de Show"
                className="w-20 h-20 rounded-xl shadow-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2">Acessar como casa de show</h3>
                <button className="mt-2">
                  <svg width="40" height="40" viewBox="0 0 68 58" fill="none">
                    <path d="M13.4763 9.16658L9.00633 4.69658L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z" fill="black" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="px-4 py-12 bg-white">
        <div className="space-y-8">
          {/* Card 1 */}
          <div>
            <div className="w-10 h-10 mb-4">
              <svg viewBox="0 0 40 40" fill="none">
                <g>
                  <path clipRule="evenodd" d={svgPaths.p3a4fb600} fill="black" fillRule="evenodd" />
                </g>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Sobre o Houser Band</h3>
            <p className="text-gray-600 text-base mb-4">
              Conectamos músicos e casas de show para tornar a contratação artística mais simples, rápida e justa.
            </p>
            <a href="#" className="text-sm font-medium underline">Learn more</a>
          </div>

          {/* Card 2 */}
          <div>
            <div className="w-10 h-10 mb-4">
              <svg viewBox="0 0 40 40" fill="none">
                <g>
                  <path clipRule="evenodd" d={svgPaths.p3a148880} fill="black" fillRule="evenodd" />
                </g>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Newsroom</h3>
            <p className="text-gray-600 text-base mb-4">
              See announcements about our latest releases, initiatives, and partnerships.
            </p>
            <a href="#" className="text-sm font-medium underline">Learn more</a>
          </div>

          {/* Card 3 */}
          <div>
            <div className="w-10 h-10 mb-4">
              <svg viewBox="0 0 40 40" fill="none">
                <g>
                  <path d={svgPaths.p36a85d40} fill="black" />
                </g>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Global Citizenship</h3>
            <p className="text-gray-600 text-base mb-4">
              Read about our commitment to making a positive impact in the cities we serve.
            </p>
            <a href="#" className="text-sm font-medium underline">Learn more</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-4 py-12">
        <div className="mb-8">
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
          <p className="text-[#fc6a03] text-2xl font-medium mb-6">Houser band</p>
        </div>

        {/* Footer Links */}
        <div className="space-y-8 mb-8">
          <div>
            <h4 className="text-xl font-medium mb-4">Para músicos</h4>
            <ul className="space-y-2 text-base">
              <li><a href="#">Encontrar shows</a></li>
              <li><a href="#">Criar perfil</a></li>
              <li><a href="#">Classificados</a></li>
              <li><a href="#">Ozymandias music</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-4">Para casas de show</h4>
            <ul className="space-y-2 text-base">
              <li><a href="#">Publicar eventos</a></li>
              <li><a href="#">Encontrar artistas</a></li>
              <li><a href="#">Gerenciar propostas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-4">Legal / Comunidade</h4>
            <ul className="space-y-2 text-base">
              <li><a href="#">Termos</a></li>
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">Diretrizes da comunidade</a></li>
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
