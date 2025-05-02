import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Check, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Formata o telefone enquanto o usuário digita
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, '');
    if (raw.length > 11) raw = raw.slice(0, 11);

    let formatted = raw;
    if (raw.length > 2) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}`;
    }
    if (raw.length > 7) {
      formatted += `-${raw.slice(7, 11)}`;
    }
    setTelefone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://n8n.glpavani.tech/webhook/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Application-Key': 'h2W26Q4bZMjXLpWSqLcY5bFNmb0d2DBd'
        },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          mensagem
        })
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar: ${response.statusText}`);
      }

      setEmailSubmitted(true);
      // opcional: limpar campos
      setNome('');
      setEmail('');
      setTelefone('');
      setMensagem('');

      setTimeout(() => setEmailSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
      alert('Houve um problema ao enviar. Tente novamente mais tarde.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Formulário */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforme sua Clínica <span className="gradient-heading">Hoje Mesmo</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Entre em contato para uma demonstração personalizada e descubra como nossa plataforma da IA Beauty pode transformar sua clínica de estética.
            </p>

            {/* Mensagem de sucesso */}
            {emailSubmitted && (
              <p className="mb-4 text-center text-green-600">
                Obrigado pelo contato! Sua mensagem foi enviada com sucesso. Em breve entraremos em contato. 😊
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input 
                  type="text"
                  id="name"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                  value={telefone}
                  onChange={handlePhoneChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (opcional)</label>
                <textarea 
                  id="message"
                  rows={4}
                  value={mensagem}
                  onChange={e => setMensagem(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="Conte-nos sobre sua clínica e suas necessidades..."
                />
              </div>

              <Button type="submit" className="w-full button-hover-effect" size="lg">
                {emailSubmitted 
                  ? <span className="flex items-center"><Check className="h-5 w-5 mr-2" /> Enviado com Sucesso</span>
                  : 'Solicitar Demonstração'}
              </Button>
            </form>
          </div>

          {/* Lado direito */}
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
