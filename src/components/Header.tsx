
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scrolling down, hide header
        setIsVisible(false);
      } else {
        // Scrolling up, show header
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      
      // Cleanup
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  const scrollToSection = () => {
    const firstSection = document.getElementById('intro-section');
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } bg-black/80 backdrop-blur-md border-b border-krishna-gold/20 shadow-lg shadow-krishna-gold/10`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="golden-text font-semibold text-xl">
            <span className="text-krishna-gold">॥</span> मातृ दिवस <span className="text-krishna-gold">॥</span>
          </div>
          <button onClick={scrollToSection} className="flex items-center gap-2 text-krishna-gold animate-bounce hover:text-white transition-colors">
            <span>नीचे जाएं</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
