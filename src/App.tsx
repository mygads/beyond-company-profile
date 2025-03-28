import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Layout from './layout/layout';
import { About } from './pages/About';
import { Services } from './pages/Services';
import MetaTags from './component/MetaTags';
import { Articles } from './pages/Articles';
import { Partnership } from './pages/Partnership';
import HowStudyToursEnhanceLearning from './component/articles/post/HowStudyToursEnhanceLearning';
import UltimatePackingGuide from './component/articles/post/UltimatePackingGuide';
import WhyPerthBestDestination from './component/articles/post/WhyPerthBestDestination';
import TopUniversitiesInPerth from './component/articles/post/TopUniversitiesPerthStudyTour';
import MaximisingLearningDuringStudyTour from './component/articles/post/MaximisingLearningDuringStudy';
import ManageTravelBudgets from './component/articles/post/ManageTravelBudgetStudent';
import BestCulturalSpotsPerth from './component/articles/post/CulturalSpotsPerth';

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
                        path="/articles/how-study-tours-enhance-learning"
                        element={
                            <>
                                <MetaTags 
                                    title="How Study Tours Enhance Learning"
                                    description="Discover how study tours enhance learning beyond the classroom"
                                />
                                <HowStudyToursEnhanceLearning />
                            </>
                        }
                    />
                    <Route
                        path="/articles/ultimate-packing-guide-students"
                        element={
                            <>
                                <MetaTags 
                                    title="Ultimate Packing Guide"
                                    description="Your ultimate packing guide for study tours"
                                />
                                <UltimatePackingGuide />
                            </>
                        }
                    />
                    <Route
                        path="/articles/why-perth-best-destination"
                        element={
                            <>
                                <MetaTags 
                                    title="Why Perth is the Best Destination for Educational Tours"
                                    description="Discover why Perth is the best destination for educational tours"
                                />
                                <WhyPerthBestDestination />
                            </>
                        }
                    />
                    <Route
                        path="/articles/top-universities-perth-study-tours"
                        element={
                            <>
                                <MetaTags 
                                    title="Top 5 Must-Visit Universities in Perth for Study Tours"
                                    description="Explore the top 5 universities in Perth for study tours"
                                />
                                <TopUniversitiesInPerth />
                            </>
                        }
                    />
                    <Route
                        path="/articles/maximising-learning-study-tour"
                        element={
                            <>
                                <MetaTags 
                                    title="Maximising Learning During a Study Tour"
                                    description="Learn how to maximise your learning during a study tour"
                                />
                                <MaximisingLearningDuringStudyTour />
                            </>
                        }
                    />
                    <Route
                        path="/articles/manage-travel-budgets-student-tours"
                        element={
                            <>
                                <MetaTags 
                                    title="Manage Travel Budgets for Student Tours"
                                    description="Learn how to manage travel budgets for student tours"
                                />
                                <ManageTravelBudgets />
                            </>
                        }
                    />
                    <Route
                        path="/articles/cultural-spots-perth-international-students"
                        element={
                            <>
                                <MetaTags 
                                    title="Best Cultural Spots in Perth for International Students"
                                    description="Discover the best cultural spots in Perth for international students"
                                />
                                <BestCulturalSpotsPerth />
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