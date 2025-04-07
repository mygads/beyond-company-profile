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
import ScrollToTop from './layout/scroll-top';
import logo from './assets/images/logo-beyond.png';

export const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route
                    path="/images/logo-beyond.png"
                    element={
                        <>
                            <MetaTags 
                                title="Logo Beyond Dreams Tours"
                                description="Explore the Australia with Beyond Dreams Tours, your trusted partner for educational tours, study tours, and leisure trips, providing unforgettable experiences for students and educators alike, with a focus on cultural immersion and academic enrichment, ensuring a well-rounded and enriching travel experience, tailored to meet the needs of students and educational institutions, while fostering global understanding and personal growth through travel, exploration, and learning."
                            />
                            <img src={logo} alt="logo-beyond-dreams-tours" />
                        </>
                    }
                />
                <Route element={<Layout/>}>  
                    <Route
                        path=""
                        element={
                            <>
                                <MetaTags 
                                    title="Beyond Dreams Tours - Educational Tours Australia"
                                    description="Explore the Australia with Beyond Dreams Tours, your trusted partner for educational tours, study tours, and leisure trips, providing unforgettable experiences for students and educators alike, with a focus on cultural immersion and academic enrichment, ensuring a well-rounded and enriching travel experience, tailored to meet the needs of students and educational institutions, while fostering global understanding and personal growth through travel, exploration, and learning."
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
                                    title="Beyond Dreams Tours - Educational Tours Australia"
                                    description="Explore the Australia with Beyond Dreams Tours, your trusted partner for educational tours, study tours, and leisure trips, providing unforgettable experiences for students and educators alike, with a focus on cultural immersion and academic enrichment, ensuring a well-rounded and enriching travel experience, tailored to meet the needs of students and educational institutions, while fostering global understanding and personal growth through travel, exploration, and learning."
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
                                    title="Beyond Dreams Tours - Educational Tours Australia"
                                    description="Explore the Australia with Beyond Dreams Tours, your trusted partner for educational tours, study tours, and leisure trips, providing unforgettable experiences for students and educators alike, with a focus on cultural immersion and academic enrichment, ensuring a well-rounded and enriching travel experience, tailored to meet the needs of students and educational institutions, while fostering global understanding and personal growth through travel, exploration, and learning."
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
                                    title="About Us - Beyond Dreams Tours - Educational Tours Australia"
                                    description="Learn more about Beyond Dreams Tours, your trusted partner for educational tours in Australia. We provide unforgettable experiences for students and educators alike, with a focus on cultural immersion and academic enrichment."
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
                                    title="Services - Beyond Dreams Tours - Educational Tours Australia"
                                    description="Explore the services offered by Beyond Dreams Tours, your trusted partner for educational tours in Australia. We provide unforgettable experiences for students and educators alike, with a focus on cultural immersion and academic enrichment."
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
                                    title="Articles - Beyond Dreams Tours - Educational Tours Australia"
                                    description="Read articles from our satisfied customers and learn more about educational tours in Australia. We provide unforgettable experiences for students and educators alike, with a focus on cultural immersion and academic enrichment."
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
                                    description="Discover how study tours enhance learning experiences for students, fostering cultural immersion and academic enrichment, and providing unforgettable experiences that promote personal growth and global understanding, while also offering educators a unique opportunity to engage with students in a dynamic and interactive environment, ensuring a well-rounded and enriching travel experience that meets the needs of students and educational institutions."
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
                                    title="Ultimate Packing Guide for Students on Study Tours"
                                    description="Discover the ultimate packing guide for students on study tours, ensuring a well-rounded and enriching travel experience that meets the needs of students and educational institutions, while fostering global understanding and personal growth through travel, exploration, and learning."
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
                                    description="Discover why Perth is the best destination for educational tours, offering a unique blend of cultural immersion, academic enrichment, and unforgettable experiences that promote personal growth and global understanding, while also providing educators with a dynamic and interactive environment to engage with students, ensuring a well-rounded and enriching travel experience that meets the needs of students and educational institutions."
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
                                    title="Top 5 Universities in Perth for Study Tours"
                                    description="Discover the top 5 universities in Perth for study tours, offering a unique blend of cultural immersion, academic enrichment, and unforgettable experiences that promote personal growth and global understanding, while also providing educators with a dynamic and interactive environment to engage with students, ensuring a well-rounded and enriching travel experience that meets the needs of students and educational institutions."
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
                                    title="Maximising Learning During Study Tour"
                                    description="Learn how to maximise learning during study tours, ensuring a well-rounded and enriching travel experience that meets the needs of students and educational institutions, while fostering global understanding and personal growth through travel, exploration, and learning."
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
                                    description="Learn how to manage travel budgets for student tours, ensuring a well-rounded and enriching travel experience that meets the needs of students and educational institutions, while fostering global understanding and personal growth through travel, exploration, and learning."
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
                                    description="Discover the best cultural spots in Perth for international students, offering a unique blend of cultural immersion, academic enrichment, and unforgettable experiences that promote personal growth and global understanding, while also providing educators with a dynamic and interactive environment to engage with students, ensuring a well-rounded and enriching travel experience that meets the needs of students and educational institutions."
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
                                    title="Partnership - Beyond Dreams Tours - Educational Tours Australia"
                                    description="Join us and become a partner with Beyond Dreams Tours, your trusted partner for educational tours in Australia. We provide unforgettable experiences for students and educators alike, with a focus on cultural immersion and academic enrichment."
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