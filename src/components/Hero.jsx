import { ArrowRight, ShieldCheck, Clock, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(600px_circle_at_100%_0%,rgba(99,102,241,0.15),transparent_40%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium ring-1 ring-blue-200">
              KI-gestützte Aufmaßsoftware • STR8ER Strategie
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Angebote & Aufmaße in Rekordzeit. Präzise. Automatisiert.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              PlanExpress Pro ist die spezialisierte SaaS-Lösung für Bau- und Handwerksbetriebe. Eliminieren Sie manuelle, fehleranfällige Schritte in der Projektvorbereitung und erstellen Sie schneller, präziser und professioneller.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-gray-900 text-white font-medium shadow hover:bg-black">
                Kostenlose Live-Demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#value" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-white text-gray-900 font-medium ring-1 ring-gray-200 hover:ring-gray-300">
                In 90 Sek. verstehen
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Feature icon={<Zap className="h-5 w-5 text-blue-600" />} title="Massive Zeitersparnis" text="Beschleunigen Sie Angebotserstellung und Projektstart um Wochen." />
              <Feature icon={<ShieldCheck className="h-5 w-5 text-blue-600" />} title="Weniger Fehler" text="KI-Logik reduziert manuelle Eingaben und Missverständnisse." />
              <Feature icon={<Clock className="h-5 w-5 text-blue-600" />} title="Schnellere Fakturierung" text="Durchgängige Prozesse beschleunigen die Liquidität." />
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl bg-white ring-1 ring-gray-200/80 shadow-sm p-4">
              <div className="h-full w-full rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 grid place-items-center text-center p-6">
                <div>
                  <p className="text-sm text-blue-700 font-medium">STR8ER Portfolio</p>
                  <h3 className="mt-2 text-2xl font-semibold text-gray-900">PlanExpress Pro</h3>
                  <p className="mt-3 text-gray-600 max-w-sm">
                    Visualisierung eines typischen Aufmaß-Workflows: Import, Struktur, Positionen, automatische Mengen & Kalkulation.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white ring-1 ring-gray-200 rounded-md shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-sm text-gray-700">KI-Automation aktiv</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-white ring-1 ring-gray-200 rounded-lg shadow p-4">
              <p className="text-sm font-medium text-gray-900">+38% Angebotsdurchsatz</p>
              <p className="text-xs text-gray-500">im Schnitt nach 8 Wochen Nutzung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-10 w-10 rounded-lg bg-white ring-1 ring-gray-200 grid place-items-center">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}
