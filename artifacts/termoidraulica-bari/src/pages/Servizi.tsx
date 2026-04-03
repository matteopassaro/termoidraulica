import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Wrench, 
  Wind, 
  Droplets, 
  ThermometerSun, 
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Bath
} from "lucide-react";

export default function Servizi() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const services = [
    {
      id: "caldaie",
      icon: Flame,
      title: "Caldaie e Riscaldamento",
      description: "Installazione, manutenzione e riparazione di caldaie a condensazione, scaldabagni e sistemi di riscaldamento completi.",
      features: [
        "Sostituzione vecchia caldaia in giornata",
        "Bollino blu e prova fumi",
        "Lavaggio chimico impianto termico",
        "Installazione valvole termostatiche",
        "Assistenza multimarca"
      ],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070"
    },
    {
      id: "climatizzazione",
      icon: Wind,
      title: "Climatizzazione",
      description: "Progettiamo e installiamo sistemi di climatizzazione efficienti per farti godere l'estate barese al fresco.",
      features: [
        "Installazione split e multi-split",
        "Ricarica gas refrigerante (Certificazione F-Gas)",
        "Sanificazione filtri e unità interne",
        "Sistemi canalizzati per uffici",
        "Pompe di calore ad alta efficienza"
      ],
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069",
      reverse: true
    },
    {
      id: "idraulica",
      icon: Wrench,
      title: "Idraulica Generale",
      description: "Pronto intervento e lavori idraulici per ogni esigenza, dalle piccole perdite agli impianti completi.",
      features: [
        "Ricerca e riparazione perdite occulte",
        "Disostruzione tubature e scarichi",
        "Sostituzione rubinetteria e sanitari",
        "Installazione depuratori e addolcitori acqua",
        "Allacciamento cucine e lavatrici"
      ],
      image: "https://images.unsplash.com/photo-1607472586893-edb57cb31414?q=80&w=1974"
    },
    {
      id: "ristrutturazioni",
      icon: Bath,
      title: "Ristrutturazione Bagno",
      description: "Rinnoviamo il tuo bagno chiavi in mano. Gestiamo noi tutte le fasi del lavoro, dall'idraulica alle finiture.",
      features: [
        "Rifacimento completo impianto idrico-fognario",
        "Trasformazione vasca in doccia",
        "Posa in opera sanitari sospesi o filo muro",
        "Impermeabilizzazioni",
        "Gestione macerie e smaltimento"
      ],
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974",
      reverse: true
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">I Nostri Servizi</h1>
          <p className="text-xl text-white/80 font-light">
            Competenza tecnica, materiali di prima scelta e precisione artigianale per ogni intervento a casa tua.
          </p>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="bg-secondary py-6 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-foreground font-medium text-sm md:text-base">
            <span className="flex items-center gap-2"><ShieldCheck className="text-accent w-5 h-5" /> Tecnici Certificati</span>
            <span className="flex items-center gap-2"><ShieldCheck className="text-accent w-5 h-5" /> Preventivi Gratuiti</span>
            <span className="flex items-center gap-2"><ShieldCheck className="text-accent w-5 h-5" /> Garanzia sui Lavori</span>
          </div>
        </div>
      </div>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              {...fadeIn}
              className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Floating badge */}
                  <div className={`absolute bottom-6 ${service.reverse ? 'left-6' : 'right-6'} bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3`}>
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-foreground">ThermoExpert</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <div className="inline-flex items-center gap-2 text-primary font-bold mb-4 bg-primary/5 px-4 py-2 rounded-full">
                  <service.icon className="w-5 h-5" />
                  <span>Servizio Specializzato</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={`/preventivo?servizio=${service.id}`}>
                  <Button className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full h-14 px-8 text-lg shadow-lg shadow-accent/20">
                    Richiedi preventivo <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-24 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Non trovi quello che cerchi?</h2>
          <p className="text-xl text-white/80 mb-10 font-light">
            Eseguiamo ogni tipo di intervento termoidraulico. Chiamaci per spiegare il tuo problema e troveremo la soluzione migliore.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+390801234567">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 rounded-full h-14 px-10 text-lg font-bold">
                Chiama ora: 080 123 4567
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
