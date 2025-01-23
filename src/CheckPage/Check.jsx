import React, { useEffect, useState } from 'react';
import './Check.css'; // Assuming your CSS is in App.css

const Check = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const imgElement = document.getElementById('ultimateImg');
        const rect = imgElement.getBoundingClientRect();
        // Check if the element is in the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setIsVisible(true);
            window.removeEventListener('scroll', handleScroll); // Remove listener after showing
        }
    };

    useEffect(() => {
        // Show the image on page load
        setIsVisible(true);

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`ultimateImg ${isVisible ? 'show' : ''}`} id="ultimateImg">
            <img className="mainImg" src="nedpic.webp" alt="Main" />
            <div className="purpleBox">
                <p className="purpleText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                    purus lectus viverra in semper nec pretium mus.
                </p>
            </div>
        </div>
    );
};

export default Check;
