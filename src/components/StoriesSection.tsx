import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote } from 'lucide-react';

export function StoriesSection() {
  const stories = [
    {
      name: 'Анна Петрова',
      faculty: 'Школа экономики и менеджмента',
      year: '3 курс',
      image: 'https://images.unsplash.com/photo-1638241906516-32462a8e35bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjB2b2x1bnRlZXJpbmd8ZW58MXx8fHwxNzY0NjgxMDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'Волонтерство в ДВФУ открыло для меня новые горизонты. Я не только помогала другим, но и приобрела навыки управления проектами, которые пригодились в учебе и будущей карьере.',
      hours: 120,
      projects: 8
    },
    {
      name: 'Дмитрий Соколов',
      faculty: 'Школа естественных наук',
      year: '2 курс',
      image: 'https://images.unsplash.com/photo-1758599668209-783bd3691ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHZvbHVudGVlcnMlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjQ2ODEwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'Участие в экологических проектах позволило мне применить теоретические знания на практике. Это бесценный опыт, который невозможно получить в аудитории.',
      hours: 85,
      projects: 5
    },
    {
      name: 'Мария Ким',
      faculty: 'Школа гуманитарных наук',
      year: '4 курс',
      image: 'https://images.unsplash.com/photo-1641569707854-c80945fb4719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwaGVscGluZyUyMGNoaWxkcmVufGVufDF8fHx8MTc2NDY4MTA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'Работа с детьми в проекте "Наставничество" показала мне мое истинное призвание. Теперь я точно знаю, что хочу связать свою жизнь с образованием.',
      hours: 156,
      projects: 12
    }
  ];

  return (
    <section id="stories" className="py-20 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Истории успеха</h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Узнай, как волонтерство изменило жизнь студентов ДВФУ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              {/* Image */}
              <div className="relative h-64">
                <ImageWithFallback
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#F5A623] rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-1">{story.name}</h3>
                <div className="text-sm text-[#6995D0] mb-1">{story.faculty}</div>
                <div className="text-sm text-[#6B7280] mb-4">{story.year}</div>

                <p className="text-[#6B7280] mb-6 italic">
                  "{story.quote}"
                </p>

                {/* Stats */}
                <div className="flex gap-6 pt-4 border-t border-[#F5F6F8]">
                  <div>
                    <div className="text-2xl text-[#F5A623] mb-1">{story.hours}</div>
                    <div className="text-sm text-[#6B7280]">Часов</div>
                  </div>
                  <div>
                    <div className="text-2xl text-[#00A8E8] mb-1">{story.projects}</div>
                    <div className="text-sm text-[#6B7280]">Проектов</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-[#6B7280] mb-6">
            Стань частью сообщества волонтеров ДВФУ и напиши свою историю успеха
          </p>
          <button className="px-8 py-3 bg-[#F5A623] text-white rounded-lg hover:bg-[#E09515] transition-all shadow-md">
            Присоединиться сейчас
          </button>
        </div>
      </div>
    </section>
  );
}
