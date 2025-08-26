import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Dumbbell, 
  Heart, 
  Trophy, 
  Users, 
  Clock, 
  Target, 
  Star, 
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

export default function GymLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header/Navigation */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Dumbbell className="h-8 w-8 text-gym-primary" />
            <span className="text-2xl font-bold text-gray-800">GymTyme</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#bienvenida" className="text-gray-600 hover:text-gym-primary transition-colors">Inicio</a>
            <a href="#motivacion" className="text-gray-600 hover:text-gym-primary transition-colors">Motivación</a>
            <a href="#planes" className="text-gray-600 hover:text-gym-primary transition-colors">Planes</a>
            <a href="#contacto" className="text-gray-600 hover:text-gym-primary transition-colors">Contacto</a>
          </nav>
          <Button className="bg-gym-primary text-black hover:bg-gym-primary/90 shadow-md">
            Únete Ahora
          </Button>
        </div>
      </header>

      {/* Welcome Section */}
      <section id="bienvenida" className="min-h-[100dvh] flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-white border-gray-200 hover:border-gym-primary/40 transition-all duration-300 relative shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-800 mb-2">Plan Básico</CardTitle>
                <div className="text-4xl font-bold text-gym-primary mb-4">
                  $29.990<span className="text-lg text-gray-500">/mes</span>
                </div>
                <CardDescription className="text-gray-600">
                  Perfecto para comenzar tu viaje de fitness
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Acceso a equipos del gimnasio",
                  "Planes de entrenamiento básicos",
                  "Acceso a vestuarios",
                  "Aplicación fitness online",
                  "Apoyo de la comunidad"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gym-primary" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                <Button className="w-full mt-6 bg-gym-primary text-black hover:bg-gym-primary/90 shadow-md">
                  Elegir Básico
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-white border-gray-200 hover:border-gym-primary/40 transition-all duration-300 relative shadow-lg">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gym-primary text-black">
                Más Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-800 mb-2">Plan Premium</CardTitle>
                <div className="text-4xl font-bold text-gym-primary mb-4">
                  $59.990<span className="text-lg text-gray-500">/mes</span>
                </div>
                <CardDescription className="text-gray-600">
                  Experiencia completa de fitness con orientación personal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Todo lo del plan Básico",
                  "Sesiones con entrenador personal",
                  "Consulta nutricional",
                  "Clases premium",
                  "Acceso 24/7 al gimnasio",
                  "Pases para invitados",
                  "Soporte prioritario"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gym-primary" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                <Button className="w-full mt-6 bg-gym-primary text-black hover:bg-gym-primary/90 shadow-md">
                  Elegir Premium
                </Button>
              </CardContent>
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
                <Mail className="h-8 w-8 text-gym-primary mx-auto mb-2" />
                <CardTitle className="text-gray-800">Escríbenos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">info@gymtyme.cl</p>
                <p className="text-gray-500 text-sm">Soporte 24/7</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 text-center shadow-sm">
              <CardHeader>
                <MapPin className="h-8 w-8 text-gym-primary mx-auto mb-2" />
                <CardTitle className="text-gray-800">Visítanos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Av. Providencia 123</p>
                <p className="text-gray-500 text-sm">Santiago, Chile</p>
              </CardContent>
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

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Dumbbell className="h-6 w-6 text-gym-primary" />
            <span className="text-xl font-bold text-gray-800">GymTyme</span>
          </div>
          <p className="text-gray-500">
            © 2025 GymTyme. Todos los derechos reservados. Transforma tu vida, un entrenamiento a la vez.
          </p>
        </div>
      </footer>
    </div>
  )
}
