
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceInfoSectionProps {
  title: string;
  paragraphs: string[];
  imageUrl?: string;
  reverseLayout?: boolean;
}

const ServiceInfoSection = ({ title, paragraphs, imageUrl, reverseLayout = false }: ServiceInfoSectionProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${imageUrl ? (reverseLayout ? 'lg:flex-row-reverse' : 'lg:flex-row') : ''} gap-8`}>
          <div className={`${imageUrl ? 'lg:w-1/2' : 'w-full'}`}>
            <h2 className="text-3xl font-bold text-roofing-primary mb-6">{title}</h2>
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <div 
                  key={index} 
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: paragraph }} 
                />
              ))}
            </div>
          </div>
          
          {imageUrl && (
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg h-full">
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceInfoSection;
