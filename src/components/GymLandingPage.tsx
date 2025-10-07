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
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useState, useEffect } from 'react'
import TymeLogo from '@/assets/landing/tyme_logo.webp'
import PlanEsencialBg from '@/assets/landing/plan_esencial.webp'
import PlanPersonalizadoBg from '@/assets/landing/plan_personalizado.webp'
import PlanIntegralBg from '@/assets/landing/carrousel/Carrousel_2.jpg'
import Carrousel1 from '@/assets/landing/carrousel/Carrousel_1.jpg'
import Carrousel2 from '@/assets/landing/carrousel/Carrousel_2.jpg'
import Carrousel3 from '@/assets/landing/carrousel/Carrousel_3.jpg'

export default function GymLandingPage() {
  // Carousel state and functionality
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const carouselImages = [Carrousel1, Carrousel2, Carrousel3]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-play carousel with pause on hover
  useEffect(() => {
    if (isHovered) return // Don't auto-advance if hovered

    const interval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [isHovered])

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

      {/* Hero Section with Carousel */}
      <section
        id="bienvenida"
        className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse at bottom right, rgba(16, 185, 129, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse at center, rgba(113, 199, 224, 0.08) 0%, transparent 70%),
            linear-gradient(135deg, #f8fafc 0%, #e2e8f0 30%, #f1f5f9 70%, #e2e8f0 100%)
          `
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gym-primary/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-500/10 to-gym-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gym-primary/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 relative z-10 w-full max-w-none">
          <div className="w-full">
            {/* Desktop: 4/8 layout, Mobile: stacked */}
            <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-center min-h-[90vh] w-full">

              {/* Text Column (4/12 on desktop) */}
              <div className="lg:col-span-4 text-center lg:text-left order-1 lg:order-1 relative">
                {/* Decorative element */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-gym-primary/20 to-blue-500/20 rounded-full blur-3xl hidden lg:block animate-pulse" style={{animationDelay: '1s'}}></div>
                
                <img
                  src={TymeLogo}
                  alt="GymTyme Logo"
                  className="mx-auto lg:mx-0 mb-8 h-18 lg:h-20 xl:h-24 drop-shadow-xl transform hover:scale-105 transition-transform duration-300 relative z-10"
                />

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold mb-8 leading-tight relative">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gym-primary via-blue-600 to-gym-primary mb-2 drop-shadow-lg animate-pulse">Tu espacio fitness,</span>
                  <span className="block text-gray-800 drop-shadow-lg">tu momento</span>
                  {/* Text glow effect */}
                  <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-gym-primary/40 via-blue-600/40 to-gym-primary/40 blur-sm -z-10">
                    <span className="block mb-2">Tu espacio fitness,</span>
                    <span className="block">tu momento</span>
                  </div>
                  {/* Additional glow layer */}
                  <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-gym-primary/20 via-blue-600/20 to-gym-primary/20 blur-lg -z-20">
                    <span className="block mb-2">Tu espacio fitness,</span>
                    <span className="block">tu momento</span>
                  </div>
                </h1>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-10 relative">
                  {/* Glow effect behind buttons */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gym-primary/30 to-blue-500/30 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                  
                  <Button
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="relative bg-gradient-to-r from-gym-primary via-blue-500 to-gym-primary text-white font-bold px-12 py-5 text-xl rounded-2xl border-2 border-white/30 backdrop-blur-sm transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-gym-primary/50 group overflow-hidden"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gym-primary/50 to-blue-500/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 flex items-center gap-3">
                      🚀 Comienza Tu Viaje
                    </span>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="relative bg-white/95 backdrop-blur-md border-3 border-gym-primary/60 text-gym-primary hover:bg-gradient-to-r hover:from-gym-primary hover:to-blue-500 hover:text-white hover:border-white/50 font-bold px-12 py-5 text-xl rounded-2xl shadow-xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl group overflow-hidden"
                    onClick={() => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gym-primary/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative z-10 flex items-center gap-3">
                      💪 Ver Planes
                    </span>
                  </Button>
                </div>
              </div>

              {/* Carousel Column (8/12 on desktop) */}
              <div className="lg:col-span-8 order-2 lg:order-2 w-full relative">
                {/* Decorative elements around carousel */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-gym-primary/25 to-blue-500/25 rounded-full blur-3xl hidden lg:block animate-pulse" style={{animationDelay: '3s'}}></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-green-500/25 to-gym-primary/25 rounded-full blur-3xl hidden lg:block animate-pulse" style={{animationDelay: '5s'}}></div>
                
                <div
                  className="relative rounded-3xl overflow-hidden shadow-2xl group w-full"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Outer glow effect */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-gym-primary/40 via-blue-500/40 to-gym-primary/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                  
                  {/* Inner container with premium styling */}
                  <div className="relative rounded-2xl overflow-hidden shadow-inner">

                  {/* Carousel Container - 100% altura en escritorio */}
                  <div
                    className="relative w-full overflow-hidden
                      aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:h-[85vh] xl:h-[90vh] 2xl:h-[85vh]"
                    style={{
                      aspectRatio: 'auto'
                    }}
                  >
                    {/* Images */}
                    {carouselImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === currentSlide ? 'translate-x-0' :
                          index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                          }`}
                      >
                        <img
                          src={image}
                          alt={`TYME Gym Slide ${index + 1}`}
                          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
                          style={{
                            objectPosition: 'center center'
                          }}
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />
                        {/* Enhanced overlay with gym vibe */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-gym-primary/8 via-transparent to-blue-500/8"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gym-primary/5 to-transparent"></div>
                        
                        {/* Fitness motivation overlay - Mejorado para altura completa */}
                        <div className="absolute bottom-10 left-10 text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                          <div className="bg-black/70 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/40 shadow-2xl">
                            <p className="font-bold text-2xl mb-1">💪 Transform Your Body</p>
                            <p className="text-lg opacity-90">Achieve Your Fitness Goals</p>
                            <div className="h-1 w-16 bg-gradient-to-r from-gym-primary to-blue-500 rounded-full mt-2"></div>
                          </div>
                        </div>
                        
                        {/* Gym branding overlay superior */}
                        <div className="absolute top-8 right-8 text-white z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                            <p className="font-bold text-lg text-gym-primary">GYMTYME</p>
                            <p className="text-sm opacity-80">Professional Fitness</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Enhanced Navigation Arrows - Adaptadas para altura completa */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md hover:bg-white text-gray-800 p-5 rounded-full shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-125 border-2 border-white/50 hover:shadow-gym-primary/30"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="h-8 w-8" />
                    </button>

                    <button
                      onClick={nextSlide}
                      className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md hover:bg-white text-gray-800 p-5 rounded-full shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-125 border-2 border-white/50 hover:shadow-gym-primary/30"
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight className="h-8 w-8" />
                    </button>

                    {/* Enhanced Dots Indicators - Adaptados para altura completa */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-4 bg-black/50 backdrop-blur-md px-8 py-4 rounded-full border border-white/40 shadow-2xl">
                      {carouselImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-5 h-5 rounded-full transition-all duration-300 ${
                            index === currentSlide
                              ? 'bg-gym-primary shadow-lg scale-150 shadow-gym-primary/60 border-2 border-white ring-2 ring-white/50'
                              : 'bg-white/70 hover:bg-white/90 hover:scale-125 border border-white/30'
                          }`}
                          aria-label={`Ir a imagen ${index + 1}`}
                        />
                      ))}
                    </div>
                    </div>
                  </div>

                  {/* Touch/Swipe Area for Mobile */}
                  <div
                    className="absolute inset-0 lg:hidden"
                    onTouchStart={(e) => {
                      const touch = e.touches[0]
                      const startX = touch.clientX

                      const handleTouchEnd = (endEvent: TouchEvent) => {
                        const endX = endEvent.changedTouches[0].clientX
                        const diff = startX - endX

                        if (Math.abs(diff) > 50) { // Minimum swipe distance
                          if (diff > 0) {
                            nextSlide()
                          } else {
                            prevSlide()
                          }
                        }

                        document.removeEventListener('touchend', handleTouchEnd)
                      }

                      document.addEventListener('touchend', handleTouchEnd)
                    }}
                  />
                </div>
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
          display: 'none',
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
            {/* <Badge className="mb-6 bg-gym-primary/10 text-gym-primary border-gym-primary">
              Tu Motivación Importa
            </Badge> */}
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
            {/* <Badge className="mb-6 bg-gym-primary/10 text-gym-primary border-gym-primary">
              Elige Tu Camino
            </Badge> */}
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Planes de <span className="text-gym-primary">Membresía</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selecciona el plan perfecto que se adapte a tu estilo de vida y objetivos de fitness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {/* Plan Personalizado - BEST SELLER */}
            <Card
              className="relative overflow-hidden rounded-3xl border-4 transition-all duration-300 group shadow-2xl flex flex-col animate-pulse-border"
              style={{
                backgroundImage: `url(${PlanPersonalizadoBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg px-4 py-2 z-20 shadow-lg">
                🔥 BEST SELLER
              </Badge>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/45 group-hover:from-black/100 transition-all duration-300"></div>
              <div className="relative h-full flex flex-col p-8 text-white min-h-[600px] z-10">
                <CardHeader>
                  <CardTitle className="text-4xl lg:text-5xl font-bold mb-2 text-yellow-400">Plan Personalizado</CardTitle>
                  <CardDescription className="text-gray-200 text-xl font-medium">Maximiza tus resultados</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4 mt-6">
                  {[
                    "Entrenamiento 1 a 1 con tu preparador",
                    "Evaluación funcional y de fuerza",
                    "Medición de perímetros",
                    "Control semanal",
                    "Planificación enfocada en tus objetivos",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-100 text-lg font-medium">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <div className="mt-auto pt-8">
                  <div className="text-center mb-6">
                    <p className="text-5xl font-bold text-yellow-400 mb-2">$129.990</p>
                    <p className="text-gray-300 text-lg">¡El más elegido!</p>
                  </div>
                  <Button 
                    onClick={() => {
                      const phoneNumber = "56959889632"
                      const message = "¡Hola! Quiero transformar mi vida y alcanzar mis objetivos fitness con el Plan Personalizado. ¿Podrían ayudarme a comenzar mi camino hacia una mejor versión de mí mismo?"
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                      window.open(whatsappUrl, '_blank')
                    }}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl py-8 hover:from-yellow-500 hover:to-orange-600 shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    🚀 ¡Quiero este plan!
                  </Button>
                </div>
              </div>
            </Card>

            {/* Plan Esencial */}
            <Card
              className="relative overflow-hidden rounded-3xl border-2 border-transparent hover:border-gym-primary transition-all duration-300 group shadow-xl flex flex-col"
              style={{
                backgroundImage: `url(${PlanEsencialBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/45 group-hover:from-black/100 transition-all duration-300"></div>
              <div className="relative h-full flex flex-col p-8 text-white min-h-[600px] z-10">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold mb-2">Plan Esencial</CardTitle>
                  <CardDescription className="text-gray-200 text-xl">Entrenamiento en sala</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4 mt-6">
                  {[
                    "Evaluación funcional",
                    "Evaluación de fuerza y técnica",
                    "Evaluación Corporal",
                    "Rutina y planificación",
                    "Máximo 15 personas en sala por bloques",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-gym-primary flex-shrink-0" />
                      <span className="text-gray-100 text-lg">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <div className="mt-auto pt-8">
                  <div className="text-center mb-6">
                    <p className="text-4xl font-bold text-gym-primary mb-1">$54.990</p>
                    <p className="text-gym-primary font-semibold text-xl">Estudiante: $39.990</p>
                  </div>
                  <Button 
                    onClick={() => {
                      const phoneNumber = "56959889632"
                      const message = "¡Hola! Quiero comenzar mi camino fitness y mejorar mi salud con el Plan Esencial. ¿Podrían brindarme más información para empezar?"
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                      window.open(whatsappUrl, '_blank')
                    }}
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-xl py-8 hover:from-cyan-500 hover:to-blue-600 shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    💪 ¡Quiero este plan!
                  </Button>
                </div>
              </div>
            </Card>

            {/* Plan Integral */}
            <Card
              className="relative overflow-hidden rounded-3xl border-2 border-transparent hover:border-gym-primary transition-all duration-300 group shadow-xl flex flex-col"
              style={{
                backgroundImage: `url(${PlanIntegralBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg px-4 py-2 z-20 shadow-lg">
                👑 PREMIUM
              </Badge>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/45 group-hover:from-black/100 transition-all duration-300"></div>
              <div className="relative h-full flex flex-col p-8 text-white min-h-[600px] z-10">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold mb-2 text-purple-300">Plan Integral</CardTitle>
                  <CardDescription className="text-gray-200 text-xl">Transformación completa</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4 mt-6">
                  {[
                    "Entrenamiento 1 a 1 con tu preparador",
                    "Evaluación funcional y de fuerza",
                    "Toma de perímetros",
                    "Planificación enfocada en tus objetivos",
                    "Anamnesis completa",
                    "Evaluación de composición corporal",
                    "Establecimiento de objetivos realistas",
                    "Educación nutricional",
                    "Plan de alimentación personalizado",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-purple-300 flex-shrink-0" />
                      <span className="text-gray-100 text-lg">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <div className="mt-auto pt-8">
                  <div className="text-center mb-6">
                    <p className="text-4xl font-bold text-purple-300">$149.990</p>
                    <p className="text-gray-300 text-lg">Experiencia premium</p>
                  </div>
                  <Button 
                    onClick={() => {
                      const phoneNumber = "56959889632"
                      const message = "¡Hola! Estoy interesado/a en la experiencia premium completa con el Plan Integral, incluyendo el seguimiento nutricional. ¿Podrían ayudarme a comenzar esta transformación integral?"
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                      window.open(whatsappUrl, '_blank')
                    }}
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-xl py-8 hover:from-purple-600 hover:to-indigo-700 shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    ✨ ¡Quiero este plan!
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
            {/* <Badge className="mb-6 bg-gym-primary/10 text-gym-primary border-gym-primary">
              Comienza Hoy
            </Badge> */}
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              ¿Listo para <span className="text-gym-primary">Transformarte</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Tu viaje de fitness comienza con un solo paso. Da ese paso hoy y únete a miles que ya han transformado sus vidas.
            </p>
            {/* <Button size="lg" className="bg-gym-primary text-white hover:bg-gym-primary/90 text-lg px-8 py-6 shadow-lg font-semibold">
              Inicia Tu Prueba Gratuita
            </Button> */}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* WhatsApp Card */}
            <Card 
              className="relative overflow-hidden bg-gradient-to-br from-green-400 via-green-500 to-green-600 border-2 border-green-300 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={handleWhatsAppClick}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-bold">Llámanos</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-white/90 text-lg font-semibold">+56 9 5988 9632</p>
                <p className="text-white/80 text-lg font-bold mt-2">💬 ¡Envíanos un mensaje!</p>
              </CardContent>
            </Card>

            {/* Instagram Card */}
            <Card 
              className="relative overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 border-2 border-pink-300 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={handleInstagramClick}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-bold">Síguenos</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-white/90 text-lg font-semibold">@somostyme</p>
                <p className="text-white/80 text-lg font-bold mt-2">💪 ¡El mejor contenido para tu salud!</p>
              </CardContent>
            </Card>

            {/* Map Card */}
            <Card 
              className="relative overflow-hidden bg-gradient-to-br from-gym-primary via-blue-400 to-blue-600 border-2 border-gym-primary/50 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={handleMapClick}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-bold">Visítanos</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-white/90 text-lg font-semibold">Ossandón 19, Coquimbo</p>
                <p className="text-white/80 text-lg font-bold mt-2">📍 ¡A solo pasos del centro!</p>
              </CardContent>
            </Card>
          </div>          {/* Google Maps Embed */}
          <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-12">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1728.3366543638322!2d-71.3440601!3d-29.9600742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691c8fb878c1a35%3A0x178cdb2945622f61!2sOssand%C3%B3n%2019%2C%201781295%20Coquimbo!5e0!3m2!1ses-419!2scl!4v1756492361103!5m2!1ses-419!2scl" 
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] border-0"
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

// Estilos CSS adicionales para el efecto de borde animado
const styles = `
  @keyframes borderGlow {
    0% {
      border-color: #ffd700;
      box-shadow: 0 0 20px #ffd700, 0 0 40px #ffd700, 0 0 60px #ffd700;
    }
    25% {
      border-color: #ffcc00;
      box-shadow: 0 0 20px #ffcc00, 0 0 40px #ffcc00, 0 0 60px #ffcc00;
    }
    50% {
      border-color: #ff8c00;
      box-shadow: 0 0 20px #ff8c00, 0 0 40px #ff8c00, 0 0 60px #ff8c00;
    }
    75% {
      border-color: #ffa500;
      box-shadow: 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ffa500;
    }
    100% {
      border-color: #ffd700;
      box-shadow: 0 0 20px #ffd700, 0 0 40px #ffd700, 0 0 60px #ffd700;
    }
  }
  
  .animate-pulse-border {
    animation: borderGlow 3s ease-in-out infinite;
    border-radius: 1.5rem; /* Coincide con rounded-3xl de Tailwind */
  }
`;

// Inyectar estilos
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
