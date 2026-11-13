import ClientEffects from "./client-effects";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Smart Mídia Comunicação Visual",
  description:
    "Empresa de comunicação visual com soluções criativas e personalizadas em Foz do Iguaçu.",
  telephone: "+55 45 99965-6388",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Edgard Schimmelpfeng, 443",
    addressLocality: "Foz do Iguaçu",
    addressRegion: "PR",
    postalCode: "85863-220",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/smartmidia.visual/"],
  hasMap: "https://maps.app.goo.gl/QMct4mG2PHMNSn16A",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <ClientEffects />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header className="site-header" id="site-header">
    <div className="site-header__inner container container--wide">
      <a className="site-header__brand" href="#inicio" aria-label="Smart Mídia — voltar ao início">
        <img src="/assets/images/brand/logo-smart-midia.png" alt="Smart Mídia" width="1116" height="648" decoding="async" />
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        <a href="#sobre">A Smart</a>
        <a href="#solucoes">O que fazemos</a>
        <a href="#processo">Nosso jeito</a>
        <a href="#contato">Contato</a>
      </nav>
      <a className="header-cta cta cta--outline" href="https://wa.me/5545999656388?text=Ol%C3%A1%2C%20Smart%20M%C3%ADdia!%20Quero%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer">
        <span>Fazer orçamento</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
      </a>
      <button className="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-nav">
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav className="mobile-nav" id="mobile-nav" aria-label="Menu mobile" aria-hidden="true" inert>
      <div className="mobile-nav__inner container">
        <span className="eyebrow eyebrow--light">NAVEGUE</span>
        <a href="#inicio"><span>01</span> Início</a>
        <a href="#sobre"><span>02</span> A Smart</a>
        <a href="#solucoes"><span>03</span> O que fazemos</a>
        <a href="#processo"><span>04</span> Nosso jeito</a>
        <a href="#contato"><span>05</span> Contato</a>
        <a className="mobile-nav__contact" href="https://wa.me/5545999656388?text=Ol%C3%A1%2C%20Smart%20M%C3%ADdia!%20Quero%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer">Solicitar orçamento <span aria-hidden="true">↗</span></a>
        <p>Foz do Iguaçu · Paraná</p>
      </div>
    </nav>
  </header>

  <main id="conteudo">
    <section className="hero" id="inicio" aria-labelledby="hero-heading">
      <div className="hero__backdrop" aria-hidden="true"></div>
      <div className="hero__grain" aria-hidden="true"></div>
      <div className="container container--wide hero__grid">
        <div className="hero__mobile-logo" aria-hidden="true">
          <img src="/assets/images/brand/logo-smart-midia.png" alt="" width="1116" height="648" fetchPriority="high" />
        </div>
        <div className="hero__content">
          <div className="hero__eyebrow"><span className="dot"></span><span>SMART MÍDIA · COMUNICAÇÃO VISUAL</span></div>
          <h1 id="hero-heading">Ideias que<br /><span>ganham forma.</span><br /><em>Marcas que<br />ganham presença.</em></h1>
          <p>Transformamos ideias em comunicação visual com criatividade, tecnologia e um olhar único para cada marca.</p>
          <div className="hero__actions">
            <a className="cta cta--pink" href="https://wa.me/5545999656388?text=Ol%C3%A1%2C%20Smart%20M%C3%ADdia!%20Quero%20contar%20sobre%20meu%20projeto." target="_blank" rel="noopener noreferrer">
              <span>Vamos criar juntos?</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
            </a>
            <a className="hero__text-link" href="#solucoes">Conheça a Smart <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div className="hero__footer container container--wide" aria-hidden="true">
        <span>MARCA É EXPERIÊNCIA</span>
        <a href="#sobre" tabIndex={-1}><span>DESCUBRA</span><span className="scroll-line"></span></a>
        <span>FOZ DO IGUAÇU / PR</span>
      </div>
    </section>

    <div className="signature-strip" aria-label="Criatividade, design e impacto visual">
      <div className="signature-strip__track" aria-hidden="true">
        <span>CRIATIVIDADE <b>✳</b> DESIGN <b>✳</b> IMPACTO VISUAL <b>✳</b> CRIATIVIDADE <b>✳</b> DESIGN <b>✳</b> IMPACTO VISUAL <b>✳</b></span>
        <span>CRIATIVIDADE <b>✳</b> DESIGN <b>✳</b> IMPACTO VISUAL <b>✳</b> CRIATIVIDADE <b>✳</b> DESIGN <b>✳</b> IMPACTO VISUAL <b>✳</b></span>
      </div>
    </div>

    <section className="intro section-pad" id="sobre" aria-labelledby="intro-heading">
      <div className="container">
        <div className="section-kicker" data-reveal><span className="kicker-index">01 / 04</span><span className="kicker-line"></span><span>QUEM SOMOS</span></div>
        <div className="intro__layout">
          <div className="intro__story" data-reveal>
            <h2 className="display-heading" id="intro-heading">Sua marca tem<br />muito a <em>dizer.</em><br />A gente faz<br />ela <span className="type-outline">aparecer.</span></h2>
            <p className="intro__lead">A Smart Mídia nasceu para transformar ideias em impacto.</p>
            <p>Somos uma empresa de comunicação visual que une <strong>design, tecnologia e estratégia</strong> para dar vida às marcas com soluções criativas, inovadoras e personalizadas.</p>
            <a className="inline-link" href="#processo">Conheça nosso jeito de trabalhar <span aria-hidden="true">↗</span></a>
          </div>
          <div className="intro__visual" data-reveal>
            <div className="intro__visual-frame">
              <img src="/assets/images/sections/identidade-smart-clara.webp" alt="Arte institucional da Smart Mídia em tons claros, com a marca e detalhes em rosa" width="1672" height="941" loading="lazy" decoding="async" />
            </div>
            <div className="intro__caption"><span>01</span> IDENTIDADE QUE CHAMA ATENÇÃO <span className="caption-asterisk" aria-hidden="true">✳</span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="offerings section-pad" id="solucoes" aria-labelledby="offerings-heading">
      <div className="container">
        <div className="section-kicker section-kicker--dark" data-reveal><span className="kicker-index">02 / 04</span><span className="kicker-line"></span><span>NOSSAS SOLUÇÕES</span></div>
        <div className="offerings__head" data-reveal>
          <h2 className="display-heading" id="offerings-heading">Visual é mais<br />do que <em>visual.</em></h2>
          <p>É o primeiro contato, a lembrança que fica, a personalidade de um negócio traduzida em formas, cores e mensagens.</p>
        </div>
        <div className="offerings__list" aria-label="Nossa abordagem de comunicação visual">
          <div className="offering" data-reveal>
            <span className="offering__num">01</span>
            <div className="offering__main"><h3>Comunicação com identidade</h3><p>Projetos que respeitam a personalidade da sua marca e a maneira como ela quer se apresentar.</p></div>
            <span className="offering__symbol" aria-hidden="true">↗</span>
          </div>
          <div className="offering" data-reveal>
            <span className="offering__num">02</span>
            <div className="offering__main"><h3>Design com intenção</h3><p>Criatividade aplicada a uma comunicação clara, marcante e alinhada aos seus objetivos.</p></div>
            <span className="offering__symbol" aria-hidden="true">↗</span>
          </div>
          <div className="offering" data-reveal>
            <span className="offering__num">03</span>
            <div className="offering__main"><h3>Soluções sob medida</h3><p>Cada ideia pede um caminho. Aqui, a proposta visual é pensada a partir da sua necessidade.</p></div>
            <span className="offering__symbol" aria-hidden="true">↗</span>
          </div>
        </div>
        <div className="offerings__foot" data-reveal>
          <p>Tem um projeto em mente? Conte para a gente o que você precisa.</p>
          <a className="cta cta--pink" href="https://wa.me/5545999656388?text=Ol%C3%A1%2C%20Smart%20M%C3%ADdia!%20Gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20de%20comunica%C3%A7%C3%A3o%20visual." target="_blank" rel="noopener noreferrer"><span>Conversar sobre meu projeto</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></a>
        </div>
      </div>
    </section>

    <section className="brand-world" aria-labelledby="brand-world-heading">
      <div className="brand-world__image">
        <img src="/assets/images/sections/identidade-smart-neon.webp" alt="Identidade visual da Smart Mídia em fundo escuro com elementos luminosos rosa" width="1672" height="941" loading="lazy" decoding="async" />
      </div>
      <div className="brand-world__caption container container--wide">
        <span>UMA MARCA. INFINITAS POSSIBILIDADES.</span>
        <h2 id="brand-world-heading">Dê <em>play</em> nas suas ideias<span aria-hidden="true">.</span></h2>
        <span className="brand-world__star" aria-hidden="true">✳</span>
      </div>
    </section>

    <section className="process section-pad" id="processo" aria-labelledby="process-heading">
      <div className="container">
        <div className="section-kicker" data-reveal><span className="kicker-index">03 / 04</span><span className="kicker-line"></span><span>NOSSO JEITO</span></div>
        <div className="process__layout">
          <div className="process__intro" data-reveal>
            <h2 className="display-heading" id="process-heading">Tudo começa<br />com uma <em>ideia.</em></h2>
            <p>Da primeira conversa às escolhas visuais, acreditamos na força de um processo construído com atenção ao que torna cada empresa diferente.</p>
            <div className="process__play" aria-hidden="true"><svg viewBox="0 0 320 320"><path d="M86 42Q64 31 64 61V260Q64 286 90 270L273 169Q294 157 273 144Z"/><path className="play-fill" d="M132 114V202L210 158Z"/></svg><span>SMART THINKING<br />VISUAL IMPACT</span></div>
          </div>
          <ol className="process__steps">
            <li className="step" data-reveal>
              <span className="step__number">01</span>
              <div><h3>Escutar</h3><p>Entender sua ideia, seu negócio e o que sua comunicação precisa transmitir.</p></div>
              <span className="step__mark" aria-hidden="true">↗</span>
            </li>
            <li className="step" data-reveal>
              <span className="step__number">02</span>
              <div><h3>Criar</h3><p>Transformar objetivos em conceitos e soluções visuais com identidade.</p></div>
              <span className="step__mark" aria-hidden="true">↗</span>
            </li>
            <li className="step" data-reveal>
              <span className="step__number">03</span>
              <div><h3>Dar forma</h3><p>Construir uma proposta de comunicação visual pensada para gerar presença.</p></div>
              <span className="step__mark" aria-hidden="true">↗</span>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section className="manifesto" aria-label="Nossa essência">
      <div className="manifesto__decor" aria-hidden="true"><span></span><span></span><span></span></div>
      <div className="container manifesto__inner" data-reveal>
        <p>UMA IDEIA QUE VALE A PENA</p>
        <h2>Não é só sobre<br />ser <span>visto.</span><br />É sobre ser <em>lembrado.</em></h2>
        <span className="manifesto__foot">DESIGN · ESTRATÉGIA · PRESENÇA</span>
      </div>
    </section>

    <section className="contact section-pad" id="contato" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-kicker section-kicker--dark" data-reveal><span className="kicker-index">04 / 04</span><span className="kicker-line"></span><span>VAMOS CONVERSAR</span></div>
        <div className="contact__layout">
          <div className="contact__intro" data-reveal>
            <h2 className="display-heading" id="contact-heading">Seu próximo<br />projeto <em>começa<br />aqui.</em></h2>
            <p>Uma ideia, uma dúvida ou um desafio de comunicação visual? Fale com a Smart Mídia e vamos encontrar um caminho para sua marca.</p>
            <div className="contact__details">
              <div><span>WHATSAPP</span><a href="https://wa.me/5545999656388" target="_blank" rel="noopener noreferrer">(45) 99965-6388 <span aria-hidden="true">↗</span></a></div>
              <div><span>ONDE ESTAMOS</span><a href="https://maps.app.goo.gl/QMct4mG2PHMNSn16A" target="_blank" rel="noopener noreferrer">Rua Edgard Schimmelpfeng, 443<br />Centro Cívico · Foz do Iguaçu, PR <span aria-hidden="true">↗</span></a></div>
              <div><span>INSTAGRAM</span><a href="https://www.instagram.com/smartmidia.visual/" target="_blank" rel="noopener noreferrer">@smartmidia.visual <span aria-hidden="true">↗</span></a></div>
            </div>
          </div>
          <div className="contact-card" data-reveal>
            <div className="contact-card__top"><div className="contact-card__icon" aria-hidden="true">↗</div><span>INICIE UMA CONVERSA</span></div>
            <h3>Conte pra gente<br />o que você imagina<span>.</span></h3>
            <p>Preencha os campos e abra sua mensagem diretamente no WhatsApp. Sem cadastro, sem complicação.</p>
            <form id="whatsapp-form" action="https://wa.me/5545999656388" method="get" noValidate>
              <div className="field"><label htmlFor="contact-name">Como podemos chamar você? <span aria-hidden="true">*</span></label><input id="contact-name" name="name" type="text" placeholder="Seu nome" autoComplete="name" required maxLength="80" /></div>
              <div className="field"><label htmlFor="contact-type">Sobre o que vamos conversar?</label><select id="contact-type" name="project"><option value="um projeto de comunicação visual">Um projeto de comunicação visual</option><option value="uma solução personalizada">Uma solução personalizada</option><option value="uma ideia que quero desenvolver">Uma ideia que quero desenvolver</option></select></div>
              <div className="field"><label htmlFor="contact-message">Fale um pouco da sua ideia</label><textarea id="contact-message" name="message" rows="3" maxLength="1200" placeholder="Conte o que você tem em mente (opcional)"></textarea></div>
              <p className="form-error" role="alert" id="form-error" hidden>Informe seu nome para continuar.</p>
              <button className="cta cta--pink cta--submit" type="submit"><span>Enviar pelo WhatsApp</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></button>
              <span className="form-note">O WhatsApp será aberto para você conferir e enviar a mensagem.</span>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer className="footer">
    <div className="container footer__top">
      <div className="footer__identity">
        <a href="#inicio" aria-label="Smart Mídia — início"><img src="/assets/images/brand/logo-smart-midia.png" alt="Smart Mídia" width="1116" height="648" loading="lazy" decoding="async" /></a>
        <p>Comunicação visual para dar vida às suas ideias e presença à sua marca.</p>
      </div>
      <div className="footer__links"><span>EXPLORE</span><a href="#sobre">A Smart</a><a href="#solucoes">O que fazemos</a><a href="#processo">Nosso jeito</a><a href="#contato">Contato</a></div>
      <div className="footer__links"><span>FALE COM A GENTE</span><a href="https://wa.me/5545999656388" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a><a href="https://www.instagram.com/smartmidia.visual/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://maps.app.goo.gl/QMct4mG2PHMNSn16A" target="_blank" rel="noopener noreferrer">Como chegar ↗</a></div>
    </div>
    <div className="container footer__bottom">
      <span>© <span id="current-year">2026</span> SMART MÍDIA. TODOS OS DIREITOS RESERVADOS.</span>
      <a className="footer__credit" href="https://njamarketing.com.br/pt" target="_blank" rel="noopener noreferrer" aria-label="Desenvolvido por NJA Marketing. Visitar site da agência.">
        <span>Desenvolvido por</span>
        <img src="/assets/images/brand/logo-nja-original-recortada.png" alt="" width="776" height="878" loading="lazy" decoding="async" />
        <strong>NJA Marketing</strong>
      </a>
    </div>
  </footer>
  <a className="floating-whatsapp" href="https://wa.me/5545999656388?text=Ol%C3%A1%2C%20Smart%20M%C3%ADdia!%20Quero%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" aria-label="Conversar com a Smart Mídia no WhatsApp">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M8.3 9.2c.4 2.2 2.3 4.2 4.6 4.9l1.1-1.2 2.8 1.2c-.2 1.5-1.5 2.1-2.5 2.1-4.7-.1-7.4-3.8-7-6.7.1-.8 1.3-2.1 2.3-2.3z"/></svg>
  </a>
    </>
  );
}
