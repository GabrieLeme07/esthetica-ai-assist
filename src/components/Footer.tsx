
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    "Produto": [
      { name: "Recursos", url: "#recursos" },
      { name: "Benefícios", url: "#beneficios" },
      { name: "Depoimentos", url: "#depoimentos" },
      { name: "Preços", url: "#" },
      { name: "FAQ", url: "#" }
    ],
    "Empresa": [
      { name: "Sobre Nós", url: "#" },
      { name: "Blog", url: "#" },
      { name: "Carreiras", url: "#" },
      { name: "Contato", url: "#" }
    ],
    "Legal": [
      { name: "Termos de Serviço", url: "#" },
      { name: "Política de Privacidade", url: "#" },
      { name: "Cookies", url: "#" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div>
            <div className="mb-4">
              <a href="#" className="text-xl font-bold text-white flex items-center">
                <span className="mr-2">✨</span>
                Esthetica<span className="text-brand-teal">AI</span>
              </a>
            </div>
            <p className="mb-4">
              Transformando clínicas de estética com inteligência artificial e automação via WhatsApp.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {currentYear} EstheticaAI. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <select className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple">
              <option value="pt-BR">Português (BR)</option>
              <option value="en-US">English (US)</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
