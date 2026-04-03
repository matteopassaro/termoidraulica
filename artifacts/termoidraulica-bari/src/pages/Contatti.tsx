import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Contatti() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contatti</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Siamo a tua disposizione per informazioni, preventivi o interventi urgenti. 
            Contattaci tramite i canali qui sotto.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Contact Info Cards */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">I nostri recapiti</h2>
                
                <div className="grid gap-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">Telefono</h3>
                      <p className="text-muted-foreground mb-2">Per emergenze, preventivi e informazioni generali.</p>
                      <a href="tel:+390801234567" className="text-2xl font-bold text-primary hover:text-accent transition-colors block">
                        +39 080 123 4567
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground mb-2">Per invio documenti, piantine o richieste dettagliate.</p>
                      <a href="mailto:info@thermoexpertbari.it" className="text-lg font-bold text-primary hover:text-accent transition-colors">
                        info@thermoexpertbari.it
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">Sede Operativa</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Via Sparano da Bari, 100<br />
                        70121 Bari (BA)<br />
                        Puglia, Italia
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="w-full">
                      <h3 className="font-bold text-lg text-foreground mb-3">Orari Uffici</h3>
                      <ul className="space-y-2 w-full text-muted-foreground">
                        <li className="flex justify-between border-b border-border pb-2">
                          <span>Lunedì - Venerdì</span>
                          <span className="font-medium text-foreground">08:00 - 18:00</span>
                        </li>
                        <li className="flex justify-between border-b border-border pb-2">
                          <span>Sabato</span>
                          <span className="font-medium text-foreground">08:00 - 13:00</span>
                        </li>
                        <li className="flex justify-between pt-1">
                          <span>Domenica</span>
                          <span className="font-medium text-red-500">Chiuso (Solo Emergenze)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: CTA & Map */}
            <div className="lg:w-1/2 flex flex-col gap-8">
              
              <div className="bg-primary text-white p-8 md:p-10 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Vuoi un preventivo scritto?</h3>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Per fornirti una stima accurata, abbiamo bisogno di alcune informazioni. Compila il nostro modulo dettagliato e ti risponderemo in meno di 24 ore.
                </p>
                <Link href="/preventivo">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-14 text-lg rounded-xl shadow-lg shadow-accent/20">
                    Vai al modulo preventivo <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Map Placeholder */}
              <div className="bg-secondary rounded-3xl overflow-hidden shadow-inner border border-border flex-1 min-h-[300px] relative flex items-center justify-center group">
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
                <div className="relative z-10 text-center bg-white p-6 rounded-2xl shadow-xl mx-4">
                  <MapPin className="w-10 h-10 text-accent mx-auto mb-3" />
                  <p className="font-bold text-primary text-lg">ThermoExpert Bari</p>
                  <p className="text-sm text-muted-foreground mt-1">Mappa interattiva</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
