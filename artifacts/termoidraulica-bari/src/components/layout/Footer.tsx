import { Link } from "wouter";
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Droplet } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Droplet className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white leading-tight">
                  ThermoExpert
                </h2>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                  Bari
                </p>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Il punto di riferimento per la termoidraulica a Bari e provincia. Interventi rapidi, tecnici certificati e soluzioni all'avanguardia per il comfort della tua casa o azienda.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/80">Via Sparano da Bari, 100<br />70121 Bari BA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+390801234567" className="text-white/80 hover:text-accent transition-colors">
                  +39 080 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@thermoexpertbari.it" className="text-white/80 hover:text-accent transition-colors">
                  info@thermoexpertbari.it
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Link Rapidi</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/servizi" className="text-white/80 hover:text-accent transition-colors">I Nostri Servizi</Link>
              </li>
              <li>
                <Link href="/preventivo" className="text-white/80 hover:text-accent transition-colors">Richiedi Preventivo</Link>
              </li>
              <li>
                <Link href="/contatti" className="text-white/80 hover:text-accent transition-colors">Contatti</Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Orari di Apertura</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span>Lun - Ven: 8:00 - 18:00</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span>Sab: 8:00 - 13:00</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-red-400 shrink-0" />
                <span>Dom: Chiuso (Solo Emergenze)</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-sm font-semibold text-accent mb-1">Pronto Intervento H24</p>
              <p className="text-sm text-white/70">Siamo disponibili per le emergenze in tutta la provincia.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} ThermoExpert Bari. Tutti i diritti riservati.</p>
          <p>P.IVA: 01234567890 | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
}
