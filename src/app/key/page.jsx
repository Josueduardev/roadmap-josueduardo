"use client";
import React, { useState, useMemo } from "react";
import { Calculator, DollarSign, GraduationCap } from "lucide-react";

const BudgetCalculator = () => {
  const [hasScholarship, setHasScholarship] = useState(true);
  const [scholarshipPercentage, setScholarshipPercentage] = useState(50);

  const calculations = useMemo(() => {
    const baseMensuality = 750; // Costo base mensual
    const transportCost = 35; // Transporte fijo mensual
    const foodCost = 100; // Comida fija mensual

    // Calcular mensualidad con beca
    const scholarshipDiscount = hasScholarship
      ? scholarshipPercentage / 100
      : 0;
    const discountedMensuality = baseMensuality * (1 - scholarshipDiscount);

    // Calcular totales
    const totalMonthly = discountedMensuality + transportCost + foodCost;
    const totalYearly = totalMonthly * 12;
    const totalCareer = totalYearly * 5; // 5 años de carrera

    return {
      baseMensuality,
      discountedMensuality,
      transportCost,
      foodCost,
      totalMonthly,
      totalYearly,
      totalCareer,
      scholarshipAmount: baseMensuality * scholarshipDiscount,
    };
  }, [hasScholarship, scholarshipPercentage]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const scholarshipOptions = Array.from({ length: 17 }, (_, i) => 20 + i * 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">Key Institute</h1>
          </div>
          <h2 className="text-xl text-gray-300 mb-2">
            Calculadora de Presupuesto
          </h2>
          <p className="text-gray-400">
            Planifica tu inversión académica con precisión
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Scholarship Toggle */}
            <div className="space-y-4">
              <label className="text-white font-semibold flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-400" />
                ¿Tengo alguna beca?
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => setHasScholarship(true)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    hasScholarship
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  Sí
                </button>
                <button
                  onClick={() => setHasScholarship(false)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    !hasScholarship
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Scholarship Percentage */}
            {hasScholarship && (
              <div className="space-y-4">
                <label className="text-white font-semibold flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  Porcentaje de Beca
                </label>
                <select
                  value={scholarshipPercentage}
                  onChange={(e) =>
                    setScholarshipPercentage(Number(e.target.value))
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  {scholarshipOptions.map((percentage) => (
                    <option
                      key={percentage}
                      value={percentage}
                      className="bg-gray-800 text-white"
                    >
                      {percentage}%
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Budget Table */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
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
                      Monto Mensual
                    </th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                    <td className="py-4 px-4 text-white">Mensualidad Base</td>
                    <td className="py-4 px-4 text-right text-gray-400 line-through">
                      {formatCurrency(calculations.baseMensuality)}
                    </td>
                  </tr>

                  {hasScholarship && (
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                      <td className="py-4 px-4 text-green-400">
                        Descuento por Beca ({scholarshipPercentage}%)
                      </td>
                      <td className="py-4 px-4 text-right text-green-400">
                        -{formatCurrency(calculations.scholarshipAmount)}
                      </td>
                    </tr>
                  )}

                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                    <td className="py-4 px-4 text-white">
                      Mensualidad {hasScholarship ? "con Beca" : "sin Beca"}
                    </td>
                    <td className="py-4 px-4 text-right text-white font-semibold">
                      {formatCurrency(calculations.discountedMensuality)}
                    </td>
                  </tr>

                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                    <td className="py-4 px-4 text-white">Transporte</td>
                    <td className="py-4 px-4 text-right text-white">
                      {formatCurrency(calculations.transportCost)}
                    </td>
                  </tr>

                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                    <td className="py-4 px-4 text-white">Alimentación</td>
                    <td className="py-4 px-4 text-right text-white">
                      {formatCurrency(calculations.foodCost)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Monthly Total */}
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
            <div className="text-center">
              <h4 className="text-blue-400 font-semibold mb-2">
                Total Mensual
              </h4>
              <p className="text-3xl font-bold text-white mb-1">
                {formatCurrency(calculations.totalMonthly)}
              </p>
              <p className="text-blue-300 text-sm">Por mes</p>
            </div>
          </div>

          {/* Yearly Total */}
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
            <div className="text-center">
              <h4 className="text-purple-400 font-semibold mb-2">
                Total Anual
              </h4>
              <p className="text-3xl font-bold text-white mb-1">
                {formatCurrency(calculations.totalYearly)}
              </p>
              <p className="text-purple-300 text-sm">Por año</p>
            </div>
          </div>

          {/* Career Total */}
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
            <div className="text-center">
              <h4 className="text-green-400 font-semibold mb-2">
                Total Carrera
              </h4>
              <p className="text-3xl font-bold text-white mb-1">
                {formatCurrency(calculations.totalCareer)}
              </p>
              <p className="text-green-300 text-sm">5 años completos</p>
            </div>
          </div>
        </div>

        {/* Savings Indicator */}
        {hasScholarship && (
          <div className="mt-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
            <div className="text-center">
              <h4 className="text-green-400 font-semibold mb-2">
                💰 Ahorro Total por Beca
              </h4>
              <p className="text-2xl font-bold text-white mb-1">
                {formatCurrency(calculations.scholarshipAmount * 12 * 5)}
              </p>
              <p className="text-green-300">
                Ahorras {formatCurrency(calculations.scholarshipAmount)}{" "}
                mensuales durante 5 años
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetCalculator;
