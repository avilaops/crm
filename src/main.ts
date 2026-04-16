import './style.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
  stat: string;
}

interface UseCase {
  industry: string;
  challenge: string;
  solution: string;
}

class CRMLandingPage {
  private app: HTMLElement;

  constructor() {
    this.app = document.querySelector('#app')!;
    this.render();
  }

  private createHeader(): string {
    return `
      <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav class="container mx-auto px-6 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span class="text-2xl font-bold gradient-text">Avila Ops</span>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="#features" class="text-gray-700 hover:text-green-600 transition">Recursos</a>
              <a href="#benefits" class="text-gray-700 hover:text-green-600 transition">Benefícios</a>
              <a href="#usecases" class="text-gray-700 hover:text-green-600 transition">Casos de Uso</a>
              <a href="#pricing" class="text-gray-700 hover:text-green-600 transition">Preços</a>
              <button class="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition transform hover:scale-105">
                Testar Grátis
              </button>
            </div>
          </div>
        </nav>
      </header>
    `;
  }

  private createHero(): string {
    return `
      <section class="pt-32 pb-20 gradient-bg text-white">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="animate-fade-in">
              <div class="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span class="text-sm font-semibold">🚀 O CRM que sua equipe vai adorar</span>
              </div>
              <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Relacionamentos que <span class="text-yellow-300">Convertem</span> em Vendas
              </h1>
              <p class="text-xl mb-8 text-gray-100">
                Frappe CRM moderno, intuitivo e poderoso. A Avila Ops cuida da implantação, 
                treinamento e suporte para que você foque no que importa: vender mais.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <button class="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition transform hover:scale-105">
                  Começar Teste Gratuito
                </button>
                <button class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition">
                  Agendar Demo
                </button>
              </div>
              <div class="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div class="text-3xl font-bold">97%</div>
                  <div class="text-sm text-gray-100">Taxa de adoção</div>
                </div>
                <div>
                  <div class="text-3xl font-bold">2.5x</div>
                  <div class="text-sm text-gray-100">Mais conversões</div>
                </div>
                <div>
                  <div class="text-3xl font-bold">45min</div>
                  <div class="text-sm text-gray-100">Setup inicial</div>
                </div>
              </div>
            </div>
            <div class="hidden md:block animate-slide-up">
              <div class="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2310b981' width='400' height='300' rx='10'/%3E%3Crect fill='%23fff' x='20' y='20' width='360' height='50' rx='8' opacity='0.9'/%3E%3Crect fill='%23fff' x='20' y='85' width='110' height='195' rx='8' opacity='0.8'/%3E%3Crect fill='%23fff' x='145' y='85' width='235' height='60' rx='8' opacity='0.8'/%3E%3Crect fill='%23fff' x='145' y='155' width='235' height='125' rx='8' opacity='0.8'/%3E%3Ccircle cx='50' cy='45' r='12' fill='%2310b981'/%3E%3Ccircle cx='350' cy='45' r='12' fill='%23fbbf24'/%3E%3C/svg%3E" alt="Frappe CRM Dashboard" class="rounded-2xl shadow-2xl">
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private createFeatures(): string {
    const features: Feature[] = [
      {
        icon: '📊',
        title: 'Pipeline Visual',
        description: 'Visualize seu funil de vendas com drag & drop intuitivo e atualizações em tempo real'
      },
      {
        icon: '🎯',
        title: 'Lead Scoring Automático',
        description: 'IA identifica os leads mais promissores para sua equipe focar'
      },
      {
        icon: '📧',
        title: 'Email Integrado',
        description: 'Todo histórico de comunicação centralizado, com templates e automação'
      },
      {
        icon: '📱',
        title: 'Mobile First',
        description: 'App nativo para iOS e Android, trabalhe de qualquer lugar'
      },
      {
        icon: '🤖',
        title: 'Automação Inteligente',
        description: 'Workflows customizados que economizam horas da sua equipe'
      },
      {
        icon: '📈',
        title: 'Relatórios em Tempo Real',
        description: 'Dashboards personalizados com métricas que importam para você'
      }
    ];

    return `
      <section id="features" class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Tudo que você precisa para vender mais</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Frappe CRM foi construído do zero para ser simples, rápido e poderoso
            </p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${features.map(feature => `
              <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 card-hover border border-green-100">
                <div class="text-5xl mb-4">${feature.icon}</div>
                <h3 class="text-2xl font-bold mb-3 text-gray-800">${feature.title}</h3>
                <p class="text-gray-600 leading-relaxed">${feature.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  private createBenefits(): string {
    const benefits: Benefit[] = [
      {
        title: 'Adoção da Equipe',
        description: 'Interface tão simples que sua equipe adota naturalmente',
        stat: '97%'
      },
      {
        title: 'Aumento de Conversões',
        description: 'Não perca mais oportunidades por falta de follow-up',
        stat: '+150%'
      },
      {
        title: 'Tempo Economizado',
        description: 'Automações que economizam 10+ horas/semana por vendedor',
        stat: '10h/sem'
      },
      {
        title: 'ROI Rápido',
        description: 'Retorno sobre investimento em menos de 3 meses',
        stat: '<3 meses'
      }
    ];

    return `
      <section id="benefits" class="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Resultados Mensuráveis</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja o impacto real do Frappe CRM no seu processo de vendas
            </p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            ${benefits.map(benefit => `
              <div class="bg-white rounded-2xl p-8 text-center card-hover shadow-lg">
                <div class="text-6xl font-bold gradient-text mb-4">${benefit.stat}</div>
                <h3 class="text-2xl font-bold mb-3 text-gray-800">${benefit.title}</h3>
                <p class="text-gray-600">${benefit.description}</p>
              </div>
            `).join('')}
          </div>
          
          <div class="mt-16 bg-white rounded-3xl p-12 shadow-xl">
            <div class="text-center mb-8">
              <h3 class="text-3xl font-bold mb-4 text-gray-800">Por que a Avila Ops?</h3>
              <p class="text-lg text-gray-600">Somos parceiros certificados Frappe com experiência comprovada</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h4 class="text-xl font-bold mb-2">Implantação Express</h4>
                <p class="text-gray-600">Seu CRM pronto para usar em 1 semana</p>
              </div>
              <div class="text-center">
                <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h4 class="text-xl font-bold mb-2">Treinamento Prático</h4>
                <p class="text-gray-600">Sua equipe operando com confiança</p>
              </div>
              <div class="text-center">
                <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h4 class="text-xl font-bold mb-2">Suporte Dedicado</h4>
                <p class="text-gray-600">Time especializado sempre disponível</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private createUseCases(): string {
    const useCases: UseCase[] = [
      {
        industry: '💼 B2B Services',
        challenge: 'Ciclos de venda longos com múltiplos stakeholders',
        solution: 'Pipeline estruturado com automação de follow-ups e gestão de relacionamentos'
      },
      {
        industry: '🏢 SaaS & Tech',
        challenge: 'Alto volume de leads com necessidade de qualificação rápida',
        solution: 'Lead scoring automático e integração com ferramentas de marketing'
      },
      {
        industry: '🏗️ Construção & Imóveis',
        challenge: 'Projetos complexos exigindo documentação detalhada',
        solution: 'Anexos ilimitados, histórico completo e gestão de propostas'
      },
      {
        industry: '🎓 Educação & Consultorias',
        challenge: 'Relacionamento contínuo com clientes recorrentes',
        solution: 'Gestão de contas com renovações automáticas e upsell tracking'
      },
      {
        industry: '💊 Healthcare & Farmacêutico',
        challenge: 'Compliance e rastreabilidade de interações',
        solution: 'Audit trail completo e campos customizados para regulamentações'
      },
      {
        industry: '🛍️ Varejo & E-commerce',
        challenge: 'Integração com múltiplos canais de venda',
        solution: 'APIs abertas e integração nativa com ERPNext'
      }
    ];

    return `
      <section id="usecases" class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Casos de Uso Reais</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Frappe CRM se adapta às necessidades específicas do seu setor
            </p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${useCases.map(useCase => `
              <div class="bg-gray-50 rounded-xl p-6 card-hover border border-gray-200">
                <h3 class="text-xl font-bold mb-3 text-gray-800">${useCase.industry}</h3>
                <div class="mb-3">
                  <span class="text-sm font-semibold text-red-600">Desafio:</span>
                  <p class="text-sm text-gray-600 mt-1">${useCase.challenge}</p>
                </div>
                <div>
                  <span class="text-sm font-semibold text-green-600">Solução:</span>
                  <p class="text-sm text-gray-600 mt-1">${useCase.solution}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  private createPricing(): string {
    return `
      <section id="pricing" class="py-20 gradient-bg text-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Planos Transparentes</h2>
            <p class="text-xl text-gray-100">
              Escolha o plano ideal para o tamanho da sua equipe
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div class="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 class="text-2xl font-bold mb-2">Starter</h3>
              <div class="mb-6">
                <span class="text-5xl font-bold">€149</span>
                <span class="text-gray-200">/mês</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Até 3 usuários</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>1000 leads/mês</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Email integrado</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Suporte via email</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Backup diário</span>
                </li>
              </ul>
              <button class="w-full bg-white text-green-600 py-3 rounded-full font-bold hover:shadow-lg transition">
                Começar Agora
              </button>
            </div>

            <div class="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border-2 border-yellow-400 relative transform scale-105">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-green-900 px-6 py-1 rounded-full text-sm font-bold">
                Mais Popular
              </div>
              <h3 class="text-2xl font-bold mb-2">Professional</h3>
              <div class="mb-6">
                <span class="text-5xl font-bold">€399</span>
                <span class="text-gray-200">/mês</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Até 10 usuários</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Leads ilimitados</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Automações avançadas</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Suporte prioritário 24/7</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Customizações incluídas</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>App mobile nativo</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Integração com ERPNext</span>
                </li>
              </ul>
              <button class="w-full bg-yellow-400 text-green-900 py-3 rounded-full font-bold hover:shadow-lg transition">
                Escolher Plano
              </button>
            </div>

            <div class="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 class="text-2xl font-bold mb-2">Enterprise</h3>
              <div class="mb-6">
                <span class="text-5xl font-bold">€899</span>
                <span class="text-gray-200">/mês</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Usuários ilimitados</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Tudo do Professional</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Gerente dedicado</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Infraestrutura dedicada</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>SLA personalizado</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Treinamento ilimitado</span>
                </li>
              </ul>
              <button class="w-full bg-white text-green-600 py-3 rounded-full font-bold hover:shadow-lg transition">
                Falar com Vendas
              </button>
            </div>
          </div>
          <p class="text-center mt-12 text-gray-100">
            ✨ Todos os planos incluem implantação completa, migração de dados e 30 dias de garantia
          </p>
        </div>
      </section>
    `;
  }

  private createCTA(): string {
    return `
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">Comece a Vender Mais Hoje</h2>
            <p class="text-xl text-gray-600 mb-8">
              Teste o Frappe CRM gratuitamente por 14 dias. Sem cartão de crédito. Sem compromisso.
            </p>
            <form class="max-w-md mx-auto space-y-4">
              <input type="text" placeholder="Nome completo" class="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-green-500 outline-none transition">
              <input type="email" placeholder="Email de trabalho" class="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-green-500 outline-none transition">
              <input type="text" placeholder="Nome da empresa" class="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-green-500 outline-none transition">
              <input type="tel" placeholder="Telefone (WhatsApp)" class="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-green-500 outline-none transition">
              <button type="submit" class="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition transform hover:scale-105">
                🚀 Começar Teste Gratuito de 14 Dias
              </button>
            </form>
            <div class="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Setup em 1 hora</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Cancele quando quiser</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Suporte em PT-BR</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private createTestimonials(): string {
    return `
      <section class="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">O que nossos clientes dizem</h2>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <div class="flex items-center mb-4">
                ${[...Array(5)].map(() => `
                  <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                `).join('')}
              </div>
              <p class="text-gray-600 mb-4">"Aumentamos nossas vendas em 80% nos primeiros 6 meses. A equipe da Avila Ops foi impecável na implantação."</p>
              <div class="font-bold text-gray-800">João Silva</div>
              <div class="text-sm text-gray-500">CEO, TechCorp</div>
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <div class="flex items-center mb-4">
                ${[...Array(5)].map(() => `
                  <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                `).join('')}
              </div>
              <p class="text-gray-600 mb-4">"Interface super intuitiva. Minha equipe aprendeu em poucos dias e a adoção foi de 100%."</p>
              <div class="font-bold text-gray-800">Maria Santos</div>
              <div class="text-sm text-gray-500">Diretora Comercial, SalesHub</div>
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <div class="flex items-center mb-4">
                ${[...Array(5)].map(() => `
                  <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                `).join('')}
              </div>
              <p class="text-gray-600 mb-4">"O melhor custo-benefício do mercado. Pagávamos 3x mais no CRM anterior e temos muito mais recursos agora."</p>
              <div class="font-bold text-gray-800">Pedro Costa</div>
              <div class="text-sm text-gray-500">Fundador, StartupXYZ</div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private createFooter(): string {
    return `
      <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-4 gap-8">
            <div>
              <h4 class="text-xl font-bold mb-4 gradient-text">Avila Ops</h4>
              <p class="text-gray-400">Parceiro oficial Frappe para implantação de CRM e ERPNext</p>
            </div>
            <div>
              <h4 class="font-bold mb-4">Produtos</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="https://crm.avilaops.com" class="hover:text-white transition">Frappe CRM</a></li>
                <li><a href="https://erp.avilaops.com" class="hover:text-white transition">ERPNext</a></li>
                <li><a href="#" class="hover:text-white transition">Integrações</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4">Recursos</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#" class="hover:text-white transition">Documentação</a></li>
                <li><a href="#" class="hover:text-white transition">Academy</a></li>
                <li><a href="#" class="hover:text-white transition">Blog</a></li>
                <li><a href="#" class="hover:text-white transition">Casos de Sucesso</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4">Contato</h4>
              <ul class="space-y-2 text-gray-400">
                <li>📧 vendas@avilaops.com</li>
                <li>📱 +351 xxx xxx xxx</li>
                <li>💬 WhatsApp Business</li>
                <li>🌐 www.avilaops.com</li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Avila Ops. Todos os direitos reservados. | Parceiro Oficial Frappe</p>
          </div>
        </div>
      </footer>
    `;
  }

  private render(): void {
    this.app.innerHTML = `
      ${this.createHeader()}
      ${this.createHero()}
      ${this.createFeatures()}
      ${this.createBenefits()}
      ${this.createUseCases()}
      ${this.createTestimonials()}
      ${this.createPricing()}
      ${this.createCTA()}
      ${this.createFooter()}
    `;

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href')!);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Form submission handlers
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('🎉 Ótimo! Seu teste gratuito está sendo preparado. Entraremos em contato em breve!');
        form.reset();
      });
    });
  }
}

// Initialize the landing page
new CRMLandingPage();
