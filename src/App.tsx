import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Layout from './layout/layout';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { Galery } from './pages/Galery';
import { Review } from './pages/Review';
import MetaTags from './component/MetaTags';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>  
                    <Route
                        path=""
                        element={
                            <>
                                <MetaTags 
                                    title="TRD Elite Services"
                                    description="Welcome to TRD Elite Services - Your trusted partner for quality services"
                                />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                <MetaTags 
                                    title="TRD Elite Services"
                                    description="Welcome to TRD Elite Services - Your trusted partner for quality services"
                                />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/home"
                        element={
                            <>
                                <MetaTags 
                                    title="TRD Elite Services"
                                    description="Welcome to TRD Elite Services - Your trusted partner for quality services"
                                />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/about-us"
                        element={
                            <>
                                <MetaTags 
                                    title="About Us"
                                    description="Learn more about TRD Elite Services"
                                />
                                <AboutUs />
                            </>
                        }
                    />
                    <Route
                        path="/services"
                        element={
                            <>
                                <MetaTags 
                                    title="Services"
                                    description="Professional services offered by TRD Elite Services"
                                />
                                <Services />
                            </>
                        }
                    />
                    <Route
                        path="/gallery"
                        element={
                            <>
                                <MetaTags 
                                    title="Gallery"
                                    description="View our gallery of professional services and results"
                                />
                                <Galery />
                            </>
                        }
                    />
                    <Route
                        path="/review"
                        element={
                            <>
                                <MetaTags 
                                    title="Review"
                                    description="Read reviews from our satisfied customers"
                                />
                                <Review />
                            </>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App