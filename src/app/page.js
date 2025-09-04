"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carrusel } from "@/components/Carrusel"
import { Options } from "@/components/Options";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FeaturesComparison } from "@/components/FeaturesComparison";

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
    <div className="min-h-screen bg-white" style={{
      background: "white",
      backgroundImage: `linear-gradient(to right, rgba(59,130,246,0.25) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(59,130,246,0.25) 1px, transparent 1px),
      radial-gradient(circle at 50% 50%, rgba(96,165,250,0.3) 0%, rgba(96,165,250,0.15) 40%, transparent 80%)`,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%"
    }}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
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
      <section className="py-16 px-4">
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
            Opciones Académicas Posibles
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
                university="Universidad Don Bosco"
                image="udb-logo.png"
                description="Continuar Ingeniería con Equivalencia"
                years="3 años restantes"
                travelTime="3 horas de viaje diario"
                payment="Pago completo de matrícula"
                aspect1="Equivalencia de materias"
                aspect2="Especialización técnica"
                aspect3="Continuidad técnica"
                aspect4="Posibilidad de estudiar y trabajar"
                link="/presupuesto-udb"
              />
            </motion.div>

            {/* Opción 2: Key Institute */}
            <motion.div variants={fadeInUp}>
              <Options
                university="Key Institute"
                image="key-logo.svg"
                description="Comenzar de nuevo y reforzar conocimientos"
                years="5 años restantes"
                travelTime="5 horas de viaje diario"
                payment="Pago parcial de matrícula"
                aspect1="Metodología innovadora"
                aspect2="Proyectos reales"
                aspect3="Red profesional"
                aspect4="Posibilidad de estudiar y trabajar"
                link="/presupuesto-key"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Comparación Financiera */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center text-foreground mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Comparación Financiera
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ComparisonTable />
            </motion.div>
          </div>
        </section>
        {/* 
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center text-foreground mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Comparación de Características y Ventajas
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FeaturesComparison />
            </motion.div>
          </div>
        </section> */}

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
