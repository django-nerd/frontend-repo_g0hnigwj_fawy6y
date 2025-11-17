import { Sparkles, ArrowUpRight, BarChart3, BadgeEuro, Banknote } from "lucide-react";

export default function Value() {
  const stats = [
    { kpi: "-60%", label: "Zeit bis zum Angebot" },
    { kpi: "-45%", label: "Fehlerrate im Aufmaß" },
    { kpi: "+38%", label: "Angebotsdurchsatz" },
    { kpi: "+21 Tage", label: "schnellere Fakturierung" },
  ];

  return (
    <section id="value" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Geschwindigkeit. Präzision. Liquidität.</h2>
            <p className="mt-4 text-gray-600">
              PlanExpress Pro setzt die STR8ER-Strategie in die Praxis um: KI-Automatisierung entfernt Reibung in der Projektvorbereitung und macht Prozesse skalierbar.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><Sparkles className="h-5 w-5 text-blue-600 mt-0.5" />Intelligente Vorschläge für Positionen, Mengen und Formeln.</li>
              <li className="flex items-start gap-3"><BarChart3 className="h-5 w-5 text-blue-600 mt-0.5" />Transparente Kalkulation – nachvollziehbar und prüffähig.</li>
              <li className="flex items-start gap-3"><BadgeEuro className="h-5 w-5 text-blue-600 mt-0.5" />Bessere Marge durch weniger Nacharbeit und klare Strukturen.</li>
              <li className="flex items-start gap-3"><Banknote className="h-5 w-5 text-blue-600 mt-0.5" />Schnellere Rechnungsstellung dank durchgängiger Daten.</li>
            </ul>

            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md">
              STR8ER Key Product
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-white ring-1 ring-gray-200 p-6 text-center">
                <p className="text-3xl font-extrabold text-gray-900">{s.kpi}</p>
                <p className="text-sm text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
