
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import SanskritVerses from '@/components/SanskritVerses';
import StorySection from '@/components/StorySection';
import WishSection from '@/components/WishSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll animation logic
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animation');
      
      scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
          element.classList.add('active');
        }
      });
    };
    
    // Initial check for elements in view
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update document title
  useEffect(() => {
    document.title = "मातृ दिवस - कृष्ण और यशोदा के प्रेम की कहानी";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'श्री कृष्ण और माता यशोदा के प्रेम से प्रेरित मातृ दिवस की शुभकामनाएँ।');
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      <main>
        <HeroSection />
        <IntroSection />
        <SanskritVerses />
        <StorySection />
        <WishSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
