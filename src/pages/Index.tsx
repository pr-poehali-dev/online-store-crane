
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCategory from '@/components/ProductCategory';
import { Button } from '@/components/ui/button';

const Index = () => {
  const categories = [
    {
      id: 1,
      title: 'Электрические тельферы из КНР',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900868c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Надежные и доступные по цене электрические канатные тельферы китайского производства. Отличное соотношение цены и качества для различных промышленных задач.',
      country: 'КНР',
      link: '/catalog/china',
    },
    {
      id: 2,
      title: 'Тельферы из Болгарии',
      image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Высококачественные электрические тельферы болгарского производства. Известны своей надежностью, долговечностью и соответствием европейским стандартам качества.',
      country: 'Болгария',
      link: '/catalog/bulgaria',
    },
    {
      id: 3,
      title: 'Тельферы российского производства',
      image: 'https://images.unsplash.com/photo-1581093198523-fc2a261cc4b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Отечественные электрические канатные тельферы, разработанные с учетом российских условий эксплуатации. Надежная техника для промышленных предприятий.',
      country: 'Россия',
      link: '/catalog/russia',
    },
  ];

  const features = [
    {
      title: 'Большой выбор',
      description: 'Более 100 моделей тельферов от разных производителей',
      icon: '🏭',
    },
    {
      title: 'Гарантия качества',
      description: 'Официальная гарантия от производителя на всю продукцию',
      icon: '✅',
    },
    {
      title: 'Доставка по всей России',
      description: 'Быстрая доставка в любой регион страны',
      icon: '🚚',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Промышленное оборудование" 
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="container mx-auto px-4 z-10 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Электрические канатные тельферы
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Надежное грузоподъемное оборудование для вашего бизнеса от лучших производителей КНР, Болгарии и России
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog">
                <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg px-8">
                  Каталог продукции
                </Button>
              </Link>
              <Link to="/contacts">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg px-8">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">О компании KRYMTAL</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Мы специализируемся на поставках высококачественного грузоподъемного оборудования для промышленных предприятий.
                Наша компания является официальным дистрибьютором ведущих производителей электрических канатных тельферов из КНР, Болгарии и России.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Наша продукция</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <ProductCategory
                  key={category.id}
                  title={category.title}
                  image={category.image}
                  description={category.description}
                  country={category.country}
                  link={category.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#1A1F2C] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Наши специалисты помогут подобрать оптимальный вариант тельфера для ваших задач
            </p>
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg px-8">
              Получить консультацию
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
