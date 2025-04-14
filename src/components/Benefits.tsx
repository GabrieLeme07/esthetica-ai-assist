
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, DollarSign, Users } from 'lucide-react';

const Benefits = () => {
  const benefitsList = [
    "Redução de até 70% no tempo gasto com agendamentos",
    "Diminuição de 50% nas faltas dos clientes",
    "Aumento médio de 30% na satisfação dos clientes",
    "Economia de até 40% em custos administrativos",
    "Maior conversão de leads em clientes efetivos",
    "Acompanhamento inteligente de resultados"
  ];

  return (
    <section id="beneficios" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits showcase */}
          <div>
            <div className="bg-gradient-to-br from-brand-purple/10 to-brand-teal/10 rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <Clock className="h-10 w-10 text-brand-purple mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Economize Tempo</h3>
                  <p className="text-gray-600">Automatize tarefas repetitivas e foque no crescimento do seu negócio</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <DollarSign className="h-10 w-10 text-brand-teal mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Aumente o Faturamento</h3>
                  <p className="text-gray-600">Reduza faltas e otimize sua agenda para maximizar receitas</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <Users className="h-10 w-10 text-brand-purple mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Fidelize Clientes</h3>
                  <p className="text-gray-600">Ofereça uma experiência superior com atendimento personalizado</p>
                </div>
                <div className="bg-gradient-to-r from-brand-purple to-brand-teal rounded-xl p-6 shadow-soft text-white">
                  <h3 className="text-xl font-semibold mb-4">Transforme sua Clínica Hoje</h3>
                  <Button variant="secondary" className="w-full">
                    Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Benefícios de usar <span className="gradient-heading">EstheticaAI</span> na sua clínica
            </h2>
            <p className="text-lg text-gray-600">
              Nossa solução impulsiona resultados reais para clínicas de estética em todo o Brasil, otimizando processos e melhorando a experiência do cliente.
            </p>
            
            <ul className="space-y-3">
              {benefitsList.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-purple shrink-0 mr-3 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button className="button-hover-effect" size="lg">
              Transforme sua Clínica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
