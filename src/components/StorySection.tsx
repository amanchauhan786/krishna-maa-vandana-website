
import { useEffect, useRef } from 'react';

const StorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });
    
    const elements = elementsRef.current.filter(Boolean);
    elements.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div 
      ref={sectionRef}
      className="section-container bg-krishna-black"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={(el) => elementsRef.current[0] = el}
          className="text-3xl font-bold mb-10 text-center golden-text scroll-animation"
        >
          <div className="divider">
            <div className="peacock-feather"></div>
          </div>
          <span>कृष्ण और यशोदा: मातृ प्रेम की कहानी</span>
          <div className="divider">
            <div className="peacock-feather"></div>
          </div>
        </h2>
        
        <div className="space-y-8">
          <div 
            ref={(el) => elementsRef.current[1] = el}
            className="scroll-animation krishna-border glass-card"
          >
            <h3 className="font-bold text-lg mb-3 shimmer-text">मक्खन चोर कृष्ण <span className="text-white">(Krishna the Butter Thief)</span></h3>
            <p className="text-krishna-gold/90">
              एक बार की बात है, बाल कृष्ण अक्सर घर में रखा मक्खन चुरा कर खा लेते थे। <span className="text-white">Once upon a time, little Krishna would often steal and eat butter kept in homes.</span> यशोदा माँ ने उन्हें इस शरारत के लिए एक दिन रस्सी से बांध दिया। परन्तु, यह माँ का प्यार ही था जो कृष्ण मुस्कुराते हुए इस बंधन को स्वीकार करते हैं, जबकि वे ब्रह्मांड के स्वामी हैं।
            </p>
          </div>
          
          <div 
            ref={(el) => elementsRef.current[2] = el}
            className="flex justify-center scroll-animation"
          >
            <div className="w-full md:w-2/3 relative overflow-hidden rounded-lg shadow-lg shadow-krishna-gold/20 h-60 tilt-card">
              <div 
                className="absolute inset-0 bg-cover bg-center transform transition-transform hover:scale-110 duration-700 ease-in-out"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23000' /%3E%3Ccircle cx='150' cy='100' r='70' fill='none' stroke='%23D4AF37' stroke-width='2' /%3E%3Ccircle cx='150' cy='70' r='20' fill='%23D4AF37' fill-opacity='0.2' stroke='%23D4AF37' stroke-width='1' /%3E%3Crect x='130' y='95' width='40' height='60' rx='20' fill='%23D4AF37' fill-opacity='0.2' stroke='%23D4AF37' stroke-width='1' /%3E%3Cpath d='M110 110 Q150 140 190 110' fill='none' stroke='%23D4AF37' stroke-width='2' /%3E%3C/svg%3E")`
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <p className="text-krishna-gold text-sm font-medium">कृष्ण और यशोदा माता का प्यार</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={(el) => elementsRef.current[3] = el}
            className="scroll-animation krishna-border glass-card rotate-in"
          >
            <h3 className="font-bold text-lg mb-3 shimmer-text">विश्वरूप दर्शन <span className="text-white">(The Cosmic Vision)</span></h3>
            <p className="text-krishna-gold/90">
              एक बार यशोदा माँ ने बाल कृष्ण को मिट्टी खाते हुए देखा। <span className="text-white">Once Mother Yashoda saw little Krishna eating mud.</span> उन्होंने कृष्ण का मुंह खोलकर देखा तो उसमें पूरा ब्रह्मांड दिखाई दिया। यह देखकर यशोदा माँ आश्चर्यचकित रह गईं, परन्तु फिर भी उन्होंने कृष्ण को अपने बेटे के रूप में ही प्यार किया, न कि भगवान के रूप में।
            </p>
          </div>
          
          <div 
            ref={(el) => elementsRef.current[4] = el}
            className="flex justify-center scroll-animation mt-8"
          >
            <div className="w-full md:w-2/3 relative overflow-hidden rounded-lg shadow-lg shadow-krishna-gold/20 h-60 tilt-card">
              <div 
                className="absolute inset-0 bg-cover bg-center transform transition-transform hover:scale-110 duration-700 ease-in-out"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23000' /%3E%3Ccircle cx='100' cy='90' r='40' fill='none' stroke='%23D4AF37' stroke-width='1' /%3E%3Ccircle cx='100' cy='80' r='15' fill='%23D4AF37' fill-opacity='0.2' stroke='%23D4AF37' stroke-width='1' /%3E%3Ccircle cx='190' cy='100' r='25' fill='%23D4AF37' fill-opacity='0.2' stroke='%23D4AF37' stroke-width='1' /%3E%3Cpath d='M130 100 Q160 90 180 110' fill='none' stroke='%23D4AF37' stroke-width='1' /%3E%3Crect x='85' y='95' width='30' height='40' rx='15' fill='%23D4AF37' fill-opacity='0.2' stroke='%23D4AF37' stroke-width='1' /%3E%3Crect x='175' y='105' width='30' height='40' rx='15' fill='%23D4AF37' fill-opacity='0.1' stroke='%23D4AF37' stroke-width='1' /%3E%3C/svg%3E")`
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <p className="text-krishna-gold text-sm font-medium">यशोदा माँ का वात्सल्य</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={(el) => elementsRef.current[5] = el}
            className="scroll-animation"
          >
            <blockquote className="italic border-l-4 border-krishna-gold pl-4 py-2 text-krishna-gold/80">
              <span className="text-white">"A mother's love for her child is infinite and selfless. She forgives all faults and always wishes for their well-being. That's why in Indian culture, mothers are given the highest position."</span><br /><br />
              "एक माँ का प्यार अपने बच्चे के लिए अनन्त और निःस्वार्थ होता है। वह उसके दोषों को भी क्षमा कर देती है और हमेशा उसके कल्याण की कामना करती है। यही कारण है कि भारतीय संस्कृति में माता को सर्वोच्च स्थान दिया गया है।"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
