import { useState } from "react";

const navItems = [
  { href: "#about", label: "Quiénes Somos" },
  { href: "#programs", label: "Programas" },
  { href: "#impact", label: "Impacto" },
  { href: "#help", label: "Cómo Ayudar" },
  { href: "#contact", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-4 md:py-6 relative z-30 bg-white">
      <div className="flex items-center gap-2">
        <span className="font-bold text-base md:text-xl leading-tight">
          Asociación
          <br />
          Jesucristo
          <br />
          es mi Casa
        </span>
      </div>
      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <a href={item.href} className="hover:underline" key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>
      {/* Mobile */}
      <div className="md:hidden relative z-30">
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          className="p-2"
        >
          <svg
            className="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Overlay */}
        {open && (
          <div>
            <div
              className="fixed inset-0 bg-black/10 backdrop-blur-sm z-20"
              onClick={() => setOpen(false)}
            ></div>
            <nav className="fixed top-4 left-2 right-2 rounded-2xl bg-white/90 shadow-xl z-30 flex flex-col divide-y divide-gray-200 overflow-hidden animate-fade-in">
              {/* Close (X) */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="absolute top-3 right-3 text-3xl text-gray-500 hover:text-purple-600"
              >
                &times;
              </button>
              {navItems.map((item) => (
                <a
                  href={item.href}
                  className="py-4 px-6 text-base text-gray-800 hover:bg-purple-50 transition font-medium"
                  key={item.label}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
