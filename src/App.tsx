import { Phone, CheckCircle, FileText, Home, MessageCircle, ClipboardList } from 'lucide-react';

function App() {
  const comuni = [
    ['Colleferro', 'Palestrina', 'Valmontone'],
    ['Artena', 'Labico', 'Lariano'],
    ['Cave', 'Zagarolo', 'Genazzano'],
    ['Segni', 'Gavignano', 'Paliano'],
    ['Olevano Romano', 'Anagni', 'San Cesareo']
  ];

  const fasi = [
    {
      numero: '1',
      titolo: 'Contatto e accordo per il sopralluogo',
      descrizione: 'Chiamando o scrivendo su WhatsApp si concorda data e orario del sopralluogo. Viene fornita subito una stima dei tempi e del costo in base al tipo di immobile.'
    },
    {
      numero: '2',
      titolo: 'Raccolta dei documenti',
      descrizione: 'È necessario fornire i documenti indicati (planimetria, dati catastali, libretto impianto, ecc.). Se alcuni dati non sono disponibili, viene offerto supporto nel reperimento delle informazioni mancanti.'
    },
    {
      numero: '3',
      titolo: 'Sopralluogo tecnico',
      descrizione: 'L\'ingegnere effettua la visita diretta dell\'immobile, verifica materiali, infissi, impianti e orientamento, e rileva tutte le misure necessarie per la certificazione.'
    },
    {
      numero: '4',
      titolo: 'Elaborazione e rilascio dell\'APE',
      descrizione: 'Entro pochi giorni si riceve l\'Attestato di Prestazione Energetica completo, in formato digitale e cartaceo, con registrazione ufficiale nel catasto energetico regionale (SIAPE).'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href="https://wa.me/393384146548"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <MessageCircle size={28} />
        </a>
      </div>

      <section className="relative bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Certificazione energetica per la tua casa o per la tua attività
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-3xl">
            <p className="text-lg md:text-xl leading-relaxed">
              L'Attestato di Prestazione Energetica (APE) è obbligatorio per la vendita o la locazione di ogni immobile.
              Permette di conoscere la classe energetica e i consumi stimati della tua abitazione o del tuo locale, con valutazione eseguita da ingegnere abilitato e iscrizione nel catasto energetico regionale (SIAPE).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+393384146548"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone size={20} />
              Chiama
            </a>
            <a
              href="https://wa.me/393384146548"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-800 text-white font-semibold px-8 py-4 rounded-lg hover:bg-teal-900 transition-all duration-300 hover:scale-105 shadow-lg border-2 border-white/30"
            >
              <MessageCircle size={20} />
              Richiedi un APE
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Professionalità e precisione
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Tre motivi per scegliere un servizio tecnico serio e conforme alla normativa:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Ingegnere abilitato
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Servizio svolto da professionista iscritto all'Albo, esperto in efficienza energetica e aggiornato sulle norme UNI e linee guida nazionali.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mb-4">
                <Home className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Sopralluogo reale
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ogni APE viene redatto dopo un sopralluogo in presenza presso l'immobile.
                Nessun APE online o automatizzato: solo verifiche reali e dati certi.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Documentazione completa
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Consegna digitale e cartacea, con registrazione ufficiale nel SIAPE e documenti pronti per notaio, agenzia o annuncio immobiliare.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Quando è obbligatorio l'APE
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-emerald-500">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Compravendita</h3>
              <p className="text-gray-700">Obbligatorio da allegare all'atto notarile.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Locazione</h3>
              <p className="text-gray-700">Necessario per ogni contratto d'affitto.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-cyan-500">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Annunci immobiliari</h3>
              <p className="text-gray-700">Obbligo di indicare classe ed indice energetico.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-emerald-500">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Donazioni</h3>
              <p className="text-gray-700">Richiesto dalla normativa vigente (non successioni).</p>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg max-w-3xl mx-auto text-center">
            <p className="text-gray-800 font-semibold text-lg">
              Senza APE non puoi vendere, affittare o pubblicare annunci immobiliari.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Documenti necessari
          </h2>

          <p className="text-xl text-gray-600 mb-8 text-center">
            Per avviare la pratica, bastano pochi documenti:
          </p>

          <ul className="space-y-4">
            {[
              'Libretto impianto termico (se presente)',
              'Dati catastali e indirizzo completo dell\'immobile',
              'Planimetria catastale',
              'Documento d\'identità del proprietario o delegato'
            ].map((doc, index) => (
              <li key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700 text-lg">{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Comuni serviti
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Servizio di redazione APE disponibile nei seguenti comuni:
          </p>

          <div className="bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {comuni.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-gray-200 last:border-0">
                      {row.map((comune, colIndex) => (
                        <td key={colIndex} className="py-4 px-4 text-gray-700 text-center font-medium">
                          {comune}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-6 italic text-center">
              Servizio rapido con sopralluogo entro pochi giorni in tutti i comuni elencati.
            </p>
            <p className="text-sm text-gray-700 mt-4 text-center font-medium">
              Per comuni limitrofi alla zona non indicati nella tabella, il servizio di certificazione è comunque disponibile. Contattaci per maggiori informazioni.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Come si svolge la redazione dell'APE
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Il servizio è semplice, trasparente e sempre seguito da un ingegnere abilitato in tutte le fasi:
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {fasi.map((fase) => (
              <div key={fase.numero} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 border-l-4 border-teal-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {fase.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {fase.titolo}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {fase.descrizione}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Contatti
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone size={28} />
              <a href="tel:+393384146548" className="text-2xl md:text-3xl font-bold hover:underline">
                +39 338 4146548
              </a>
            </div>

            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
              Scrivi su WhatsApp indicando l'indirizzo dell'immobile e il motivo della richiesta
              (vendita, locazione o verifica volontaria).
              Riceverai subito le informazioni sui tempi e sui costi.
            </p>
          </div>

          <a
            href="https://wa.me/393384146548"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-semibold px-10 py-5 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
          >
            <MessageCircle size={24} />
            Scrivi su WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-8 px-6">
        <p className="text-sm md:text-base">
          Attestati di Prestazione Energetica a cura di ingegnere abilitato.
        </p>
        <p className="text-sm md:text-base mt-2">
          © 2025 – Tel. <a href="tel:+393384146548" className="hover:underline">+39 338 4146548</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
