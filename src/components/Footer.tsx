
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#9b87f5]">KRYMTAL</h3>
            <p className="mb-4">
              Специализированный магазин электрических канатных тельферов от ведущих 
              производителей КНР, Болгарии и России.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#9b87f5] transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-[#9b87f5] transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#9b87f5] transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-[#9b87f5] transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-[#9b87f5] transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-[#9b87f5]" />
                +7 (800) 555-35-35
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-[#9b87f5]" />
                info@krymtal.ru
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 text-[#9b87f5] mt-1" />
                <span>г. Симферополь, ул. Примерная, 123, офис 45</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} KRYMTAL. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
