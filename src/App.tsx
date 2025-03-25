import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Layout from './layout/layout';
import { About } from './pages/About';
import { Services } from './pages/Services';
import MetaTags from './component/MetaTags';
import { Articles } from './pages/Articles';
import { Partnership } from './pages/Partnership';

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
                                    title="Beyond Dreams Tours"
                                    description="Welcome to Beyond Dreams Tours - Your trusted partner for quality services"
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
                                    title="Beyond Dreams Tours"
                                    description="Welcome to Beyond Dreams Tours - Your trusted partner for quality services"
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
                                    title="Beyond Dreams Tours"
                                    description="Welcome to Beyond Dreams Tours - Your trusted partner for quality services"
                                />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <>
                                <MetaTags 
                                    title="About Us"
                                    description="Learn more about Beyond Dreams Tours"
                                />
                                <About />
                            </>
                        }
                    />
                    <Route
                        path="/services"
                        element={
                            <>
                                <MetaTags 
                                    title="Services"
                                    description="Professional services offered by Beyond Dreams Tours"
                                />
                                <Services />
                            </>
                        }
                    />
                    
                    <Route
                        path="/articles"
                        element={
                            <>
                                <MetaTags 
                                    title="Articles"
                                    description="Read articles from our satisfied customers"
                                />
                                <Articles />
                            </>
                        }
                    />
                    <Route
                        path="partnership"
                        element={
                            <>
                                <MetaTags 
                                    title="Partnership"
                                    description="Join us and become a partner"
                                />
                                <Partnership />
                            </>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App