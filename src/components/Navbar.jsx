import { Menu, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Produkt", href: "#features" },
    { label: "Vorteile", href: "#value" },
    { label: "Ablauf", href: "#how" },
    { label: "Kunden", href: "#testimonials" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center font-bold">PE</div>
            <div className="leading-tight">
              <p className="font-semibold text-gray-900">PlanExpress Pro</p>
              <p className="text-xs text-gray-500 -mt-0.5">by STR8ER</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm px-4 py-2 rounded-md shadow-sm hover:bg-black transition-colors">
              Kostenlose Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md border border-gray-200" onClick={() => setOpen(!open)} aria-label="Menü">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 bg-white border border-gray-200 rounded-md px-3 py-2">
                {item.label}
              </a>
            ))}
            <a href="#demo" className="text-sm text-white bg-gray-900 rounded-md px-3 py-2 text-center">Kostenlose Demo</a>
          </div>
        )}
      </div>
    </header>
  );
}
