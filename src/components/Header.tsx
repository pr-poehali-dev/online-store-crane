
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative text-white py-4 sticky top-0 z-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1561216166-aba95a0ab26a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Тельфер электрический канатный" 
          className="w-full h-full object-cover brightness-25 blur-[1px]"
        />
        <div className="absolute inset-0 bg-[#1A1F2C] bg-opacity-85"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#9b87f5]">
            KRYMTAL
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-[#9b87f5] transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="hover:text-[#9b87f5] transition-colors">
              Каталог
            </Link>
            <Link to="/about" className="hover:text-[#9b87f5] transition-colors">
              О компании
            </Link>
            <Link to="/delivery" className="hover:text-[#9b87f5] transition-colors">
              Доставка и оплата
            </Link>
            <Link to="/contacts" className="hover:text-[#9b87f5] transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Contact and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-2 text-[#9b87f5]" />
              <span>+7 (800) 555-35-35</span>
            </div>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5 text-[#9b87f5]" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Link to="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 text-[#9b87f5]" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 py-4 animate-fade-in">
            <Link to="/" className="block hover:text-[#9b87f5]">
              Главная
            </Link>
            <Link to="/catalog" className="block hover:text-[#9b87f5]">
              Каталог
            </Link>
            <Link to="/about" className="block hover:text-[#9b87f5]">
              О компании
            </Link>
            <Link to="/delivery" className="block hover:text-[#9b87f5]">
              Доставка и оплата
            </Link>
            <Link to="/contacts" className="block hover:text-[#9b87f5]">
              Контакты
            </Link>
            <div className="flex items-center pt-2">
              <Phone size={16} className="mr-2 text-[#9b87f5]" />
              <span>+7 (800) 555-35-35</span>
            </div>
            <div className="flex space-x-4 pt-2">
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5 text-[#9b87f5]" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </Link>
              <Link to="/account">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5 text-[#9b87f5]" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
