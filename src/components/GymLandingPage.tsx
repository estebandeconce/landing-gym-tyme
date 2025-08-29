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
      <section id="bienvenida" className="min-h-[100dvh] flex items-center justify-center relative">
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
      <section id="motivacion" className="min-h-[100dvh] py-20 bg-gray-50/50">
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
              <Card key={index} className="bg-white border-gray-200 hover:border-gym-primary/40 transition-all duration-300 shadow-sm hover:shadow-md">
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
      <section id="planes" className="min-h-[100dvh] py-20 bg-white">
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
              className="relative overflow-hidden border-2 border-transparent hover:border-gym-primary transition-all duration-300 group shadow-xl"
              style={{
                backgroundImage: `url(${PlanEsencialBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300"></div>
              <div className="relative h-full flex flex-col p-8 text-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold mb-2">Plan Esencial</CardTitle>
                  <div className="text-5xl font-extrabold text-gym-primary mb-4">
                    $29.990<span className="text-xl font-medium text-gray-300">/mes</span>
                  </div>
                  <CardDescription className="text-gray-300">
                    Perfecto para comenzar tu viaje de fitness con todo lo necesario.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  {[
                    "Acceso a todas las áreas del gimnasio",
                    "Acceso a clases grupales",
                    "Plan de entrenamiento inicial",
                    "Seguimiento básico por app",
                    "Acceso a camarines y duchas"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gym-primary" />
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <Button className="w-full mt-6 bg-gym-primary text-black font-bold text-lg py-6 hover:bg-gym-primary/90 shadow-lg transform hover:scale-105 transition-transform">
                  Elegir Esencial
                </Button>
              </div>
            </Card>

            {/* Plan Personalizado */}
            <Card
              className="relative overflow-hidden border-2 border-gym-primary transition-all duration-300 group shadow-2xl"
              style={{
                backgroundImage: `url(${PlanPersonalizadoBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Badge className="absolute top-4 right-4 bg-gym-primary text-black font-bold">
                Recomendado
              </Badge>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300"></div>
              <div className="relative h-full flex flex-col p-8 text-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold mb-2">Plan Personalizado</CardTitle>
                  <div className="text-5xl font-extrabold text-gym-primary mb-4">
                    $59.990<span className="text-xl font-medium text-gray-300">/mes</span>
                  </div>
                  <CardDescription className="text-gray-300">
                    Maximiza tus resultados con un plan hecho a tu medida.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
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
                      <CheckCircle className="h-5 w-5 text-gym-primary" />
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <Button className="w-full mt-6 bg-gym-primary text-black font-bold text-lg py-6 hover:bg-gym-primary/90 shadow-lg transform hover:scale-105 transition-transform">
                  Elegir Personalizado
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section id="contacto" className="min-h-[100dvh] py-20 bg-gray-50/50">
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
            <Card className="bg-white border-gray-200 text-center shadow-sm">
              <CardHeader>
                <Phone className="h-8 w-8 text-gym-primary mx-auto mb-2" />
                <CardTitle className="text-gray-800">Llámanos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">+56 9 1234 5678</p>
                <p className="text-gray-500 text-sm">Lun-Vie 6AM-10PM</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 text-center shadow-sm">
              <CardHeader>
                <Instagram className="h-8 w-8 text-gym-primary mx-auto mb-2" />
                <CardTitle className="text-gray-800">Síguenos</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://instagram.com/somostyme" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gym-primary">@somostyme</a>
                <p className="text-gray-500 text-sm">Contenido e historias</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 text-center shadow-sm">
              <a href="https://maps.app.goo.gl/g1hTsWJiinpBtdYn8" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-gym-primary mx-auto mb-2" />
                  <CardTitle className="text-gray-800">Visítanos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Ossandón 19, Coquimbo</p>
                  <p className="text-gray-500 text-sm">¡A solo pasos del centro!</p>
                </CardContent>
              </a>
            </Card>
          </div>

          {/* Placeholder for contact/location image */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center shadow-inner">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Imagen de Ubicación/Contacto</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
