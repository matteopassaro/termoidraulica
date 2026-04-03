import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 py-3 md:px-6 md:py-4 ${
          isScrolled ? "pt-4" : "pt-6"
        }`}
      >
        <div 
          className={`container mx-auto transition-all duration-500 ease-in-out ${
            isScrolled 
              ? "glass-panel rounded-full px-6 py-3" 
              : "bg-transparent px-2 py-2"
          } flex items-center justify-between`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-2.5 rounded-xl group-hover:scale-105 transition-transform shadow-lg shadow-primary/20">
              <Droplet className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                ThermoExpert
              </h1>
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] leading-none mt-0.5">
                Bari
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.path} className="relative">
                  <Link
                    href={link.path}
                    className={`text-[15px] font-semibold transition-colors hover:text-primary py-2 ${
                      location === link.path ? "text-primary" : "text-foreground/75"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {location === link.path && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-5 ml-4">
              <a
                href="tel:+390801234567"
                className="flex items-center gap-2.5 text-foreground hover:text-primary transition-colors group"
                data-testid="link-phone-nav"
              >
                <div className="bg-secondary p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="font-bold tracking-tight">080 123 4567</span>
              </a>
              <Link href="/preventivo">
                <Button className="btn-shimmer bg-accent hover:bg-accent text-white font-bold rounded-full px-7 h-12 shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/30" data-testid="btn-nav-preventivo">
                  Preventivo
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="btn-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-foreground" /> : <Menu className="w-7 h-7 text-foreground" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-24 px-6 pb-6 flex flex-col"
          >
            <ul className="flex flex-col gap-5 items-center w-full">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-2xl font-bold py-2 ${
                      location === link.path ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-auto space-y-4">
              <a
                href="tel:+390801234567"
                className="flex items-center justify-center gap-3 text-primary font-bold py-3 md:py-4 bg-primary/5 rounded-2xl border border-primary/10"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-lg md:text-xl">+39 080 123 4567</span>
              </a>
              <Link href="/preventivo" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold rounded-2xl h-14 text-lg md:h-16 md:text-xl shadow-lg shadow-accent/20">
                  Richiedi Preventivo
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
