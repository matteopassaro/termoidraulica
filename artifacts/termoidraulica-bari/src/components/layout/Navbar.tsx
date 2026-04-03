import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Servizi", path: "/servizi" },
    { name: "Preventivo", path: "/preventivo" },
    { name: "Contatti", path: "/contatti" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-accent transition-colors">
            <Droplet className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground leading-tight">
              ThermoExpert
            </h1>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider">
              Bari
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location === link.path ? "text-accent" : "text-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="tel:+390801234567"
              className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
              data-testid="link-phone-nav"
            >
              <Phone className="w-5 h-5" />
              <span>080 123 4567</span>
            </a>
            <Link href="/preventivo">
              <Button className="btn-shimmer bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-6 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/30" data-testid="btn-nav-preventivo">
                Richiedi Preventivo
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="btn-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-lg font-medium ${
                    location === link.path ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <hr className="my-2" />
          <a
            href="tel:+390801234567"
            className="flex items-center justify-center gap-2 text-primary font-bold py-3 bg-primary/10 rounded-lg"
          >
            <Phone className="w-5 h-5" />
            <span>+39 080 123 4567</span>
          </a>
          <Link href="/preventivo" onClick={() => setMobileMenuOpen(false)}>
            <Button className="btn-shimmer w-full bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg py-6 text-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/30">
              Richiedi Preventivo
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
