
import { useEffect, useRef } from 'react';

const IntroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    const sectionElement = sectionRef.current;
    const observedElements = elementsRef.current.filter(Boolean);
    
    if (!sectionElement) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Uncomment to remove animation when out of view
          // entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });
    
    observedElements.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      observedElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div
      id="intro-section"
      ref={sectionRef}
      className="section-container bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="decorative-border p-8">
          <h2 
            ref={(el) => elementsRef.current[0] = el}
            className="text-3xl font-bold mb-6 text-center text-krishna-purple scroll-animation"
          >
            <span className="inline-block">श्री कृष्ण और माता यशोदा</span>
            <div className="divider">
              <div className="peacock-feather"></div>
            </div>
          </h2>
          
          <div 
            ref={(el) => elementsRef.current[1] = el}
            className="mb-8 krishna-border scroll-animation bg-krishna-lightblue/20" 
          >
            <p className="sanskrit-text text-center mb-4">
              "मातृ देवो भव"
            </p>
            <p className="text-center italic text-sm">
              (मां को देवता के समान माने)
            </p>
          </div>
          
          <div 
            ref={(el) => elementsRef.current[2] = el}
            className="scroll-animation"
          >
            <p className="mb-6">
              भारतीय संस्कृति में, माता का स्थान सबसे ऊंचा है। श्री कृष्ण और माता यशोदा का प्रेम इस दिव्य बंधन का सबसे सुंदर उदाहरण है। यशोदा माता ने कृष्ण को अपनी ममता से सींचा और परवरिश की।
            </p>
            
            <div className="w-full h-48 mb-6 bg-contain bg-no-repeat bg-center scale-in"
                 style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='48' fill='%23D3E4FD' stroke='%239b59b6' stroke-width='1'/%3E%3Ccircle cx='50' cy='50' r='40' fill='%23F0E4FC' stroke='%239b59b6' stroke-width='1'/%3E%3Crect x='35' y='35' width='30' height='30' fill='%23FFDEE2' stroke='%239b59b6' stroke-width='1'/%3E%3C/svg%3E")`}}></div>
          </div>
          
          <div 
            ref={(el) => elementsRef.current[3] = el}
            className="scroll-animation"
          >
            <blockquote className="italic border-l-4 border-krishna-yellow pl-4 py-2 mb-6">
              माता के प्रेम से बढ़कर इस संसार में कोई भी प्रेम नहीं है। जैसे श्री कृष्ण ने यशोदा माता के प्यार में बंधे रहे, वैसे ही हम सभी अपनी माताओं के ऋण से सदा बंधे रहते हैं।
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
