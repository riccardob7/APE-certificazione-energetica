import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowRight, Building2, Check, ChevronDown, ClipboardCheck, FileCheck2,
  FileText, Home, KeyRound, Leaf, Lightbulb, MapPin, Menu, MessageCircle,
  Phone, SearchCheck, ShieldCheck, X,
} from 'lucide-react';
import { contact, locations, locationWithPreposition, staticRoutes } from './siteData';

const documents = [
  'Planimetria catastale',
  'Dati catastali e indirizzo completo dell’immobile',
  'Documento d’identità del proprietario o delegato',
  'Libretto di impianto termico, se presente',
];

const process = [
  ['01', 'Contatto iniziale', 'Indica il comune, la tipologia dell’immobile e il motivo della richiesta.'],
  ['02', 'Verifica dei documenti', 'Il tecnico indica quali informazioni sono utili per preparare la pratica.'],
  ['03', 'Sopralluogo', 'Vengono rilevate le caratteristiche dell’immobile, degli impianti e dell’involucro edilizio.'],
  ['04', 'Modellazione energetica', 'I dati raccolti vengono utilizzati per ricostruire il comportamento energetico dell’edificio.'],
  ['05', 'Predisposizione dell’APE', 'La pratica viene completata sulla base delle verifiche e dei calcoli effettuati.'],
];

const faq = [
  ['Cos’è l’APE?', 'È il documento che descrive le caratteristiche energetiche di un immobile e ne indica la classe sulla base dei dati rilevati e calcolati.'],
  ['Il sopralluogo è previsto?', 'Sì. Il servizio prevede il sopralluogo diretto per raccogliere i dati necessari alla modellazione energetica dell’edificio.'],
  ['Quali informazioni servono per il preventivo?', 'È utile indicare comune, tipologia e dimensione indicativa dell’immobile, oltre al motivo della certificazione.'],
  ['Cosa succede se manca un documento?', 'Comunica al tecnico quali documenti sono disponibili: riceverai le indicazioni per verificare come procedere.'],
  ['È possibile richiedere una consulenza per migliorare la classe?', 'È possibile richiedere una valutazione tecnica delle possibili soluzioni. Fattibilità ed effetti dipendono dalle caratteristiche dell’immobile.'],
];

function PageHeader() {
  return <header className="inner-header"><div className="container header-inner">
    <a className="brand brand--header" href="/" aria-label="apecertificazioni.com, torna alla home"><img className="brand-symbol" src="/images/ape-symbol.png" alt="" aria-hidden="true" /><span className="brand-copy"><strong>apecertificazioni.com</strong><small>Servizio certificazione APE</small></span></a>
    <nav className="desktop-nav" aria-label="Navigazione principale">
      <a href="/certificazione-energetica-ape/">Servizio APE</a><a href="/consulenza-energetica/">Consulenza</a><a href="/come-funziona/">Come funziona</a><a href="/zone-servite/">Zone servite</a><a href="/faq/">FAQ</a>
    </nav>
    <a className="header-phone" href={`tel:${contact.phoneLink}`}><Phone /><span>{contact.phoneDisplay}</span></a>
    <details className="mobile-menu"><summary aria-label="Apri il menu"><Menu /></summary><nav aria-label="Navigazione mobile">
      <a href="/certificazione-energetica-ape/">Servizio APE</a><a href="/consulenza-energetica/">Consulenza energetica</a><a href="/come-funziona/">Come funziona</a><a href="/documenti-necessari/">Documenti</a><a href="/quando-serve-ape/">Quando serve</a><a href="/zone-servite/">Zone servite</a><a href="/faq/">FAQ</a><a href="/contatti/">Contatti</a>
    </nav></details>
  </div></header>;
}

function PageFooter() {
  return <footer className="site-footer inner-footer"><div className="container footer-grid">
    <div><a className="brand brand--image brand--footer" href="/"><img src="/images/ape-certificazioni-logo.webp" alt="APE Certificazioni" /></a><p>Certificazione e consulenza energetica con contatto diretto e sopralluogo tecnico.</p></div>
    <div><h2>Servizi</h2><a href="/certificazione-energetica-ape/">Certificazione APE</a><a href="/consulenza-energetica/">Consulenza energetica</a><a href="/documenti-necessari/">Documenti utili</a></div>
    <div><h2>Informazioni</h2><a href="/come-funziona/">Come funziona</a><a href="/quando-serve-ape/">Quando serve</a><a href="/faq/">FAQ</a><a href="/zone-servite/">Zone servite</a></div>
    <div><h2>Contatti</h2><a href={`tel:${contact.phoneLink}`}>{contact.phoneDisplay}</a><a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href={contact.maps} target="_blank" rel="noreferrer">Google Maps</a></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} APE Certificazioni</span><span>Nessun cookie di profilazione</span></div></footer>;
}

