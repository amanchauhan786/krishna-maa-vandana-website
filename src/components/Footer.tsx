
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-black py-8 text-krishna-gold border-t border-krishna-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <button 
            onClick={scrollToTop}
            className="mb-6 bg-krishna-gold text-black p-3 rounded-full hover:bg-white transition-all duration-300 gold-glow"
          >
            <ChevronUp size={20} />
          </button>
          
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold mb-2 golden-text">
              मातृ दिवस मंगलमय हो
            </h3>
            <p className="text-krishna-gold">
              ॐ मातृ देवो भव:
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm opacity-70">
              स्नेह और श्रद्धा के साथ समर्पित <span className="text-white">- With love and respect</span>
            </p>
            <p className="text-sm mt-2 opacity-70">
              © {new Date().getFullYear()} मातृ दिवस | <span className="text-white">Krishna Bhagwan ke</span> आशीर्वाद से
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
