import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Wrench, 
  Wind, 
  Droplets, 
  ThermometerSun, 
  Star, 
  ShieldCheck, 
  Clock, 
  Euro, 
  MapPin,
  ArrowRight,
  PhoneCall
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  tipoCaldaia: z.string().min(1, "Seleziona un tipo di caldaia"),
  metratura: z.string().min(1, "Inserisci la metratura"),
  consumi: z.string().min(1, "Inserisci i consumi attuali"),
  email: z.string().email("Email non valida"),
});

export default function Home() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tipoCaldaia: "",
      metratura: "",
      consumi: "",
      email: "",
    },
  });

  function onSubmit() {
    toast({
      title: "Richiesta inviata!",
      description: "Ti contatteremo a breve con la tua stima di risparmio.",
    });
    form.reset();
  }

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7 }
  };

  return (
    <Layout>
      {/* 1. Hero Section — Premium Glassmorphism Look */}
      <section className="relative overflow-hidden bg-primary text-white pt-28 pb-24 md:pt-36 md:pb-48">
        {/* Dynamic mesh gradient background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50 transform translate-x-1/3 -translate-y-1/4 animate-pulse duration-[10000ms]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen opacity-50 transform -translate-x-1/4 translate-y-1/4" />
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT column — headline & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2.5 bg-white/10 px-4 py-2 rounded-full mb-8 border border-white/20 backdrop-blur-md shadow-xl shadow-black/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide text-white/90">Intervento 24/7 a Bari e Provincia</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] mb-5 md:mb-6 tracking-tight">
                Il tuo comfort,<br />
                <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                  la nostra priorità.
                </span>
              </h1>

              <p className="text-base md:text-xl text-white/80 mb-8 md:mb-10 leading-relaxed max-w-lg font-medium">
                Sistemi idraulici all'avanguardia, riscaldamento efficiente e climatizzazione perfetta. Un servizio premium per la tua casa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+390801234567" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="btn-shimmer w-full sm:w-auto bg-accent hover:bg-accent/90 text-white rounded-2xl text-lg h-14 px-8 shadow-xl shadow-accent/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-accent/40"
                  >
                    <PhoneCall className="w-5 h-5 mr-2" />
                    Emergenza H24
                  </Button>
                </a>
                <Link href="/preventivo" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white hover:text-primary rounded-2xl text-lg h-14 px-8 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] shadow-lg"
                  >
                    Richiedi Preventivo
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT column — image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative w-full max-w-[500px]">
                {/* Floating glass panel behind */}
                <div className="absolute -inset-4 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-2xl transform rotate-3" />
                
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=900&auto=format&fit=crop"
                  alt="Tecnico termoidraulico certificato al lavoro"
                  className="relative z-10 w-full h-[520px] object-cover rounded-[2.5rem] shadow-2xl border border-white/20"
                />
                
                {/* Floating specs */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-6 -left-4 md:-left-12 z-20 glass-panel rounded-2xl p-3 md:p-4 flex items-center gap-3 md:gap-4 scale-90 md:scale-100"
                >
                  <div className="bg-primary/10 rounded-xl p-3">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60 font-bold uppercase tracking-wider">Certificazione</p>
                    <p className="text-lg font-bold text-foreground leading-none mt-1">F-Gas Autorizzata</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="absolute -top-6 -right-6 z-20 glass-panel rounded-2xl p-4 flex items-center gap-3"
                >
                  <div className="flex bg-yellow-50 px-2 py-1 rounded-lg">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm font-extrabold text-foreground">5.0 / 5</span>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Floating Quick Services Overlay */}
      <section className="relative z-20 -mt-12 md:-mt-20 container mx-auto px-4 md:px-6">
        <div className="glass-card rounded-[2rem] p-6 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { icon: ThermometerSun, title: "Riscaldamento", desc: "Alta Efficienza", color: "text-red-500" },
              { icon: Wind, title: "Climatizzazione", desc: "Aria Pura", color: "text-blue-500" },
              { icon: Wrench, title: "Idraulica", desc: "Pronto Intervento", color: "text-gray-700" },
              { icon: Droplets, title: "Ristrutturazione", desc: "Bagni Premium", color: "text-cyan-500" }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (0.1 * i), duration: 0.5 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="bg-secondary/50 p-5 rounded-[1.5rem] mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:-translate-y-2">
                  <service.icon className={`w-8 h-8 ${service.color} group-hover:text-white transition-colors`} />
                </div>
                <h3 className="font-extrabold text-foreground mb-1 text-sm md:text-base">{service.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Showcase */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-extrabold text-accent uppercase tracking-widest mb-3 md:mb-4">Competenza Totale</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                Diamo valore ai<br />spazi che vivi.
              </h2>
            </div>
            <Link href="/servizi" className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-auto border-secondary text-foreground hover:bg-secondary rounded-xl md:rounded-full h-14 px-8 text-base font-bold transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 shrink-0">
                Esplora Servizi <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: ThermometerSun,
                title: "Impianti Termici",
                desc: "Progettazione e installazione di caldaie a condensazione ad alta efficienza. Più comfort, meno consumi.",
                link: "/servizi"
              },
              {
                icon: Wind,
                title: "Sistemi VRF / Split",
                desc: "Climatizzazione intelligente per qualsiasi ambiente. Controlla il clima di casa tua direttamente dallo smartphone.",
                link: "/servizi"
              },
              {
                icon: Wrench,
                title: "Emergenze H24",
                desc: "Perdite d'acqua? Disostruzioni? La nostra squadra interviene tempestivamente in ogni quartiere di Bari.",
                link: "/servizi"
              },
              {
                icon: Droplets,
                title: "Bagni di Lusso",
                desc: "Trasformiamo il tuo vecchio bagno in una Spa moderna. Servizio chiavi in mano dalla demolizione alle finiture.",
                link: "/servizi"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: i * 0.1 }}
                className="group relative bg-background border border-border/50 rounded-[2rem] p-8 md:p-10 hover:bg-secondary/30 transition-colors duration-500"
              >
                <div className="bg-white shadow-md shadow-black/5 w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-primary/20 group-hover:shadow-xl">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-4 leading-tight">{service.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed mb-8">{service.desc}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase transition-all group-hover:gap-3"
                >
                  Scopri di più <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <span className="inline-block text-sm font-extrabold text-accent uppercase tracking-widest mb-4">ThermoExpert Edge</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">Perché noi?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main Feature */}
            <motion.div {...fadeIn} className="md:col-span-2 bg-primary rounded-[2.5rem] p-10 md:p-14 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <Euro className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3 md:mb-4">Trasparenza al 100%</h3>
                  <p className="text-white/80 text-base md:text-lg max-w-md font-medium leading-relaxed mb-6 md:mb-8">Nessuna sorpresa, mai. Ti forniamo un preventivo chiaro e dettagliato prima ancora di aprire la cassetta degli attrezzi.</p>
                </div>
                <div className="mt-8 flex gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                    <p className="text-3xl font-extrabold text-white mb-1">0€</p>
                    <p className="text-sm font-medium text-white/70">Costi Nascosti</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-border flex flex-col justify-between">
              <div>
                <div className="bg-accent/10 w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground mb-3">Siamo Veloci</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">Intervento rapido a casa tua. A Bari garantiamo l'arrivo entro le 2 ore lavorative per casi critici.</p>
              </div>
              <p className="text-5xl font-black text-primary mt-8">2h</p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-border">
              <div className="bg-green-100 w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-3">Garanzia e Sicurezza</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">Solo ricambi originali e materiali top di gamma, con garanzia estesa su tutte le nostre installazioni.</p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="md:col-span-2 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center rounded-[2.5rem] p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-foreground/80 group-hover:bg-foreground/70 transition-colors duration-500" />
              <div className="relative z-10 flex flex-col h-full justify-center lg:pl-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">"Professionisti veri."</h3>
                <p className="text-white/80 text-base md:text-lg font-medium italic max-w-lg">In un'ora hanno sistemato un danno che altri idraulici non riuscivano a risolvere da mesi. Puliti, educati e trasparenti nei costi.</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center font-bold text-lg text-primary">AL</div>
                  <div>
                    <p className="text-white font-bold">Andrea L.</p>
                    <p className="text-white/60 text-sm">Bari Poggiofranco</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elegant Lead form */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute -left-[20%] top-0 w-[50%] h-full bg-secondary/50 transform -skew-x-12 hidden lg:block" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="glass-card rounded-[3rem] overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto shadow-2xl">
            <div className="lg:w-5/12 bg-primary p-12 md:p-16 flex flex-col justify-center text-white">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Risparmia con una nuova caldaia.
              </h2>
              <p className="text-white/80 text-lg mb-10 font-medium">
                Scopri subito quanto puoi risparmiare sulle tue bollette. Effettuiamo un sopralluogo gratuito per proporti la migliore soluzione.
              </p>
              <div className="space-y-6">
                {['Ecobonus e detrazioni fiscali', 'Installazione Rapida', 'Rateizzazioni disponibili'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-[1rem]">
                      <Star className="w-5 h-5 text-accent fill-accent" />
                    </div>
                    <span className="font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-7/12 bg-white p-10 md:p-16">
              <h3 className="text-2xl font-extrabold text-foreground mb-8">Ottieni una stima gratuita</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="tipoCaldaia"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-bold">La tua caldaia attuale</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 rounded-2xl bg-secondary/30 border-transparent focus:border-primary focus:ring-primary/20 text-base">
                              <SelectValue placeholder="Seleziona..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="tradizionale">Tradizionale (Oltre 10 anni)</SelectItem>
                            <SelectItem value="condensazione_vecchia">A condensazione (Oltre 5 anni)</SelectItem>
                            <SelectItem value="non_so">Non lo so</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="metratura"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-bold">Metratura casa (mq)</FormLabel>
                          <FormControl>
                            <Input placeholder="es. 100" className="h-14 rounded-2xl bg-secondary/30 border-transparent focus:border-primary focus:ring-primary/20 text-base px-4" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="consumi"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-bold">Consumi gas annui</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 rounded-2xl bg-secondary/30 border-transparent focus:border-primary focus:ring-primary/20 text-base">
                                <SelectValue placeholder="Seleziona..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="bassi">Meno di 500€/anno</SelectItem>
                              <SelectItem value="medi">Tra 500€ e 1000€/anno</SelectItem>
                              <SelectItem value="alti">Più di 1000€/anno</SelectItem>
                              <SelectItem value="non_so">Non lo so</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-bold">La tua Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="tua@email.it" className="h-14 rounded-2xl bg-secondary/30 border-transparent focus:border-primary focus:ring-primary/20 text-base px-4" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="btn-shimmer mt-4 w-full bg-accent hover:bg-accent/90 h-16 text-xl font-extrabold shadow-xl shadow-accent/20 rounded-2xl transition-all duration-300 hover:scale-[1.02]">
                    Richiedi Stima Gratuita
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <MapPin className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Operiamo a Bari e Provincia</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 font-medium">Intervento garantito in giornata su tutto il territorio cittadino.</p>
          <Link href="/contatti">
            <Button className="bg-white text-foreground hover:bg-secondary rounded-2xl h-14 px-8 text-lg font-bold transition-all duration-300 hover:scale-105">
              Contattaci Ora
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
