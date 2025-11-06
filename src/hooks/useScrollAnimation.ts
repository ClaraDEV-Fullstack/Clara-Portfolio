import { useEffect, useState } from 'react';

export default function useScrollAnimation(scrollThreshold = 300) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show the element when user scrolls down more than the threshold
            if (window.pageYOffset > scrollThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Check on initial load
        toggleVisibility();

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, [scrollThreshold]);

    return isVisible;
}