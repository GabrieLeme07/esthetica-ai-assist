// src/components/Header.tsx
import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo_2.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src={logo} 
              alt="IA Beauty" 
              className="h-14 w-auto md:h-18 mr-2"  
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#recursos" className="text-sm font-medium text-gray-600 hover:text-brand-purple transition-colors">
            Recursos
          </a>
          <a href="#beneficios" className="text-sm font-medium text-gray-600 hover:text-brand-purple transition-colors">
            Benefícios
          </a>
          <a href="#depoimentos" className="text-sm font-medium text-gray-600 hover:text-brand-purple transition-colors">
            Depoimentos
          </a>
          <Button onClick={scrollToContact} className="button-hover-effect">
            Transforme sua Clínica
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b absolute w-full py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#recursos" 
              className="text-sm font-medium text-gray-600 hover:text-brand-purple p-2" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Recursos
            </a>
            <a 
              href="#beneficios" 
              className="text-sm font-medium text-gray-600 hover:text-brand-purple p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#depoimentos" 
              className="text-sm font-medium text-gray-600 hover:text-brand-purple p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <Button onClick={scrollToContact} className="w-full">
              Transforme sua Clínica
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
