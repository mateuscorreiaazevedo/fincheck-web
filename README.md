# 💰 Fincheck

> Aplicação web moderna de gestão financeira pessoal

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat&logo=tailwindcss)

## 📋 Sobre o Projeto

**Fincheck** é uma aplicação completa de controle financeiro pessoal que permite aos usuários gerenciar suas contas bancárias, transações (receitas e despesas) e categorias de forma intuitiva e eficiente. Desenvolvida com as mais modernas tecnologias do ecossistema React, oferece uma experiência fluida e responsiva.

### ✨ Principais Funcionalidades

- 🔐 **Autenticação Completa**: Sistema de login e registro com gestão segura de sessão
- 💳 **Gestão de Contas Bancárias**: Criação, edição e visualização de múltiplas contas
- 📊 **Dashboard Interativo**: Visão geral do saldo e resumo financeiro
- 💸 **Controle de Transações**: Registro de receitas e despesas com filtros e busca
- 🏷️ **Categorização**: Organização de transações por categorias personalizadas
- 📱 **Design Responsivo**: Interface adaptada para desktop e mobile
- 🎨 **Tema e UX**: Interface moderna com animações e feedback visual

## 🚀 Tecnologias Utilizadas

### Core

- **React 19** - Biblioteca UI com as últimas features
- **TypeScript** - Tipagem estática e melhor DX
- **Vite** - Build tool ultrarrápido com HMR

### Gestão de Estado e Dados

- **TanStack Query (React Query)** - Cache, sincronização e gestão de server state
- **Zustand** - Gerenciamento de estado global leve e eficiente
- **Axios** - Cliente HTTP para comunicação com API

### Formulários e Validação

- **React Hook Form** - Gestão de formulários performática
- **Zod** - Validação de schema TypeScript-first

### UI e Estilização

- **Tailwind CSS** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e não estilizados
- **Headless UI** - Componentes UI totalmente acessíveis
- **Tailwind Variants** - Variantes de componentes com Tailwind
- **Lottie React** - Animações vetoriais

### Roteamento e Navegação

- **React Router 7** - Navegação e proteção de rotas

### Utilitários

- **date-fns** - Manipulação de datas moderna e leve
- **React Hot Toast** - Notificações elegantes
- **React Number Format** - Formatação de valores monetários
- **Swiper** - Slider/carousel para mobile

### Qualidade de Código

- **Biome** - Linter e formatter ultrarrápido
- **Husky** - Git hooks
- **Commitlint** - Padronização de commits convencionais

## 📁 Estrutura do Projeto

```
src/
├── core/                      # Núcleo da aplicação
│   ├── App.tsx               # Componente raiz com providers
│   ├── config/               # Configurações (env, etc)
│   ├── pages/                # Páginas principais
│   ├── routers/              # Configuração de rotas e guards
│   ├── services/             # Serviços compartilhados (HTTP)
│   └── types/                # Tipos globais
│
├── features/                 # Módulos por funcionalidade
│   ├── auth/                 # Autenticação
│   ├── bankAccounts/         # Contas bancárias
│   ├── categories/           # Categorias
│   └── transactions/         # Transações
│       ├── components/       # Componentes do feature
│       ├── constants/        # Constantes
│       ├── hooks/            # Hooks customizados
│       ├── services/         # Serviços da API
│       ├── stores/           # Estados Zustand
│       ├── types/            # Tipos TypeScript
│       └── utils/            # Utilitários
│
└── shared/                   # Código compartilhado
    ├── components/           # Componentes reutilizáveis
    ├── hooks/                # Hooks globais
    ├── stores/               # Stores globais
    ├── types/                # Tipos compartilhados
    └── utils/                # Funções utilitárias
```

### 🏗️ Arquitetura

O projeto segue uma **arquitetura modular baseada em features**, onde cada funcionalidade é autocontida com seus próprios componentes, hooks, services e tipos. Isso facilita:

- ✅ Escalabilidade e manutenção
- ✅ Reutilização de código
- ✅ Testes isolados
- ✅ Onboarding de novos desenvolvedores

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/mateuscorreiaazevedo/fincheck-web.git

# Entre no diretório
cd fincheck-web

# Instale as dependências
npm install
```

### Configuração de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000/api
```

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia o servidor de desenvolvimento

# Build
npm run build            # Compila o projeto para produção
npm run preview          # Preview da build de produção

# Qualidade de Código
npm run lint             # Formata o código com Biome
npm run ci:lint          # Verifica formatação (CI)
npm run typecheck        # Verifica tipos TypeScript
npm run ci:test          # Roda testes (CI)
```

## 🎨 Padrões e Convenções

### Commits

O projeto utiliza [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona nova funcionalidade
fix: corrige um bug
docs: atualiza documentação
style: mudanças de formatação
refactor: refatoração de código
test: adiciona ou atualiza testes
chore: tarefas de manutenção
```

### Code Style

- Utiliza **Biome** para linting e formatação
- Configuração em `biome.json`
- Hooks do Husky garantem qualidade antes dos commits

## 🔒 Segurança

- Tokens de autenticação armazenados com segurança
- Proteção de rotas com AuthGuard
- Validação de formulários no cliente e servidor
- Sanitização de inputs

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feat/nova-feature`)
3. Commit suas mudanças seguindo conventional commits
4. Push para a branch (`git push origin feat/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

**Mateus Correia Azevedo**

- GitHub: [@mateuscorreiaazevedo](https://github.com/mateuscorreiaazevedo)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
