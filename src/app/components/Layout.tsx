import { Outlet, Link, useLocation } from "react-router";
import { Phone, Mail, MapPin, X, Menu } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { BRAND } from "../constants/brand";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoSrc from "../../imports/Screenshot_2026-06-13_121015-removebg-preview.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Escape key closes menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  // Prevent body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Elevate header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openWhatsApp = (message: string) =>
    window.open(
      `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ── Header ── */}
      <header
        className={`fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="shrink-0 focus-visible:outline-none focus-visible:ring-2 rounded">
            <ImageWithFallback src={logoSrc} alt="SwiftKlean logo" className="h-14 w-auto object-contain scale-110 origin-left" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 relative pb-1 ${
                  isActive(to)
                    ? ""
                    : "text-slate-600 hover:text-slate-900"
                }`}
                style={isActive(to) ? { color: BRAND.colors.teal } : {}}
              >
                {label}
                <span
                  className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-transform duration-200 origin-left"
                  style={{
                    backgroundColor: BRAND.colors.teal,
                    transform: isActive(to) ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <button
              onClick={() => openWhatsApp("Hi, I'd like to book a cleaning service")}
              className="hidden md:inline-flex text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{ backgroundColor: BRAND.colors.teal }}
            >
              Book Now
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {/* Animated icon swap */}
              <span className={`transition-all duration-200 ${menuOpen ? "opacity-0 scale-75 absolute" : "opacity-100 scale-100"}`}>
                <Menu className="w-5 h-5" />
              </span>
              <span className={`transition-all duration-200 ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-75 absolute"}`}>
                <X className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      {/* Drawer */}
      <nav
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white z-50 flex flex-col shadow-2xl md:hidden
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <ImageWithFallback src={logoSrc} alt="SwiftKlean logo" className="h-12 w-auto object-contain" />
          <button
            onClick={closeMenu}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* Nav items */}
        <ul className="flex flex-col py-3 px-3 flex-1 gap-1">
          {NAV_LINKS.map(({ to, label }, i) => (
            <li key={to}>
              <Link
                to={to}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200
                  ${isActive(to)
                    ? "bg-slate-50"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                style={{
                  color: isActive(to) ? BRAND.colors.teal : undefined,
                  transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                }}
              >
                <span
                  className="w-6 h-0.5 rounded-full transition-all duration-200"
                  style={{ backgroundColor: isActive(to) ? BRAND.colors.teal : "#cbd5e1" }}
                />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA at bottom of drawer */}
        <div className="p-5 border-t border-gray-100">
          <button
            onClick={() => {
              closeMenu();
              openWhatsApp("Hi, I'd like to book a cleaning service");
            }}
            className="w-full text-white py-3 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{ backgroundColor: BRAND.colors.teal }}
          >
            Book Now on WhatsApp
          </button>
          <p className="text-center text-xs text-slate-400 mt-3">{BRAND.phone}</p>
        </div>
      </nav>

      {/* ── Main content ── */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <ImageWithFallback src={logoSrc} alt="SwiftKlean logo" className="h-10 w-auto object-contain brightness-0 invert" />
              </div>
              <p className="text-sm">{BRAND.tagline}</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {NAV_LINKS.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                {["Laundry Services", "Residential Cleaning", "Carpet & Sofa Cleaning", "Commercial Cleaning"].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  {BRAND.phone}
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  {BRAND.email}
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  {BRAND.address}
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
            © 2026 SwiftKlean. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ── WhatsApp floating button ── */}
      <button
        onClick={() => openWhatsApp("Hi, I'd like to know more about your services")}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 z-40"
        aria-label="Contact on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>
    </div>
  );
}
