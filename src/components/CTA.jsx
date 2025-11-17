import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="demo" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Kostenlose Live-Demo anfragen</h2>
        <p className="mt-3 text-gray-600">Erleben Sie PlanExpress Pro im Einsatz – auf Ihre Prozesse abgestimmt.</p>

        <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <div className="relative flex-1 max-w-md">
            <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Geschäftliche E-Mail"
              className="w-full pl-10 pr-4 py-3 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700">
            Anfragen
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>

        {sent && (
          <p className="mt-4 text-sm text-emerald-700 bg-emerald-50 rounded-md inline-block px-3 py-2">
            Danke! Wir melden uns in Kürze mit einem Terminvorschlag.
          </p>
        )}
      </div>
    </section>
  );
}
