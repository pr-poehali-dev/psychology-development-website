import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Brain" className="text-primary" size={32} />
              <span className="text-2xl font-inter font-bold text-gray-900">Психодоры</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-open-sans">О психологе</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-open-sans">Услуги</a>
              <a href="#consultation" className="text-gray-700 hover:text-primary transition-colors font-open-sans">Онлайн-консультации</a>
              <a href="#methods" className="text-gray-700 hover:text-primary transition-colors font-open-sans">Методы работы</a>
              <a href="#articles" className="text-gray-700 hover:text-primary transition-colors font-open-sans">Статьи</a>
              <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors font-open-sans">Отзывы</a>
              <a href="#courses" className="text-gray-700 hover:text-primary transition-colors font-open-sans">Курсы</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-open-sans">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white font-open-sans">
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-inter font-bold text-gray-900 mb-6 leading-tight">
                Путь к<br />
                <span className="text-primary">уверенности</span><br />
                в себе
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-open-sans leading-relaxed">
                Индивидуальная терапия для личностного развития. Работаю с самооценкой, 
                уверенностью в себе и внутренними ресурсами через КПТ и НЛП.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-open-sans">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на консультацию
                </Button>
                <Button variant="outline" size="lg" className="font-open-sans">
                  <Icon name="Play" className="mr-2" size={20} />
                  Посмотреть видео
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
                <img 
                  src="/img/1e757b1e-0627-498c-8c39-d7b46e31f3d3.jpg" 
                  alt="Психолог" 
                  className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-inter font-bold text-gray-900 mb-6">
                О психологе
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-open-sans">
                Сертифицированный специалист по когнитивно-поведенческой терапии и НЛП. 
                Более 8 лет помогаю людям обрести уверенность в себе и раскрыть внутренний потенциал.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="GraduationCap" className="text-primary" size={24} />
                  <span className="font-open-sans">Магистр психологии МГУ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="font-open-sans">Сертификация по КПТ и НЛП</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" className="text-primary" size={24} />
                  <span className="font-open-sans">Более 500 успешных клиентов</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-gray-600 font-open-sans">лет опыта</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-gray-600 font-open-sans">клиентов</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-gray-600 font-open-sans">довольных</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-gray-600 font-open-sans">поддержка</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-bold text-gray-900 mb-6">
              Услуги
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Профессиональная помощь для вашего личностного роста
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="User" className="text-primary mb-4" size={48} />
                <CardTitle className="font-inter">Индивидуальная терапия</CardTitle>
                <CardDescription className="font-open-sans">
                  Персональная работа с самооценкой и уверенностью в себе
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    <span className="text-sm font-open-sans">Работа с убеждениями</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    <span className="text-sm font-open-sans">Повышение самооценки</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    <span className="text-sm font-open-sans">Преодоление страхов</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-4">от 3000 ₽</div>
                <Button className="w-full" variant="outline">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Brain" className="text-primary mb-4" size={48} />
                <CardTitle className="font-inter">КПТ терапия</CardTitle>
                <CardDescription className="font-open-sans">
                  Когнитивно-поведенческая терапия для изменения мыслей и поведения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    <span className="text-sm font-open-sans">Работа с мыслями</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    <span className="text-sm font-open-sans">Изменение поведения</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    <span className="text-sm font-open-sans">Практические техники</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-4">от 3500 ₽</div>
                <Button className="w-full" variant="outline">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Zap" className="text-primary mb-4" size={48} />
                <CardTitle className="font-inter">НЛП техники</CardTitle>
                <CardDescription className="font-open-sans">
                  Нейролингвистическое программирование для быстрых изменений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    <span className="text-sm font-open-sans">Работа с ресурсами</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    <span className="text-sm font-open-sans">Постановка целей</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    <span className="text-sm font-open-sans">Изменение состояний</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-4">от 4000 ₽</div>
                <Button className="w-full" variant="outline">Подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Article Categories */}
      <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-bold text-gray-900 mb-6">
              Категории статей
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Полезные материалы для личностного развития
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Icon name="Heart" className="text-primary mx-auto mb-4" size={48} />
                <CardTitle className="font-inter">Самооценка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 font-open-sans mb-4">
                  Как повысить уверенность в себе и полюбить себя
                </p>
                <Badge variant="secondary">12 статей</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Icon name="Target" className="text-primary mx-auto mb-4" size={48} />
                <CardTitle className="font-inter">Цели</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 font-open-sans mb-4">
                  Постановка и достижение жизненных целей
                </p>
                <Badge variant="secondary">8 статей</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Icon name="Lightbulb" className="text-primary mx-auto mb-4" size={48} />
                <CardTitle className="font-inter">Мотивация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 font-open-sans mb-4">
                  Поддержание мотивации и борьба с прокрастинацией
                </p>
                <Badge variant="secondary">15 статей</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Icon name="Users" className="text-primary mx-auto mb-4" size={48} />
                <CardTitle className="font-inter">Отношения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 font-open-sans mb-4">
                  Здоровые отношения и коммуникация
                </p>
                <Badge variant="secondary">10 статей</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-inter font-bold mb-6">
            Готовы начать путь к уверенности?
          </h2>
          <p className="text-xl mb-8 font-open-sans opacity-90">
            Запишитесь на первую консультацию и начните изменения уже сегодня
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-open-sans">
            <Icon name="Calendar" className="mr-2" size={20} />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Brain" className="text-primary" size={32} />
              <span className="text-2xl font-inter font-bold">Психодоры</span>
            </div>
            <p className="text-gray-300 font-open-sans">
              Профессиональная психологическая помощь для личностного развития
            </p>
          </div>
          <div>
            <h3 className="text-lg font-inter font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-300 font-open-sans">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@psychodory.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 123</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-inter font-semibold mb-4">Следите за нами</h3>
            <div className="flex space-x-4">
              <Icon name="Instagram" className="text-gray-300 hover:text-primary cursor-pointer" size={24} />
              <Icon name="Youtube" className="text-gray-300 hover:text-primary cursor-pointer" size={24} />
              <Icon name="MessageCircle" className="text-gray-300 hover:text-primary cursor-pointer" size={24} />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 font-open-sans">
            © 2024 Психодоры. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;