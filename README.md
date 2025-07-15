# 🎉 Memórias em Festa

> Aplicação web para capturar e compartilhar momentos especiais de festas e eventos

## 📋 Sobre o Projeto

**Memórias em Festa** é uma plataforma moderna desenvolvida para facilitar a captura, organização e compartilhamento de memórias de eventos especiais. A aplicação permite que organizadores de festas, fotógrafos e convidados colaborem para criar uma galeria digital única de cada celebração.

### 🎯 Funcionalidades Principais

- 📸 **Galeria de Fotos** - Sistema inteligente para upload e organização de imagens
- 🎈 **Gestão de Eventos** - Criação e gerenciamento de festas/celebrações
- 💫 **Compartilhamento Colaborativo** - Convidados podem contribuir com suas próprias fotos
- 🎯 **Planos Personalizados** - Diferentes pacotes incluindo opções VIP
- 📱 **Design Responsivo** - Experiência otimizada em todos os dispositivos

## 🚀 Tecnologias Utilizadas

### Frontend

- **[Next.js 15](https://nextjs.org/)** - Framework React para produção
- **[React 19](https://reactjs.org/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utilitário

### Desenvolvimento

- **[Biome](https://biomejs.dev/)** - Linter e formatter moderno
- **[Ultracite](https://github.com/ardatan/ultracite)** - Configuração otimizada para Biome
- **[Husky](https://typicode.github.io/husky/)** - Git hooks para qualidade de código

## 🔄 Fluxo de Desenvolvimento

### Estrutura de Branches

```
main
 └── develop (branch principal de desenvolvimento)
     ├── feature/nova-funcionalidade
     ├── bugfix/correcao-bug
     └── hotfix/correcao-urgente
```

### Workflow

1. **Desenvolvimento Diário**

   ```bash
   # Criar nova branch a partir da develop
   git checkout develop
   git pull origin develop
   git checkout -b feature/nome-da-funcionalidade

   ```

2. **Finalização de Feature**

   ```bash
   # Push da branch para o repositório remoto
   git push origin feature/nome-da-funcionalidade

   # Abrir Pull Request no GitHub
    1. Ir para o repositório no GitHub
    2. Clicar em "Compare & pull request"
    3. Base: develop <- Compare: feature/nome-da-funcionalidade
    4. Preencher título e descrição detalhada
    5. Solicitar reviewers
    6. Aguardar aprovação do code review

   # Após aprovação do PR, fazer merge via GitHub interface
   # OU via linha de comando (apenas após aprovação):
   git checkout develop
   git pull origin develop
   git merge feature/nome-da-funcionalidade
   git push origin develop

   # Deletar branch local e remota após merge
   git branch -d feature/nome-da-funcionalidade
   git push origin --delete feature/nome-da-funcionalidade
   ```

3. **Deploy para Produção**

   ```bash
   # Apenas quando ready para deploy (após aprovação do time)
   # Criar PR da develop para main
   git checkout develop
   git pull origin develop
   git push origin develop

   # Abrir Pull Request no GitHub
   # Base: main <- Compare: develop
   # Aguardar aprovação final para produção

   # Após aprovação, fazer merge via GitHub interface
   # Deploy automático no Vercel será disparado
   ```

## 🛠️ Configuração do Ambiente

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Git

### Instalação

```bash
# Clone o repositório
git clone https://github.com/kelvincharlesdev/memorias-em-festa.git

# Acesse o diretório
cd memorias-em-festa

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Verificar código com Biome
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── globals.css        # Estilos globais e variáveis CSS
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
├── containers/           # Containers de página
├── content/              # Conteúdo específico por seção
└── styles/               # Sistema de design e tokens
    ├── style-guide.md    # Documentação do design system

```

## 🎨 Style Guide

O projeto segue um **design system** bem definido com:

- **Componentes padronizados** (botões, cards, modais)
- **Paleta de cores consistente**
- **Tipografia hierárquica**
- **Espacamentos e layouts responsivos**

📖 **Documentação completa:** [`src/styles/style-guide.md`](./src/styles/style-guide.md)

## 🚀 Deploy

### Vercel (Produção)

- **Branch main** → Deploy automático para produção
- **URL:** [memorias-em-festa.vercel.app](https://memorias-em-festa.vercel.app)

<div align="center">
  <p>Feito com ❤️ pela equipe Memórias em Festa</p>
  <p>🎉 Tornando cada festa inesquecível! 🎉</p>
</div>
