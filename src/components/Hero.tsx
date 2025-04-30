
import { Button } from "../components/ui/button";
import { MessageSquare, Calendar, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <p className="inline-block rounded-full bg-brand-purple/10 px-4 py-1.5 text-sm font-medium text-brand-purple mb-6">
                IA para Clínicas de Estética
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Automatize sua clínica com <span className="gradient-heading">Inteligência Artificial</span>
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-lg">
              Transforme o atendimento da sua clínica de estética com um assistente virtual inteligente via WhatsApp para agendamentos, confirmações e suporte 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} size="lg" className="button-hover-effect">
                Transforme sua Clínica
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex -space-x-2">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Usuário"
                />
                <img 
                  src="https://randomuser.me/api/portraits/men/44.jpg" 
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Usuário"
                />
                <img 
                  src="https://randomuser.me/api/portraits/women/45.jpg" 
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Usuário"
                />
              </div>
              <p className="text-gray-600">
                Mais de <span className="font-semibold text-brand-purple">300+ clínicas</span> já transformadas
              </p>
            </div>
          </div>
          
          {/* Right side - Image/Mockup */}
          <div className="relative">
            <div className="w-full h-[420px] bg-gradient-to-br from-brand-purple/20 to-brand-teal/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Floating Elements */}
              <div className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-soft animate-float">
                <MessageSquare className="h-8 w-8 text-brand-purple" />
              </div>
              <div className="absolute bottom-10 left-10 bg-white p-4 rounded-xl shadow-soft animate-float" style={{ animationDelay: '1s' }}>
                <Calendar className="h-8 w-8 text-brand-teal" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-soft">
                <Sparkles className="h-12 w-12 text-brand-purple" />
              </div>
              
              {/* Phone mockup */}
              <div className="absolute bottom-0 right-4 w-64 h-96 bg-white rounded-t-3xl shadow-soft border-4 border-gray-100 overflow-hidden">
                <div className="h-8 bg-gray-100 flex justify-center items-center">
                  <div className="w-16 h-4 bg-gray-200 rounded-full"></div>
                </div>
                <div className="p-4 bg-brand-gray h-full">
                  {/* Chat interface mockup */}
                  <div className="flex flex-col h-full">
                    <div className="bg-white p-3 rounded-lg mb-3 shadow-sm ml-auto max-w-[80%]">
                      <p className="text-xs">Olá! Gostaria de agendar um procedimento de limpeza de pele.</p>
                    </div>
                    <div className="bg-brand-purple/10 p-3 rounded-lg mb-3 shadow-sm max-w-[80%]">
                      <p className="text-xs">Claro! Temos horários disponíveis amanhã às 14h ou 16h. Qual você prefere?</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg mb-3 shadow-sm ml-auto max-w-[80%]">
                      <p className="text-xs">16h seria perfeito!</p>
                    </div>
                    <div className="bg-brand-purple/10 p-3 rounded-lg shadow-sm max-w-[80%]">
                      <p className="text-xs">Ótimo! Agendamento confirmado para amanhã às 16h. Enviarei um lembrete 2h antes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
