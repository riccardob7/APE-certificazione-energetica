import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Home,
  KeyRound,
  Leaf,
  Lightbulb,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import InternalPage from './InternalPage';
import { contact, locations } from './siteData';

const PHONE_DISPLAY = contact.phoneDisplay;
const PHONE_LINK = contact.phoneLink;
const WHATSAPP_LINK = contact.whatsapp;
const MAPS_LINK = contact.maps;

const benefits = [
  {
    icon: BadgeCheck,
    title: 'Competenza tecnica',
    text: "Il servizio è svolto direttamente da un ingegnere abilitato, con attenzione alla correttezza dei dati e dell'intera pratica.",
  },
  {
    icon: SearchCheck,
    title: 'Sopralluogo reale',
    text: "Il sopralluogo permette di rilevare i dati necessari alla modellazione energetica dell'edificio e alla redazione dell'attestato.",
  },
  {
    icon: FileCheck2,
    title: 'Pratica seguita con cura',
    text: 'Indicazioni chiare sui documenti, assistenza durante il percorso e consegna della certificazione completata.',
  },
];

const steps = [
  ['01', 'Primo contatto', "Indica il comune, il tipo di immobile e il motivo della richiesta."],
  ['02', 'Raccolta documenti', 'Ricevi le indicazioni sui dati e sui documenti utili per avviare la pratica.'],
  ['03', 'Sopralluogo tecnico', "L'ingegnere rileva le caratteristiche dell'immobile, degli impianti e dell'involucro edilizio."],
  ['04', 'Modellazione e rilascio', "I dati rilevati vengono utilizzati per la modellazione energetica dell'edificio e per predisporre l'Attestato di Prestazione Energetica."],
];

const documents = [
  'Planimetria catastale',
  "Dati catastali e indirizzo completo dell'immobile",
  "Documento d'identità del proprietario o delegato",
  'Libretto di impianto termico, se presente',
];

const useCases = [
  { icon: KeyRound, title: 'Compravendita', text: "Per la documentazione richiesta nell'atto di vendita." },
  { icon: Home, title: 'Locazione', text: "Per stipulare un nuovo contratto d'affitto nei casi previsti." },
  { icon: Building2, title: 'Annunci immobiliari', text: 'Per riportare classe e prestazione energetica negli annunci.' },
  { icon: ClipboardCheck, title: 'Altri adempimenti', text: 'Per verificare la necessità dell’APE nella propria situazione.' },
];

const faqs = [
  {
    question: "Cos'è l'Attestato di Prestazione Energetica?",
    answer:
      "L'APE è il documento che descrive le caratteristiche energetiche di un immobile e ne indica la classe energetica sulla base dei dati rilevati e calcolati.",
  },
  {
    question: 'Il sopralluogo è necessario?',
    answer:
      "Sì. Il servizio proposto prevede il sopralluogo diretto dell'ingegnere per verificare le caratteristiche dell'immobile e raccogliere i dati necessari.",
  },
  {
    question: 'Quali informazioni servono per richiedere un preventivo?',
    answer:
      "È utile indicare il comune, la tipologia e la dimensione indicativa dell'immobile, oltre al motivo della certificazione, ad esempio vendita o locazione.",
  },
  {
    question: 'Cosa succede se manca un documento?',
    answer:
      'Contatta il tecnico e indica quali documenti sono disponibili: riceverai le istruzioni per verificare come procedere nella situazione specifica.',
  },
  {
    question: 'Il servizio è disponibile anche fuori dai comuni elencati?',
    answer:
      'Per località limitrofe è possibile verificare la disponibilità direttamente tramite telefono o WhatsApp.',
  },
];

function ContactButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`contact-buttons${compact ? ' contact-buttons--compact' : ''}`}>
      <a className="button button--primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" />
        Richiedi un preventivo
      </a>
      <a className="button button--secondary" href={`tel:${PHONE_LINK}`}>
        <Phone aria-hidden="true" />
        Chiama ora
      </a>
    </div>
  );
}

