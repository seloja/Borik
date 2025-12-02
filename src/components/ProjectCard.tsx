import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, Users } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  date: string;
  location: string;
  participants: number;
  status?: 'active' | 'upcoming' | 'completed';
}

export function ProjectCard({
  image,
  title,
  description,
  category,
  categoryColor,
  date,
  location,
  participants,
  status = 'active'
}: ProjectCardProps) {
  const statusLabels = {
    active: 'Идет набор',
    upcoming: 'Скоро',
    completed: 'Завершен'
  };

  const statusColors = {
    active: '#4CAF50',
    upcoming: '#F5A623',
    completed: '#6B7280'
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Status Badge */}
        <div 
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm"
          style={{ backgroundColor: statusColors[status] }}
        >
          {statusLabels[status]}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Category Tag */}
        <div className="mb-4">
          <span 
            className="inline-block px-3 py-1 rounded-lg text-sm"
            style={{ 
              backgroundColor: `${categoryColor}15`,
              color: categoryColor 
            }}
          >
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 group-hover:text-[#6995D0] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#6B7280] mb-6 line-clamp-2">
          {description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-col gap-3 text-sm text-[#6B7280] mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{participants} участников</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full py-2 border-2 border-[#6995D0] text-[#6995D0] rounded-lg hover:bg-[#6995D0] hover:text-white transition-all">
          Подробнее
        </button>
      </div>
    </div>
  );
}
