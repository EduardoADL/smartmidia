# Relatório de QA — Smart Mídia

> Registro da validação visual realizada antes da migração para Next.js. Após a migração, o build de produção e o teste responsivo por URL são as verificações atuais; o teste antigo de snapshot com assets embutidos foi removido.

## Validação após a migração para Next.js

Em 13/11/2026, a versão migrada foi validada com o servidor de produção do Next.js e Chromium via Playwright:

- `npm run build`: concluído com sucesso; rota `/` pré-renderizada como conteúdo estático.
- `npm audit`: nenhuma vulnerabilidade encontrada.
- HTTP: página e assets principais responderam com status 200.
- Viewports: 320, 360, 375, 390, 414, 560, 768, 820, 980, 1024, 1199, 1280, 1440, 1920, 2560 e 3440 px.
- Nenhum overflow horizontal, imagem quebrada ou erro JavaScript.
- Menu mobile validado ao abrir, fechar com `Escape` e fechar ao selecionar um link.
- Formulário validado para nome obrigatório e geração da URL codificada do WhatsApp.
- Capturas de referência em `qa/screenshots/` foram atualizadas com a aplicação Next.js.

**Data:** 13/11/2026  
**Projeto:** website institucional Smart Mídia — HTML/CSS/JavaScript estático.

## Navegador e método

Foram realizadas verificações reais de DOM, layout, interações e capturas em **Chromium headless**, usando Playwright Python contra o servidor de produção do Next.js em `http://127.0.0.1:8765`. O teste exercitou diretamente a aplicação compilada, seus chunks e assets públicos.

## Larguras verificadas

320, 360, 375, 390, 414, 560, 768, 820, 980, 1024, 1199, 1280, 1440, 1920, 2560 e 3440 CSS pixels.

- **Scroll horizontal acidental:** nenhum detectado em todas as 16 larguras.
- **Imagens locais:** nenhuma imagem ausente no DOM renderizado; proporções revisadas.
- **Erros JavaScript durante o teste:** nenhum.
- **Menu mobile:** abre, fecha com `Escape` e fecha ao escolher um link nas larguras 390 e 820 px.
- **Formulário:** valida nome, exibe feedback e constrói URL `wa.me/5545999656388?text=...` com mensagem codificada. Não testou o envio real em uma conta WhatsApp; o fluxo depende de ação do visitante.
- **Interações/hover:** verificado em desktop que o pseudoelemento do botão começa fora da vista, a camada fica confinada por `overflow: hidden` e o preenchimento entra somente com hover. Sem vazamento estrutural conhecido.
- **Animações ativas:** `hero-intro`, `ribbon` e revelação por `IntersectionObserver` foram verificadas. `prefers-reduced-motion` foi usado na captura das telas e reduz o movimento.
- **JavaScript indisponível:** conteúdo editorial principal permanece visível e legível sem os scripts. O menu mobile interativo requer JavaScript.
- **Carregamento de imagens:** imagens abaixo da dobra foram exercitadas com rolagem antes de gerar capturas de página inteira.
- **Ícone flutuante:** recolhido na área de contato/rodapé para não cobrir campos e botões.

## Evidência visual

Capturas reais incluídas em `qa/screenshots/`:

- `hero-390.png`, `hero-820.png`, `hero-1440.png`, `hero-1920.png` — acima da dobra.
- `home-390.png`, `home-820.png`, `home-1440.png`, `home-1920.png` — página inteira após rolagem.
- `menu-390.png`, `menu-820.png` — navegação mobile aberta.
- `contact-390.png` — formulário e CTA de contato.
- `about-1440.png`, `brand-world-1440.png` — recorte da apresentação de marca em desktop.

## Validação estática e pendências externas

Os arquivos reais referenciados no HTML/CSS/manifest foram verificados no ZIP antes do empacotamento. Como não há domínio definitivo informado, o projeto não inclui canonical/sitemap fictícios. Não foram medidos Core Web Vitals em campo nem pontuação Lighthouse de site publicado; as metas de LCP/INP/CLS dependem de hospedagem, conexão, dispositivo e tráfego reais. O fluxo externo do WhatsApp, a indexação no Google e o favicon exibido nos resultados devem ser conferidos após a publicação.
