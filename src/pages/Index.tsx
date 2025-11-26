import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Instagram, MessageCircle, Phone, MapPin, Calendar, Check, PartyPopper, Cake, Heart, Briefcase, Users, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const whatsappNumber = "59897250021";
  const whatsappMessage = "Hola La Panchoneta, quiero consultar por mi evento";

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection("inicio")} className="flex items-center gap-3 group">
              <img src={logo} alt="La Panchoneta" className="h-12 w-12 transition-transform group-hover:scale-110" />
              <span className="text-xl font-bold text-foreground hidden sm:block">La Panchoneta</span>
            </button>
            
            <div className="hidden lg:flex items-center gap-6">
              {["inicio", "ofrecemos", "como-funciona", "eventos", "opiniones", "preguntas", "contacto"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors capitalize"
                >
                  {section === "ofrecemos" ? "Qué ofrecemos" : section === "como-funciona" ? "Cómo funciona" : section.replace("-", " ")}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
                <a href="https://www.instagram.com/lapanchoneta.uy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
                <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <img src={logo} alt="La Panchoneta Logo" className="h-32 w-32 mx-auto mb-6 animate-scale-in" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
              Llevamos nuestra barra móvil de panchos directamente a tu fiesta
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
              En La Panchoneta llevamos nuestra barra móvil directamente a tu evento, con un servicio cuidado y profesional pensado para que vos solo disfrutes.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-foreground/70 font-medium">
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Montevideo
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Disponibilidad limitada
              </span>
            </div>

            <p className="text-lg font-semibold text-foreground/90">
              ¿Buscás una opción rica, práctica y diferente para tu evento?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#E1306C] to-[#C13584] hover:from-[#C13584] hover:to-[#E1306C] text-white font-semibold text-lg px-8 shadow-lg hover:shadow-xl transition-all">
                <a href="https://www.instagram.com/lapanchoneta.uy/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5" />
                  Escribinos por Instagram
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-8 shadow-lg hover:shadow-xl transition-all">
                <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Escribinos por WhatsApp
                </a>
              </Button>
            </div>

            <p className="text-sm text-foreground/60 max-w-2xl mx-auto">
              Consultá fechas y condiciones por mensaje o WhatsApp. Estamos atentos para ayudarte a crear un evento más fácil y delicioso.
            </p>
          </div>
        </div>
      </section>

      {/* Qué ofrecemos */}
      <section id="ofrecemos" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground">
            ¿Qué incluye La Panchoneta?
          </h2>
          
          <p className="text-lg text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
            En La Panchoneta llevamos nuestra barra móvil directamente a tu fiesta, con servicio completo durante 2 horas.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Sparkles, text: "Barra equipada y lista para servir" },
              { icon: Users, text: "Panchero profesional a cargo del servicio" },
              { icon: Check, text: "Aderezos y toppings incluidos" },
              { icon: PartyPopper, text: "Servicio ideal para cumpleaños, 15s, empresas y bodas" },
              { icon: Heart, text: "Opción de adaptar la propuesta según la cantidad de invitados" },
              { icon: Check, text: "Atención personalizada y profesional" },
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors hover:shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground/90 font-medium flex-1">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xl text-center text-foreground font-semibold max-w-2xl mx-auto">
            Tu evento, más fácil y delicioso. Vos disfrutás, nosotros nos encargamos de la barra.
          </p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            ¿Cómo funciona?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Nos escribís",
                description: "Por Instagram o WhatsApp contándonos fecha, zona y tipo de evento.",
                icon: MessageCircle,
              },
              {
                step: "2",
                title: "Revisamos disponibilidad",
                description: "Te confirmamos si la fecha está libre y te contamos las opciones.",
                icon: Calendar,
              },
              {
                step: "3",
                title: "Armamos la propuesta",
                description: "Definimos duración, cantidad estimada de porciones y detalles del servicio.",
                icon: Briefcase,
              },
              {
                step: "4",
                title: "El día del evento",
                description: "Llegamos con la barra móvil, servimos durante el tiempo acordado y dejamos todo prolijo.",
                icon: PartyPopper,
              },
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full transition-all group-hover:w-24 group-hover:h-24" />
                <CardContent className="p-6 space-y-4 relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    {item.step}
                  </div>
                  <item.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-foreground/70 mt-12 max-w-2xl mx-auto">
            El contacto siempre es por Instagram o WhatsApp para que puedas hacernos todas las consultas que necesites.
          </p>
        </div>
      </section>

      {/* Eventos y ocasiones */}
      <section id="eventos" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            Perfecto para este tipo de eventos
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Cake, title: "Cumpleaños infantiles", color: "text-pink-500" },
              { icon: PartyPopper, title: "Cumpleaños de adultos", color: "text-purple-500" },
              { icon: Sparkles, title: "Fiestas de 15", color: "text-blue-500" },
              { icon: Heart, title: "Bodas / Casamientos", color: "text-red-500" },
              { icon: Briefcase, title: "Eventos de empresas", color: "text-green-500" },
              { icon: Users, title: "Otros eventos sociales", color: "text-orange-500" },
            ].map((event, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg group cursor-pointer">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <event.icon className={`h-8 w-8 ${event.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-foreground/80 text-lg max-w-2xl mx-auto">
            Si tu evento no está en la lista, igual escribinos y vemos cómo adaptar la propuesta.
          </p>
        </div>
      </section>

      {/* Opiniones */}
      <section id="opiniones" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            Lo que dicen de La Panchoneta
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "María G.",
                event: "Cumpleaños de 40",
                comment: "Servicio impecable, la barra fue un golazo en el cumple. Todos quedaron encantados con los panchos y la atención.",
              },
              {
                name: "Rodrigo P.",
                event: "Evento corporativo",
                comment: "Profesionales de principio a fin. Llegaron puntuales, todo impecable y los panchos espectaculares. Súper recomendables.",
              },
              {
                name: "Carolina M.",
                event: "Fiesta de 15",
                comment: "La mejor decisión para la fiesta de mi hija. Los chicos quedaron fascinados y la barra quedó hermosa. ¡Gracias!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-foreground/80 italic">"{testimonial.comment}"</p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild className="border-2 hover:border-primary hover:bg-primary/5">
              <a href="https://www.instagram.com/lapanchoneta.uy/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Mirá más fotos y experiencias en nuestro Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section id="preguntas" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            Preguntas frecuentes
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "¿Cómo hago para consultar disponibilidad?",
                answer: "Siempre por mensaje directo en Instagram o por WhatsApp desde los botones de la web. Respondemos rápido y te contamos todo lo que necesites saber.",
              },
              {
                question: "¿En qué zonas trabajan?",
                answer: "Principalmente en Montevideo. Para otras zonas, consultá por mensaje y vemos disponibilidad según la distancia y el tipo de evento.",
              },
              {
                question: "¿Cuánto dura el servicio?",
                answer: "Generalmente el servicio completo es de 2 horas, pero se puede ajustar según el evento y la cantidad de invitados.",
              },
              {
                question: "¿Qué incluye el servicio?",
                answer: "Barra móvil equipada, panchero profesional, aderezos y toppings. Los detalles exactos se definen en cada propuesta según tus necesidades.",
              },
              {
                question: "¿Con cuánta anticipación tengo que reservar?",
                answer: "Lo ideal es consultar con varias semanas de anticipación. Tenemos disponibilidad limitada, especialmente en temporada alta.",
              },
              {
                question: "¿Cómo se confirma la reserva?",
                answer: "Coordinamos por mensaje los datos del evento y la seña, y te dejamos todo por escrito para que estés tranquilo.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background border-2 rounded-lg px-6 hover:border-primary transition-colors">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center text-foreground/60 mt-8">
            Cada respuesta puede variar según el tipo de evento. Escribinos para una propuesta personalizada.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Hablemos de tu evento
          </h2>
          
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            Contanos la fecha, el tipo de evento y cuántos invitados calculás. Te respondemos por mensaje para ver disponibilidad y opciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" asChild className="bg-gradient-to-r from-[#E1306C] to-[#C13584] hover:from-[#C13584] hover:to-[#E1306C] text-white font-semibold text-lg px-10 py-6 h-auto shadow-xl hover:shadow-2xl transition-all">
              <a href="https://www.instagram.com/lapanchoneta.uy/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-3 h-6 w-6" />
                Escribinos por Instagram
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-10 py-6 h-auto shadow-xl hover:shadow-2xl transition-all">
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 h-6 w-6" />
                Escribinos por WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground/70">
            <span className="flex items-center gap-2 text-lg">
              <MapPin className="h-5 w-5 text-primary" />
              Montevideo, Uruguay
            </span>
            <span className="flex items-center gap-2 text-lg">
              <Calendar className="h-5 w-5 text-primary" />
              Disponibilidad limitada – Reservá con anticipación
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={logo} alt="La Panchoneta" className="h-12 w-12" />
                <span className="text-xl font-bold">La Panchoneta</span>
              </div>
              <p className="text-background/80 text-sm">
                Experiencia gastronómica + show de panchos para tus eventos en Montevideo.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Enlaces</h3>
              <div className="flex flex-col gap-2">
                {["inicio", "ofrecemos", "eventos", "preguntas", "contacto"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-background/80 hover:text-primary text-left text-sm transition-colors capitalize"
                  >
                    {section === "ofrecemos" ? "Qué ofrecemos" : section}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contacto</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" asChild className="border-background/20 hover:bg-primary hover:border-primary">
                  <a href="https://www.instagram.com/lapanchoneta.uy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-background/20 hover:bg-secondary hover:border-secondary">
                  <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
            <p>© {new Date().getFullYear()} La Panchoneta. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
