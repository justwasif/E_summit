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
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main> 
            <Sponsors/>
            <Events/>
            <Speakers/>
            <SponsorsPage/>
            <Testimonials/>
            <FAQ/>
            <Footer />

        </div>
    );
};

export default Layout;