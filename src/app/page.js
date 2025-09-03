"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carrusel } from "@/components/Carrusel"
import { Options } from "@/components/Options";

import {
  GraduationCap,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  Code,
  Target,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Award,
  TrendingUp,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function CareerPresentation() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/5 to-accent/5">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Josué García
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Técnico en Ingeniería en Computación • Becado Programa Oportunidades
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Code className="w-4 h-4 mr-2" />
              Desarrollador de Software en Formación
            </Badge>
          </motion.div>
        </motion.div>
      </section>

      {/* Introducción */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Acerca de mi</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Actualmente cursando el último ciclo de Técnico en Ingeniería en Computación, beneficiario del programa
                de becas Oportunidades.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>Técnico en Ingeniería en Computación</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Becado por Programa Oportunidades</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Enfocado en Desarrollo de Software</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Carrusel />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Estado Actual */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Dónde Estoy Ahora
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Estudios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Último ciclo de Técnico en Ingeniería en Computación. Preparándome para la transición a nivel
                    universitario.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Ubicación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">UDB: 3 horas de viaje</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Key Institute: 5 horas de viaje</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Retos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Balancear tiempo de viaje, costos educativos y oportunidades de crecimiento profesional.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mis Caminos */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Opciones Académicas Disponibles
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {/* Opción 1: UDB */}
            <motion.div variants={fadeInUp}>
              <Options
                image="udb-logo.png"
                university="Universidad Don Bosco"
                description="Continuar Ingeniería con Equivalencia"
                years="3 años restantes"
                travelTime="3 horas de viaje diario"
                payment="Pago completo de matrícula"
                aspect1="Equivalencia de materias"
                aspect2="Especialización técnica"
                aspect3="Continuidad técnica"
                link="/presupuesto-udb"
              />
            </motion.div>

            {/* Opción 2: Key Institute */}
            <motion.div variants={fadeInUp}>
              <Options
                image="key-logo.svg"
                university="Key Institute"
                description="Comenzar de nuevo y reforzar conocimientos"
                years="5 años restantes"
                travelTime="5 horas de viaje diario"
                payment="Pago completo de matrícula"
                aspect1="Metodología innovadora"
                aspect2="Proyectos reales"
                aspect3="Red profesional"
                link="/presupuesto-key"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meta Profesional */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Mi Meta Profesional
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary/20 rounded-full p-4">
                <Code className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Desarrollador de Software Senior</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Convertirme en un desarrollador de software altamente capacitado, especializado en tecnologías modernas,
              con capacidad de liderazgo técnico y contribución significativa a proyectos innovadores.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Especialización Técnica</h4>
                  <p className="text-sm text-muted-foreground">
                    Dominio de frameworks modernos, arquitecturas escalables y mejores prácticas
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Liderazgo Técnico</h4>
                  <p className="text-sm text-muted-foreground">
                    Capacidad de guiar equipos, mentorear desarrolladores junior y tomar decisiones técnicas
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Impacto Profesional</h4>
                  <p className="text-sm text-muted-foreground">
                    Contribuir a proyectos que generen valor real y transformación digital
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Plan de Acción */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Próximos Pasos
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              "Evaluar detalladamente costos y beneficios de cada opción",
              "Visitar ambas instituciones para conocer instalaciones y metodologías",
              "Consultar con profesionales del sector sobre perspectivas laborales",
              "Analizar opciones de financiamiento y becas adicionales",
              "Definir cronograma de decisión para el próximo ciclo académico",
              "Preparar documentación necesaria para el proceso de admisión",
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 p-4 bg-card rounded-lg border"
              >
                <div className="bg-primary/20 rounded-full p-2 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground">{step}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button size="lg" className="gap-2">
              Comenzar Evaluación
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-card">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Josué García - Presentación de Plan de Carrera Profesional</p>
        </div>
      </footer>
    </div>
  )
}
