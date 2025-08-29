import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Heart,
  Trophy,
  Users,
  Clock,
  Target,
  Star,
  CheckCircle,
  Phone,
  Instagram,
  MapPin,
  Menu,
  MessageCircle
} from 'lucide-react'
import TymeLogo from '@/assets/landing/tyme_logo.png'
import PlanEsencialBg from '@/assets/landing/plan_esencial.webp'
import PlanPersonalizadoBg from '@/assets/landing/plan_personalizado.webp'

export default function GymLandingPage() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "56959889632" // Chilean WhatsApp number without + and spaces
    const message = "Hola, me interesa saber más sobre los planes de GymTyme"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleInstagramClick = () => {
    window.open('https://instagram.com/somostyme', '_blank')
  }

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/g1hTsWJiinpBtdYn8', '_blank')
  }

  const handleMenuClick = () => {
    // TODO: Implement menu functionality later
    console.log('Menu clicked')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
      {/* Floating Menu Button - Top Right */}
      <Button
        onClick={handleMenuClick}
        className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-gym-primary shadow-lg"
        size="icon"
      >
        <Menu className="h-5 w-5 text-gray-700" />
      </Button>

      {/* Floating WhatsApp Button - Bottom Right */}
      <Button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 shadow-lg"
        size="icon"
      >
        <MessageCircle className="h-5 w-5 text-white" />
      </Button>

      {/* Welcome Section */}
      <section 
        id="bienvenida"   
        className="min-h-[100dvh] flex items-center justify-center relative"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)
          `
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <img src={TymeLogo} alt="GymTyme Logo" className="mx-auto mb-8 h-24" />
            <Badge className="mb-6 bg-gym-primary/10 text-gym-primary border-gym-primary">
              Transforma Tu Vida
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Bienvenido a <span className="text-gym-primary">GymTyme</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Donde el fitness se encuentra con la excelencia. Transforma tu cuerpo, eleva tu mente y alcanza la grandeza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gym-primary text-black hover:bg-gym-primary/90 shadow-lg">
                Comienza Tu Viaje
              </Button>
              <Button size="lg" variant="outline" className="border-gym-primary text-gym-primary hover:bg-gym-primary/10">
                Conoce Más
              </Button>
            </div>
          </div>

          {/* Placeholder for hero image */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-96 flex items-center justify-center shadow-inner">
              <div className="text-center">
                <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Imagen Principal del Gimnasio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section 
        id="motivacion" 
        className="min-h-[100dvh] py-32 relative border-t border-gray-200/50"
        style={{
          background: `
            radial-gradient(circle at 70% 10%, rgba(139, 69, 19, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 30% 90%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, #f9fafb 0%, #f3f4f6 25%, #e5e7eb 50%, #f9fafb 75%, #ffffff 100%),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 98px,
              rgba(0,0,0,0.02) 100px
            )
          `
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gym-primary/10 text-gym-primary border-gym-primary">
              Tu Motivación Importa
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Encuentra Tu <span className="text-gym-primary">Motivación</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada campeón fue una vez un principiante. Cada profesional fue una vez un amateur. Cada ícono fue una vez un desconocido.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Trophy, title: "Logra Objetivos", description: "Establece metas ambiciosas y consíguelas con nuestra metodología comprobada." },
              { icon: Users, title: "Comunidad", description: "Únete a una comunidad solidaria de entusiastas del fitness con ideas afines." },
              { icon: Target, title: "Entrenamiento Preciso", description: "Entrenamientos personalizados adaptados a tus objetivos específicos y nivel de condición física." },
              { icon: Clock, title: "Horario Flexible", description: "Entrena en tus términos con acceso 24/7 y horarios de clases flexibles." },
              { icon: Star, title: "Entrenadores Expertos", description: "Aprende de entrenadores certificados con años de experiencia y resultados comprobados." },
              { icon: Heart, title: "Enfoque en Salud", description: "Prioriza tu bienestar con orientación integral de salud y nutrición." }
            ].map((item, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:border-gym-primary/40 transition-all duration-300 shadow-sm hover:shadow-lg hover:bg-white/90">
                <CardHeader className="text-center">
                  <item.icon className="h-12 w-12 text-gym-primary mx-auto mb-4" />
                  <CardTitle className="text-gray-800">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Placeholder for motivation images */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center shadow-inner">
              <div className="text-center">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Imagen de la Comunidad</p>
              </div>
            </div>
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center shadow-inner">
              <div className="text-center">
                <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Historias de Éxito</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section 
        id="planes" 
        className="min-h-[100dvh] py-32 relative"
        style={{
          background: `
            radial-gradient(ellipse at top left, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
            linear-gradient(180deg, #ffffff 0%, #f8fafc 30%, #ffffff 70%, #f1f5f9 100%),
            repeating-conic-gradient(
              from 0deg at 50% 50%,
              transparent 0deg,
              rgba(0,0,0,0.01) 2deg,
              transparent 4deg
            )
          `
        }}
      >
        {/* Subtle top separator */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gym-primary/30 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gym-primary/10 text-gym-primary border-gym-primary">
              Elige Tu Camino
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Planes de <span className="text-gym-primary">Membresía</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selecciona el plan perfecto que se adapte a tu estilo de vida y objetivos de fitness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plan Esencial */}
            <Card
              className="relative overflow-hidden rounded-3xl border-2 border-transparent hover:border-gym-primary transition-all duration-300 group shadow-xl flex flex-col"
              style={{
                backgroundImage: `url(${PlanEsencialBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 group-hover:from-black/95 transition-all duration-300"></div>
              <div className="relative h-full flex flex-col p-8 text-white">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold mb-1">Plan Esencial</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">Entrenamiento en sala</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 mt-4">
                  {[
                    "Evaluación funcional",
                    "Evaluación de fuerza y técnica",
                    "Evaluación InBody",
                    "Rutina y planificación",
                    "Reserva de sala en aplicación box magic",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gym-primary flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <div className="mt-auto pt-8">
                  <div className="text-right mb-4">
                    <p className="text-4xl font-bold">Valor: $55.000</p>
                    <p className="text-gym-primary font-semibold text-xl">Valor estudiante: $40.000</p>
                  </div>
                  <Button className="w-full bg-gym-primary text-black font-bold text-lg py-6 hover:bg-gym-primary/90 shadow-lg transform hover:scale-105 transition-transform">
                    Comienza Ahora
                  </Button>
                </div>
              </div>
            </Card>

            {/* Plan Personalizado */}
            <Card
              className="relative overflow-hidden rounded-3xl border-2 border-gym-primary transition-all duration-300 group shadow-2xl flex flex-col"
              style={{
                backgroundImage: `url(${PlanPersonalizadoBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Badge className="absolute top-4 right-4 bg-gym-primary text-black font-bold">
                Recomendado
              </Badge>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 group-hover:from-black/95 transition-all duration-300"></div>
              <div className="relative h-full flex flex-col p-8 text-white">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold mb-1">Plan Personalizado</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">Maximiza tus resultados</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 mt-4">
                  {[
                    "Todo lo del Plan Esencial",
                    "Entrenador personal asignado",
                    "Plan de entrenamiento 100% personalizado",
                    "Evaluaciones físicas periódicas",
                    "Asesoría nutricional completa",
                    "Acceso ilimitado a todas las clases",
                    "Acceso 24/7"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gym-primary flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <div className="mt-auto pt-8">
                  <div className="text-right mb-4">
                    <p className="text-4xl font-bold">Valor: $59.990</p>
                  </div>
                  <Button className="w-full bg-gym-primary text-black font-bold text-lg py-6 hover:bg-gym-primary/90 shadow-lg transform hover:scale-105 transition-transform">
                    Elige Personalizado
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section 
        id="contacto" 
        className="min-h-[100dvh] py-32 relative border-t border-gray-200/30"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 60%),
            radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 60%),
            linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 25%, #f8fafc 50%, #f0f9ff 75%, #f1f5f9 100%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 48px,
              rgba(0,0,0,0.015) 50px
            )
          `
        }}
      >
        {/* Minimal top accent */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-1 bg-gym-primary/40 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gym-primary/30 to-transparent"></div>
            <div className="w-1 h-1 bg-gym-primary/40 rounded-full"></div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gym-primary/10 text-gym-primary border-gym-primary">
              Comienza Hoy
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              ¿Listo para <span className="text-gym-primary">Transformarte</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Tu viaje de fitness comienza con un solo paso. Da ese paso hoy y únete a miles que ya han transformado sus vidas.
            </p>
            <Button size="lg" className="bg-gym-primary text-black hover:bg-gym-primary/90 text-lg px-8 py-6 shadow-lg">
              Inicia Tu Prueba Gratuita
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {/* WhatsApp Card */}
            <Card 
              className="bg-white/90 backdrop-blur-sm border-gray-200 text-center shadow-sm hover:shadow-lg hover:border-gym-primary/40 hover:bg-white transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={handleWhatsAppClick}
            >
              <CardHeader>
                <Phone className="h-8 w-8 text-gym-primary mx-auto mb-2" />
                <CardTitle className="text-gray-800">Llámanos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">+56 9 5988 9632</p>
                <p className="text-gym-primary text-sm font-medium">¡Envíanos un mensaje!</p>
              </CardContent>
            </Card>

            {/* Instagram Card */}
            <Card 
              className="bg-white/90 backdrop-blur-sm border-gray-200 text-center shadow-sm hover:shadow-lg hover:border-gym-primary/40 hover:bg-white transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={handleInstagramClick}
            >
              <CardHeader>
                <Instagram className="h-8 w-8 text-gym-primary mx-auto mb-2" />
                <CardTitle className="text-gray-800">Síguenos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">@somostyme</p>
                <p className="text-gym-primary text-sm font-medium">¡El mejor contenido para tu salud!</p>
              </CardContent>
            </Card>

            {/* Map Card */}
            <Card 
              className="bg-white/90 backdrop-blur-sm border-gray-200 text-center shadow-sm hover:shadow-lg hover:border-gym-primary/40 hover:bg-white transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={handleMapClick}
            >
              <CardHeader>
                <MapPin className="h-8 w-8 text-gym-primary mx-auto mb-2" />
                <CardTitle className="text-gray-800">Visítanos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Ossandón 19, Coquimbo</p>
                <p className="text-gym-primary text-sm font-medium">¡A solo pasos del centro!</p>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps Embed */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1728.3366543638322!2d-71.3440601!3d-29.9600742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691c8fb878c1a35%3A0x178cdb2945622f61!2sOssand%C3%B3n%2019%2C%201781295%20Coquimbo!5e0!3m2!1ses-419!2scl!4v1756492361103!5m2!1ses-419!2scl" 
                className="w-full h-96 border-0"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación GymTyme - Ossandón 19, Coquimbo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
