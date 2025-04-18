
interface ServiceAreaProps {
  areas: string[];
}

const ServiceArea: React.FC<ServiceAreaProps> = ({ areas }) => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-roofing-primary mb-8">
          Nous desservons Beloeil et les alentours
        </h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {areas.map((area, index) => (
            <span 
              key={index}
              className="inline-block bg-white px-4 py-2 rounded-full text-roofing-secondary border border-gray-200 shadow-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
