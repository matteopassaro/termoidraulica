import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  ShieldCheck
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
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

const preventivoSchema = z.object({
  nome: z.string().min(2, "Il nome è obbligatorio"),
  cognome: z.string().min(2, "Il cognome è obbligatorio"),
  telefono: z.string().min(8, "Inserisci un numero di telefono valido"),
  email: z.string().email("Inserisci una email valida"),
  zona: z.string().min(2, "Specifica il quartiere o comune"),
  servizio: z.string().min(1, "Seleziona un servizio"),
  messaggio: z.string().min(10, "Descrivi brevemente la tua richiesta"),
  privacy: z.boolean().refine(val => val === true, "Devi accettare l'informativa sulla privacy")
});

export default function Preventivo() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof preventivoSchema>>({
    resolver: zodResolver(preventivoSchema),
    defaultValues: {
      nome: "",
      cognome: "",
      telefono: "",
      email: "",
      zona: "",
      servizio: "",
      messaggio: "",
      privacy: false
    },
  });

  async function onSubmit(values: z.infer<typeof preventivoSchema>) {
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: "Richiesta inviata con successo!",
          description: "Ti contatteremo entro 24 ore lavorative.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Errore nell'invio",
          description: "Si è verificato un problema, riprova più tardi o chiamaci direttamente.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Errore di connessione",
        description: "Controlla la tua connessione e riprova.",
      });
    }
  }

  return (
    <Layout>
      <div className="bg-secondary/30 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-primary text-white pt-28 pb-20 md:pt-32 md:pb-24 px-4 text-center">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6">Richiedi un Preventivo</h1>
            <p className="text-lg md:text-xl text-white/80 font-medium">
              Trasparenza totale sui prezzi e nessun costo nascosto. Compila il modulo per ricevere una stima o fissare un sopralluogo gratuito.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Form Section */}
            <div className="w-full lg:w-2/3 bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-border">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">Dettagli Richiesta</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input placeholder="Es. Mario" className="h-12 border-border focus:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cognome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cognome</FormLabel>
                          <FormControl>
                            <Input placeholder="Es. Rossi" className="h-12 border-border focus:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefono</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="Es. 333 1234567" className="h-12 border-border focus:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="mario.rossi@email.it" className="h-12 border-border focus:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="zona"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quartiere o Comune</FormLabel>
                          <FormControl>
                            <Input placeholder="Es. Poggiofranco, Triggiano..." className="h-12 border-border focus:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="servizio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Servizio di interesse</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 border-border focus:ring-primary">
                                <SelectValue placeholder="Seleziona..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="caldaia">Installazione/Sostituzione Caldaia</SelectItem>
                              <SelectItem value="clima">Installazione Climatizzatori</SelectItem>
                              <SelectItem value="riparazione">Riparazione Idraulica</SelectItem>
                              <SelectItem value="bagno">Ristrutturazione Bagno</SelectItem>
                              <SelectItem value="manutenzione">Manutenzione Impianto</SelectItem>
                              <SelectItem value="altro">Altro / Non sicuro</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="messaggio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrizione del lavoro o del problema</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descrivi brevemente di cosa hai bisogno..." 
                            className="min-h-[120px] resize-none border-border focus:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="privacy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-secondary/50 border border-border">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal">
                            Acconsento al trattamento dei dati personali ai sensi del GDPR. I dati saranno utilizzati esclusivamente per rispondere alla richiesta.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="btn-shimmer w-full bg-accent hover:bg-accent/90 h-14 text-lg font-bold shadow-lg shadow-accent/20 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/30" data-testid="btn-submit-preventivo">
                    Invia Richiesta di Preventivo
                  </Button>
                </form>
              </Form>
            </div>

            {/* Sidebar Info */}
            <div className="w-full lg:w-1/3 space-y-6">
              <div className="bg-primary text-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-6">Come funziona?</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <p className="font-bold">Invia la richiesta</p>
                      <p className="text-white/70 text-sm mt-1">Compila il form con i dettagli del lavoro richiesto.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <p className="font-bold">Ti ricontattiamo</p>
                      <p className="text-white/70 text-sm mt-1">Un nostro tecnico ti chiamerà per approfondire o fissare un sopralluogo.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <p className="font-bold">Ricevi il preventivo</p>
                      <p className="text-white/70 text-sm mt-1">Ricevi una stima chiara e dettagliata, senza alcun impegno.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-md border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3 text-center md:text-left">Hai un'urgenza?</h3>
                <p className="text-muted-foreground mb-5 text-sm md:text-base text-center md:text-left">
                  Se hai un tubo rotto, la caldaia bloccata o un allagamento, non aspettare l'email. Chiamaci subito.
                </p>
                <a href="tel:+390801234567" className="flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 font-bold py-4 rounded-xl transition-colors text-sm md:text-base">
                  <Phone className="w-5 h-5" />
                  Pronto Intervento: 080 123 4567
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
