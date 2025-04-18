
import { Button } from "@/components/ui/button";

interface ServiceSectionProps {
  title: string;
  content: string[];
  ctaText: string;
  reverse?: boolean;
  imageUrl?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ 
  title, 
  content, 
  ctaText, 
  reverse = false,
  imageUrl
}) => {
  return (
    <div className="py-12 md:py-16">
      <div className="container px-4">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-roofing-primary mb-6">{title}</h3>
            <div className="space-y-4 text-gray-700">
              {content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-roofing-accent hover:bg-roofing-accent/90 text-white"
              >
                {ctaText}
              </Button>
            </div>
          </div>
          {imageUrl && (
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
