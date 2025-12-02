import { ProjectCard } from './ProjectCard';
import { Filter, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'Все проекты', color: '#6995D0' },
    { id: 'ecology', name: 'Экология', color: '#4CAF50' },
    { id: 'education', name: 'Образование', color: '#00A8E8' },
    { id: 'social', name: 'Социальная помощь', color: '#F5A623' },
    { id: 'culture', name: 'Культура', color: '#6995D0' }
  ];

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1759889392272-e775b6018b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZW52aXJvbm1lbnRhbCUyMHByb2plY3R8ZW58MXx8fHwxNzY0NjgxMDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Чистый кампус',
      description: 'Экологическая инициатива по озеленению и благоустройству территории университета. Присоединяйся к созданию комфортной среды!',
      category: 'Экология',
      categoryColor: '#4CAF50',
      date: '15 декабря 2025',
      location: 'Кампус ДВФУ',
      participants: 45,
      status: 'active' as const
    },
    {
      image: 'https://images.unsplash.com/photo-1641569707854-c80945fb4719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwaGVscGluZyUyMGNoaWxkcmVufGVufDF8fHx8MTc2NDY4MTA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Наставничество для школьников',
      description: 'Помоги школьникам подготовиться к ЕГЭ и определиться с выбором профессии. Делись своими знаниями и опытом.',
      category: 'Образование',
      categoryColor: '#00A8E8',
      date: 'Каждую субботу',
      location: 'Школы Владивостока',
      participants: 32,
      status: 'active' as const
    },
    {
      image: 'https://images.unsplash.com/photo-1758599668209-783bd3691ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHZvbHVudGVlcnMlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjQ2ODEwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Помощь пожилым людям',
      description: 'Социальный проект по оказанию помощи ветеранам и пожилым людям. Вместе мы можем сделать их жизнь лучше.',
      category: 'Социальная помощь',
      categoryColor: '#F5A623',
      date: '10 января 2026',
      location: 'Дом ветеранов',
      participants: 28,
      status: 'upcoming' as const
    },
    {
      image: 'https://images.unsplash.com/photo-1700710972099-b3dab5fdd694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYWN0aXZpdHl8ZW58MXx8fHwxNzY0NjgxMDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Культурный обмен',
      description: 'Организация культурных мероприятий для иностранных студентов. Познакомь гостей с культурой Приморья.',
      category: 'Культура',
      categoryColor: '#6995D0',
      date: '20 декабря 2025',
      location: 'Культурный центр ДВФУ',
      participants: 52,
      status: 'active' as const
    },
    {
      image: 'https://images.unsplash.com/photo-1758582171503-ce7b5c28bb4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbW11bml0eSUyMHNlcnZpY2V8ZW58MXx8fHwxNzY0NjM0ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Раздельный сбор отходов',
      description: 'Образовательная программа и практическая реализация системы раздельного сбора отходов в общежитиях.',
      category: 'Экология',
      categoryColor: '#4CAF50',
      date: 'С 1 января 2026',
      location: 'Общежития ДВФУ',
      participants: 67,
      status: 'upcoming' as const
    },
    {
      image: 'https://images.unsplash.com/photo-1638241906516-32462a8e35bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjB2b2x1bnRlZXJpbmd8ZW58MXx8fHwxNzY0NjgxMDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Университетский форум',
      description: 'Организация и проведение студенческого форума "Обучение служением". Стань частью команды организаторов!',
      category: 'Культура',
      categoryColor: '#6995D0',
      date: '5-7 марта 2026',
      location: 'Конгресс-центр ДВФУ',
      participants: 89,
      status: 'upcoming' as const
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Каталог проектов</h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Выбери проект, который откликается твоему сердцу, и начни менять мир уже сегодня
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden w-full flex items-center justify-between px-4 py-3 bg-[#F5F6F8] rounded-lg mb-4"
            onClick={() => setShowFilters(!showFilters)}
          >
            <span className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Фильтры
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          {/* Filter Categories */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:flex flex-wrap gap-3`}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'text-white shadow-md'
                    : 'bg-[#F5F6F8] text-[#3B63AB] hover:bg-[#E8EAF0]'
                }`}
                style={
                  selectedCategory === cat.id
                    ? { backgroundColor: cat.color }
                    : {}
                }
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-[#6995D0] text-[#6995D0] rounded-lg hover:bg-[#6995D0] hover:text-white transition-all">
            Показать еще проекты
          </button>
        </div>
      </div>
    </section>
  );
}
