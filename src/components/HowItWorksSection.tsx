import { Search, Users, Award, Heart } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: 'Найди проект',
      description: 'Выбери проект по душе из каталога социальных инициатив и волонтерских возможностей',
      color: '#00A8E8'
    },
    {
      icon: Users,
      title: 'Присоединись к команде',
      description: 'Зарегистрируйся на проект и познакомься с единомышленниками и кураторами',
      color: '#6995D0'
    },
    {
      icon: Heart,
      title: 'Участвуй и развивайся',
      description: 'Реализуй проект, получай навыки и делай вклад в развитие общества',
      color: '#4CAF50'
    },
    {
      icon: Award,
      title: 'Получи признание',
      description: 'Фиксируй свои достижения в волонтерской книжке и получай сертификаты',
      color: '#F5A623'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Как это работает</h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Четыре простых шага, чтобы начать свой путь волонтера в ДВФУ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md z-10" style={{ borderColor: step.color, borderWidth: '3px' }}>
                  <span className="text-lg" style={{ color: step.color }}>{index + 1}</span>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl p-6 pt-8 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: step.color }} />
                  </div>
                  <h3 className="mb-3">{step.title}</h3>
                  <p className="text-[#6B7280]">{step.description}</p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#6995D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
