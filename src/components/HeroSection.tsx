import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1638241906516-32462a8e35bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjB2b2x1bnRlZXJpbmd8ZW58MXx8fHwxNzY0NjgxMDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Студенты-волонтеры ДВФУ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B63AB]/90 to-[#3B63AB]/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-white mb-6">
            Меняй мир через обучение и служение
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95">
            Присоединяйся к студентам ДВФУ, которые делают наш мир лучше через волонтерство и социальные проекты
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#F5A623] text-white rounded-lg hover:bg-[#E09515] transition-all shadow-lg flex items-center justify-center gap-2 group">
              Стать волонтером
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#3B63AB] transition-all">
              Найти проект
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-2 text-[#F5A623]">500+</div>
              <div className="text-white/90">Волонтеров</div>
            </div>
            <div>
              <div className="text-4xl mb-2 text-[#F5A623]">120+</div>
              <div className="text-white/90">Проектов</div>
            </div>
            <div>
              <div className="text-4xl mb-2 text-[#F5A623]">15K+</div>
              <div className="text-white/90">Часов служения</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
