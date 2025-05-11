
import { useState, useEffect, useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';

const WishSection = () => {
  const [wish, setWish] = useState('');
  const [wishes, setWishes] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const { toast } = useToast();
  
  // Load some initial wishes
  useEffect(() => {
    const defaultWishes = [
      "मां, आपका प्यार मेरे जीवन का आशीर्वाद है। माँ दिवस की शुभकामनाएँ!",
      "माँ, आपका हर त्याग मेरे लिए प्रेरणा है। आप सदा खुश रहें।",
      "माँ, आपने मुझे जो संस्कार दिए हैं, उसके लिए करोड़ों धन्यवाद।"
    ];
    setWishes(defaultWishes);
  }, []);
  
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (wish.trim() === '') {
      toast({
        title: "कृपया अपनी शुभकामना लिखें",
        description: "खाली संदेश नहीं भेज सकते",
        variant: "destructive"
      });
      return;
    }
    
    // Add the new wish to the list
    setWishes([wish, ...wishes]);
    setWish('');
    
    toast({
      title: "आपकी शुभकामना जोड़ दी गई है!",
      description: "धन्यवाद, आपका संदेश सफलतापूर्वक भेजा गया",
    });
  };
  
  return (
    <div 
      ref={sectionRef}
      className="section-container bg-krishna-blue/10"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={(el) => elementsRef.current[0] = el}
          className="text-3xl font-bold mb-10 text-center text-krishna-purple scroll-animation"
        >
          <div className="divider">
            <div className="peacock-feather"></div>
          </div>
          <span>माँ के लिए शुभकामनाएँ</span>
          <div className="divider">
            <div className="peacock-feather"></div>
          </div>
        </h2>
        
        <div 
          ref={(el) => elementsRef.current[1] = el}
          className="scroll-animation max-w-md mx-auto mb-8"
        >
          <form onSubmit={handleSubmit} className="krishna-border bg-white">
            <textarea
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              className="w-full p-4 border border-krishna-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-krishna-purple/50 resize-none"
              rows={4}
              placeholder="अपनी माँ के लिए एक संदेश लिखें..."
            ></textarea>
            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-krishna-purple to-krishna-blue text-white py-3 rounded-lg hover:from-krishna-blue hover:to-krishna-purple transition-all duration-300"
            >
              शुभकामना भेजें
            </button>
          </form>
        </div>
        
        <div 
          ref={(el) => elementsRef.current[2] = el}
          className="scroll-animation space-y-4 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-center mb-6">अन्य शुभकामनाएँ</h3>
          
          {wishes.map((wishText, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg bg-white shadow-md border-l-4 ${
                index % 2 === 0 ? 'border-krishna-purple' : 'border-krishna-yellow'
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="italic">{wishText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishSection;
