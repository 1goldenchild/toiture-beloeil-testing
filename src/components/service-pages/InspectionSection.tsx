
import React from 'react';
import { Search, CloudRain, FileCheck, Shield } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface InspectionSectionProps {
  id: string;
  title: string;
  content: string[];
}

const InspectionSection: React.FC<InspectionSectionProps> = ({ id, title, content }) => {
  return (
    <section className="py-8" id={id}>
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-roofing-primary mb-6">{title}</h3>
        <div className="space-y-4">
          {content.map((paragraph, index) => (
            <div 
              key={index} 
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspectionSection;
