import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();
    
    useEffect(() => {
        // More aggressive scroll to top approach
        window.scrollTo(0, 0);
        
        // Fallback for some browsers
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // For cases when the main content is in a specific container
        const mainContent = document.querySelector('main');
        if (mainContent) {
        mainContent.scrollTop = 0;
        }
        
    }, [pathname]);
    
    return null;
}

export default ScrollToTop;