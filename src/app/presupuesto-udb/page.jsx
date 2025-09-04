"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Calculator,
  DollarSign,
  Briefcase,
  ArrowLeft,
  University,
} from "lucide-react";

export default function BudgetCalculator() {
  const [hasFirstYearSupport, setHasFirstYearSupport] = useState(false);
  const router = useRouter();

  const calculations = useMemo(() => {
    const fixedIncome = 75; // Pensión de sobrevivencia

    // Gastos mensuales fijos
    const monthlyTuition = 100;
    const transportCost = 40;
    const foodCost = 80;

    // Gastos por ciclo (6 meses)
    const enrollmentCost = 40;
    const academicServicesCost = 50;
    const labCost = 150;

    // Calcular promedios y totales
    const totalMonthlyFixed = monthlyTuition + transportCost + foodCost;
    const totalCycleFixed = enrollmentCost + academicServicesCost + labCost;
    const totalCycleExpenses = totalMonthlyFixed * 5 + totalCycleFixed;
    const totalYearlyExpenses = totalCycleExpenses * 2;
    const averageMonthlyExpenses = totalYearlyExpenses / 10;

    const careerLength = hasFirstYearSupport ? 2 : 3;
    const totalCareerExpenses = totalYearlyExpenses * careerLength;

    const balance = averageMonthlyExpenses - fixedIncome;

    // Calcular rango salarial necesario
    const minSalary = Math.ceil(balance + 32);
    const maxSalary = minSalary + 100;

    return {
      monthlyTuition,
      transportCost,
      foodCost,
      enrollmentCost,
      academicServicesCost,
      labCost,
      totalMonthlyFixed,
      totalCycleFixed,
      totalCycleExpenses,
      totalYearlyExpenses,
      averageMonthlyExpenses,
      balance,
      totalCareerExpenses,
      fixedIncome,
      minSalary,
      maxSalary,
    };
  }, [hasFirstYearSupport]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div
      className="min-h-screen bg-[#0f172a] py-16"
      style={{
        backgroundImage:
          "radial-gradient(circle 600px at 50% 50%, rgba(59, 130, 246, 0.3), transparent)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <ArrowLeft
          color="white"
          className="size-8 cursor-pointer transition-all duration-300 ease-out hover:translate-x-[-4px] hover:opacity-80"
          onClick={() => router.back()}
        />
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/assets/udb-logo-blanco.svg"
              alt="Universidad Don Bosco"
              width={400}
              height={300}
            />
          </div>
          <h2 className="text-xl py-4 text-gray-300 mb-2">
            Calculadora de Presupuesto para continuar estudiando
            <br />{" "}
            <strong>Ingeniería en Ciencias de la Computación en la UDB</strong>
          </h2>
        </div>

        {/* Controls */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Year Support Toggle */}
            <div className="space-y-4">
              <label className="text-white font-semibold flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-300" />
                ¿Tengo apoyo para cubrir el 1° año de Ingeniería?
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => setHasFirstYearSupport(true)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    hasFirstYearSupport
                      ? "bg-blue-700 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  Sí
                </button>
                <button
                  onClick={() => setHasFirstYearSupport(false)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    !hasFirstYearSupport
                      ? "bg-blue-700 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Budget & Income Tables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Budget Table */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-6">
              <h3 className="text-xl font-bold text-white text-center">
                Desglose de Presupuesto
              </h3>
            </div>

            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-4 text-gray-300 font-semibold">
                        Concepto
                      </th>
                      <th className="text-right py-4 px-4 text-gray-300 font-semibold">
                        Monto
                      </th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                      <td className="py-4 px-4 text-white">Cuota Mensual</td>
                      <td className="py-4 px-4 text-right text-white">
                        {formatCurrency(calculations.monthlyTuition)}
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                      <td className="py-4 px-4 text-white">
                        Transporte Mensual
                      </td>
                      <td className="py-4 px-4 text-right text-white">
                        {formatCurrency(calculations.transportCost)}
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                      <td className="py-4 px-4 text-white">
                        Alimentación Mensual
                      </td>
                      <td className="py-4 px-4 text-right text-white">
                        {formatCurrency(calculations.foodCost)}
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                      <td className="py-4 px-4 text-white">
                        Matrícula por ciclo
                      </td>
                      <td className="py-4 px-4 text-right text-white">
                        {formatCurrency(calculations.enrollmentCost)}
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                      <td className="py-4 px-4 text-white">
                        Servicios Académicos por ciclo
                      </td>
                      <td className="py-4 px-4 text-right text-white">
                        {formatCurrency(calculations.academicServicesCost)}
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                      <td className="py-4 px-4 text-white">
                        Laboratorios por ciclo
                      </td>
                      <td className="py-4 px-4 text-right text-white">
                        {formatCurrency(calculations.labCost)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Income & Salary Table */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="bg-gradient-to-r from-green-900 to-green-700 p-6">
              <h3 className="text-xl font-bold text-white text-center">
                Ingresos y Salario Necesario
              </h3>
            </div>

            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-4 text-gray-300 font-semibold">
                        Concepto
                      </th>
                      <th className="text-right py-4 px-4 text-gray-300 font-semibold">
                        Monto Mensual
                      </th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                      <td className="py-4 px-4 text-green-300">
                        Pensión de sobrevivencia
                      </td>
                      <td className="py-4 px-4 text-right text-green-300">
                        {formatCurrency(calculations.fixedIncome)}
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                      <td className="py-4 px-4 text-white">
                        Gasto Mensual Promedio a cubrir
                      </td>
                      <td className="py-4 px-4 text-right text-white font-semibold">
                        {formatCurrency(calculations.balance)}
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                      <td className="py-4 px-4 text-blue-300 flex items-center gap-2 font-bold">
                        <Briefcase className="w-5 h-5" /> Ingreso Necesario
                      </td>
                      <td className="py-4 px-4 text-right text-blue-300 font-semibold">
                        {formatCurrency(calculations.minSalary)} -{" "}
                        {formatCurrency(calculations.maxSalary)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {/* Monthly Total */}
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-700/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
            <div className="text-center">
              <h4 className="text-blue-300 font-semibold mb-2">
                Gasto Mensual Promedio
              </h4>
              <p className="text-3xl font-bold text-white mb-1">
                {formatCurrency(calculations.averageMonthlyExpenses)}
              </p>
              <p className="text-blue-200 text-sm">Por mes</p>
            </div>
          </div>

          {/* Cycle Total */}
          <div className="bg-gradient-to-br from-indigo-900/20 to-indigo-700/20 backdrop-blur-lg rounded-2xl p-6 border border-indigo-500/30">
            <div className="text-center">
              <h4 className="text-indigo-300 font-semibold mb-2">
                Total por Ciclo
              </h4>
              <p className="text-3xl font-bold text-white mb-1">
                {formatCurrency(calculations.totalCycleExpenses)}
              </p>
              <p className="text-indigo-200 text-sm">5 meses</p>
            </div>
          </div>

          {/* Yearly Total */}
          <div className="bg-gradient-to-br from-indigo-900/20 to-indigo-700/20 backdrop-blur-lg rounded-2xl p-6 border border-indigo-500/30">
            <div className="text-center">
              <h4 className="text-indigo-300 font-semibold mb-2">
                Total Anual
              </h4>
              <p className="text-3xl font-bold text-white mb-1">
                {formatCurrency(calculations.totalYearlyExpenses)}
              </p>
              <p className="text-indigo-200 text-sm">Por año (2 ciclos)</p>
            </div>
          </div>

          {/* Career Total */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-700/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
            <div className="text-center">
              <h4 className="text-green-300 font-semibold mb-2">
                Total Carrera
              </h4>
              <p className="text-3xl font-bold text-white mb-1">
                {formatCurrency(calculations.totalCareerExpenses)}
              </p>
              <p className="text-green-200 text-sm">
                {hasFirstYearSupport ? "2 años completos" : "3 años completos"}
              </p>
            </div>
          </div>
        </div>

        {/* Savings Indicator */}
        {hasFirstYearSupport && (
          <div className="mt-6 bg-gradient-to-r from-green-900/20 to-green-700/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
            <div className="text-center">
              <h4 className="text-green-300 font-semibold mb-2">
                💰 Ahorro Total por Apoyo del 1er Año
              </h4>
              <p className="text-2xl font-bold text-white mb-1">
                {formatCurrency(calculations.totalYearlyExpenses)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
