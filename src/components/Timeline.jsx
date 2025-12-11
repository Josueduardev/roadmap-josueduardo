import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Calendar,
  GraduationCap,
  Briefcase,
  CheckCircle,
  Clock,
  Target,
  Award,
  BookOpen,
} from "lucide-react";

export const Timeline = () => {
  const timelineEvents = [
    {
      date: "13 de septiembre",
      title: "Examen de Admisión",
      subtitle: "Key Institute",
      description:
        "Evaluación de conocimientos para ingreso a la carrera de Ingeniería en Desarrollo de Software",
      icon: <BookOpen className="w-6 h-6" />,
      color: "#3B82F6",
      status: "completed",
    },
    {
      date: "30 de septiembre",
      title: "Búsqueda de Empleo",
      subtitle: "Oportunidades Laborales",
      description:
        "Inicio de búsqueda activa de oportunidades de trabajo part-time o pasantías",
      icon: <Briefcase className="w-6 h-6" />,
      color: "#10B981",
      status: "completed",
    },
    {
      date: "1 de octubre",
      title: "Entrevista",
      subtitle: "Key Institute",
      description:
        "Entrevista personal para evaluación de perfil y motivación académica",
      icon: <Target className="w-6 h-6" />,
      color: "#8B5CF6",
      status: "completed",
    },
    {
      date: "6 de octubre",
      title: "Finalización de Prácticas",
      subtitle: "150 horas completadas",
      description: "Culminación de prácticas profesionales en Key Institute",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "#059669",
      status: "completed",
    },
    {
      date: "13 de octubre",
      title: "Proyectos Universitarios",
      subtitle: "Materias Finalizadas",
      description:
        "Finalización de todos los proyectos de las materias universitarias",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "#DC2626",
      status: "completed",
    },
    {
      date: "27 de octubre",
      title: "Graduación Técnico",
      subtitle: "Técnico en Ingeniería en Computación",
      description: "Finalización de ciclo",
      icon: <Award className="w-6 h-6" />,
      color: "#EA580C",
      status: "completed",
    },
    {
      date: "8 de noviembre",
      title: "Resultados de Beca",
      subtitle: "Disponibilidad de Equivalencia",
      description:
        "Conocimiento de resultados de beca y disponibilidad para continuar con equivalencia en UDB",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "#7C3AED",
      status: "completed",
    },
    {
      date: "9 de noviembre",
      title: "Decisión Final",
      subtitle: "Elección de Universidad",
      description:
        "Tomar la decisión final sobre qué universidad elegir para continuar estudiando",
      icon: <Target className="w-6 h-6" />,
      color: "#DB2777",
      status: "completed",
    },
    {
      date: "Enero 2025",
      title: "Inicio de Ingeniería",
      subtitle: "Desarrollo de Software",
      description:
        "Comienzo oficial de la carrera de Ingeniería en Desarrollo de Software",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "#0891B2",
      status: "future",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "#10B981"; // Verde
      case "current":
        return "#F59E0B"; // Amarillo
      case "pending":
        return "#EF4444"; // Rojo
      case "future":
        return "#6B7280"; // Gris
      default:
        return "#3B82F6"; // Azul
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Completado";
      case "current":
        return "En Proceso";
      case "pending":
        return "Próximo";
      case "future":
        return "Futuro";
      default:
        return "Pendiente";
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-gray-600 font-bold text-xl">
          Timeline de eventos clave en el proceso de decisión universitaria
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-xl">
        <VerticalTimeline
          lineColor="#E5E7EB"
          layout="1-column"
          className="vertical-timeline-custom"
        >
          {timelineEvents.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "white",
                color: "#1F2937",
                border: `2px solid ${getStatusColor(event.status)}`,
                borderRadius: "12px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${getStatusColor(event.status)}`,
              }}
              date={event.date}
              dateClassName="text-gray-600 font-semibold"
              iconStyle={{
                background: getStatusColor(event.status),
                color: "white",
                border: `3px solid white`,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              icon={event.icon}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-gray-800">
                    {event.title}
                  </h4>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: getStatusColor(event.status) }}
                  >
                    {getStatusText(event.status)}
                  </span>
                </div>
                <h5 className="text-md font-semibold text-blue-600">
                  {event.subtitle}
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
