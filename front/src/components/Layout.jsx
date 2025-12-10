import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Sponsors from '../pages/sponsors/Sponsors';
import Events from '../pages/events/Events';
import Speakers from '../pages/speakers/Speakers';
import SponsorsPage from '../pages/sponsors/SponsorsPage';
import Testimonials from "../pages/testimonials/Testimonials.jsx";
import FAQ from "../pages/faq/FAQ.jsx";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen scroll-smooth">
            <Header />
            <main className="flex-grow">
                <div id="home" className="snap-start">
                    <Outlet />
                </div>
                <div id="sponsors-bar" className="snap-start">
                    <Sponsors/>
                </div>
                <div id="events" className="snap-start">
                    <Events/>
                </div>
                <div id="speakers" className="snap-start">
                    <Speakers/>
                </div>
                <div id="partners" className="snap-start">
                    <SponsorsPage/>
                </div>
                <div id="testimonials" className="snap-start">
                    <Testimonials/>
                </div>
                <div id="faq" className="snap-start">
                    <FAQ/>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;