function ContactBar() {
  return <><section className="inner-cta"><div><strong>Vuoi informazioni per il tuo immobile?</strong><span>Contatta direttamente il tecnico.</span></div><a className="button button--primary" href={contact.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> Richiedi un preventivo</a><a className="button button--outline" href={`tel:${contact.phoneLink}`}><Phone /> Chiama</a></section><div className="mobile-contact-bar" aria-label="Contatti rapidi"><a href={`tel:${contact.phoneLink}`}><Phone /> Chiama</a><a href={contact.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></div></>;
}

function InnerHero({ eyebrow, title, text, icon }: { eyebrow: string; title: string; text: string; icon: ReactNode }) {
  return <section className="inner-hero"><div className="inner-hero-grid" aria-hidden="true" /><div className="container inner-hero-content"><div className="inner-hero-icon" aria-hidden="true">{icon}</div><span className="eyebrow eyebrow--light">{eyebrow}</span><h1>{title}</h1><p>{text}</p><div className="inner-hero-actions"><a className="button button--primary" href={contact.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> Richiedi informazioni</a><a className="button button--secondary" href={`tel:${contact.phoneLink}`}><Phone /> Chiama ora</a></div></div></section>;
}

function Section({ title, eyebrow, children, soft = false }: { title: string; eyebrow?: string; children: ReactNode; soft?: boolean }) {
  return <section className={`inner-section${soft ? ' inner-section--soft' : ''}`}><div className="container">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{children}</div></section>;
}

function Cards({ items }: { items: Array<[ReactNode, string, string]> }) {
  return <div className="inner-card-grid">{items.map(([icon, title, text]) => <article key={title}>{icon}<h3>{title}</h3><p>{text}</p></article>)}</div>;
}

function ProcessSection() {
  return <Section soft eyebrow="Le fasi" title="Come si svolge il servizio."><ol className="inner-steps">{process.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></Section>;
}

function DocumentsSection() {
  return <Section eyebrow="Preparare la pratica" title="I documenti utili."><div className="document-list">{documents.map((item) => <div key={item}><Check />{item}</div>)}</div><p className="content-note">L’elenco definitivo può variare in base alle caratteristiche dell’immobile e alla documentazione disponibile.</p><a className="inline-cta" href="/documenti-necessari/">Approfondisci i documenti <ArrowRight /></a></Section>;
}

function UseCasesSection() {
  return <Section eyebrow="Quando serve" title="I principali casi da verificare."><Cards items={[[<KeyRound />, 'Compravendita', 'Per la documentazione richiesta nell’atto di vendita.'], [<Home />, 'Locazione', 'Per i contratti di affitto nei casi previsti.'], [<Building2 />, 'Annunci immobiliari', 'Per riportare le informazioni energetiche richieste negli annunci.']]} /><p className="content-note">L’applicazione alla situazione specifica deve essere verificata con il tecnico.</p></Section>;
}

function ApePage() {
  return <><InnerHero eyebrow="Servizio APE" title="Certificazione energetica con sopralluogo e modellazione dell’edificio." text="Un percorso tecnico seguito direttamente da un ingegnere abilitato, dalla raccolta dei dati alla predisposizione dell’attestato." icon={<FileCheck2 />} /><Section eyebrow="Il servizio" title="Un’analisi basata sulle caratteristiche reali dell’immobile."><Cards items={[[<SearchCheck />, 'Sopralluogo tecnico', 'Rilievo delle informazioni necessarie su involucro, impianti e caratteristiche dell’edificio.'], [<Building2 />, 'Modellazione energetica', 'Ricostruzione del comportamento energetico sulla base dei dati disponibili e rilevati.'], [<FileText />, 'Predisposizione dell’APE', 'Completamento dell’attestato attraverso le verifiche e i calcoli previsti.']]} /></Section><ProcessSection /><DocumentsSection /><UseCasesSection /></>;
}

function ConsultationPage() {
  return <><InnerHero eyebrow="Consulenza energetica" title="Valuta come migliorare le prestazioni energetiche del tuo immobile." text="Un servizio tecnico per comprendere il comportamento dell’edificio e orientare la valutazione di possibili interventi." icon={<Leaf />} /><Section eyebrow="Obiettivo" title="Dalla situazione attuale alle possibili soluzioni."><div className="inner-split"><div><p>La consulenza parte dalle caratteristiche dell’immobile e dalla modellazione energetica per individuare gli aspetti che incidono maggiormente sulle prestazioni.</p><p>Le soluzioni vengono valutate tecnicamente senza promettere automaticamente un salto di classe.</p></div><ul className="check-list"><li><Check /> Analisi delle caratteristiche energetiche</li><li><Check /> Individuazione degli elementi più rilevanti</li><li><Check /> Valutazione delle possibili soluzioni</li><li><Check /> Indicazioni per orientare le decisioni successive</li></ul></div></Section><Section soft eyebrow="Possibili ambiti" title="Una valutazione coordinata dell’edificio."><Cards items={[[<Home />, 'Involucro edilizio', 'Valutazione degli elementi che separano gli ambienti interni dall’esterno.'], [<Lightbulb />, 'Impianti', 'Analisi del ruolo degli impianti nel comportamento energetico complessivo.'], [<ClipboardCheck />, 'Scelte successive', 'Indicazioni tecniche utili prima di approfondimenti progettuali o preventivi.']]} /><p className="content-note">Fattibilità ed effetti dipendono dalle caratteristiche del singolo immobile.</p></Section></>;
}

function ProcessPage() { return <><InnerHero eyebrow="Come funziona" title="Un percorso tecnico chiaro, fase dopo fase." text="Dalla prima richiesta alla predisposizione dell’APE, ogni passaggio serve a raccogliere e verificare le informazioni dell’immobile." icon={<ClipboardCheck />} /><ProcessSection /><DocumentsSection /></>; }

function DocumentsPage() {
  return <><InnerHero eyebrow="Documenti" title="Cosa preparare per avviare la certificazione APE." text="Raccogli ciò che hai già a disposizione. Se manca qualcosa, il tecnico indicherà come verificare la situazione." icon={<FileText />} /><DocumentsSection /><Section soft eyebrow="Prima del contatto" title="Le informazioni iniziali."><Cards items={[[<MapPin />, 'Comune e indirizzo', 'Servono per identificare la posizione dell’immobile e verificare la disponibilità del servizio.'], [<Home />, 'Tipologia e dimensione', 'Un’indicazione iniziale aiuta a inquadrare l’immobile oggetto della richiesta.'], [<KeyRound />, 'Motivo della richiesta', 'Ad esempio vendita, locazione, annuncio immobiliare o altra esigenza da verificare.']]} /></Section></>;
}

function UseCasesPage() { return <><InnerHero eyebrow="Quando serve" title="L’APE nei momenti importanti dell’immobile." text="Vendita, locazione e annunci sono i casi più frequenti. La necessità dell’attestato va verificata rispetto alla situazione concreta." icon={<KeyRound />} /><UseCasesSection /><Section soft eyebrow="Verifica" title="Ogni immobile ha una situazione specifica."><div className="inner-split"><p>Tipologia, utilizzo dell’immobile e operazione prevista possono incidere sugli adempimenti necessari. Il caso va verificato direttamente.</p><a className="button button--dark" href={contact.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> Descrivi la tua situazione</a></div></Section></>; }

function LocationsPage() {
  return <><InnerHero eyebrow="Zone servite" title="Certificazione energetica sul territorio." text="Consulta i comuni serviti e apri la pagina dedicata alla tua località." icon={<MapPin />} /><Section eyebrow="Comuni" title="Scegli la tua zona."><div className="location-page-grid">{locations.map((location) => <a href={`/zone-servite/${location.slug}/`} key={location.slug}><MapPin /><span><strong>{location.name}</strong><small>Certificazione APE e sopralluogo</small></span><ArrowRight /></a>)}</div><a className="map-page-link" href={contact.maps} target="_blank" rel="noreferrer"><MapPin /> Apri su Google Maps</a></Section></>;
}

function LocalPage({ name }: { name: string }) {
  const place = locationWithPreposition(name);
  return <><InnerHero eyebrow={`APE ${place}`} title={`Certificazione energetica APE ${place}.`} text={`Servizio con sopralluogo tecnico e modellazione energetica dell’edificio per immobili situati ${place}.`} icon={<MapPin />} /><Section eyebrow="Servizio locale" title={`Un riferimento tecnico per il tuo immobile ${place}.`}><div className="inner-split"><div><p>Il servizio comprende il contatto iniziale, la verifica dei documenti, il sopralluogo e la modellazione energetica necessaria per predisporre l’attestato.</p><p>Per richiedere informazioni indica il comune, la tipologia dell’immobile e il motivo della certificazione.</p></div><ul className="check-list"><li><Check /> Contatto diretto con il tecnico</li><li><Check /> Sopralluogo sul posto</li><li><Check /> Supporto sui documenti</li><li><Check /> Modellazione energetica dell’edificio</li></ul></div></Section><ProcessSection /><DocumentsSection /><Section soft eyebrow="Altre località" title="Consulta tutte le zone servite."><div className="local-links">{locations.filter((item) => item.name !== name).slice(0, 6).map((item) => <a href={`/zone-servite/${item.slug}/`} key={item.slug}>{item.name}</a>)}</div><a className="inline-cta" href="/zone-servite/">Vedi tutti i comuni <ArrowRight /></a></Section></>;
}

function FaqPage() { return <><InnerHero eyebrow="FAQ" title="Domande frequenti sulla certificazione energetica." text="Risposte sintetiche per orientarsi prima di richiedere il servizio." icon={<ShieldCheck />} /><Section eyebrow="Le risposte" title="Cosa sapere prima di iniziare."><div className="inner-faq">{faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div></Section></>; }

function ContactPage() {
  return <><InnerHero eyebrow="Contatti" title="Parla direttamente con il tecnico." text="Indica il comune, il tipo di immobile e il motivo della richiesta per ricevere le prime informazioni utili." icon={<MessageCircle />} /><Section eyebrow="Contatto diretto" title="Scegli il canale più comodo."><div className="contact-page-grid"><a href={`tel:${contact.phoneLink}`}><Phone /><span><small>Telefono</small><strong>{contact.phoneDisplay}</strong></span></a><a href={contact.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /><span><small>Messaggio</small><strong>Apri WhatsApp</strong></span></a><a href={contact.maps} target="_blank" rel="noreferrer"><MapPin /><span><small>Posizione</small><strong>Apri Google Maps</strong></span></a></div><p className="content-note">Non è presente un modulo: il sito non raccoglie o conserva direttamente dati inseriti dagli utenti.</p></Section></>;
}

function NotFoundPage() { return <><InnerHero eyebrow="Pagina non trovata" title="La pagina richiesta non è disponibile." text="Torna alla home oppure consulta i servizi e le zone coperte." icon={<SearchCheck />} /><Section title="Continua la navigazione."><div className="local-links"><a href="/">Home</a><a href="/certificazione-energetica-ape/">Servizio APE</a><a href="/zone-servite/">Zone servite</a><a href="/contatti/">Contatti</a></div></Section></>; }

function resolveContent(pathname: string) {
  const local = locations.find((item) => pathname.replace(/\/$/, '') === `/zone-servite/${item.slug}`);
  if (local) return <LocalPage name={local.name} />;
  switch (pathname.replace(/\/$/, '') || '/') {
    case '/certificazione-energetica-ape': return <ApePage />;
    case '/consulenza-energetica': return <ConsultationPage />;
    case '/come-funziona': return <ProcessPage />;
    case '/documenti-necessari': return <DocumentsPage />;
    case '/quando-serve-ape': return <UseCasesPage />;
    case '/zone-servite': return <LocationsPage />;
    case '/faq': return <FaqPage />;
    case '/contatti': return <ContactPage />;
    default: return <NotFoundPage />;
  }
}

export default function InternalPage({ pathname }: { pathname: string }) {
  const [showNotice, setShowNotice] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
    const metadata = staticRoutes.find((route) => route.path === normalizedPath);
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');

    document.title = metadata?.title ?? 'Pagina non trovata | APE Certificazioni';
    if (description) description.content = metadata?.description ?? 'La pagina richiesta non è disponibile.';
    if (canonical) canonical.href = metadata ? `https://apecertificazioni.com${metadata.path}` : window.location.href;
    if (robots) robots.content = metadata ? 'index, follow' : 'noindex, follow';
  }, [pathname]);
  return <div className="site-shell inner-site"><PageHeader /><main>{resolveContent(pathname)}</main><ContactBar /><PageFooter />{showNotice && <aside className="technical-notice" role="region" aria-label="Informazioni sui cookie"><div className="technical-notice__icon"><ShieldCheck /></div><div><strong>Nessun cookie di profilazione</strong><p>Il sito non salva preferenze e non utilizza strumenti di tracciamento.</p></div><button type="button" onClick={() => setShowNotice(false)} aria-label="Chiudi l’avviso sui cookie"><X /></button></aside>}</div>;
}
