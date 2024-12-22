import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landing.css';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Add random movement to stars
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            if (star instanceof HTMLElement) {
                star.style.left = `${randomX}px`;
                star.style.top = `${randomY}px`;
            }
        });

        // Add mousemove parallax effect
        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            stars.forEach(star => {
                if (star instanceof HTMLElement) {
                    const speed = parseFloat(star.getAttribute('data-speed') || '0.2');
                    const x = (window.innerWidth - mouseX * 100 * speed);
                    const y = (window.innerHeight - mouseY * 100 * speed);
                    star.style.transform = `translate(${x * 0.01}px, ${y * 0.01}px)`;
                }
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Add random sparkle positions
        const sparkles = document.querySelectorAll('.sparkle');
        const sparkleIntervals: number[] = [];

        sparkles.forEach(sparkle => {
            if (sparkle instanceof HTMLElement) {
                const interval = window.setInterval(() => {
                    const randomX = Math.random() * window.innerWidth;
                    const randomY = Math.random() * window.innerHeight;
                    sparkle.style.left = `${randomX}px`;
                    sparkle.style.top = `${randomY}px`;
                }, 4000);
                sparkleIntervals.push(interval);
            }
        });

        // Cleanup function
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            sparkleIntervals.forEach(interval => clearInterval(interval));
        };
    }, []);

    const handleGetStarted = () => {
        navigate('/stories');
    };

    return (
        <div className="landing-page">
            <div className="stars-container">
                {[...Array(10)].map((_, i) => (
                    <div key={`star-${i}`} className="star" data-speed={0.2 + (i * 0.1)} />
                ))}
            </div>

            <div className="sparkles-container">
                {[...Array(8)].map((_, i) => (
                    <div key={`sparkle-${i}`} className="sparkle" />
                ))}
            </div>

            <div className="floating-elements">
                <div className="floating-element" style={{ top: '10%', left: '5%' }}>
                    <img 
                        src="https://i.pinimg.com/736x/d1/1c/f7/d11cf7d225fc5c58c43b23fcfa0a5f52.jpg"
                        alt="Floating Book"
                        style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                    />
                </div>
                <div className="floating-element" style={{ top: '20%', right: '10%' }}>
                    <img 
                        src="https://i.pinimg.com/736x/5a/45/86/5a4586596e8b881c04c732b16d19c303.jpg"
                        alt="Magical Wand"
                        style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                    />
                </div>
                <div className="floating-element" style={{ bottom: '15%', left: '15%' }}>
                    <img 
                        src="https://i.pinimg.com/736x/13/ae/74/13ae744883c087a18f27cc4cb1480fb3.jpg"
                        alt="Magic Potion"
                        style={{ width: '70px', height: '70px', objectFit: 'contain' }}
                    />
                </div>
                <div className="floating-element" style={{ bottom: '25%', right: '15%' }}>
                    <img 
                        src="https://i.pinimg.com/736x/86/ba/d4/86bad4a44a664dc634b3dbc7706ae8a9.jpg"
                        alt="Crystal Ball"
                        style={{ width: '65px', height: '65px', objectFit: 'contain' }}
                    />
                </div>
            </div>

            <main className="landing-container">
                <div className="content-wrapper">
                    <h1 className="title">
                        Interactive Storytelling
                        <div className="gradient-text">Journey Through Tales</div>
                    </h1>
                    
                    <p className="tagline">
                        Embark on magical adventures where every story comes alive with interactive elements, 
                        animations, and immersive experiences. Let your imagination soar!
                    </p>

                    { <div className="story-preview-cards">
                        <div className="story-preview-card">
                            <h3>Magical Adventures</h3>
                            <p>Discover enchanted worlds and mystical creatures</p>
                        </div>
                        <div className="story-preview-card">
                            <h3>Interactive Elements</h3>
                            <p>Engage with stories through listening and animations</p>
                        </div>
                    </div> }

                    <button 
                        className="get-started-btn" 
                        onClick={handleGetStarted}
                    >
                        Begin Your Adventure
                        <div className="btn-sparkle"></div>
                    </button>
                </div>
            </main>

            <svg className="svg-filters">
                <defs>
                    <filter id="sparkle-filter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="glow"
                        />
                        <feBlend in="SourceGraphic" in2="glow" mode="normal" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default LandingPage;
