
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A IA Beauty transformou completamente o fluxo de trabalho da minha clínica. Economizamos horas diárias em tarefas administrativas e reduzimos nossas faltas em mais de 60%.",
      author: "Dra. Carla Oliveira",
      role: "Proprietária, Clínica Beleza Natural",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      stars: 5
    },
    {
      quote: "Meus clientes adoram a facilidade de agendar pelo WhatsApp a qualquer hora do dia. E eu posso acompanhar todos os dados do meu negócio em um só lugar.",
      author: "Dr. Marcelo Santos",
      role: "Proprietário, Estética Avançada",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 5
    },
    {
      quote: "O assistente virtual me ajuda a manter contato constante com os clientes e o sistema de lembretes reduziu nossas faltas em quase 70%. Valeu cada centavo do investimento!",
      author: "Juliana Mendes",
      role: "Gerente, Clínica Renove",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      stars: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600">
            Proprietários de clínicas de estética por todo o Brasil já experimentaram a transformação com nossa plataforma.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-soft border border-gray-100"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-purple text-brand-purple" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-brand-purple"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
