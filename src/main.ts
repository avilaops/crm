import './style.css';

// Declarações de tipo para tracking
declare global {
  interface Window {
    fbq: (action: string, event: string, params?: any) => void;
    gtag: (...args: any[]) => void;
  }
}

class CRMLandingPage {
  private app: HTMLElement;
  constructor() {
    this.app = document.querySelector('#app')!;
    this.render();
    this.setupTracking();
  }

  private render(): void {
    this.app.innerHTML = `
      <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav class="container mx-auto px-6 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <i class="iconoir-user-circle text-3xl text-sky-600"></i>
              <span class="text-2xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Avila Ops CRM</span>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="#features" class="text-gray-700 hover:text-sky-600 transition">Recursos</a>
              <a href="#benefits" class="text-gray-700 hover:text-sky-600 transition">Benefícios</a>
              <a href="#use-cases" class="text-gray-700 hover:text-sky-600 transition">Casos de Uso</a>
              <a href="#testimonials" class="text-gray-700 hover:text-sky-600 transition">Depoimentos</a>
              <a href="#pricing" class="text-gray-700 hover:text-sky-600 transition">Preços</a>
              <button onclick="window.open('https://wa.me/5517997811471?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Frappe%20CRM', '_blank')" class="bg-gradient-to-r from-sky-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition transform hover:scale-105">
                Solicitar Demo
              </button>
            </div>
          </div>
        </nav>
      </header>

      <section class="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="animate-fade-in">
              <div class="flex gap-3 mb-6">
                <div class="inline-block bg-sky-500/20 px-4 py-2 rounded-full border border-sky-500/30">
                  <span class="text-sm font-semibold text-sky-400"><i class="iconoir-star"></i> O CRM que acelera suas vendas</span>
                </div>
                <div class="inline-block bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30">
                  <span class="text-sm font-semibold text-green-400"><i class="iconoir-check-circle"></i> Teste Grátis 14 Dias</span>
                </div>
              </div>
              <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Relacionamento com Clientes com <span class="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Frappe CRM</span>
              </h1>
              <p class="text-xl mb-8 text-gray-300">
                A Avila Ops oferece implantação completa, treinamento especializado e suporte dedicado para Frappe CRM, a plataforma open source mais moderna para gestão de relacionamento com clientes.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5517997811471?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Frappe%20CRM" target="_blank" class="bg-gradient-to-r from-sky-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition transform hover:scale-105 text-center">
                  <i class="iconoir-phone mr-2"></i>Agendar Demonstração Gratuita
                </a>
                <button class="border-2 border-sky-400 text-sky-400 px-8 py-4 rounded-full font-semibold hover:bg-sky-400 hover:text-white transition">
                  <i class="iconoir-play mr-2"></i>Ver Demo ao Vivo
                </button>
              </div>
              <div class="mt-8 grid grid-cols-3 gap-6">
                <div><div class="text-3xl font-bold text-sky-400">+50</div><div class="text-sm text-gray-400">Empresas</div></div>
                <div><div class="text-3xl font-bold text-sky-400">+60%</div><div class="text-sm text-gray-400">Conversão</div></div>
                <div><div class="text-3xl font-bold text-sky-400">24/7</div><div class="text-sm text-gray-400">Suporte</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Recursos Poderosos para Seu Time de Vendas</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa para gerenciar leads, fechar negócios e encantar clientes
            </p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-gray-50 to-sky-50 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100">
              <i class="iconoir-filter-list text-5xl text-sky-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Pipeline Visual</h3>
              <p class="text-gray-600">Visualize e gerencie seu funil de vendas com drag-and-drop intuitivo e acompanhamento em tempo real</p>
            </div>
            <div class="bg-gradient-to-br from-gray-50 to-sky-50 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100">
              <i class="iconoir-message-text text-5xl text-sky-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Comunicação Integrada</h3>
              <p class="text-gray-600">Email, WhatsApp e chamadas integradas diretamente na plataforma com histórico completo</p>
            </div>
            <div class="bg-gradient-to-br from-gray-50 to-sky-50 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100">
              <i class="iconoir-robot text-5xl text-sky-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Automação Inteligente</h3>
              <p class="text-gray-600">Workflows automáticos para qualificação de leads, follow-ups e tarefas repetitivas</p>
            </div>
            <div class="bg-gradient-to-br from-gray-50 to-sky-50 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100">
              <i class="iconoir-graph-up text-5xl text-sky-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Analytics Avançado</h3>
              <p class="text-gray-600">Dashboards completos com métricas de vendas, previsões e análise de performance</p>
            </div>
            <div class="bg-gradient-to-br from-gray-50 to-sky-50 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100">
              <i class="iconoir-smartphone text-5xl text-sky-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Mobile First</h3>
              <p class="text-gray-600">Acesse e gerencie seus leads de qualquer lugar com interface mobile otimizada</p>
            </div>
            <div class="bg-gradient-to-br from-gray-50 to-sky-50 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100">
              <i class="iconoir-plug text-5xl text-sky-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Integrações</h3>
              <p class="text-gray-600">Conecte com WhatsApp, email marketing, ERPs e mais de 100 outras ferramentas</p>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" class="py-20 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Resultados Comprovados</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Empresas que usam Frappe CRM com suporte Avila Ops veem impacto real nos resultados
            </p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div class="text-6xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent mb-4">+60%</div>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Mais Conversões</h3>
              <p class="text-gray-600">Aumento médio na taxa de fechamento</p>
            </div>
            <div class="bg-white rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div class="text-6xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent mb-4">-50%</div>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Tempo de Resposta</h3>
              <p class="text-gray-600">Redução no tempo de follow-up</p>
            </div>
            <div class="bg-white rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div class="text-6xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent mb-4">3x</div>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Produtividade</h3>
              <p class="text-gray-600">Mais leads gerenciados por vendedor</p>
            </div>
            <div class="bg-white rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div class="text-6xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent mb-4">80%</div>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Economia</h3>
              <p class="text-gray-600">Vs. CRMs proprietários tradicionais</p>
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Perfeito para Seu Segmento</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções customizadas para diferentes indústrias e modelos de negócio
            </p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100">
              <i class="iconoir-code text-4xl text-sky-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">SaaS & Tecnologia</h3>
              <p class="text-gray-600 mb-4">Gestão de trials, onboarding e expansão de contas com métricas MRR e churn</p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Pipeline de vendas complexo</li>
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Integração com ferramentas dev</li>
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Análise de uso e engajamento</li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100">
              <i class="iconoir-building text-4xl text-sky-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Imobiliário</h3>
              <p class="text-gray-600 mb-4">Gestão de leads, visitas, propostas e contratos com portal para corretores</p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Catálogo de imóveis integrado</li>
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Agendamento de visitas</li>
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Controle de comissões</li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100">
              <i class="iconoir-book text-4xl text-sky-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Educação</h3>
              <p class="text-gray-600 mb-4">Captação de alunos, matrículas e relacionamento com pais e responsáveis</p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Gestão de inscrições</li>
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Comunicação automatizada</li>
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Portal do aluno</li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100">
              <i class="iconoir-droplet text-4xl text-sky-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Saúde & Bem-estar</h3>
              <p class="text-gray-600 mb-4">Agendamentos, prontuários e relacionamento com pacientes e convênios</p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Agenda médica integrada</li>
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Histórico de atendimentos</li>
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Lembretes automáticos</li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100">
              <i class="iconoir-truck text-4xl text-sky-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Distribuição & Atacado</h3>
              <p class="text-gray-600 mb-4">Gestão de representantes, pedidos e relacionamento B2B com múltiplos canais</p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Catálogo de produtos</li>
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Gestão de territórios</li>
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Análise de vendas regional</li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100">
              <i class="iconoir-briefcase text-4xl text-sky-600 mb-4"></i>
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Serviços Profissionais</h3>
              <p class="text-gray-600 mb-4">Propostas comerciais, contratos e gestão de projetos integrada ao CRM</p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Templates de propostas</li>
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Time tracking integrado</li>
                <li><i class="iconoir-check text-sky-600 mr-2"></i>Faturamento recorrente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Times que Confiam na Avila Ops</h2>
            <p class="text-xl text-gray-600">Veja o que nossos clientes dizem sobre o Frappe CRM</p>
          </div>
          <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 border border-sky-100 hover:shadow-xl transition">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">LC</div>
                <div>
                  <h4 class="font-bold text-gray-800">Lucas Carvalho</h4>
                  <p class="text-sm text-gray-600">Head de Vendas - VendasMax</p>
                </div>
              </div>
              <div class="flex mb-3">
                <i class="iconoir-star-solid text-yellow-500"></i>
                <i class="iconoir-star-solid text-yellow-500"></i>
                <i class="iconoir-star-solid text-yellow-500"></i>
                <i class="iconoir-star-solid text-yellow-500"></i>
                <i class="iconoir-star-solid text-yellow-500"></i>
              </div>
              <p class="text-gray-700 italic">“Aumentamos 45% nas conversões em 3 meses! O CRM é incrivelmente intuitivo. Nossa equipe adotou em 1 semana. A Avila Ops entregou exatamente o que prometeu.”</p>
            </div>
            <div class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 border border-sky-100 hover:shadow-xl transition">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">FO</div>
                <div>
                  <h4 class="font-bold text-gray-800">Fernanda Oliveira</h4>
                  <p class="text-sm text-gray-600">Gerente Comercial - TechSales</p>
                </div>
              </div>
              <div class="flex mb-3">
                <i class="iconoir-star-solid text-yellow-500"></i>
                <i class="iconoir-star-solid text-yellow-500"></i>
                <i class="iconoir-star-solid text-yellow-500"></i>
                <i class="iconoir-star-solid text-yellow-500"></i>
                <i class="iconoir-star-solid text-yellow-500"></i>
              </div>
              <p class="text-gray-700 italic">“Finalmente um CRM que não custa uma fortuna! Migração rápida do HubSpot. Está rodando perfeitamente há 6 meses. Economia de R$ 3.500/mês!”</p>
            </div>
            <div class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 border border-sky-100 hover:shadow-xl transition">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">PM</div>
                <div>
                  <h4 class="font-bold text-gray-800">Pedro Martins</h4>
                  <p class="text-sm text-gray-600">CEO - ProVendas</p>
                </div>
              </div>
              <div class="flex mb-3">
                <i class="iconoir-star-solid text-yellow-500"></i>
                <i class="iconoir-star-solid text-yellow-500"></i>
                <i class="iconoir-star-solid text-yellow-500"></i>
                <i class="iconoir-star-solid text-yellow-500"></i>
                <i class="iconoir-star-solid text-yellow-500"></i>
              </div>
              <p class="text-gray-700 italic">“Automações que economizam 15h/semana da equipe. Dashboards muito melhores que Salesforce. Suporte rápido e sempre disponível. Vale cada centavo!”</p>
            </div>
          </div>
          <div class="text-center mt-12">
            <div class="inline-flex items-center gap-8 bg-gray-50 px-8 py-4 rounded-full">
              <div class="text-center">
                <p class="text-3xl font-bold text-sky-600">200+</p>
                <p class="text-sm text-gray-600">Times de Vendas</p>
              </div>
              <div class="h-12 w-px bg-gray-300"></div>
              <div class="text-center">
                <p class="text-3xl font-bold text-sky-600">45%</p>
                <p class="text-sm text-gray-600">Aumento Médio</p>
              </div>
              <div class="h-12 w-px bg-gray-300"></div>
              <div class="text-center">
                <p class="text-3xl font-bold text-sky-600">99%</p>
                <p class="text-sm text-gray-600">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Do Início ao Sucesso em 5 Passos</h2>
            <p class="text-xl text-gray-600">Nossa metodologia comprovada para implementação de CRM</p>
          </div>
          <div class="max-w-5xl mx-auto">
            <div class="relative">
              <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sky-600 to-cyan-600 hidden md:block"></div>
              
              <div class="mb-12 md:flex items-center">
                <div class="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <div class="bg-white rounded-xl p-6 shadow-lg inline-block">
                    <h3 class="text-2xl font-bold text-sky-600 mb-2">1. Discovery Call</h3>
                    <p class="text-gray-600 mb-2">Entendemos seu processo de vendas e dores</p>
                    <p class="text-sm text-gray-500">📞 30 minutos • Sem compromisso</p>
                  </div>
                </div>
                <div class="md:w-12 flex justify-center">
                  <div class="w-12 h-12 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">1</div>
                </div>
                <div class="md:w-1/2 md:pl-12"></div>
              </div>

              <div class="mb-12 md:flex items-center flex-row-reverse">
                <div class="md:w-1/2 md:pl-12 mb-4 md:mb-0">
                  <div class="bg-white rounded-xl p-6 shadow-lg inline-block">
                    <h3 class="text-2xl font-bold text-sky-600 mb-2">2. Demo Personalizada</h3>
                    <p class="text-gray-600 mb-2">Mostramos o CRM configurado para seu negócio</p>
                    <p class="text-sm text-gray-500">📱 Ao vivo • Com seus dados reais</p>
                  </div>
                </div>
                <div class="md:w-12 flex justify-center">
                  <div class="w-12 h-12 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">2</div>
                </div>
                <div class="md:w-1/2 md:pr-12"></div>
              </div>

              <div class="mb-12 md:flex items-center">
                <div class="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <div class="bg-white rounded-xl p-6 shadow-lg inline-block">
                    <h3 class="text-2xl font-bold text-sky-600 mb-2">3. Setup em 1 Semana</h3>
                    <p class="text-gray-600 mb-2">Configuração, customizações e integrações</p>
                    <p class="text-sm text-gray-500">⚡ Migração inclusa • Workflows prontos</p>
                  </div>
                </div>
                <div class="md:w-12 flex justify-center">
                  <div class="w-12 h-12 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">3</div>
                </div>
                <div class="md:w-1/2 md:pl-12"></div>
              </div>

              <div class="mb-12 md:flex items-center flex-row-reverse">
                <div class="md:w-1/2 md:pl-12 mb-4 md:mb-0">
                  <div class="bg-white rounded-xl p-6 shadow-lg inline-block">
                    <h3 class="text-2xl font-bold text-sky-600 mb-2">4. Onboarding do Time</h3>
                    <p class="text-gray-600 mb-2">Treinamento completo para toda equipe</p>
                    <p class="text-sm text-gray-500">🎯 Vídeos + Prática • Certificação</p>
                  </div>
                </div>
                <div class="md:w-12 flex justify-center">
                  <div class="w-12 h-12 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">4</div>
                </div>
                <div class="md:w-1/2 md:pr-12"></div>
              </div>

              <div class="md:flex items-center">
                <div class="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <div class="bg-gradient-to-r from-sky-600 to-cyan-600 rounded-xl p-6 shadow-lg inline-block text-white">
                    <h3 class="text-2xl font-bold mb-2">5. Vendendo Mais!</h3>
                    <p class="mb-2">Sistema em produção, vendas aumentando</p>
                    <p class="text-sm text-sky-100">🚀 Suporte contínuo • Otimizações mensais</p>
                  </div>
                </div>
                <div class="md:w-12 flex justify-center">
                  <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">✓</div>
                </div>
                <div class="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Perguntas Frequentes</h2>
            <p class="text-xl text-gray-600">Tudo sobre Frappe CRM e nossa implementação</p>
          </div>
          <div class="max-w-4xl mx-auto space-y-4">
            <details class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl p-6 border border-sky-100 group">
              <summary class="font-bold text-lg text-gray-800 cursor-pointer flex justify-between items-center">
                <span>⏱️ Quanto tempo para começar a usar?</span>
                <i class="iconoir-nav-arrow-down group-open:rotate-180 transition"></i>
              </summary>
              <p class="mt-4 text-gray-600">Você pode começar em 1 semana! Fazemos setup, migração de contatos, customizações básicas e treinamento inicial. Empresas maiores com integrações complexas podem levar 2-3 semanas.</p>
            </details>

            <details class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl p-6 border border-sky-100 group">
              <summary class="font-bold text-lg text-gray-800 cursor-pointer flex justify-between items-center">
                <span>💾 Posso migrar do Salesforce/HubSpot/RD Station?</span>
                <i class="iconoir-nav-arrow-down group-open:rotate-180 transition"></i>
              </summary>
              <p class="mt-4 text-gray-600">Sim! Fazemos migração de qualquer CRM: Salesforce, HubSpot, RD Station, Pipedrive, Zoho, planilhas Excel. Importamos contatos, deals, histórico de interações e atividades sem perda de dados.</p>
            </details>

            <details class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl p-6 border border-sky-100 group">
              <summary class="font-bold text-lg text-gray-800 cursor-pointer flex justify-between items-center">
                <span>🆓 Tem período de teste?</span>
                <i class="iconoir-nav-arrow-down group-open:rotate-180 transition"></i>
              </summary>
              <p class="mt-4 text-gray-600">Sim! 14 dias grátis com acesso completo. Podemos importar seus dados reais de teste, configurar pipelines e workflows. Nossa equipe te acompanha no trial para você aproveitar ao máximo.</p>
            </details>

            <details class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl p-6 border border-sky-100 group">
              <summary class="font-bold text-lg text-gray-800 cursor-pointer flex justify-between items-center">
                <span>💰 Quanto custa a implementação?</span>
                <i class="iconoir-nav-arrow-down group-open:rotate-180 transition"></i>
              </summary>
              <p class="mt-4 text-gray-600">A partir de R$ 3.500 para setup básico (configuração, importação de dados, treinamento). Mensalidade começa em R$ 699/mês. É até 70% mais barato que Salesforce/HubSpot com funcionalidades equivalentes!</p>
            </details>

            <details class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl p-6 border border-sky-100 group">
              <summary class="font-bold text-lg text-gray-800 cursor-pointer flex justify-between items-center">
                <span>👥 Quantos usuários posso ter?</span>
                <i class="iconoir-nav-arrow-down group-open:rotate-180 transition"></i>
              </summary>
              <p class="mt-4 text-gray-600">Usuários ilimitados! Sendo open source, você pode adicionar quantos vendedores, gerentes e atendentes precisar, sem custo adicional por usuário. Pagamento é apenas pelo suporte e infraestrutura.</p>
            </details>

            <details class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl p-6 border border-sky-100 group">
              <summary class="font-bold text-lg text-gray-800 cursor-pointer flex justify-between items-center">
                <span>🔌 Integra com WhatsApp/Email/Telefone?</span>
                <i class="iconoir-nav-arrow-down group-open:rotate-180 transition"></i>
              </summary>
              <p class="mt-4 text-gray-600">Sim! Integra com WhatsApp Business API, Gmail, Outlook, telefonia (discador), Calendly, Stripe, Mercado Pago e mais. Todas as comunicações ficam registradas automaticamente no histórico do lead/cliente.</p>
            </details>

            <details class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl p-6 border border-sky-100 group">
              <summary class="font-bold text-lg text-gray-800 cursor-pointer flex justify-between items-center">
                <span>📊 Tem relatórios e dashboards?</span>
                <i class="iconoir-nav-arrow-down group-open:rotate-180 transition"></i>
              </summary>
              <p class="mt-4 text-gray-600">Dashboards completos em tempo real: funil de vendas, performance por vendedor, previsão de receita, taxa de conversão, ciclo de vendas e muito mais. Você pode criar relatórios personalizados sem programação.</p>
            </details>

            <details class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl p-6 border border-sky-100 group">
              <summary class="font-bold text-lg text-gray-800 cursor-pointer flex justify-between items-center">
                <span>⚙️ Posso automatizar tarefas?</span>
                <i class="iconoir-nav-arrow-down group-open:rotate-180 transition"></i>
              </summary>
              <p class="mt-4 text-gray-600">Totalmente! Crie automações como: envio automático de emails, atribuição de leads por território, follow-ups agendados, notificações de WhatsApp, scores de leads, webhooks e integrações via API.</p>
            </details>

            <details class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl p-6 border border-sky-100 group">
              <summary class="font-bold text-lg text-gray-800 cursor-pointer flex justify-between items-center">
                <span>📱 Funciona no celular?</span>
                <i class="iconoir-nav-arrow-down group-open:rotate-180 transition"></i>
              </summary>
              <p class="mt-4 text-gray-600">100% mobile! Interface responsiva perfeita para celular e tablet. Seus vendedores podem atualizar deals, fazer follow-ups, acessar contatos e ver dashboards de qualquer lugar.</p>
            </details>

            <details class="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl p-6 border border-sky-100 group">
              <summary class="font-bold text-lg text-gray-800 cursor-pointer flex justify-between items-center">
                <span>❌ Posso cancelar quando quiser?</span>
                <i class="iconoir-nav-arrow-down group-open:rotate-180 transition"></i>
              </summary>
              <p class="mt-4 text-gray-600">Sim! Sem fidelidade. Cancele com 30 dias de aviso. Exportamos todos os seus dados (contatos, deals, histórico) em formato aberto (CSV, JSON) para você levar para onde quiser.</p>
            </details>
          </div>
        </div>
      </section>

      <section id="testimonials" class="py-20 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">O Que Dizem Nossos Clientes</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Empresas reais, resultados reais com Frappe CRM e suporte Avila Ops
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div class="flex items-center mb-4">
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
              </div>
              <p class="text-gray-600 mb-6 italic">"Dobramos nossa taxa de conversão em 3 meses. A automação do Frappe CRM nos permitiu focar no que importa: relacionamento com clientes. O suporte da Avila Ops foi essencial nessa transformação."</p>
              <div class="flex items-center">
                <div class="bg-sky-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <i class="iconoir-user text-sky-600 text-2xl"></i>
                </div>
                <div>
                  <p class="font-bold text-gray-800">Carlos Mendes</p>
                  <p class="text-sm text-gray-500">Diretor Comercial, TechSolutions</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div class="flex items-center mb-4">
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
              </div>
              <p class="text-gray-600 mb-6 italic">"Migramos de um CRM caro e complexo para o Frappe CRM. Economizamos 75% nos custos e ganhamos muito mais flexibilidade. A equipe da Avila Ops entregou tudo no prazo prometido."</p>
              <div class="flex items-center">
                <div class="bg-sky-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <i class="iconoir-user text-sky-600 text-2xl"></i>
                </div>
                <div>
                  <p class="font-bold text-gray-800">Mariana Silva</p>
                  <p class="text-sm text-gray-500">CEO, Imobiliária Horizonte</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div class="flex items-center mb-4">
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
                <i class="iconoir-star-solid text-2xl text-yellow-400"></i>
              </div>
              <p class="text-gray-600 mb-6 italic">"O pipeline visual e as automações mudaram a forma como trabalhamos. Conseguimos triplicar o número de leads qualificados sem aumentar a equipe. Suporte da Avila Ops é impecável!"</p>
              <div class="flex items-center">
                <div class="bg-sky-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <i class="iconoir-user text-sky-600 text-2xl"></i>
                </div>
                <div>
                  <p class="font-bold text-gray-800">Roberto Alves</p>
                  <p class="text-sm text-gray-500">Gerente de Vendas, EduTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Planos que Cabem no Seu Orçamento</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Implantação completa, treinamento e suporte inclusos em todos os planos
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div class="bg-gradient-to-br from-gray-50 to-sky-50 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100">
              <h3 class="text-2xl font-bold mb-2 text-gray-800">Starter</h3>
              <p class="text-gray-600 mb-6">Ideal para equipes de até 5 usuários</p>
              <div class="mb-6">
                <span class="text-5xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">R$ 749</span>
                <span class="text-gray-600">/mês</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Até 5 usuários ativos</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Pipeline visual completo</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Automações básicas</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Email integrado</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Relatórios básicos</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Suporte via email (horário comercial)</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Backup diário</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Treinamento inicial (4h)</span>
                </li>
              </ul>
              <a href="https://mpago.la/1M9dKRK" target="_blank" class="block w-full bg-gradient-to-r from-sky-600 to-cyan-600 text-white py-4 rounded-full font-bold text-center hover:shadow-lg transition transform hover:scale-105">
                Assinar Agora
              </a>
            </div>

            <div class="bg-gradient-to-br from-sky-600 to-cyan-600 rounded-2xl p-8 relative transform scale-105 shadow-2xl text-white">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                Mais Popular
              </div>
              <h3 class="text-2xl font-bold mb-2">Professional</h3>
              <p class="text-sky-100 mb-6">Ideal para equipes de até 15 usuários</p>
              <div class="mb-6">
                <span class="text-5xl font-bold">R$ 1.999</span>
                <span class="text-sky-100">/mês</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <i class="iconoir-check text-white text-xl mr-2 mt-1"></i>
                  <span>Até 15 usuários ativos</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-white text-xl mr-2 mt-1"></i>
                  <span>Tudo do plano Starter</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-white text-xl mr-2 mt-1"></i>
                  <span>Automações avançadas ilimitadas</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-white text-xl mr-2 mt-1"></i>
                  <span>WhatsApp Business integrado</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-white text-xl mr-2 mt-1"></i>
                  <span>Dashboards personalizados</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-white text-xl mr-2 mt-1"></i>
                  <span>API e integrações customizadas</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-white text-xl mr-2 mt-1"></i>
                  <span>Suporte 24/7 (chat e email)</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-white text-xl mr-2 mt-1"></i>
                  <span>Backup em tempo real</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-white text-xl mr-2 mt-1"></i>
                  <span>Treinamento completo (12h)</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-white text-xl mr-2 mt-1"></i>
                  <span>SLA garantido 99.9%</span>
                </li>
              </ul>
              <a href="https://mpago.la/1M9dKRK" target="_blank" class="block w-full bg-white text-sky-600 py-4 rounded-full font-bold text-center hover:shadow-lg transition transform hover:scale-105">
                Assinar Agora
              </a>
            </div>

            <div class="bg-gradient-to-br from-gray-50 to-sky-50 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100">
              <h3 class="text-2xl font-bold mb-2 text-gray-800">Enterprise</h3>
              <p class="text-gray-600 mb-6">Para grandes equipes e necessidades complexas</p>
              <div class="mb-6">
                <span class="text-5xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">R$ 4.499</span>
                <span class="text-gray-600">/mês</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Usuários ilimitados</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Tudo do plano Professional</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Gerente de conta dedicado</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Desenvolvimento de features customizadas</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Integrações complexas (ERP, sistemas legados)</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Infraestrutura dedicada</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Suporte prioritário 24/7/365</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Treinamento ilimitado</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">Consultoria estratégica</span>
                </li>
                <li class="flex items-start">
                  <i class="iconoir-check text-sky-600 text-xl mr-2 mt-1"></i>
                  <span class="text-gray-700">SLA 99.99%</span>
                </li>
              </ul>
              <a href="https://wa.me/5517997811471?text=Quero%20o%20plano%20Enterprise%20do%20Frappe%20CRM" target="_blank" class="block w-full bg-gradient-to-r from-sky-600 to-cyan-600 text-white py-4 rounded-full font-bold text-center hover:shadow-lg transition transform hover:scale-105">
                Falar com Vendas
              </a>
            </div>
          </div>
          <p class="text-center mt-8 text-gray-600">
            <i class="iconoir-info-circle mr-2"></i>Todos os planos incluem implantação completa e migração de dados
          </p>
        </div>
      </section>

      <section class="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">Pronto para Aumentar suas Vendas?</h2>
            <p class="text-xl text-gray-300 mb-8">
              Agende uma demonstração gratuita e veja o Frappe CRM em ação
            </p>
            <form class="max-w-md mx-auto space-y-4" onsubmit="event.preventDefault(); window.open('https://wa.me/5517997811471?text=' + encodeURIComponent('Olá! Gostaria de uma demonstração do Frappe CRM'), '_blank');">
              <input type="text" placeholder="Seu nome" aria-label="Seu nome" class="w-full px-6 py-4 rounded-full border-2 border-gray-700 bg-gray-800 text-white focus:border-sky-500 outline-none transition">
              <input type="email" placeholder="Seu email corporativo" aria-label="Seu email corporativo" class="w-full px-6 py-4 rounded-full border-2 border-gray-700 bg-gray-800 text-white focus:border-sky-500 outline-none transition">
              <input type="tel" placeholder="Telefone / WhatsApp" aria-label="Telefone ou WhatsApp" class="w-full px-6 py-4 rounded-full border-2 border-gray-700 bg-gray-800 text-white focus:border-sky-500 outline-none transition">
              <select aria-label="Tamanho da equipe de vendas" class="w-full px-6 py-4 rounded-full border-2 border-gray-700 bg-gray-800 text-white focus:border-sky-500 outline-none transition">
                <option>Tamanho da equipe de vendas</option>
                <option>1-5 pessoas</option>
                <option>6-15 pessoas</option>
                <option>16-50 pessoas</option>
                <option>50+ pessoas</option>
              </select>
              <button type="submit" class="w-full bg-gradient-to-r from-sky-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition transform hover:scale-105">
                <i class="iconoir-send mr-2"></i>Agendar Demonstração Gratuita
              </button>
            </form>
            <p class="mt-6 text-sm text-gray-400">
              <i class="iconoir-lock mr-2"></i>Seus dados estão seguros. Não compartilhamos informações com terceiros.
            </p>
            <div class="mt-8">
              <a href="https://wa.me/5517997811471?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Frappe%20CRM" target="_blank" class="inline-flex items-center text-sky-400 hover:text-sky-300 font-semibold text-lg">
                <i class="iconoir-chat-bubble text-2xl mr-2"></i>
                Fale conosco pelo WhatsApp: +55 (17) 99781-1471
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-4 gap-8">
            <div>
              <div class="flex items-center space-x-2 mb-4">
                <i class="iconoir-user-circle text-3xl text-sky-400"></i>
                <h4 class="text-xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Avila Ops CRM</h4>
              </div>
              <p class="text-gray-400">Especialistas em Frappe CRM e soluções de relacionamento com clientes</p>
              <div class="mt-4 flex space-x-4">
                <a href="https://instagram.com/avilaopss" target="_blank" class="text-gray-400 hover:text-sky-400 transition" aria-label="Siga-nos no Instagram">
                  <i class="iconoir-instagram text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/company/avilaops" target="_blank" class="text-gray-400 hover:text-sky-400 transition" aria-label="Conecte-se no LinkedIn">
                  <i class="iconoir-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 class="font-bold mb-4">Produtos</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="https://crm.avilaops.com" class="hover:text-white transition">Frappe CRM</a></li>
                <li><a href="https://erp.avilaops.com" class="hover:text-white transition">ERPNext</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4">Empresa</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="https://avilaops.com/sobre-nos/" class="hover:text-white transition">Sobre</a></li>
                <li><a href="https://avilaops.com/portfolio/" class="hover:text-white transition">Portfólio</a></li>
                <li><a href="https://avilaops.com/blog/" class="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4">Contato</h4>
              <ul class="space-y-2 text-gray-400">
                <li><i class="iconoir-mail mr-2"></i>atendimento@avilaops.com</li>
                <li><i class="iconoir-phone mr-2"></i>+55 (17) 99781-1471</li>
                <li><i class="iconoir-internet mr-2"></i>www.avilaops.com</li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Avila Ops. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    `;

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href')!);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  private setupTracking(): void {
    // Tracking para links do Mercado Pago (Conversão)
    document.querySelectorAll('a[href*="mpago.la"]').forEach(link => {
      link.addEventListener('click', () => {
        if (typeof window.fbq !== 'undefined') {
          window.fbq('track', 'InitiateCheckout', {
            content_name: 'Frappe CRM Plan',
            currency: 'BRL'
          });
        }
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'begin_checkout', {
            currency: 'BRL',
            items: [{
              item_name: 'Frappe CRM Subscription'
            }]
          });
        }
      });
    });

    // Tracking para links do WhatsApp (Lead)
    document.querySelectorAll('a[href*="wa.me"], button[onclick*="wa.me"]').forEach(link => {
      link.addEventListener('click', () => {
        if (typeof window.fbq !== 'undefined') {
          window.fbq('track', 'Contact', {
            content_name: 'Frappe CRM WhatsApp Contact'
          });
        }
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'generate_lead', {
            event_category: 'engagement',
            event_label: 'WhatsApp Contact'
          });
        }
      });
    });

    // Tracking para formulários
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', () => {
        if (typeof window.fbq !== 'undefined') {
          window.fbq('track', 'SubmitApplication', {
            content_name: 'Frappe CRM Demo Request'
          });
        }
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: 'Demo Request'
          });
        }
      });
    });
  }
}

new CRMLandingPage();
