
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
      className="section-container bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={(el) => elementsRef.current[0] = el}
          className="text-3xl font-bold mb-10 text-center text-krishna-purple scroll-animation"
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
            className="scroll-animation krishna-border bg-krishna-lightblue/20"
          >
            <h3 className="font-bold text-lg mb-3 text-krishna-blue">मक्खन चोर कृष्ण</h3>
            <p>
              एक बार की बात है, बाल कृष्ण अक्सर घर में रखा मक्खन चुरा कर खा लेते थे। यशोदा माँ ने उन्हें इस शरारत के लिए एक दिन रस्सी से बांध दिया। परन्तु, यह माँ का प्यार ही था जो कृष्ण मुस्कुराते हुए इस बंधन को स्वीकार करते हैं, जबकि वे ब्रह्मांड के स्वामी हैं।
            </p>
          </div>
          
          <div 
            ref={(el) => elementsRef.current[2] = el}
            className="flex justify-center scroll-animation"
          >
            <div className="w-full md:w-2/3 h-48 bg-contain bg-no-repeat bg-center"
                 style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Crect x='10' y='10' width='80' height='40' rx='5' fill='%23FFD84D' fill-opacity='0.3' stroke='%239b59b6' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='10' fill='%239b59b6' fill-opacity='0.2' stroke='%239b59b6' stroke-width='1'/%3E%3Ccircle cx='70' cy='30' r='10' fill='%23FFDEE2' stroke='%239b59b6' stroke-width='1'/%3E%3C/svg%3E")`}}></div>
          </div>
          
          <div 
            ref={(el) => elementsRef.current[3] = el}
            className="scroll-animation krishna-border bg-krishna-lightblue/20"
          >
            <h3 className="font-bold text-lg mb-3 text-krishna-blue">विश्वरूप दर्शन</h3>
            <p>
              एक बार यशोदा माँ ने बाल कृष्ण को मिट्टी खाते हुए देखा। उन्होंने कृष्ण का मुंह खोलकर देखा तो उसमें पूरा ब्रह्मांड दिखाई दिया। यह देखकर यशोदा माँ आश्चर्यचकित रह गईं, परन्तु फिर भी उन्होंने कृष्ण को अपने बेटे के रूप में ही प्यार किया, न कि भगवान के रूप में।
            </p>
          </div>
          
          <div 
            ref={(el) => elementsRef.current[4] = el}
            className="scroll-animation"
          >
            <blockquote className="italic border-l-4 border-krishna-yellow pl-4 py-2">
              "एक माँ का प्यार अपने बच्चे के लिए अनन्त और निःस्वार्थ होता है। वह उसके दोषों को भी क्षमा कर देती है और हमेशा उसके कल्याण की कामना करती है। यही कारण है कि भारतीय संस्कृति में माता को सर्वोच्च स्थान दिया गया है।"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
