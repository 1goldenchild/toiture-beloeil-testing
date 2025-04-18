
import React from 'react';
import { Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  content: string;
  imageUrl: string;
}

const HeroSection = ({ title, content, imageUrl }: HeroSectionProps) => {
  return (
    <div 
      className="min-h-[600px] w-full flex items-center justify-center text-white relative py-16"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-3xl">
          <div className="flex items-center mb-4">
            <Shield className="text-roofing-accent mr-3" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-shadow-lg">
              {title}
            </h1>
          </div>
          
          <div className="text-lg md:text-xl mb-8 space-y-4">
            <p>{content}</p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-roofing-accent hover:bg-roofing-accent/90 text-white flex items-center gap-2"
            asChild
          >
            <a href="tel:+14506002538">
              <Phone size={20} />
              Appelez ce numéro : +1 450 600 2538
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
