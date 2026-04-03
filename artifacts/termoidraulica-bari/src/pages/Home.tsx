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

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Richiesta inviata!",
      description: "Ti contatteremo a breve con la tua stima di risparmio.",
    });
    form.reset();
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      {/* 1. Hero Section — Two-column layout */}
      <section className="relative overflow-hidden bg-[hsl(214,89%,20%)] text-white pt-20 pb-32 md:pt-28 md:pb-40">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(214,89%,20%)] via-[hsl(214,89%,25%)] to-[hsl(200,89%,18%)]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* LEFT column — headline & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Badge with pulsing green dot */}
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-7 border border-white/20 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide">Disponibile ora a Bari</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                  Il Comfort<br />di Casa Tua,
                </span>
                <br />
                <span className="text-white">Senza Pensieri.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-lg font-light">
                Esperti in idraulica, riscaldamento e condizionamento a Bari e provincia.
                Servizio rapido, pulito e garantito — dalla periferia al centro.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+390801234567" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    data-testid="button-pronto-intervento"
                    className="btn-shimmer w-full sm:w-auto bg-accent hover:bg-accent/90 text-white rounded-full text-lg h-14 px-8 shadow-xl shadow-accent/30 transition-all duration-200 hover:scale-105 hover:shadow-2xl"
                  >
                    <PhoneCall className="w-5 h-5 mr-2" />
                    Pronto Intervento
                  </Button>
                </a>
                <Link href="/preventivo" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    data-testid="button-richiedi-preventivo-hero"
                    className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary rounded-full text-lg h-14 px-8 backdrop-blur-sm transition-all duration-200 hover:scale-105"
                  >
                    Richiedi Preventivo
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT column — image */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="hidden md:flex justify-center items-center"
            >
              <div className="relative w-full max-w-md">
                {/* Decorative glow behind image */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/30 to-blue-500/20 blur-3xl scale-110" />
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=900&auto=format&fit=crop"
                  alt="Tecnico termoidraulico certificato al lavoro"
                  data-testid="img-hero-technician"
                  className="relative z-10 w-full h-[480px] object-cover rounded-[2.5rem] shadow-2xl shadow-black/40 border border-white/10"
                />
                {/* Floating stats pill */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -bottom-5 -left-5 z-20 bg-white rounded-2xl shadow-xl px-5 py-3.5 flex items-center gap-3"
                >
                  <div className="bg-accent/10 rounded-xl p-2">
                    <ShieldCheck className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Clienti soddisfatti</p>
                    <p className="text-lg font-extrabold text-primary leading-none">500+ interventi</p>
                  </div>
                </motion.div>
                {/* Floating badge top right */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.5 }}
                  className="absolute -top-4 -right-4 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5"
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-800">5.0 Google</span>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Quick Services Bar */}
      <section className="relative z-20 -mt-16 container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-xl shadow-primary/5 p-6 md:p-10 border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: ThermometerSun, title: "Caldaie", desc: "Installazione e Manutenzione" },
              { icon: Wind, title: "Climatizzatori", desc: "Sistemi a pompa di calore" },
              { icon: Wrench, title: "Riparazioni", desc: "Interventi idraulici veloci" },
              { icon: Droplets, title: "Ristrutturazione", desc: "Rifacimento bagno completo" }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="bg-secondary p-4 rounded-2xl mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground hidden sm:block">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Social Proof */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            {...fadeIn}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left"
          >
            <div className="flex flex-col items-center md:items-start">
              <div className="flex gap-1 text-accent mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <p className="text-lg font-bold text-foreground">Recensioni 5 Stelle su Google</p>
              <p className="text-muted-foreground">Scelti da oltre 500 famiglie a Bari</p>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-border"></div>
            
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-xs font-bold overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Cliente" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold">
                +500
              </div>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-border"></div>

            <div className="flex items-center gap-3">
              <div className="bg-green-100 text-green-700 p-3 rounded-full">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">Azienda Certificata</p>
                <p className="text-sm text-muted-foreground">F-Gas e conformità impianti</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Punti di Forza */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perché scegliere ThermoExpert?
            </h2>
            <p className="text-lg text-muted-foreground">
              Non siamo il solito idraulico. Uniamo l'artigianalità barese alle tecnologie più moderne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Euro, title: "Trasparenza Prezzi", desc: "Nessuna sorpresa. Preventivi chiari e dettagliati prima di iniziare i lavori." },
              { icon: Clock, title: "Intervento in 2 ore", desc: "Per le emergenze, garantiamo l'arrivo di un tecnico entro 2 ore dalla chiamata." },
              { icon: ShieldCheck, title: "Tecnici Certificati", desc: "Personale costantemente aggiornato e in possesso dei patentini F-Gas." },
              { icon: Star, title: "Garanzia Lavori", desc: "Tutti i nostri interventi e i materiali installati sono coperti da garanzia." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 text-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Services Showcase */}
      <section className="py-24 bg-[hsl(214,20%,97%)]">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block text-sm font-bold text-accent uppercase tracking-widest mb-3">I nostri servizi</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tutto ciò di cui hai bisogno,<br className="hidden md:block" /> in un'unica azienda
              </h2>
              <p className="text-lg text-muted-foreground">
                Copriamo ogni esigenza per la tua casa o azienda a Bari e provincia, con personale qualificato e attrezzature all'avanguardia.
              </p>
            </div>
            <Link href="/servizi">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-200 hover:scale-105 shrink-0">
                Vedi tutti i servizi <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Service Cards — 2×2 on md, 4-col on xl */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: ThermometerSun,
                color: "bg-blue-50 text-blue-600",
                iconBg: "bg-blue-100",
                accentLine: "bg-blue-500",
                title: "Caldaie e Riscaldamento",
                desc: "Installazione, manutenzione e bollino blu per caldaie multimarca a condensazione. Sostituiamo la tua vecchia caldaia in giornata.",
                tag: "Risparmio energetico",
                link: "/servizi"
              },
              {
                icon: Wind,
                color: "bg-cyan-50 text-cyan-600",
                iconBg: "bg-cyan-100",
                accentLine: "bg-cyan-500",
                title: "Climatizzazione",
                desc: "Installiamo climatizzatori per ogni ambiente. Certificati F-Gas per ricarica gas refrigerante e pompe di calore ad alta efficienza.",
                tag: "F-Gas Certificati",
                link: "/servizi"
              },
              {
                icon: Wrench,
                color: "bg-blue-50 text-blue-700",
                iconBg: "bg-blue-100",
                accentLine: "bg-blue-700",
                title: "Pronto Intervento",
                desc: "Perdite, disostruzioni, allagamenti — interveniamo entro 2 ore su tutto il territorio barese, da Carbonara a Poggiofranco.",
                tag: "H24 Emergenze",
                link: "/servizi"
              },
              {
                icon: Droplets,
                color: "bg-sky-50 text-sky-600",
                iconBg: "bg-sky-100",
                accentLine: "bg-sky-500",
                title: "Ristrutturazione Bagno",
                desc: "Rifacimento completo chiavi in mano. Dalla demolizione alle finiture, gestiamo ogni fase del tuo nuovo bagno a Bari.",
                tag: "Chiavi in mano",
                link: "/servizi"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.5, ease: "easeOut" }}
                className="group bg-white border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Accent top line */}
                <div className={`w-10 h-1 rounded-full mb-6 ${service.accentLine}`} />

                {/* Icon */}
                <div className={`${service.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-10 h-10 ${service.color.split(' ')[1]}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1 mb-6">{service.desc}</p>

                {/* Footer row */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1 text-primary font-bold text-sm hover:text-accent transition-colors group-hover:gap-2"
                    data-testid={`link-service-${i}`}
                  >
                    Scopri <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5b. Perché Sceglierci — Bento Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-sm font-bold text-accent uppercase tracking-widest mb-3">I numeri parlano</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Perché sceglierci</h2>
            <p className="text-lg text-muted-foreground">
              Oltre 15 anni a servizio delle famiglie e delle imprese di Bari. La fiducia si costruisce un intervento alla volta.
            </p>
          </div>

          {/* Bento Grid — 3 cols desktop, stacked mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">

            {/* TILE 1 — Google Reviews (col-span-2, tall) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="md:col-span-2 relative bg-[hsl(214,89%,22%)] rounded-3xl p-8 md:p-10 overflow-hidden flex flex-col justify-between min-h-[280px]"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400/10 rounded-full translate-y-1/3 -translate-x-1/4" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="ml-2 text-white/80 font-semibold text-sm self-center">5.0 su Google</span>
                </div>

                <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-6 max-w-lg">
                  "Tecnici puntuali, professionali e prezzi onesti. In meno di 2 ore hanno risolto un problema che avevo da settimane."
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">MR</div>
                  <div>
                    <p className="text-white font-semibold text-sm">Marco Russo</p>
                    <p className="text-white/60 text-xs">Poggiofranco, Bari · Google Review</p>
                  </div>
                </div>
              </div>

              {/* Big stat */}
              <div className="relative z-10 mt-8 pt-6 border-t border-white/15 flex items-end justify-between">
                <div>
                  <p className="text-5xl md:text-6xl font-extrabold text-white leading-none">500+</p>
                  <p className="text-white/70 font-medium mt-1">Recensioni verificate</p>
                </div>
                <div className="bg-white/10 rounded-2xl px-4 py-2 border border-white/20">
                  <p className="text-white/60 text-xs mb-0.5">Media voti</p>
                  <p className="text-white font-bold text-xl">4.9 / 5</p>
                </div>
              </div>
            </motion.div>

            {/* TILE 2 — Anni di esperienza (col-span-1, tall) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 min-h-[280px]"
            >
              <div>
                <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7 text-blue-600" />
                </div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Fondata nel 2009</p>
                <p className="text-foreground text-lg font-medium leading-snug">Esperienza maturata su migliaia di abitazioni e uffici a Bari e provincia.</p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-7xl font-extrabold text-primary leading-none">15+</p>
                <p className="text-muted-foreground font-semibold mt-1">Anni di esperienza</p>
              </div>
            </motion.div>

            {/* TILE 3 — Velocità di intervento (col-span-1) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
              className="bg-accent rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 min-h-[220px] overflow-hidden relative"
            >
              <div className="absolute bottom-0 right-0 w-36 h-36 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
              <div className="relative z-10">
                <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <p className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-2">Tempo di risposta</p>
                <p className="text-6xl font-extrabold text-white leading-none">2h</p>
                <p className="text-white/80 font-medium mt-2">Intervento garantito entro 2 ore dall'emergenza, 7 giorni su 7.</p>
              </div>
            </motion.div>

            {/* TILE 4 — Tecnici Certificati (col-span-1) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 min-h-[220px]"
            >
              <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-5">
                <Euro className="w-7 h-7 text-green-600" />
              </div>
              <div>
                <p className="text-foreground font-bold text-xl mb-2">Prezzi trasparenti</p>
                <p className="text-muted-foreground text-sm leading-relaxed">Nessuna sorpresa in bolletta. Preventivo dettagliato prima di iniziare qualsiasi lavoro.</p>
              </div>
              <div className="mt-5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-green-600">Preventivo gratuito</span>
              </div>
            </motion.div>

            {/* TILE 5 — CTA tile (col-span-1) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
              className="bg-[hsl(214,89%,18%)] rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 min-h-[220px] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent" />
              <div className="relative z-10">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">Pronto a iniziare?</p>
                <p className="text-white text-2xl font-bold leading-snug mb-6">Chiama adesso o richiedi un preventivo gratuito.</p>
                <a href="tel:+390801234567">
                  <Button className="btn-shimmer w-full bg-accent hover:bg-accent/90 text-white font-bold rounded-2xl h-12 transition-all duration-200 hover:scale-105">
                    <PhoneCall className="w-4 h-4 mr-2" /> 080 123 4567
                  </Button>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. Lead Magnet Form (Calcola Risparmio) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069')] bg-cover opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Calcola il risparmio con la tua nuova caldaia
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Sapevi che una caldaia a condensazione moderna può farti risparmiare fino al 30% sulla bolletta del gas? Scopri quanto potresti risparmiare in base alla tua casa.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Sopralluogo gratuito a Bari', 'Pratiche Ecobonus incluse', 'Installazione in giornata'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-accent/20 p-1 rounded-full text-accent">
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-white p-10 md:p-16">
              <h3 className="text-2xl font-bold text-foreground mb-6">Ricevi la tua stima gratuita</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="tipoCaldaia"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo di caldaia attuale</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 border-border focus:ring-primary">
                              <SelectValue placeholder="Seleziona tipo..." />
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
                          <FormLabel>Metratura Casa (mq)</FormLabel>
                          <FormControl>
                            <Input placeholder="es. 100" className="h-12 border-border focus:ring-primary" {...field} />
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
                          <FormLabel>Consumi Attuali (Gas)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 border-border focus:ring-primary">
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="tua@email.it" className="h-12 border-border focus:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="btn-shimmer w-full bg-accent hover:bg-accent/90 h-14 text-lg font-bold shadow-lg shadow-accent/20 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl" data-testid="btn-calcola-risparmio">
                    Calcola il mio risparmio
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Nessun impegno. Riceverai solo la stima via email.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cosa dicono i Baresi di noi
            </h2>
            <p className="text-lg text-muted-foreground">
              La soddisfazione dei nostri clienti è la nostra migliore garanzia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Nicola L.",
                area: "Poggiofranco",
                text: "Tubo rotto a mezzanotte del sabato. In un'ora erano a casa mia e hanno risolto il problema senza distruggere mezzo bagno. Professionalità assoluta che a Bari è rara da trovare.",
              },
              {
                name: "Maria C.",
                area: "Japigia",
                text: "Ho sostituito la vecchia caldaia con loro. Preventivo rispettato al centesimo, lavoro pulitissimo e mi hanno anche seguito per le pratiche della detrazione. Consigliatissimi!",
              },
              {
                name: "Francesco D.",
                area: "Torre a Mare",
                text: "Installazione di tre climatizzatori in pieno luglio. I ragazzi sono stati educati, veloci e hanno lasciato le stanze più pulite di come le hanno trovate. Prezzo onesto per la qualità offerta."
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border"
              >
                <div className="flex text-accent mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-foreground/80 mb-8 italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.area}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Coverage Area */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div {...fadeIn}>
                <div className="inline-flex items-center gap-2 text-primary font-bold mb-4">
                  <MapPin className="w-5 h-5" />
                  <span>Sempre vicini a te</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Serviamo tutto il Barese, <br/>da nord a sud.
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  La nostra sede in pieno centro ci permette di raggiungere rapidamente ogni quartiere di Bari e i comuni limitrofi. I nostri furgoni officina sono sempre pronti a partire.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <ul className="space-y-3 font-medium text-foreground/80">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Poggiofranco e Carrassi</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Japigia e Torre a Mare</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> San Pasquale</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Centro Murat e Madonnella</li>
                  </ul>
                  <ul className="space-y-3 font-medium text-foreground/80">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Carbonara e Ceglie</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Palese e Santo Spirito</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> San Paolo</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Provincia (Triggiano, Valenzano...)</li>
                  </ul>
                </div>
                
                <Link href="/contatti">
                  <Button variant="outline" className="h-12 px-6 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                    Verifica copertura nella tua zona <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-secondary rounded-3xl overflow-hidden aspect-square md:aspect-video relative flex items-center justify-center border border-border shadow-inner">
                {/* Map Placeholder */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074')] bg-cover bg-center mix-blend-luminosity"></div>
                <div className="relative z-10 text-center p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl max-w-sm">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Bari e Provincia</h3>
                  <p className="text-muted-foreground">Intervento rapido garantito in 2h per tutto il comune di Bari.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
