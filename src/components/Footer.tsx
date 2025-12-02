import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#3B63AB] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#3B63AB] text-sm">ДВФУ</span>
              </div>
              <div className="text-sm">Обучение<br/>служением</div>
            </div>
            <p className="text-white/80 text-sm">
              Программа развития волонтерства и социальной ответственности студентов Дальневосточного федерального университета
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#projects" className="text-white/80 hover:text-white transition-colors">
                  Каталог проектов
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#stories" className="text-white/80 hover:text-white transition-colors">
                  Истории успеха
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  О программе
                </a>
              </li>
            </ul>
          </div>

          {/* For Volunteers */}
          <div>
            <h4 className="text-white mb-4">Волонтерам</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Личный кабинет
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Волонтерская книжка
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Правила программы
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Часто задаваемые вопросы
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  о. Русский, кампус ДВФУ, корпус D
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:volunteer@dvfu.ru" className="text-white/80 hover:text-white transition-colors">
                  volunteer@dvfu.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+74232000000" className="text-white/80 hover:text-white transition-colors">
                  +7 (423) 200-00-00
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div>
              © 2025 ДВФУ. Все права защищены.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
