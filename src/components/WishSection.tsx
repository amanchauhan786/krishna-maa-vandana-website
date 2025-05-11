
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
      "मां, आपका प्यार मेरे जीवन का आशीर्वाद है। Happy Mother's Day!",
      "माँ, आपका हर त्याग मेरे लिए प्रेरणा है। Love you always माँ!",
      "माँ, आपने मुझे जो संस्कार दिए हैं, उसके लिए करोड़ों धन्यवाद। You're the best!"
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
        description: "Empty message can't be sent",
        variant: "destructive"
      });
      return;
    }
    
    // Add the new wish to the list
    setWishes([wish, ...wishes]);
    setWish('');
    
    toast({
      title: "आपकी शुभकामना जोड़ दी गई है!",
      description: "Thank you, your message has been sent successfully",
    });
  };
  
  return (
    <div 
      ref={sectionRef}
      className="section-container bg-gradient-to-b from-black to-krishna-black/90"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={(el) => elementsRef.current[0] = el}
          className="text-3xl font-bold mb-10 text-center golden-text scroll-animation"
        >
          <div className="divider">
            <div className="peacock-feather"></div>
          </div>
          <span>माँ के लिए शुभकामनाएँ <span className="text-white text-2xl">(Wishes for Mom)</span></span>
          <div className="divider">
            <div className="peacock-feather"></div>
          </div>
        </h2>
        
        <div 
          ref={(el) => elementsRef.current[1] = el}
          className="scroll-animation max-w-md mx-auto mb-8"
        >
          <form onSubmit={handleSubmit} className="krishna-border glass-card">
            <textarea
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              className="w-full p-4 border border-krishna-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-krishna-gold bg-black/40 text-white resize-none"
              rows={4}
              placeholder="अपनी माँ के लिए एक संदेश लिखें... (Write a message for your mom...)"
            ></textarea>
            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-krishna-gold to-yellow-500 text-black py-3 rounded-lg hover:from-yellow-500 hover:to-krishna-gold transition-all duration-300 font-semibold"
            >
              Send Wishes ✨
            </button>
          </form>
        </div>
        
        <div 
          ref={(el) => elementsRef.current[2] = el}
          className="scroll-animation space-y-4 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-center mb-6 text-krishna-gold">अन्य शुभकामनाएँ <span className="text-white">(Other Wishes)</span></h3>
          
          {wishes.map((wishText, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg glass-card border-l-4 ${
                index % 2 === 0 ? 'border-krishna-gold' : 'border-yellow-500'
              } animate-fade-in-up tilt-card`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="italic text-krishna-gold/90">{wishText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishSection;
