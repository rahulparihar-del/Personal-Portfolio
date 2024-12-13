import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Location',
    details: 'Pune, Maharashtra, India'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 9929583637'
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'rahulpariharmalii@gmai.com'
  }
];

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      {contactDetails.map((item, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <item.icon className="h-6 w-6 text-[#327380]" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
            <p className="mt-1 text-gray-600">{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;