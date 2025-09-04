import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  XCircle,
  GraduationCap,
  Clock,
  DollarSign,
  Users,
  Building2,
  BookOpen,
  Award,
  MapPin,
  Briefcase,
} from "lucide-react";

export const FeaturesComparison = () => {
  const features = [
    {
      category: "Académico",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        {
          name: "Equivalencia de materias técnicas",
          udb: true,
          key: false,
          description: "Reconocimiento de materias del técnico",
        },
        {
          name: "Metodología innovadora",
          udb: false,
          key: true,
          description: "Enfoque en proyectos reales y práctica",
        },
        {
          name: "Especialización en IA",
          udb: true,
          key: true,
          description: "Programas de inteligencia artificial",
        },
        {
          name: "Laboratorios modernos",
          udb: true,
          key: true,
          description: "Infraestructura tecnológica actualizada",
        },
        {
          name: "Proyectos con empresas",
          udb: true,
          key: true,
          description: "Colaboración con industria real",
        },
      ],
    },
    {
      category: "Financiero",
      icon: <DollarSign className="w-5 h-5" />,
      items: [
        {
          name: "Posibilidad de estudiar y trabajar",
          udb: true,
          key: true,
          description: "Flexibilidad horaria para trabajo part-time",
        },
        {
          name: "Programas de becas disponibles",
          udb: true,
          key: true,
          description: "Opciones de financiamiento y becas",
        },
        {
          name: "Pago por ciclos",
          udb: true,
          key: false,
          description: "Flexibilidad en pagos por período",
        },
        {
          name: "Becas por excelencia académica",
          udb: true,
          key: true,
          description: "Incentivos por buen rendimiento",
        },
        {
          name: "Convenios con empresas",
          udb: true,
          key: true,
          description: "Oportunidades de financiamiento empresarial",
        },
      ],
    },
    {
      category: "Tiempo y Ubicación",
      icon: <Clock className="w-5 h-5" />,
      items: [
        {
          name: "Duración de carrera (3 años)",
          udb: true,
          key: false,
          description: "Tiempo reducido por equivalencias",
        },
        {
          name: "Duración de carrera (5 años)",
          udb: false,
          key: true,
          description: "Formación completa desde cero",
        },
        {
          name: "Cerca de casa (3 horas viaje)",
          udb: true,
          key: false,
          description: "Menor tiempo de desplazamiento",
        },
        {
          name: "Lejos de casa (5 horas viaje)",
          udb: false,
          key: true,
          description: "Mayor tiempo de desplazamiento",
        },
        {
          name: "Modalidad presencial",
          udb: true,
          key: true,
          description: "Clases presenciales obligatorias",
        },
      ],
    },
    {
      category: "Red y Oportunidades",
      icon: <Users className="w-5 h-5" />,
      items: [
        {
          name: "Red de contactos establecida",
          udb: true,
          key: false,
          description: "Conexiones de 3 años de técnico",
        },
        {
          name: "Networking empresarial",
          udb: true,
          key: true,
          description: "Eventos y conexiones con empresas",
        },
        {
          name: "Programas de intercambio",
          udb: true,
          key: true,
          description: "Oportunidades internacionales",
        },
        {
          name: "Ferias de empleo",
          udb: true,
          key: true,
          description: "Eventos de reclutamiento empresarial",
        },
        {
          name: "Mentoría de egresados",
          udb: true,
          key: true,
          description: "Apoyo de profesionales graduados",
        },
      ],
    },
    {
      category: "Prestigio y Reconocimiento",
      icon: <Award className="w-5 h-5" />,
      items: [
        {
          name: "Más de 40 años de experiencia",
          udb: true,
          key: false,
          description: "Trayectoria consolidada en educación",
        },
        {
          name: "Reconocimiento internacional",
          udb: true,
          key: true,
          description: "Acreditaciones y certificaciones",
        },
        {
          name: "Ranking universitario",
          udb: true,
          key: false,
          description: "Posición en rankings nacionales",
        },
        {
          name: "Innovación tecnológica",
          udb: false,
          key: true,
          description: "Enfoque en tecnologías emergentes",
        },
        {
          name: "Tradición salesiana",
          udb: true,
          key: false,
          description: "Valores y metodología salesiana",
        },
      ],
    },
  ];

  const getIcon = (hasFeature) => {
    return hasFeature ? (
      <CheckCircle className="w-6 h-6 text-green-500" />
    ) : (
      <XCircle className="w-6 h-6 text-red-500" />
    );
  };

  const getCategoryColor = (category) => {
    const colors = {
      Académico: "blue",
      Financiero: "green",
      "Tiempo y Ubicación": "orange",
      "Red y Oportunidades": "purple",
      "Prestigio y Reconocimiento": "indigo",
    };
    return colors[category] || "gray";
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Comparación de Características
        </h3>
        <p className="text-muted-foreground">
          Análisis detallado de ventajas y desventajas de cada opción
        </p>
      </div>

      {features.map((category, categoryIndex) => (
        <Card key={categoryIndex} className="overflow-hidden">
          <CardHeader
            className={`bg-${getCategoryColor(category.category)}-50 border-b`}
          >
            <CardTitle
              className={`flex items-center gap-2 text-${getCategoryColor(
                category.category
              )}-700`}
            >
              {category.icon}
              {category.category}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left py-4 px-6 font-semibold w-1/2">
                      Característica
                    </th>
                    <th className="text-center py-4 px-6 font-semibold w-1/4">
                      <div className="flex items-center justify-center gap-2">
                        <GraduationCap className="w-4 h-4 text-blue-600" />
                        UDB
                      </div>
                    </th>
                    <th className="text-center py-4 px-6 font-semibold w-1/4">
                      <div className="flex items-center justify-center gap-2">
                        <GraduationCap className="w-4 h-4 text-purple-600" />
                        Key Institute
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((item, itemIndex) => (
                    <tr
                      key={itemIndex}
                      className="border-b hover:bg-muted/30 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div>
                          <div className="font-medium text-foreground">
                            {item.name}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {item.description}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        {getIcon(item.udb)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {getIcon(item.key)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Resumen de puntuaciones */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-center">Resumen de Puntuaciones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-700">
                  Universidad Don Bosco
                </span>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {features.reduce(
                  (total, category) =>
                    total + category.items.filter((item) => item.udb).length,
                  0
                )}{" "}
                /{" "}
                {features.reduce(
                  (total, category) => total + category.items.length,
                  0
                )}
              </div>
              <div className="text-sm text-blue-500">
                Características favorables
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-700">
                  Key Institute
                </span>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {features.reduce(
                  (total, category) =>
                    total + category.items.filter((item) => item.key).length,
                  0
                )}{" "}
                /{" "}
                {features.reduce(
                  (total, category) => total + category.items.length,
                  0
                )}
              </div>
              <div className="text-sm text-purple-500">
                Características favorables
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
