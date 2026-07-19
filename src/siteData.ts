export const contact = {
  phoneDisplay: '+39 338 4146548',
  phoneLink: '+393384146548',
  maps: 'https://share.google/VGhUpWnTLbKQQWENU',
  whatsapp: `https://wa.me/393384146548?text=${encodeURIComponent(
    "Buongiorno, vorrei richiedere informazioni per un Attestato di Prestazione Energetica. L'immobile si trova a: ",
  )}`,
};

export type Location = { name: string; slug: string; priority?: boolean };

export function locationWithPreposition(name: string) {
  return `${name.startsWith('A') ? 'ad' : 'a'} ${name}`;
}

export const locations: Location[] = [
  { name: 'Valmontone', slug: 'valmontone', priority: true },
  { name: 'Colleferro', slug: 'colleferro', priority: true },
  { name: 'Palestrina', slug: 'palestrina', priority: true },
  { name: 'San Cesareo', slug: 'san-cesareo', priority: true },
  { name: 'Artena', slug: 'artena' },
  { name: 'Labico', slug: 'labico' },
  { name: 'Lariano', slug: 'lariano' },
  { name: 'Cave', slug: 'cave' },
  { name: 'Zagarolo', slug: 'zagarolo' },
  { name: 'Genazzano', slug: 'genazzano' },
  { name: 'Segni', slug: 'segni' },
  { name: 'Gavignano', slug: 'gavignano' },
  { name: 'Anagni', slug: 'anagni' },
  { name: 'Paliano', slug: 'paliano' },
];

export type StaticRoute = { path: string; title: string; description: string };

export const mainRoutes: StaticRoute[] = [
  { path: '/certificazione-energetica-ape/', title: 'Certificazione energetica APE | Sopralluogo tecnico', description: 'Servizio APE con sopralluogo, raccolta dati e modellazione energetica dell’edificio. Contatta direttamente un ingegnere abilitato.' },
  { path: '/consulenza-energetica/', title: 'Consulenza per il miglioramento energetico dell’immobile', description: 'Analisi e consulenza tecnica per valutare possibili interventi di miglioramento energetico in base alle caratteristiche dell’immobile.' },
  { path: '/come-funziona/', title: 'Come funziona la certificazione energetica APE', description: 'Dal primo contatto al sopralluogo e alla modellazione energetica: scopri le fasi del servizio di certificazione APE.' },
  { path: '/documenti-necessari/', title: 'Documenti necessari per la certificazione APE', description: 'I documenti utili per avviare una certificazione energetica APE e le informazioni da preparare prima del sopralluogo.' },
  { path: '/quando-serve-ape/', title: 'Quando serve l’APE | Vendita, locazione e annunci', description: 'Una guida sintetica ai principali casi in cui viene richiesto l’Attestato di Prestazione Energetica.' },
  { path: '/zone-servite/', title: 'Zone servite per la certificazione energetica APE', description: 'Servizio APE a Valmontone, Colleferro, Palestrina, San Cesareo e negli altri comuni indicati.' },
  { path: '/faq/', title: 'Domande frequenti sulla certificazione energetica APE', description: 'Risposte alle domande più frequenti su sopralluogo, documenti, modellazione energetica e richiesta di preventivo APE.' },
  { path: '/contatti/', title: 'Contatti e richiesta preventivo APE', description: 'Contatta direttamente il tecnico tramite telefono o WhatsApp per informazioni e richieste di preventivo APE.' },
];

export const localRoutes: StaticRoute[] = locations.map((location) => ({
  path: `/zone-servite/${location.slug}/`,
  title: `Certificazione energetica APE ${locationWithPreposition(location.name)}`,
  description: `Servizio di certificazione energetica APE ${locationWithPreposition(location.name)} con sopralluogo tecnico e modellazione energetica dell’edificio.`,
}));

export const staticRoutes = [...mainRoutes, ...localRoutes];
