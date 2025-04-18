
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CallToActionBannerProps {
  text: string;
  buttonText: string;
}

const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ text, buttonText }) => {
  return (
    <div className="bg-roofing-primary py-12 text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xl font-medium text-center md:text-left">{text}</p>
          <Button 
            size="lg" 
            className="bg-roofing-accent hover:bg-roofing-accent/90 text-white flex items-center gap-2"
            asChild
          >
            <a href="tel:+14506002538">
              <Phone size={20} />
              {buttonText}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionBanner;
