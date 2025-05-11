
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
    // Enhanced scroll animation logic
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animation');
      
      scrollElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
          element.classList.add('active');
          
          // Add staggered animation to children
          const children = element.querySelectorAll('.animate-children');
          children.forEach((child, childIndex) => {
            setTimeout(() => {
              child.classList.add('active');
            }, childIndex * 100); // 100ms stagger
          });
        }
      });
    };
    
    // Page load animation
    const pageElements = document.querySelectorAll('.page-animation');
    pageElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('active');
      }, index * 200); // 200ms stagger for initial page load
    });
    
    // Initial check for elements in view
    handleScroll();
    
    // Add scroll event listener with debounce
    let scrollTimeout: number;
    const scrollHandler = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(handleScroll, 10);
    };
    
    window.addEventListener('scroll', scrollHandler);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      clearTimeout(scrollTimeout);
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
    
    // Add cursor trail effect
    const createTrail = (e: MouseEvent) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      document.body.appendChild(trail);
      
      setTimeout(() => {
        trail.remove();
      }, 1500);
    };
    
    window.addEventListener('mousemove', createTrail);
    
    // Add to index.css
    const style = document.createElement('style');
    style.innerHTML = `
      .cursor-trail {
        position: fixed;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: rgba(212, 175, 55, 0.6);
        pointer-events: none;
        z-index: 9999;
        animation: trailFade 1.5s ease-out forwards;
      }
      
      @keyframes trailFade {
        0% { transform: scale(1); opacity: 0.6; }
        100% { transform: scale(0); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      window.removeEventListener('mousemove', createTrail);
      document.head.removeChild(style);
    };
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
