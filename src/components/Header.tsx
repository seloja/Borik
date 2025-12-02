import { Menu, User, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#3B63AB] rounded-lg flex items-center justify-center">
              <span className="text-white">ДВФУ</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-[#3B63AB]">Обучение служением</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-[#3B63AB] hover:text-[#6995D0] transition-colors">
              Проекты
            </a>
            <a href="#how-it-works" className="text-[#3B63AB] hover:text-[#6995D0] transition-colors">
              Как это работает
            </a>
            <a href="#stories" className="text-[#3B63AB] hover:text-[#6995D0] transition-colors">
              Истории успеха
            </a>
            <a href="#about" className="text-[#3B63AB] hover:text-[#6995D0] transition-colors">
              О программе
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#6995D0] text-[#6995D0] rounded-lg hover:bg-[#6995D0] hover:text-white transition-all">
              <User className="w-4 h-4" />
              Войти
            </button>
            <button className="px-6 py-2 bg-[#F5A623] text-white rounded-lg hover:bg-[#E09515] transition-all shadow-md">
              Стать волонтером
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#3B63AB]" />
            ) : (
              <Menu className="w-6 h-6 text-[#3B63AB]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <a href="#projects" className="text-[#3B63AB] hover:text-[#6995D0] transition-colors">
                Проекты
              </a>
              <a href="#how-it-works" className="text-[#3B63AB] hover:text-[#6995D0] transition-colors">
                Как это работает
              </a>
              <a href="#stories" className="text-[#3B63AB] hover:text-[#6995D0] transition-colors">
                Истории успеха
              </a>
              <a href="#about" className="text-[#3B63AB] hover:text-[#6995D0] transition-colors">
                О программе
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t">
                <button className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-[#6995D0] text-[#6995D0] rounded-lg">
                  <User className="w-4 h-4" />
                  Войти
                </button>
                <button className="px-6 py-2 bg-[#F5A623] text-white rounded-lg shadow-md">
                  Стать волонтером
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
