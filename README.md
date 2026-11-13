# Smart Mídia — Next.js

Site institucional da **Smart Mídia Comunicação Visual**, migrado para Next.js com App Router e pronto para deploy na Vercel.

## Tecnologias

- Next.js 16
- React 19
- App Router
- CSS global responsivo
- `next/font` para servir as fontes localmente
- Página pré-renderizada como conteúdo estático

## Estrutura principal

```text
smart-midia-site/
├── app/
│   ├── client-effects.jsx  # menu, animações e formulário do WhatsApp
│   ├── globals.css         # identidade visual e responsividade
│   ├── layout.jsx          # SEO, fontes, favicons e viewport
│   └── page.jsx            # conteúdo da página
├── public/
│   ├── assets/             # imagens e favicons
│   └── site.webmanifest
├── qa/                     # relatório, screenshots e teste responsivo
├── next.config.mjs
├── package.json
└── package-lock.json
```

## Rodar localmente

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Para validar a versão de produção:

```bash
npm run build
npm start
```

## Publicar na Vercel

1. Envie esta pasta para um repositório GitHub, GitLab ou Bitbucket.
2. Na Vercel, selecione **Add New → Project** e importe o repositório.
3. A Vercel detectará o framework **Next.js** automaticamente.
4. Mantenha os comandos padrão e clique em **Deploy**.

O projeto não precisa de variáveis de ambiente para funcionar.

Também é possível publicar com a CLI:

```bash
npx vercel
```

## Personalização

- Conteúdo e links: `app/page.jsx`
- SEO e metadados: `app/layout.jsx`
- Cores e estilos: `app/globals.css`
- Menu, animações e formulário: `app/client-effects.jsx`
- Imagens e favicons: `public/assets/`

O formulário não envia dados para um servidor: ele monta a mensagem e abre uma conversa no WhatsApp.

## Antes de usar um domínio definitivo

Depois de conectar o domínio na Vercel, recomenda-se adicionar a URL oficial em `metadataBase`, a canonical e a URL completa do Open Graph em `app/layout.jsx`. Também será possível criar `app/sitemap.js` e `app/robots.js` com o domínio correto.

## QA

O teste responsivo pode ser executado contra o servidor local na porta 8765:

```bash
npm run dev -- --port 8765
python qa/tests/test_responsive.py
```

Ele requer Playwright para Python e um navegador Chromium configurado em `CHROME_PATH`.
