
import { MessageSquare, Calendar, CheckCircle2, Bot, LineChart, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-brand-purple" />,
      title: "Atendimento via WhatsApp",
      description: "Responda dúvidas, forneça informações sobre tratamentos e serviços 24 horas por dia, 7 dias por semana."
    },
    {
      icon: <Calendar className="h-8 w-8 text-brand-purple" />,
      title: "Agendamento Automático",
      description: "Permita que clientes agendem procedimentos diretamente via WhatsApp, sem intervenção humana."
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-brand-purple" />,
      title: "Confirmação de Presença",
      description: "Envio automático de lembretes e confirmação de presença antes das consultas, reduzindo faltas."
    },
    {
      icon: <Bot className="h-8 w-8 text-brand-purple" />,
      title: "Assistente Pessoal",
      description: "Seu assistente AI personalizado para gerenciar operações e fornecer insights valiosos para o seu negócio."
    },
    {
      icon: <LineChart className="h-8 w-8 text-brand-purple" />,
      title: "Relatórios de Faturamento",
      description: "Acompanhe o desempenho financeiro da sua clínica com relatórios automáticos e insights para crescimento."
    },
    {
      icon: <Clock className="h-8 w-8 text-brand-purple" />,
      title: "Economize Tempo",
      description: "Reduza tarefas administrativas e foque no que realmente importa: cuidar dos seus clientes e expandir seu negócio."
    }
  ];

  return (
    <section id="recursos" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Recursos Inteligentes para sua Clínica
          </h2>
          <p className="text-lg text-gray-600">
            Nossa plataforma utiliza inteligência artificial avançada para automatizar processos e melhorar a experiência dos seus clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
