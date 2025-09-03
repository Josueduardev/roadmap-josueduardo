import React from "react";
import {
  DollarSign,
  Gift,
  ClipboardCheck,
  Calendar,
  AlertTriangle,
  RefreshCcw,
  GraduationCap,
  Code,
  Users,
  Building2,
} from "lucide-react";

export default function UDB() {
  const Card = ({ children, className = "" }) => (
    <div
      className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}
    >
      {children}
    </div>
  );

  const CardHeader = ({ children, className = "" }) => (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
  );

  const CardTitle = ({ children, className = "" }) => (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    >
      {children}
    </h3>
  );

  const CardDescription = ({ children, className = "" }) => (
    <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
  );

  const CardContent = ({ children, className = "" }) => (
    <div className={`p-6 pt-0 ${className}`}>{children}</div>
  );

  const Badge = ({ children, variant = "default", className = "" }) => {
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    };

    return (
      <div
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}
      >
        {children}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-special-blue-200 to-special-blue-400">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative container mx-auto px-4 pt-20 pb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <div className="relative h-24 w-24 md:h-32 md:w-32 flex-shrink-0">
              <div className="h-full w-full bg-gradient-to-br from-special-blue-400 to-special-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <GraduationCap className="h-12 w-12 md:h-16 md:w-16 text-white" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-special-blue-600 to-special-blue-500 bg-clip-text text-transparent">
                Ingeniería en Ciencias de la Computación
              </h1>
              <p className="text-lg text-blue-600 mt-2 font-medium">
                Universidad Don Bosco
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 justify-center md:justify-start">
                <Badge className="bg-special-blue-100 text-special-blue-700 hover:bg-special-blue-200 px-5 py-3">
                  Plan de Carrera 2026
                </Badge>
                <Badge
                  variant="outline"
                  className="border-special-blue-200 text-special-blue-600 hover:bg-special-blue-50 px-5 py-3"
                >
                  Continuidad por Equivalencias
                </Badge>
                <Badge className="bg-gradient-to-r from-special-blue-100 to-special-blue-50 text-special-blue-700 px-5 py-3">
                  3 Años Restantes
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Presupuesto */}
          <Card className="border-special-blue-200 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-special-blue-100 rounded-lg">
                  <DollarSign className="h-5 w-5 text-special-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-slate-800 text-lg">
                    Presupuesto Total
                  </CardTitle>
                  <CardDescription className="text-slate-500">
                    Costos estimados para 3 años
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-special-blue-50 to-special-blue-100 rounded-xl p-4 border border-special-blue-100">
                <h4 className="font-semibold text-slate-700 mb-3">
                  Gastos por Ciclo (5 meses)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">
                      Cuota mensual ($100 x 5)
                    </span>
                    <span className="font-medium">$500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Servicios académicos</span>
                    <span className="font-medium">$50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Laboratorios</span>
                    <span className="font-medium">$150</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Matrícula</span>
                    <span className="font-medium">$40</span>
                  </div>
                  <div className="border-t border-special-blue-200 pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total por ciclo</span>
                      <span className="text-special-blue-600">$740</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-50/80 to-special-blue-50/60 rounded-xl p-4 border border-slate-100/40">
                <h4 className="font-semibold text-slate-700 mb-3">
                  Gastos Adicionales (mensual)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Comida</span>
                    <span className="font-medium">$80</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Transporte</span>
                    <span className="font-medium">$40</span>
                  </div>
                  <div className="border-t border-slate-200/50 pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total mensual extra</span>
                      <span className="text-slate-600">$120</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50/80 to-emerald-50/60 rounded-xl p-4 border border-green-100/40">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-700">
                    Pensión mensual
                  </span>
                  <span className="font-semibold text-green-600">+$75</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="text-xs border-special-blue-200 text-special-blue-600"
                >
                  6 ciclos/año
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs border-slate-200 text-slate-600"
                >
                  3 años total
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs border-green-200 text-green-600"
                >
                  Equivalencias
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Beneficios */}
          <Card className="border-special-blue-100/60 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100/80 rounded-lg">
                  <Gift className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-slate-800 text-lg">
                    Beneficios Clave
                  </CardTitle>
                  <CardDescription className="text-slate-500">
                    Ventajas de continuar en la UDB
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-special-blue-50/60 border border-special-blue-100/40">
                  <Code className="h-6 w-6 text-special-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-slate-700 text-base">
                      Continuidad Técnica
                    </h5>
                    <p className="text-sm text-slate-600 mt-1">
                      Aprovechar equivalencia del técnico para reducir tiempo y
                      costos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-special-blue-50/60 border border-special-blue-100/40">
                  <Building2 className="h-6 w-6 text-special-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-slate-700 text-base">
                      Conexiones Empresariales
                    </h5>
                    <p className="text-sm text-slate-600 mt-1">
                      La Universidad cuenta con aliados y una buena red de
                      empresas y programas para ayudarte a tu desarrollo
                      profesional
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50/60 border border-green-100/40">
                  <Users className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-slate-700 text-sm">
                      Programas de Apoyo
                    </h5>
                    <p className="text-xs text-slate-600 mt-1">
                      Incorpórate, Proyección Social, Arte y Cultura
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50/60 border border-purple-100/40">
                  <GraduationCap className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-slate-700 text-sm">
                      Experiencia + 40 años
                    </h5>
                    <p className="text-xs text-slate-600 mt-1">
                      Prestigio consolidado y director de escuela de computación
                      cercano a estudiantes
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Qué debo hacer */}
          <Card className="border-blue-100/60 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100/80 rounded-lg">
                  <ClipboardCheck className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-slate-800 text-lg">
                    Plan de Acción
                  </CardTitle>
                  <CardDescription className="text-slate-500">
                    Pasos específicos para continuar la Ingeniería en
                    Computación
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div className="pt-0.5">
                    <h5 className="font-medium text-slate-700 text-sm">
                      Finalizar Técnico (2025)
                    </h5>
                    <p className="text-xs text-slate-600 mt-1">
                      Completar último ciclo con excelencia académica
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div className="pt-0.5">
                    <h5 className="font-medium text-slate-700 text-sm">
                      Proceso de Equivalencias
                    </h5>
                    <p className="text-xs text-slate-600 mt-1">
                      Solicitar reconocimiento de materias técnicas
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <div className="pt-0.5">
                    <h5 className="font-medium text-slate-700 text-sm">
                      Inscripción 2026
                    </h5>
                    <p className="text-xs text-slate-600 mt-1">
                      Matrícula en Ingeniería con plan reducido
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <div className="pt-0.5">
                    <h5 className="font-medium text-slate-700 text-sm">
                      Financiamiento
                    </h5>
                    <p className="text-xs text-slate-600 mt-1">
                      Buscar empleo part-time o pasantías remuneradas
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    5
                  </div>
                  <div className="pt-0.5">
                    <h5 className="font-medium text-slate-700 text-sm">
                      Especialización IA
                    </h5>
                    <p className="text-xs text-slate-600 mt-1">
                      Continuar aprendizaje en inteligencia artificial
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Escenarios a 5 años */}
          <Card className="border-special-blue-100/60 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-special-blue-100/80 rounded-lg">
                  <Calendar className="h-5 w-5 text-special-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-slate-800 text-lg">
                    Proyección 2029
                  </CardTitle>
                  <CardDescription className="text-slate-500">
                    Escenarios post-graduación
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="rounded-xl border border-green-200/60 bg-gradient-to-r from-green-50/70 to-emerald-50/50 p-4">
                  <h5 className="font-semibold text-green-700 text-sm mb-2">
                    🚀 Escenario Optimista
                  </h5>
                  <p className="text-xs text-green-600 leading-relaxed">
                    Senior Developer en Applaudo Studios o empresa
                    internacional. Especialista en IA/Web. Salario $1,800-2,500.
                    Liderando proyectos innovadores.
                  </p>
                </div>

                <div className="rounded-xl border border-special-blue-200/60 bg-gradient-to-r from-special-blue-50/70 to-special-blue-100/50 p-4">
                  <h5 className="font-semibold text-special-blue-700 text-sm mb-2">
                    🎯 Escenario Realista
                  </h5>
                  <p className="text-xs text-special-blue-600 leading-relaxed">
                    Mid-level Developer en empresa tecnológica local.
                    Experiencia sólida en desarrollo web. Salario $1,200-1,600.
                    Crecimiento profesional estable.
                  </p>
                </div>

                <div className="rounded-xl border border-orange-200/60 bg-gradient-to-r from-orange-50/70 to-amber-50/50 p-4">
                  <h5 className="font-semibold text-orange-700 text-sm mb-2">
                    ⚠️ Escenario Conservador
                  </h5>
                  <p className="text-xs text-orange-600 leading-relaxed">
                    Junior/Mid Developer. Salario $800-1,200. Experiencia en
                    desarrollo web. Base sólida para crecimiento futuro y
                    especialización.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Riesgos */}
          <Card className="border-blue-100/60 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100/80 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <CardTitle className="text-slate-800 text-lg">
                    Riesgos y Mitigación
                  </CardTitle>
                  <CardDescription className="text-slate-500">
                    Factores de riesgo identificados
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-red-50/60 border border-red-100/40">
                  <h5 className="font-medium text-red-700 text-sm mb-1">
                    Presión Financiera
                  </h5>
                  <p className="text-xs text-red-600 mb-2">
                    $740/ciclo + gastos adicionales sin beca
                  </p>
                  <p className="text-xs text-slate-600">
                    <strong>Mitigación:</strong> Buscar trabajo part-time o
                    pasantías remuneradas
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-orange-50/60 border border-orange-100/40">
                  <h5 className="font-medium text-orange-700 text-sm mb-1">
                    Competencia Laboral
                  </h5>
                  <p className="text-xs text-orange-600 mb-2">
                    Mercado saturado de desarrolladores junior
                  </p>
                  <p className="text-xs text-slate-600">
                    <strong>Mitigación:</strong> Especialización en IA y
                    portfolio sólido
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-100/40">
                  <h5 className="font-medium text-amber-700 text-sm mb-1">
                    Cambios Tecnológicos
                  </h5>
                  <p className="text-xs text-amber-600 mb-2">
                    Evolución rápida de tecnologías y metodologías
                  </p>
                  <p className="text-xs text-slate-600">
                    <strong>Mitigación:</strong> Aprendizaje continuo y
                    adaptabilidad
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plan B */}
          <Card className="border-blue-100/60 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100/80 rounded-lg">
                  <RefreshCcw className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-slate-800 text-lg">
                    Plan Alternativo
                  </CardTitle>
                  <CardDescription className="text-slate-500">
                    Si el plan principal cambia
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl border border-purple-200/60 bg-gradient-to-r from-purple-50/70 to-indigo-50/50 p-4">
                <h5 className="font-semibold text-purple-700 text-sm mb-3">
                  Estrategia de Contingencia
                </h5>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-slate-700">
                        Cambio de Universidad:
                      </span>
                      <p className="text-xs text-slate-600 mt-1">
                        Considerar Key Institute si ofrece mejores condiciones o
                        innovación tecnológica
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-slate-700">
                        Modalidad Virtual:
                      </span>
                      <p className="text-xs text-slate-600 mt-1">
                        Explorar opciones de estudio remoto para reducir costos
                        de transporte y comida
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-slate-700">
                        Pausa Académica:
                      </span>
                      <p className="text-xs text-slate-600 mt-1">
                        Trabajar 1 año para ahorrar y aplicar a becas o mejores
                        oportunidades
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-slate-700">
                        Especialización Técnica:
                      </span>
                      <p className="text-xs text-slate-600 mt-1">
                        Enfocar en certificaciones profesionales y portfolio
                        mientras trabajo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
