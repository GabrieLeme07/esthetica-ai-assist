
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Calendar, Phone } from 'lucide-react';

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would send data to a server here
    setEmailSubmitted(true);
    setTimeout(() => setEmailSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Contact form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforme sua Clínica <span className="gradient-heading">Hoje Mesmo</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Entre em contato para uma demonstração personalizada e descubra como nossa plataforma da IA Beauty pode transformar sua clínica de estética.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (opcional)</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="Conte-nos sobre sua clínica e suas necessidades..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full button-hover-effect" size="lg">
                {emailSubmitted ? 
                  <span className="flex items-center"><Check className="h-5 w-5 mr-2" /> Enviado com Sucesso</span> : 
                  'Solicitar Demonstração'
                }
              </Button>
            </form>
          </div>
          
          {/* Right side - Additional information */}
          <div className="bg-gradient-to-br from-brand-purple/10 to-brand-teal/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Outras formas de contato</h3>
            
            <div className="space-y-6">              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-soft mr-4">
                  <MessageCircle className="h-6 w-6 text-brand-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp</h4>
                  <p className="text-gray-600">(11) 92090-2166</p>
                  <p className="text-sm text-gray-500 mt-1">Atendimento 24/7 pelo nosso assistente</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-soft mr-4">
                  <Calendar className="h-6 w-6 text-brand-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Agende uma Demonstração</h4>
                  <p className="text-gray-600">Chame nossa equipe e agende uma demonstração ao vivo da plataforma</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft mt-6">
                <h4 className="font-semibold mb-3">Pronto para começar?</h4>
                <p className="text-gray-600 mb-4">Inicie sua transformação digital com um período de teste gratuito de 7 dias.</p>
                <Button variant="outline" className="w-full">
                  Comece seu Teste Gratuito
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
