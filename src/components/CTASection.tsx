import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-32 bg-[#3B63AB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">
            Готов изменить мир?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Присоединяйся к программе «Обучение служением» ДВФУ. Регистрируйся, выбирай проект и начинай свой путь волонтера уже сегодня.
          </p>

          {/* Registration Form */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h3 className="mb-8">Зарегистрироваться</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Имя"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6995D0]"
                />
                <input
                  type="text"
                  placeholder="Фамилия"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6995D0]"
                />
              </div>

              <input
                type="email"
                placeholder="Email (университетская почта)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6995D0]"
              />

              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6995D0] text-[#6B7280]">
                <option>Выберите школу/институт</option>
                <option>Школа экономики и менеджмента</option>
                <option>Школа естественных наук</option>
                <option>Школа гуманитарных наук</option>
                <option>Инженерная школа</option>
                <option>Школа искусств, культуры и спорта</option>
                <option>Юридическая школа</option>
                <option>Школа медицины</option>
              </select>

              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6995D0] text-[#6B7280]">
                <option>Курс обучения</option>
                <option>1 курс</option>
                <option>2 курс</option>
                <option>3 курс</option>
                <option>4 курс</option>
                <option>Магистратура</option>
                <option>Аспирантура</option>
              </select>

              <div className="flex items-start gap-3 text-left">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 text-[#6995D0] border-gray-300 rounded focus:ring-[#6995D0]"
                />
                <label htmlFor="terms" className="text-sm text-[#6B7280]">
                  Я согласен с обработкой персональных данных и правилами программы «Обучение служением»
                </label>
              </div>

              <button 
                type="submit"
                className="w-full px-8 py-4 bg-[#F5A623] text-white rounded-lg hover:bg-[#E09515] transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                Зарегистрироваться
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-[#6B7280]">
                <Mail className="w-4 h-4" />
                <span className="text-sm">
                  Есть вопросы? Напишите нам:{' '}
                  <a href="mailto:volunteer@dvfu.ru" className="text-[#6995D0] hover:text-[#3B63AB]">
                    volunteer@dvfu.ru
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-white/80 text-sm">
            <p>
              После регистрации вы получите доступ к личному кабинету и сможете выбрать интересующие проекты
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
