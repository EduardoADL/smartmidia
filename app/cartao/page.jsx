import styles from "./page.module.css";

const PDF_URL = "/assets/documents/cartao-virtual-smart-midia.pdf";
const PREVIEW_URL = "/assets/documents/cartao-virtual-smart-midia.png";
const DOWNLOAD_NAME = "Cartao_Virtual_Interativo_Smart_Midia.pdf";

export const metadata = {
  title: "Cartão Virtual | Smart Mídia",
  description:
    "Visualize e baixe o cartão virtual interativo da Smart Mídia Comunicação Visual.",
  openGraph: {
    title: "Cartão Virtual | Smart Mídia",
    description:
      "Todos os canais da Smart Mídia em um cartão virtual interativo.",
  },
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12m-5-5 5 5 5-5M5 20h14" />
    </svg>
  );
}

export default function CartaoPage() {
  return (
    <div className={styles.page}>
      <a className="skip-link" href="#cartao">
        Pular para o cartão
      </a>

      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="Smart Mídia — página inicial">
          <img
            src="/assets/images/brand/logo-smart-midia.png"
            alt="Smart Mídia"
            width="1116"
            height="648"
          />
        </a>
        <a className={styles.backLink} href="/">
          <span aria-hidden="true">←</span>
          Voltar ao site
        </a>
      </header>

      <main className={styles.main} id="cartao">
        <section className={styles.intro} aria-labelledby="cartao-heading">
          <div className={styles.eyebrow}>
            <span aria-hidden="true" />
            Cartão virtual interativo
          </div>
          <h1 id="cartao-heading">
            Todos os caminhos para <em>falar com a Smart.</em>
          </h1>
          <p>
            Visualize o cartão, acesse os contatos pela versão interativa ou
            salve o PDF para compartilhar quando quiser.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.primaryAction}
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Abrir cartão</span>
              <ArrowIcon />
            </a>
            <a
              className={styles.secondaryAction}
              href={PDF_URL}
              download={DOWNLOAD_NAME}
            >
              <span>Baixar PDF</span>
              <DownloadIcon />
            </a>
          </div>

          <div className={styles.fileMeta} aria-label="Informações do arquivo">
            <span>PDF</span>
            <span aria-hidden="true">·</span>
            <span>1 página</span>
            <span aria-hidden="true">·</span>
            <span>567 KB</span>
          </div>
        </section>

        <section className={styles.viewerSection} aria-label="Visualização do cartão virtual">
          <div className={styles.viewerFrame}>
            <div className={styles.viewerBar}>
              <div>
                <span className={styles.statusDot} aria-hidden="true" />
                <span>Cartão Smart Mídia</span>
              </div>
              <a href={PDF_URL} download={DOWNLOAD_NAME} aria-label="Baixar cartão em PDF">
                <DownloadIcon />
              </a>
            </div>

            <a
              className={styles.previewLink}
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir o cartão virtual interativo em uma nova aba"
            >
              <img
                src={PREVIEW_URL}
                alt="Cartão virtual da Smart Mídia com WhatsApp, Instagram, site, endereço e QR Code"
                width="1440"
                height="2400"
              />
            </a>
          </div>

          <p className={styles.viewerHelp}>
            Quer acessar os links do cartão?{" "}
            <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
              Abra o PDF em uma nova aba.
            </a>
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>SMART MÍDIA · COMUNICAÇÃO VISUAL</span>
        <span>FOZ DO IGUAÇU · PARANÁ</span>
      </footer>
    </div>
  );
}
