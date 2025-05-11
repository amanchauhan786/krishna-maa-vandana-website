
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const sectionElement = sectionRef.current;
    
    if (!sectionElement) return;
    
    // Add animation class immediately
    sectionElement.classList.add('active');
    
    // Optional parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (sectionElement) {
        sectionElement.style.backgroundPositionY = `${scrollPosition * 0.2}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToIntro = () => {
    const introSection = document.getElementById('intro-section');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div
      ref={sectionRef}
      className="section-container min-h-[100vh] bg-black bg-opacity-95 flex flex-col justify-center items-center relative"
    >
      <div className="absolute inset-0 lotus-bg opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cpath fill=%22%23D4AF37%22 fill-opacity=%220.08%22 d=%22M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z%22/%3E%3C/svg%3E')] opacity-30 z-0"></div>
      
      <div className="container mx-auto text-center z-10 px-4 scroll-animation">
        <div className="mb-6 inline-block animate-rotate-slow">
          <div className="w-24 h-24 mx-auto mb-4 bg-contain bg-no-repeat bg-center" 
               style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='none' stroke='%23D4AF37' stroke-width='2'/%3E%3Ccircle cx='50' cy='50' r='30' fill='%23D4AF37' fill-opacity='0.2'/%3E%3C/svg%3E")`}}></div>
        </div>
        
        <div className="relative mb-8">
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32">
            <div className="krishna-image w-full h-full absolute top-0 left-0 animate-float"></div>
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 shimmer-text">
          मातृ दिवस
        </h1>
        
        <div className="w-24 h-1 bg-krishna-gold mx-auto my-4 rounded-full"></div>
        
        <h2 className="text-xl mb-6 slide-in-right delay-200">
          <span className="sanskrit-text">मातृदेवो भव | पितृदेवो भव |</span>
        </h2>
        
        <p className="text-lg mb-8 max-w-lg mx-auto fade-in delay-500 text-krishna-gold/80">
          जैसे श्री कृष्ण ने यशोदा माता को अपना हृदय दिया, वैसे ही हम भी अपनी माताओं को समर्पित करते हैं यह विशेष दिन। <span className="text-white">Happy Mother's Day to all the beautiful moms!</span>
        </p>
        
        <div className="slide-in-left delay-700">
          <button 
            onClick={scrollToIntro}
            className="bg-krishna-gold hover:bg-krishna-gold/80 text-krishna-black px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 hover:shadow-xl hover:shadow-krishna-gold/20 mx-auto"
          >
            आगे बढ़ें
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown className="text-krishna-gold" size={30} />
      </div>
      
      <div className="absolute bottom-20 right-10 w-24 h-24 opacity-50 animate-float">
        <div className="flute-image w-full h-full"></div>
      </div>
    </div>
  );
};

export default HeroSection;
