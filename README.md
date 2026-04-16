# 🚀 Frappe CRM Landing Page - Avila Ops

Landing page moderna e responsiva para promover os serviços de implantação e suporte de Frappe CRM pela Avila Ops.

## 📋 Características

- ✨ Interface moderna com animações e transições suaves
- 🎨 Design responsivo mobile-first
- ⚡ TypeScript para desenvolvimento type-safe
- 🎯 Tailwind CSS com tema verde/esmeralda
- 🔥 Vite para desenvolvimento rápido
- 💚 Foco em conversão e vendas

## 🛠️ Tecnologias

- **TypeScript** - Linguagem principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Processamento de CSS

## 📦 Instalação

```bash
# Instalar dependências
npm install

# ou com yarn
yarn install
```

## 🚀 Como Executar

### Modo Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3001

### Build para Produção

```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/`

### Preview da Build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
crm-landing/
├── src/
│   ├── main.ts          # Código TypeScript principal
│   └── style.css        # Estilos customizados
├── index.html           # HTML principal
├── package.json         # Dependências do projeto
├── tsconfig.json        # Configuração TypeScript
├── tailwind.config.js   # Configuração Tailwind (tema verde)
├── postcss.config.js    # Configuração PostCSS
└── vite.config.ts       # Configuração Vite
```

## 🎯 Seções da Página

1. **Hero** - Apresentação impactante com estatísticas
2. **Features** - Funcionalidades principais do Frappe CRM
3. **Benefits** - Resultados mensuráveis e ROI
4. **Use Cases** - Casos de uso por indústria
5. **Testimonials** - Depoimentos de clientes
6. **Pricing** - Planos transparentes com três opções
7. **CTA** - Formulário para teste gratuito
8. **Footer** - Links e contato

## 💡 Destaques

- **Pipeline Visual** com drag & drop
- **Lead Scoring** automático com IA
- **Email Integrado** com histórico completo
- **App Mobile** nativo iOS/Android
- **Automação** de workflows
- **Relatórios** em tempo real

## 🌐 Deploy

### Opções de Deploy

#### Netlify / Vercel
```bash
npm run build
# Deploy a pasta dist/
```

#### Nginx
```bash
npm run build
# Copiar conteúdo de dist/ para /var/www/crm.avilaops.com
```

#### Docker
```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html
EXPOSE 80
```

## 🎨 Personalização

### Tema de Cores (Verde/Esmeralda)
Edite `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#22c55e', // Verde principal
    600: '#16a34a', // Verde escuro
    // ...
  }
}
```

### Conteúdo Dinâmico
O conteúdo está estruturado em `src/main.ts`:
- `Feature` - Recursos do CRM
- `Benefit` - Benefícios com estatísticas
- `UseCase` - Casos de uso por setor

### Preços
Os planos estão em `createPricing()`:
- Starter - €149/mês
- Professional - €399/mês (Mais popular)
- Enterprise - €899/mês

## 📊 Conversão

A página foi otimizada para conversão com:
- CTAs claros e repetidos
- Prova social (depoimentos)
- Teste gratuito de 14 dias
- Preços transparentes
- Formulários simples

## 🔧 Desenvolvimento

### Adicionar Nova Seção

```typescript
private createMySection(): string {
  return `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <!-- Seu conteúdo aqui -->
      </div>
    </section>
  `;
}
```

### Adicionar no render():
```typescript
${this.createMySection()}
```

## 📝 Licença

© 2026 Avila Ops - Todos os direitos reservados.
Parceiro Oficial Frappe
