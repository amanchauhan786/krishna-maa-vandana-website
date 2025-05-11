
import { useEffect, useRef } from 'react';

const SanskritVerses = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const versesRef = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -20% 0px'
    });
    
    const elements = versesRef.current.filter(Boolean);
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
      className="section-container bg-gradient-to-tr from-krishna-blue/10 to-krishna-purple/10"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={(el) => versesRef.current[0] = el}
          className="text-3xl font-bold mb-10 text-center text-krishna-purple scroll-animation"
        >
          <div className="divider">
            <div className="peacock-feather"></div>
          </div>
          <span>मातृ वंदना</span>
          <div className="divider">
            <div className="peacock-feather"></div>
          </div>
        </h2>
        
        <div className="space-y-12">
          <div 
            ref={(el) => versesRef.current[1] = el}
            className="krishna-border scroll-animation bg-white"
          >
            <p className="sanskrit-text text-center mb-3 text-lg">
              त्वमेव माता च पिता त्वमेव<br />
              त्वमेव बन्धुश्च सखा त्वमेव।<br />
              त्वमेव विद्या द्रविणं त्वमेव<br />
              त्वमेव सर्वं मम देव देव॥
            </p>
            <p className="text-sm text-center italic">
              तुम्हीं मेरी माता हो, तुम्हीं पिता हो,<br />
              तुम्हीं बंधु हो, तुम्हीं सखा हो,<br />
              तुम्हीं विद्या हो, तुम्हीं धन हो,<br />
              हे मेरे देवों के देव, तुम्हीं मेरे सब कुछ हो।
            </p>
          </div>
          
          <div 
            ref={(el) => versesRef.current[2] = el}
            className="krishna-border scroll-animation bg-white"
          >
            <p className="sanskrit-text text-center mb-3 text-lg">
              मातृदेवो भव।<br />
              पितृदेवो भव।<br />
              आचार्यदेवो भव।<br />
              अतिथिदेवो भव।
            </p>
            <p className="text-sm text-center italic">
              माता को देवतुल्य मानो।<br />
              पिता को देवतुल्य मानो।<br />
              शिक्षक को देवतुल्य मानो।<br />
              अतिथि को देवतुल्य मानो।
            </p>
          </div>
          
          <div 
            ref={(el) => versesRef.current[3] = el}
            className="krishna-border scroll-animation bg-white"
          >
            <p className="sanskrit-text text-center mb-3 text-lg">
              यन्माता विन्दते पुत्रं सततं मधुभाषिणम्।<br />
              दयालुं सत्यवादिनं तन्मातुः शोभनं फलम्॥
            </p>
            <p className="text-sm text-center italic">
              जिस माता को एक ऐसा पुत्र मिलता है जो सदा मीठा बोलता है,<br />
              दयालु है और सत्य का पालन करने वाला है,<br />
              वह माता के लिए सबसे अच्छा फल है।
            </p>
          </div>
          
          <div 
            ref={(el) => versesRef.current[4] = el}
            className="krishna-border scroll-animation bg-white"
          >
            <p className="sanskrit-text text-center mb-3 text-lg">
              नास्ति मातृसमा छाया नास्ति मातृसमा गतिः।<br />
              नास्ति मातृसमं त्राणं नास्ति मातृसमा प्रिया॥
            </p>
            <p className="text-sm text-center italic">
              माता के समान छाया नहीं है, माता के समान गति नहीं है,<br />
              माता के समान रक्षा नहीं है, माता के समान प्रिय कोई नहीं है।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanskritVerses;
