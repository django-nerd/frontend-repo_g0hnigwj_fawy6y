import { Layers, Ruler, FileText, Database, Wand2, Upload, CheckCircle2 } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: <Upload className="h-5 w-5 text-blue-600" />,
      title: "Import & Struktur",
      text: "Pläne, LV/GAEB oder Skizzen importieren. Automatische Strukturierung nach Gewerken & Positionen.",
    },
    {
      icon: <Ruler className="h-5 w-5 text-blue-600" />,
      title: "Intelligentes Aufmaß",
      text: "KI-Logik erkennt Mengengerüste und schlägt Positionen, Formeln und Einheiten vor.",
    },
    {
      icon: <Wand2 className="h-5 w-5 text-blue-600" />,
      title: "Automatisierung",
      text: "Wiederkehrende Arbeitsschritte werden automatisiert – im Sinne der STR8ER-Strategie.",
    },
    {
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      title: "Angebotserstellung",
      text: "Saubere, prüffähige Angebote und Aufmaße mit einem Klick exportieren.",
    },
    {
      icon: <Database className="h-5 w-5 text-blue-600" />,
      title: "Datenbasis",
      text: "Bauteilkataloge, Vorlagen und Erfahrungswerte zentral verwalten und wiederverwenden.",
    },
    {
      icon: <Layers className="h-5 w-5 text-blue-600" />,
      title: "Integrationen",
      text: "Anbindung an GAEB, Kalkulation, ERP & Faktura für durchgängige Prozesse.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">So funktioniert PlanExpress Pro</h2>
          <p className="mt-3 text-gray-600">Vom Plan zum Angebot in wenigen, geführten Schritten – präzise und reproduzierbar.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-xl ring-1 ring-gray-200 p-5 hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-50 grid place-items-center">{it.icon}</div>
              <p className="mt-4 font-semibold text-gray-900">{it.title}</p>
              <p className="mt-1 text-sm text-gray-600">{it.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 ring-1 ring-blue-200/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <p className="text-sm text-gray-700">
              Ergebnis: Deutlich schneller, präziser und professioneller zu prüffähigen Aufmaßen und Angeboten – mit weniger Rückfragen und besserer Planbarkeit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
