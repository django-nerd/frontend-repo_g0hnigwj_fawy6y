import { ListOrdered, Wand2, CheckCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <ListOrdered className="h-5 w-5 text-blue-600" />,
      title: "1. Import & Struktur",
      text: "Pläne, LV/GAEB, Skizzen oder Fotos importieren. Automatische Strukturierung in Gewerke & Positionen.",
    },
    {
      icon: <Wand2 className="h-5 w-5 text-blue-600" />,
      title: "2. KI-gestütztes Aufmaß",
      text: "Automatische Mengenermittlung, Formeln & Vorschläge. Manuelle Schritte werden minimiert.",
    },
    {
      icon: <CheckCheck className="h-5 w-5 text-blue-600" />,
      title: "3. Angebot & Export",
      text: "Prüffähige Angebote und Aufmaße exportieren – inklusive GAEB/Excel und Übergabe in die Kalkulation.",
    },
  ];

  return (
    <section id="how" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ablauf in drei klaren Schritten</h2>
          <p className="mt-3 text-gray-600">Geführt, nachvollziehbar und auf Wiederholbarkeit ausgelegt – ideal für wachstumsstarke Betriebe.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl ring-1 ring-gray-200 p-6">
              <div className="h-10 w-10 rounded-lg bg-blue-50 grid place-items-center">{s.icon}</div>
              <p className="mt-4 font-semibold text-gray-900">{s.title}</p>
              <p className="mt-1 text-sm text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
