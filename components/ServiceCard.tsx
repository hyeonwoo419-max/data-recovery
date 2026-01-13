
import React from 'react';
import { ServiceInfo } from '../types';

interface ServiceCardProps {
  service: ServiceInfo;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
      <div className="mb-4 p-3 bg-blue-50 w-fit rounded-xl group-hover:bg-blue-100 transition-colors">
        {service.icon}
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
