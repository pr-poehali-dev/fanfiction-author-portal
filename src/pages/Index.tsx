import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const universes = [
    { id: 1, name: 'Вселенная магии и тайн', description: 'Мир древних заклинаний и забытых артефактов', stories: 12, color: 'from-purple-600 to-pink-600' },
    { id: 2, name: 'Киберпанк 2077', description: 'Неоновые улицы и цифровые мечты', stories: 8, color: 'from-blue-600 to-purple-600' },
    { id: 3, name: 'Эпоха драконов', description: 'Легенды о крылатых хранителях', stories: 15, color: 'from-red-600 to-orange-600' },
  ];

  const fanfics = [
    { id: 1, title: 'Тени прошлого', universe: 'Вселенная магии и тайн', chapters: 24, views: 15420, likes: 892 },
    { id: 2, title: 'Неоновый рассвет', universe: 'Киберпанк 2077', chapters: 18, views: 12300, likes: 745 },
    { id: 3, title: 'Последний драконорожденный', universe: 'Эпоха драконов', chapters: 32, views: 21500, likes: 1234 },
    { id: 4, title: 'Шепот звезд', universe: 'Вселенная магии и тайн', chapters: 15, views: 9800, likes: 567 },
    { id: 5, title: 'Цифровое сердце', universe: 'Киберпанк 2077', chapters: 20, views: 13700, likes: 823 },
    { id: 6, title: 'Крылья судьбы', universe: 'Эпоха драконов', chapters: 28, views: 18900, likes: 1056 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Fanfiction Universe
            </h1>
            <div className="hidden md:flex gap-8">
              {['home', 'universes', 'fanfics', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-medium transition-colors story-link ${
                    activeSection === section ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'universes' && 'Вселенные'}
                  {section === 'fanfics' && 'Фанфики'}
                  {section === 'about' && 'Об авторе'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="space-y-20 animate-fade-in">
            <section className="text-center py-20">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Добро пожаловать в мир фанфиков
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Погрузитесь в уникальные истории, рожденные воображением. Здесь каждая вселенная — это новое приключение,
                  каждый персонаж — живая душа.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    onClick={() => setActiveSection('fanfics')}
                  >
                    <Icon name="BookOpen" size={20} className="mr-2" />
                    Читать фанфики
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => setActiveSection('universes')}>
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Исследовать вселенные
                  </Button>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-gray-800">Популярные вселенные</h3>
                <Button variant="ghost" onClick={() => setActiveSection('universes')}>
                  Смотреть все
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {universes.map((universe) => (
                  <Card key={universe.id} className="hover-scale cursor-pointer overflow-hidden group">
                    <div className={`h-40 bg-gradient-to-br ${universe.color} relative`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <Icon name="Sparkles" size={24} />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{universe.name}</CardTitle>
                      <CardDescription>{universe.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="BookOpen" size={16} />
                        <span>{universe.stories} историй</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-gray-800">Последние фанфики</h3>
                <Button variant="ghost" onClick={() => setActiveSection('fanfics')}>
                  Смотреть все
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {fanfics.slice(0, 4).map((fanfic) => (
                  <Card key={fanfic.id} className="hover-scale cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{fanfic.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <Icon name="Globe" size={14} />
                            {fanfic.universe}
                          </CardDescription>
                        </div>
                        <Icon name="BookMarked" size={24} className="text-purple-600" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Icon name="FileText" size={16} />
                          <span>{fanfic.chapters} глав</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Eye" size={16} />
                          <span>{fanfic.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Heart" size={16} />
                          <span>{fanfic.likes.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'universes' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Вселенные</h2>
              <p className="text-lg text-gray-600">Исследуйте миры, созданные воображением</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {universes.map((universe) => (
                <Card key={universe.id} className="hover-scale cursor-pointer overflow-hidden group">
                  <div className={`h-48 bg-gradient-to-br ${universe.color} relative`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <Icon name="Sparkles" size={48} className="text-white opacity-80" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{universe.name}</CardTitle>
                    <CardDescription className="text-base">{universe.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="BookOpen" size={16} />
                        <span>{universe.stories} историй</span>
                      </div>
                      <Button size="sm" variant="ghost">
                        Читать
                        <Icon name="ArrowRight" size={14} className="ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'fanfics' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Все фанфики</h2>
              <p className="text-lg text-gray-600">Коллекция историй из разных вселенных</p>
            </div>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="popular">Популярные</TabsTrigger>
                <TabsTrigger value="new">Новые</TabsTrigger>
                <TabsTrigger value="completed">Завершенные</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fanfics.map((fanfic) => (
                    <Card key={fanfic.id} className="hover-scale cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg flex-1">{fanfic.title}</CardTitle>
                          <Icon name="BookMarked" size={20} className="text-purple-600" />
                        </div>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="Globe" size={14} />
                          {fanfic.universe}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Icon name="FileText" size={16} />
                              <span>{fanfic.chapters}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Eye" size={16} />
                              <span>{fanfic.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Heart" size={16} />
                              <span>{fanfic.likes.toLocaleString()}</span>
                            </div>
                          </div>
                          <Button className="w-full" variant="outline" size="sm">
                            Читать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="popular" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...fanfics].sort((a, b) => b.likes - a.likes).map((fanfic) => (
                    <Card key={fanfic.id} className="hover-scale cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg flex-1">{fanfic.title}</CardTitle>
                          <Icon name="TrendingUp" size={20} className="text-pink-600" />
                        </div>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="Globe" size={14} />
                          {fanfic.universe}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Icon name="Heart" size={16} className="text-pink-600" />
                            <span>{fanfic.likes.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Eye" size={16} />
                            <span>{fanfic.views.toLocaleString()}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 flex items-center justify-center">
                <Icon name="Feather" size={64} className="text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-3xl">Об авторе</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Приветствую! Я — автор этих историй, создатель миров и судеб персонажей, живущих на страницах моих фанфиков.
                </p>
                <p>
                  Писательство для меня — это способ исследовать безграничные возможности воображения. Каждая вселенная, которую
                  я создаю, — это результат вдохновения, творческих поисков и любви к литературе.
                </p>
                <p>
                  В моих работах вы найдете элементы фэнтези, научной фантастики и драмы. Я стремлюсь создавать глубоких
                  персонажей и захватывающие сюжеты, которые заставляют задуматься о важных вещах.
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold text-lg mb-3">Интересы:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Фэнтези', 'Научная фантастика', 'Мифология', 'Психология персонажей', 'Мировое строительство'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-2">Связаться со мной</CardTitle>
                <CardDescription className="text-base">
                  Есть вопросы, предложения или просто хотите поделиться впечатлениями? Напишите мне!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Ваше имя
                    </label>
                    <Input id="name" placeholder="Введите ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Сообщение
                    </label>
                    <Textarea id="message" placeholder="Напишите ваше сообщение..." rows={6} />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold mb-4 text-center">Найдите меня в соцсетях</h4>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Mail" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Twitter" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="MessageCircle" size={20} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-purple-100 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2024 Fanfiction Universe. Все права защищены.</p>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-purple-600 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Правила использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
