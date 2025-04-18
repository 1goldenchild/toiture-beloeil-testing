
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, link, imageUrl }) => {
  return (
    <a href={link} className="block">
      <Card className="service-card h-full overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={`Service de ${title}`} 
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-2 text-roofing-primary">
            <Icon size={24} />
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardContent>
      </Card>
    </a>
  );
};

export default ServiceCard;
