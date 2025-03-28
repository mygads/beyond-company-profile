import { Outlet } from 'react-router-dom';
import Footer from './Component/footer';
import Navbar from './Component/navbar';

const Layout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen"> {/* Changed from h-screen overflow-hidden */}
            <Navbar />
            
            <main className="flex-1 bg-white">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;