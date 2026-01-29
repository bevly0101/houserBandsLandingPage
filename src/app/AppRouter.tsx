import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ShowCatalog from '../pages/marketplace/ShowCatalog';
import MusicianCatalog from '../pages/marketplace/MusicianCatalog';
import PublishOptions from '../pages/publish/PublishOptions';
import InfoPage from '../pages/info/InfoPage';
import AboutHouserPage from '../pages/info/AboutHouserPage';
import TargetAudiencePage from '../pages/info/TargetAudiencePage';
import NoBureaucracyPage from '../pages/info/NoBureaucracyPage';

import ScrollToTop from '../components/common/ScrollToTop';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<LandingPage />} />

                {/* Auth */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Marketplace */}
                <Route path="/marketplace/shows" element={<ShowCatalog />} />
                <Route path="/marketplace/musicians" element={<MusicianCatalog />} />

                {/* Publish */}
                <Route path="/publish" element={<PublishOptions />} />

                {/* Info Pages */}
                <Route path="/how-it-works" element={<InfoPage variant="how-it-works" />} />
                <Route path="/for-musicians" element={<InfoPage variant="musicians" />} />
                <Route path="/for-venues" element={<InfoPage variant="venues" />} />
                <Route path="/info/about" element={<AboutHouserPage />} />
                <Route path="/info/target-audience" element={<TargetAudiencePage />} />
                <Route path="/info/no-bureaucracy" element={<NoBureaucracyPage />} />
            </Routes>
        </BrowserRouter>
    );
}
