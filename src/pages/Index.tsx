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
    { id: 1, name: 'Темные хроники', description: 'Мир древних проклятий и забытых заклинаний', stories: 12, color: 'from-purple-900 to-violet-700' },
    { id: 2, name: 'Тени потустороннего', description: 'Граница между мирами живых и мертвых', stories: 8, color: 'from-slate-900 to-purple-900' },
    { id: 3, name: 'Кровавая луна', description: 'Ночь, когда пробуждаются древние силы', stories: 15, color: 'from-red-950 to-purple-950' },
  ];

  const fanfics = [
    { id: 1, title: 'Тени прошлого', universe: 'Темные хроники', chapters: 24, views: 15420, likes: 892 },
    { id: 2, title: 'Проклятие кровавой луны', universe: 'Кровавая луна', chapters: 18, views: 12300, likes: 745 },
    { id: 3, title: 'Хранитель врат', universe: 'Тени потустороннего', chapters: 32, views: 21500, likes: 1234 },
    { id: 4, title: 'Шепот древних', universe: 'Темные хроники', chapters: 15, views: 9800, likes: 567 },
    { id: 5, title: 'Ритуал тьмы', universe: 'Кровавая луна', chapters: 20, views: 13700, likes: 823 },
    { id: 6, title: 'Душа некроманта', universe: 'Тени потустороннего', chapters: 28, views: 18900, likes: 1056 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-900/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              Utterlyna's notes
            </h1>
            <div className="hidden md:flex gap-8">
              {['home', 'universes', 'fanfics', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-medium transition-colors story-link ${
                    activeSection === section ? 'text-purple-400' : 'text-gray-400 hover:text-purple-400'
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
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-300 to-purple-400 bg-clip-text text-transparent">
                  Да не оставит нас Господи
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Отправляйтесь в жуткое, но незабываемое приключение дочери дьявола вместе с Дином и Сэмом Винчестерами! Новая глава уже ждёт вас!
                </p>
                <div className="flex gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-700 to-violet-600 hover:from-purple-800 hover:to-violet-700 shadow-lg shadow-purple-900/50"
                    onClick={() => setActiveSection('fanfics')}
                  >
                    <Icon name="Book" size={20} className="mr-2" />
                    Читать фанфик
                  </Button>
                  <Button size="lg" variant="outline" className="border-purple-700 hover:bg-purple-950" onClick={() => setActiveSection('universes')}>
                    <Icon name="Moon" size={20} className="mr-2" />
                    Открыть порталы
                  </Button>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-gray-100">Фандомы</h3>
                <Button variant="ghost" onClick={() => setActiveSection('universes')}>
                  Смотреть все
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {universes.map((universe) => (
                  <Card key={universe.id} className="hover-scale cursor-pointer overflow-hidden group">
                    <div className={`h-40 bg-gradient-to-br ${universe.color} relative`}>
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute bottom-4 left-4 text-purple-300">
                        <Icon name="Moon" size={24} />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{universe.name}</CardTitle>
                      <CardDescription>{universe.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
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
                <h3 className="text-3xl font-bold text-gray-100">Мрачные сказания</h3>
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
                        <Icon name="BookMarked" size={24} className="text-purple-400" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-6 text-sm text-gray-400">
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
              <h2 className="text-4xl font-bold mb-4 text-gray-100">Мрачные вселенные</h2>
              <p className="text-lg text-gray-300">Откройте порталы в миры, окутанные тайной</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {universes.map((universe) => (
                <Card key={universe.id} className="hover-scale cursor-pointer overflow-hidden group">
                  <div className={`h-48 bg-gradient-to-br ${universe.color} relative`}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Icon name="Moon" size={48} className="text-purple-300 opacity-80" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{universe.name}</CardTitle>
                    <CardDescription className="text-base">{universe.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
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
              <h2 className="text-4xl font-bold mb-4 text-gray-100">Библиотека теней</h2>
              <p className="text-lg text-gray-300">Запретные знания и тайные хроники</p>
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
                          <Icon name="BookMarked" size={20} className="text-purple-400" />
                        </div>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="Globe" size={14} />
                          {fanfic.universe}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex gap-4 text-sm text-gray-400">
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
                          <Icon name="TrendingUp" size={20} className="text-violet-400" />
                        </div>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="Globe" size={14} />
                          {fanfic.universe}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Icon name="Heart" size={16} className="text-violet-400" />
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
              <div className="h-48 bg-gradient-to-br from-purple-900 to-violet-800 flex items-center justify-center">
                <Icon name="Feather" size={64} className="text-purple-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-3xl">Об авторе</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-300 leading-relaxed">
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
                    {['Темное фэнтези', 'Мистика', 'Некромантия', 'Древние проклятия', 'Миры теней'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-purple-950 text-purple-300 rounded-full text-sm border border-purple-800">
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
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Ваше имя
                    </label>
                    <Input id="name" placeholder="Введите ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Сообщение
                    </label>
                    <Textarea id="message" placeholder="Напишите ваше сообщение..." rows={6} />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-700 to-violet-600 hover:from-purple-800 hover:to-violet-700 shadow-lg shadow-purple-900/50">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t border-purple-900/30">
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

      <footer className="bg-slate-950/80 border-t border-purple-900/30 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 Мистические Хроники. Все права защищены.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
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