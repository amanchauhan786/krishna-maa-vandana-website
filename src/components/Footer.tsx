
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gradient-to-r from-krishna-blue to-krishna-purple py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <button 
            onClick={scrollToTop}
            className="mb-6 bg-white text-krishna-purple p-3 rounded-full hover:bg-krishna-yellow transition-all duration-300"
          >
            <ChevronUp size={20} />
          </button>
          
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold mb-2">
              मातृ दिवस मंगलमय हो
            </h3>
            <p className="text-krishna-yellow">
              ॐ मातृ देवो भव:
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm opacity-70">
              स्नेह और श्रद्धा के साथ समर्पित
            </p>
            <p className="text-sm mt-2 opacity-70">
              © {new Date().getFullYear()} मातृ दिवस | कृष्ण भगवान के आशीर्वाद से
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