function HomePage() {
  const [showTechnicalNotice, setShowTechnicalNotice] = useState(true);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand brand--header" href="/" aria-label="apecertificazioni.com, torna all'inizio">
            <img className="brand-symbol" src="/images/ape-symbol.png" alt="" aria-hidden="true" />
            <span className="brand-copy">
              <strong>apecertificazioni.com</strong>
              <small>Servizio certificazione APE</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navigazione principale">
            <a href="/certificazione-energetica-ape/">Il servizio</a>
            <a href="/come-funziona/">Come funziona</a>
            <a href="/zone-servite/">Zone servite</a>
            <a href="/consulenza-energetica/">Consulenza</a>
            <a href="/faq/">FAQ</a>
          </nav>

          <a className="header-phone" href={`tel:${PHONE_LINK}`}>
            <Phone aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </a>

          <details className="mobile-menu">
            <summary aria-label="Apri il menu"><Menu /></summary>
            <nav aria-label="Navigazione mobile">
              <a href="/certificazione-energetica-ape/">Il servizio</a>
              <a href="/come-funziona/">Come funziona</a>
              <a href="/documenti-necessari/">Documenti</a>
              <a href="/quando-serve-ape/">Quando serve</a>
              <a href="/zone-servite/">Zone servite</a>
              <a href="/consulenza-energetica/">Consulenza energetica</a>
              <a href="/faq/">FAQ</a>
              <a href={`tel:${PHONE_LINK}`}>{PHONE_DISPLAY}</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow"><Sparkles /> Certificazione energetica APE</div>
              <h1 id="hero-title">La certificazione energetica per la tua casa e la tua attività.</h1>
              <p className="hero-lead">
                Sopralluogo tecnico, modellazione energetica dell’edificio e predisposizione dell’APE per vendita, locazione e annunci immobiliari.
              </p>
              <ContactButtons />
              <div className="hero-assurances" aria-label="Punti chiave del servizio">
                <span><Check /> Ingegnere abilitato</span>
                <span><Check /> Sopralluogo sul posto</span>
                <span><Check /> Supporto sui documenti</span>
              </div>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true"><span /> Scopri il servizio</div>
        </section>

        <section className="trust-strip" aria-label="Caratteristiche del servizio">
          <div className="container trust-strip-inner">
            <span><ShieldCheck /> Approccio professionale</span>
            <span><MapPin /> Presenza sul territorio</span>
            <span><MessageCircle /> Contatto diretto</span>
          </div>
        </section>

        <section className="section" id="servizio">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="eyebrow">Un servizio tecnico, spiegato bene</span>
              <h2>Più chiarezza, meno pensieri.</h2>
              <p>Un percorso essenziale e trasparente, dalla prima richiesta fino alla certificazione.</p>
            </div>
            <div className="benefit-grid">
              {benefits.map(({ icon: Icon, title, text }, index) => (
                <article className="benefit-card" data-reveal style={{ '--delay': `${index * 90}ms` } as React.CSSProperties} key={title}>
                  <span className="icon-tile"><Icon /></span>
                  <span className="card-index">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark" id="come-funziona">
          <div className="container process-layout">
            <div className="process-intro" data-reveal>
              <span className="eyebrow eyebrow--light">Come funziona</span>
              <h2>Un percorso semplice, dall’immobile all’APE.</h2>
              <p>Ogni fase ha uno scopo preciso: dal rilievo sul posto alla modellazione energetica necessaria per predisporre l’attestato.</p>
              <a className="text-link" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Inizia da WhatsApp <ArrowRight />
              </a>
            </div>
            <ol className="steps">
              {steps.map(([number, title, text]) => (
                <li data-reveal key={number}>
                  <span className="step-number">{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section documents-section">
          <div className="container split-layout">
            <div className="section-heading section-heading--left" data-reveal>
              <span className="eyebrow">Preparare la pratica</span>
              <h2>I documenti utili.</h2>
              <p>Per iniziare, prepara ciò che hai già a disposizione. Se manca qualcosa, il tecnico ti indicherà come verificare la situazione.</p>
              <a className="text-link text-link--dark" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Verifica i documenti <ArrowRight /></a>
            </div>
            <div className="document-panel" data-reveal>
              {documents.map((document) => (
                <div className="document-row" key={document}><span><Check /></span>{document}</div>
              ))}
              <p className="panel-note"><FileText /> L’elenco definitivo dipende dalle caratteristiche dell’immobile.</p>
            </div>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="eyebrow">Quando serve</span>
              <h2>L’APE nei momenti importanti dell’immobile.</h2>
              <p>Verifica con il tecnico l’applicazione corretta alla tua situazione specifica.</p>
            </div>
            <div className="use-grid">
              {useCases.map(({ icon: Icon, title, text }) => (
                <article className="use-card" data-reveal key={title}>
                  <Icon />
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section locations-section" id="zone">
          <div className="container locations-layout">
            <div className="location-copy" data-reveal>
              <span className="eyebrow eyebrow--light">Zone servite</span>
              <h2>Dal territorio, per il territorio.</h2>
              <p>Il servizio è disponibile in numerosi comuni tra la provincia di Roma e le aree limitrofe del Lazio.</p>
              <div className="location-highlight"><MapPin /><span><strong>Area principale</strong>Valmontone, Colleferro, Palestrina e San Cesareo</span></div>
              <a className="map-link" href={MAPS_LINK} target="_blank" rel="noreferrer" aria-label="Apri la sede su Google Maps">
                <MapPin /> Apri su Google Maps <ArrowRight />
              </a>
            </div>
            <div className="towns" data-reveal>
              {locations.map((town) => <a className="town-link" href={`/zone-servite/${town.slug}/`} key={town.slug}>{town.name}</a>)}
              <a className="towns-more" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Verifica un altro comune <ArrowRight /></a>
            </div>
          </div>
        </section>

        <section className="section engineer-section">
          <div className="container engineer-card" data-reveal>
            <div className="engineer-visual" aria-hidden="true">
              <span className="technical-orbit technical-orbit--one" />
              <span className="technical-orbit technical-orbit--two" />
              <ShieldCheck />
            </div>
            <div className="engineer-copy">
              <span className="eyebrow">Il professionista</span>
              <h2>Un riferimento tecnico, dall’inizio alla consegna.</h2>
              <p>
                Il servizio viene svolto direttamente da un ingegnere abilitato. Un unico interlocutore segue il sopralluogo, la modellazione energetica dell’edificio e la predisposizione dell’attestato.
              </p>
              <ul>
                <li><Check /> Contatto diretto con il tecnico</li>
                <li><Check /> Indicazioni chiare per preparare la pratica</li>
                <li><Check /> Attenzione alle caratteristiche reali dell’immobile</li>
              </ul>
              <p className="service-note">Il servizio resta seguito da un unico referente tecnico in tutte le fasi.</p>
            </div>
          </div>
        </section>

        <section className="section improvement-section" id="miglioramento">
          <div className="container improvement-card" data-reveal>
            <div className="improvement-copy">
              <span className="eyebrow eyebrow--light">Consulenza energetica</span>
              <h2>E se volessi migliorare la classe energetica?</h2>
              <p>
                La modellazione energetica può diventare un punto di partenza per comprendere il comportamento dell’edificio e valutare possibili interventi di miglioramento.
              </p>
              <ul>
                <li><Leaf /> Analisi delle caratteristiche energetiche dell’immobile</li>
                <li><Lightbulb /> Valutazione tecnica delle possibili soluzioni</li>
                <li><FileCheck2 /> Indicazioni ordinate per orientare le scelte successive</li>
              </ul>
              <p className="improvement-disclaimer">La fattibilità e gli effetti degli interventi dipendono dalle caratteristiche del singolo immobile.</p>
              <a className="button button--primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <MessageCircle /> Richiedi informazioni sulla consulenza
              </a>
            </div>
            <div className="improvement-visual" aria-hidden="true">
              <div className="energy-scale">
                {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((grade, index) => <span key={grade} style={{ '--grade': index } as React.CSSProperties}>{grade}</span>)}
              </div>
              <div className="energy-home"><Home /><span /></div>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div className="section-heading section-heading--left" data-reveal>
              <span className="eyebrow">Domande frequenti</span>
              <h2>Le risposte per partire con chiarezza.</h2>
              <p>Per dubbi legati a un immobile specifico, il modo più semplice è parlarne direttamente.</p>
              <a className="button button--dark" href={`tel:${PHONE_LINK}`}><Phone /> Parla con il tecnico</a>
            </div>
            <div className="faq-list" data-reveal>
              {faqs.map(({ question, answer }, index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}<ChevronDown /></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta-glow" aria-hidden="true" />
          <div className="container final-cta-inner" data-reveal>
            <span className="eyebrow eyebrow--light">Richiedi informazioni</span>
            <h2>Hai bisogno dell’APE per il tuo immobile?</h2>
            <p>Indica il comune, il tipo di immobile e il motivo della richiesta. Riceverai le informazioni necessarie per valutare la pratica.</p>
            <ContactButtons />
            <span className="cta-phone-note">Oppure chiama il <a href={`tel:${PHONE_LINK}`}>{PHONE_DISPLAY}</a></span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="brand brand--image brand--footer" href="/"><img src="/images/ape-certificazioni-logo.webp" alt="APE Certificazioni" /></a>
            <p>Certificazioni energetiche con sopralluogo diretto e modellazione energetica dell’edificio.</p>
          </div>
          <div><h2>Contatti</h2><a href={`tel:${PHONE_LINK}`}>{PHONE_DISPLAY}</a><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">WhatsApp</a><a href="/contatti/">Tutti i contatti</a></div>
          <div><h2>Esplora</h2><a href="/certificazione-energetica-ape/">Il servizio</a><a href="/come-funziona/">Come funziona</a><a href="/documenti-necessari/">Documenti</a><a href="/quando-serve-ape/">Quando serve</a><a href="/consulenza-energetica/">Consulenza</a><a href="/zone-servite/">Zone servite</a><a href="/faq/">FAQ</a></div>
          <div>
            <h2>Dove operiamo</h2>
            <a href={MAPS_LINK} target="_blank" rel="noreferrer">Apri su Google Maps</a>
            <span className="footer-note">Il sito non utilizza cookie di profilazione o strumenti di tracciamento.</span>
          </div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} APE Certificazioni</span><span>Certificazione e consulenza energetica</span></div>
      </footer>

      <div className="mobile-contact-bar" aria-label="Contatti rapidi">
        <a href={`tel:${PHONE_LINK}`}><Phone /> Chiama</a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a>
      </div>

      {showTechnicalNotice && (
        <aside className="technical-notice" role="region" aria-label="Informazioni sui cookie">
          <div className="technical-notice__icon" aria-hidden="true"><ShieldCheck /></div>
          <div>
            <strong>Nessun cookie di profilazione</strong>
            <p>Questo sito non salva preferenze e non utilizza strumenti di tracciamento. I collegamenti a WhatsApp e Google Maps si aprono solo su tua richiesta.</p>
          </div>
          <button type="button" onClick={() => setShowTechnicalNotice(false)} aria-label="Chiudi l’avviso sui cookie">
            <X />
          </button>
        </aside>
      )}
    </div>
  );
}

function App() {
  const pathname = window.location.pathname;
  return pathname === '/' || pathname === '/index.html' ? <HomePage /> : <InternalPage pathname={pathname} />;
}

export default App;
