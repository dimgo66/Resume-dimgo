import { useState, useEffect } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Mail, 
  Github, 
  Linkedin, 
  Phone,
  Calendar,
  MapPin,
  Palette,
  BookOpen,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import Navigation from '@/components/Navigation'

function HomePage() {
  const isMobile = useIsMobile()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Header / Hero Section */}
      <header className="relative h-[60vh] md:h-[70vh] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className={`relative z-10 transition-all duration-700 ease-out ${
            scrollY > 50 ? 'opacity-100 scale-95 -translate-y-3' : 'opacity-100 scale-100'
          }`}
        >
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl mx-auto mb-8 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:shadow-3xl">
            <img 
              src="https://static.devv.ai/ertqmh3yuqkg.jpg" 
              alt="Дмитрий Горяченков" 
              className="w-full h-full object-cover filter brightness-110 contrast-110" 
            />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white tracking-tight leading-[0.9] drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">Дмитрий</span><br/>
            <span className="bg-gradient-to-r from-indigo-100 to-white bg-clip-text text-transparent">Горяченков</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 mb-6 leading-relaxed tracking-wide drop-shadow-lg">Дизайнер | Художник | Разработчик</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 font-medium drop-shadow">20 мая 1966 года</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-110 border-2 border-white/20 backdrop-blur-sm">
              <a href="#contact" className="flex items-center">
                <Mail className="w-5 h-5 mr-3" /> Связаться со мной
              </a>
            </Button>
            <Button variant="outline" className="border-2 border-white/60 text-white bg-white/10 hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-110 backdrop-blur-sm">
              <a href="#experience" className="flex items-center">
                <Briefcase className="w-5 h-5 mr-3" /> Посмотреть резюме
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent"></div>
      </header>

      <main className="container max-w-4xl mx-auto px-4 py-12">
        {/* About Section */}
        <section 
          id="about"
          className={`transition-all duration-700 delay-200 ${
            scrollY > 100 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center mb-8">
            <User className="w-8 h-8 mr-4 text-primary drop-shadow-sm" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text leading-[1.3] tracking-tight pb-2">Обо мне</h2>
          </div>
          <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl p-10 shadow-xl border border-blue-100/50 mb-16 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed tracking-wide font-light">
              Я профессиональный <span className="font-semibold text-indigo-700">художник</span>, <span className="font-semibold text-purple-700">дизайнер</span> и <span className="font-semibold text-blue-700">разработчик</span> с обширным опытом работы в сферах полиграфии, 
              компьютерной графики, анимации, веб-дизайна и разработки приложений.
            </p>
            <div className="mt-8 h-1 w-24 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mx-auto"></div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed tracking-wide font-light mt-6">
              Специализируюсь на создании визуально привлекательного контента, развивая свою карьеру от классического мультипликатора до 
              современного дизайнера с навыками в разработке ИИ-приложений. Моя работа сочетает <em className="text-indigo-600 font-medium">художественное 
              видение</em> с <em className="text-purple-600 font-medium">техническими навыками</em> для создания эффективных и эстетически привлекательных проектов.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section 
          id="experience" 
          className={`transition-all duration-700 delay-300 ${
            scrollY > 250 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center mb-8">
            <div className="p-2 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 rounded-lg mr-4 shadow-lg">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text leading-[1.3] tracking-tight pb-2">Опыт работы</h2>
          </div>

          <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl p-10 shadow-xl border border-blue-100/50 mb-16 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
            <div className="space-y-8">
              {/* Timeline items */}
              <div className="relative border-l-2 border-muted pl-8 pb-6 ml-3">
                <div className="absolute w-5 h-5 bg-primary rounded-full -left-[11px] top-1"></div>
                <div className="bg-card rounded-lg p-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 tracking-tight leading-tight">Издание журнала "Вторник"</h3>
                  <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-3">
                    <span className="font-medium">Главный художник / Соиздатель</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>2020 - настоящее время</span>
                    </div>
                  </div>
                  <p className="mb-3">
                    Совместно с Игорем Михайловым (писатель, бывш. зам. глав. ред. "Юности") издаём литературно-художественный 
                    журнал «Вторник». Назван в память о посиделках по вторникам в «Юности». Журнал публикуется в интернете два 
                    раза в месяц. Иногда выходят печатные версии журнала.
                  </p>
                  <a href="https://vtornik.online" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    https://vtornik.online
                  </a>
                </div>
              </div>

            <div className="relative border-l-2 border-muted pl-8 pb-6 ml-3">
              <div className="absolute w-5 h-5 bg-primary rounded-full -left-[11px] top-1"></div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-1">Журнал "Юность"</h3>
                <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-3">
                  <span className="font-medium">Главный художник</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>2009 - 2019</span>
                  </div>
                </div>
                <p>
                  Отвечал за художественное оформление журнала, вёрстку, обработку иллюстраций и общий визуальный стиль издания.
                </p>
              </div>
            </div>

            <div className="relative border-l-2 border-muted pl-8 pb-6 ml-3">
              <div className="absolute w-5 h-5 bg-primary rounded-full -left-[11px] top-1"></div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-1">Преподавание</h3>
                <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-3">
                  <span className="font-medium">Преподаватель</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>2003 - 2014</span>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-card-foreground">
                  <li>Преподавал компьютерную графику в ДХШ №1 им. Серова (2003-2006)</li>
                  <li>Преподавал в Университете Печати специальность "Компьютерная обработка изображений" (2009-2010)</li>
                  <li>Преподавал в Художественном училище памяти 1905 года (2013-2014)</li>
                </ul>
              </div>
            </div>

            <div className="relative border-l-2 border-muted pl-8 pb-6 ml-3">
              <div className="absolute w-5 h-5 bg-primary rounded-full -left-[11px] top-1"></div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-1">Издательство "Слово"</h3>
                <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-3">
                  <span className="font-medium">Вёрстка, обработка иллюстраций</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>2005 - 2009</span>
                  </div>
                </div>
                <p>
                  Отвечал за вёрстку книг и журналов, обработку иллюстраций и подготовку материалов к печати.
                </p>
              </div>
            </div>

            <div className="relative border-l-2 border-muted pl-8 pb-6 ml-3">
              <div className="absolute w-5 h-5 bg-primary rounded-full -left-[11px] top-1"></div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-1">Журнал "Свой"</h3>
                <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-3">
                  <span className="font-medium">Арт-директор</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>2004</span>
                  </div>
                </div>
                <p>
                  Работал арт-директором журнала Н. Михалкова "Свой", отвечая за визуальную концепцию и художественное оформление издания.
                </p>
              </div>
            </div>

            <div className="relative border-l-2 border-muted pl-8 ml-3">
              <div className="absolute w-5 h-5 bg-primary rounded-full -left-[11px] top-1"></div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-1">Ранняя карьера</h3>
                <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-3">
                  <span className="font-medium">Различные позиции</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>1984 - 2000</span>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-card-foreground">
                  <li>К/с «Союзмультфильм» - Художник-мультипликатор (1984-1988)</li>
                  <li>Портреты и шаржи на Арбате и в Измайлово (1986-1988)</li>
                  <li>Совместное предприятие «Эгмонт-ФиС» - Художник комиксов (1990)</li>
                  <li>Кукольный театр Марты Владимировны Цифринович - Ассистент (1990-1991)</li>
                  <li>Рекламное агентство «Балтия» - Компьютерная графика, анимация, дизайн (1991)</li>
                  <li>PR-агентство «Респект» - Дизайн, реклама (1992)</li>
                  <li>Фирма «М-стиль» - Вёрстка, дизайн, реклама (1993)</li>
                  <li>Журнал «Арт-Престиж» при Ассоциации Высокой моды - Вёрстка, дизайн (1995)</li>
                  <li>Оформление телепередачи «Утиная охота», создание иллюстраций (1995)</li>
                  <li>Дизайн упаковки для чая, шоколада торговой марки «Дольче Вита» (с 1996)</li>
                  <li>Журнал «Театр» - Дизайн и вёрстка нескольких номеров (1996-2000)</li>
                  <li>«Никколо М» - Выборы мэра г. Шатуры, дизайн и вёрстка газеты (2000)</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section 
          id="skills"
          className={`mt-16 transition-all duration-700 delay-400 ${
            scrollY > 600 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center mb-8">
            <Code className="w-8 h-8 mr-4 text-primary drop-shadow-sm" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text leading-[1.3] tracking-tight pb-2">Навыки</h2>
          </div>

          <div className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-2xl p-10 shadow-xl border border-emerald-100/50 mb-16 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-3"></div>
                  Профессиональные навыки
                </h3>
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-lg font-semibold text-gray-700">Графический дизайн</span>
                      <span className="text-lg font-bold text-emerald-600">95%</span>
                    </div>
                    <Progress value={95} className="h-3 bg-gray-200" />
                  </div>
                  <div className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-lg font-semibold text-gray-700">Вёрстка и полиграфия</span>
                      <span className="text-lg font-bold text-teal-600">90%</span>
                    </div>
                    <Progress value={90} className="h-3 bg-gray-200" />
                  </div>
                  <div className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-lg font-semibold text-gray-700">Компьютерная графика</span>
                      <span className="text-lg font-bold text-cyan-600">85%</span>
                    </div>
                    <Progress value={85} className="h-3 bg-gray-200" />
                  </div>
                  <div className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-lg font-semibold text-gray-700">Веб-дизайн</span>
                      <span className="text-lg font-bold text-blue-600">80%</span>
                    </div>
                    <Progress value={80} className="h-3 bg-gray-200" />
                  </div>
                  <div className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-lg font-semibold text-gray-700">Разработка ИИ-приложений</span>
                      <span className="text-lg font-bold text-indigo-600">75%</span>
                    </div>
                    <Progress value={75} className="h-3 bg-gray-200" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                  Области специализации
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border-emerald-300 px-4 py-2 text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300">Полиграфический дизайн</Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-300 px-4 py-2 text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300">Вёрстка журналов</Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 border-purple-300 px-4 py-2 text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300">Вёрстка книг</Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 border-pink-300 px-4 py-2 text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300">Обработка изображений</Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-300 px-4 py-2 text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300">Компьютерная графика</Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-300 px-4 py-2 text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300">Веб-дизайн</Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border-violet-300 px-4 py-2 text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300">Анимация</Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border-red-300 px-4 py-2 text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300">Иллюстрация</Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 border-teal-300 px-4 py-2 text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300">Упаковка</Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 border-indigo-300 px-4 py-2 text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300">Разработка ИИ</Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700 border-slate-300 px-4 py-2 text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300">Художественное руководство</Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-lime-100 to-green-100 text-lime-700 border-lime-300 px-4 py-2 text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300">Преподавание</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section 
          id="collaboration"
          className={`mt-12 transition-all duration-700 delay-500 ${
            scrollY > 800 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center mb-8">
            <div className="p-2 bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 rounded-lg mr-4 shadow-lg">
              <Palette className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text leading-[1.3] tracking-tight pb-2">Сотрудничество</h2>
          </div>

          <div className="bg-gradient-to-br from-white via-rose-50 to-pink-50 rounded-2xl p-10 shadow-xl border border-rose-100/50 mb-16 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
            <p className="mb-8 text-xl md:text-2xl text-gray-700 leading-relaxed tracking-wide font-light text-center">
              Сотрудничал с различными издательствами и организациями:
            </p>
            <div className="mt-8 h-1 w-24 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 rounded-xl p-6 shadow-sm border border-rose-100/50 hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-5 h-5 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mr-3"></div>
                  Издательства
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 hover:text-rose-600 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full mr-3"></div>
                    Издательство «Слово»
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-rose-600 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full mr-3"></div>
                    Издательство «Терра»
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-rose-600 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full mr-3"></div>
                    Издательство «Лазурь»
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-rose-600 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full mr-3"></div>
                    Издательство «Русский путь»
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-rose-600 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full mr-3"></div>
                    Исторический музей (издательский отдел)
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-rose-600 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full mr-3"></div>
                    Институт Искусствознания (издательский отдел)
                  </li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-6 shadow-sm border border-pink-100/50 hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3"></div>
                  Журналы
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mr-3"></div>
                    Архитектурный журнал «Спич»
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mr-3"></div>
                    Журнал «Проект Россия»
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mr-3"></div>
                    Журнал «Проект Классика»
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mr-3"></div>
                    Журнал «Проект Интернешнл»
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mr-3"></div>
                    Журнал «Юность»
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mr-3"></div>
                    Журнал «Вторник»
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section 
          id="education"
          className={`mt-16 transition-all duration-700 delay-500 ${
            scrollY > 950 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center mb-8">
            <div className="p-2 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 rounded-lg mr-4 shadow-lg">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">
              Образование
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-yellow-50 border-l-4 border-yellow-400 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-10 top-1 w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Курсы художников-мультипликаторов
                </h3>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full">
                    <span className="font-semibold text-yellow-800">к/с «Союзмультфильм»</span>
                  </div>
                  <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-2 rounded-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">1984 - 1988</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed bg-gradient-to-r from-yellow-50 to-transparent p-4 rounded-lg border-l-2 border-yellow-300">
                  Получил профессиональное образование в области анимации с фундаментальной подготовкой по традиционным техникам мультипликации
                </p>
                <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Профессиональный профиль:</p>
                      <a 
                        href="https://animator.ru/db/?p=show_person&pid=4689" 
                        className="text-orange-800 hover:text-orange-900 font-semibold hover:underline transition-colors duration-300 text-lg"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        База данных аниматоров России
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Projects Section */}
        <section 
          id="projects"
          className={`mt-12 transition-all duration-700 delay-600 ${
            scrollY > 1000 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-pastel-mint-200 to-pastel-peach-200 rounded-2xl blur-xl opacity-30"></div>
            <div className="relative flex items-center justify-center py-4">
              <BookOpen className="w-8 h-8 mr-4 text-transparent bg-gradient-to-r from-pastel-mint-400 to-pastel-peach-400 bg-clip-text" />
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-pastel-mint-500 to-pastel-peach-500 bg-clip-text drop-shadow-sm leading-[1.3] pb-2">
                Текущие проекты
              </h2>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-pastel-mint-100/70 via-white to-pastel-peach-100/70 rounded-2xl shadow-xl backdrop-blur-sm"></div>
            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300">
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <p className="text-xl font-medium text-gray-700 leading-relaxed">
                    В настоящее время занимаюсь:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group/item bg-gradient-to-r from-pastel-mint-50 to-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-pastel-mint-200/50">
                    <span className="text-pastel-mint-600 font-medium">📖 Издание литературно-художественного журнала «Вторник»</span>
                  </div>
                  <div className="group/item bg-gradient-to-r from-pastel-peach-50 to-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-pastel-peach-200/50">
                    <span className="text-pastel-peach-600 font-medium">💻 Веб-дизайн и разработка</span>
                  </div>
                  <div className="group/item bg-gradient-to-r from-pastel-lavender-50 to-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-pastel-lavender-200/50">
                    <span className="text-pastel-lavender-600 font-medium">🤖 Разработка приложений на базе ИИ</span>
                  </div>
                  <div className="group/item bg-gradient-to-r from-pastel-blue-50 to-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-pastel-blue-200/50">
                    <span className="text-pastel-blue-600 font-medium">🎨 Полиграфический дизайн</span>
                  </div>
                  <div className="group/item bg-gradient-to-r from-pastel-mint-50 to-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-pastel-mint-200/50">
                    <span className="text-pastel-mint-600 font-medium">📝 Вёрстка журналов и книг</span>
                  </div>
                  <div className="group/item bg-gradient-to-r from-pastel-peach-50 to-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-pastel-peach-200/50">
                    <span className="text-pastel-peach-600 font-medium">✨ Создание иллюстраций</span>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <div className="relative group inline-block">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <a 
                      href="https://vtornik.online" 
                      className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 backdrop-blur-sm"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                      <BookOpen className="w-6 h-6 mr-3 relative z-10 drop-shadow-lg" />
                      <span className="relative z-10 text-lg tracking-wide drop-shadow-lg">
                        Посетить сайт журнала «Вторник»
                      </span>
                      <div className="ml-2 relative z-10">
                        <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact"
          className={`mt-12 mb-8 transition-all duration-700 delay-700 relative z-10 ${
            scrollY > 1100 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-2xl blur-xl opacity-30"></div>
            <div className="relative flex items-center justify-center py-4">
              <Mail className="w-8 h-8 mr-4 text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text" />
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text drop-shadow-sm leading-[1.3] pb-2">
                Контакты
              </h2>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/70 via-white to-purple-100/70 rounded-2xl shadow-xl backdrop-blur-sm"></div>
            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300">
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <p className="text-xl font-medium text-gray-700 leading-relaxed">
                    Готов к сотрудничеству и новым проектам
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/80 rounded-xl p-6 shadow-sm border border-indigo-100/50 hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3"></div>
                      Связаться со мной
                    </h3>
                    <div className="space-y-4">
                      <div className="group/contact flex items-center p-3 rounded-lg bg-gradient-to-r from-indigo-50 to-white hover:from-indigo-100 hover:to-indigo-50 transition-all duration-300">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-4">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <a href="mailto:4foto@mail.ru" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300">
                          4foto@mail.ru
                        </a>
                      </div>
                      <div className="group/contact flex items-center p-3 rounded-lg bg-gradient-to-r from-green-50 to-white hover:from-green-100 hover:to-green-50 transition-all duration-300">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-4">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <a href="tel:+79851495075" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300">
                          +7(985)149-50-75
                        </a>
                      </div>
                      <div className="group/contact flex items-center p-3 rounded-lg bg-gradient-to-r from-purple-50 to-white hover:from-purple-100 hover:to-purple-50 transition-all duration-300">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mr-4">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">Москва, Россия</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 rounded-xl p-6 shadow-sm border border-purple-100/50 hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mr-3"></div>
                      Мои проекты
                    </h3>
                    <div className="space-y-4">
                      <div className="group/project p-4 rounded-lg bg-gradient-to-r from-purple-50 to-white hover:from-purple-100 hover:to-purple-50 transition-all duration-300 border border-purple-200/50">
                        <a 
                          href="https://vtornik.online" 
                          className="flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors duration-300"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <BookOpen className="w-5 h-5 mr-3" />
                          Журнал «Вторник»
                          <ExternalLink className="w-4 h-4 ml-2 opacity-60" />
                        </a>
                        <p className="text-sm text-gray-600 mt-2">Литературно-художественный журнал</p>
                      </div>
                      <div className="group/project p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-white hover:from-indigo-100 hover:to-indigo-50 transition-all duration-300 border border-indigo-200/50">
                        <a 
                          href="https://typo-omega.vercel.app" 
                          className="flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Code className="w-5 h-5 mr-3" />
                          Typo Omega
                          <ExternalLink className="w-4 h-4 ml-2 opacity-60" />
                        </a>
                        <p className="text-sm text-gray-600 mt-2">Типографический проект</p>
                      </div>
                      <div className="group/project p-4 rounded-lg bg-gradient-to-r from-teal-50 to-white hover:from-teal-100 hover:to-teal-50 transition-all duration-300 border border-teal-200/50 relative z-20">
                        <a 
                          href="https://animator.ru/db/?p=show_person&pid=4689" 
                          className="flex items-center text-teal-800 hover:text-teal-900 font-semibold transition-colors duration-300 relative z-30"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <User className="w-5 h-5 mr-3" />
                          База аниматоров
                          <ExternalLink className="w-4 h-4 ml-2 opacity-60" />
                        </a>
                        <p className="text-sm text-gray-600 mt-2">Профессиональный профиль</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-700 font-medium rounded-full">
                    <span className="mr-2">🎨</span>
                    Всегда открыт для новых творческих проектов
                    <span className="ml-2">✨</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-pastel-blue-100 to-pastel-lavender-100 text-foreground py-8 mt-12 relative z-10">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <p className="font-medium">© {new Date().getFullYear()} Дмитрий Горяченков. Все права защищены.</p>
          <p className="text-sm text-muted-foreground mt-2">
            Профессиональное резюме
          </p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage