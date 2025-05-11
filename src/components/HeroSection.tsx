
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
      className="section-container min-h-[100vh] bg-gradient-to-b from-krishna-blue/30 to-krishna-purple/30 flex flex-col justify-center items-center relative"
    >
      <div className="absolute inset-0 lotus-bg opacity-20 z-0"></div>
      
      <div className="container mx-auto text-center z-10 px-4 scroll-animation">
        <div className="mb-6 inline-block animate-rotate-slow">
          <div className="w-24 h-24 mx-auto mb-4 bg-contain bg-no-repeat bg-center" 
               style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='none' stroke='%23FFD84D' stroke-width='2'/%3E%3Ccircle cx='50' cy='50' r='30' fill='%239b59b6' fill-opacity='0.2'/%3E%3C/svg%3E")`}}></div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 text-krishna-purple shimmer-text">
          मातृ दिवस
        </h1>
        
        <h2 className="text-xl mb-6 slide-in-right delay-200">
          <span className="sanskrit-text">मातृदेवो भव | पितृदेवो भव |</span>
        </h2>
        
        <p className="text-lg mb-8 max-w-lg mx-auto fade-in delay-500">
          जैसे श्री कृष्ण ने यशोदा माता को अपना हृदय दिया, वैसे ही हम भी अपनी माताओं को समर्पित करते हैं यह विशेष दिन।
        </p>
        
        <div className="slide-in-left delay-700">
          <button 
            onClick={scrollToIntro}
            className="bg-krishna-yellow hover:bg-krishna-orange text-krishna-blue px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 hover:shadow-xl"
          >
            आगे बढ़ें
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown className="text-krishna-purple" size={30} />
      </div>
    </div>
  );
};

export default HeroSection;
