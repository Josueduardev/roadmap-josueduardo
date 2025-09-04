import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, DollarSign, GraduationCap, Clock } from "lucide-react";
import { useBudgetCalculator, formatCurrency } from "./BudgetCalculator";

export const ComparisonTable = () => {
  const [udbOptions, setUdbOptions] = useState({
    hasFirstYearSupport: false,
  });

  const [keyOptions, setKeyOptions] = useState({
    hasScholarship: false,
    scholarshipPercentage: 50,
  });

  const udbBudget = useBudgetCalculator("udb", udbOptions);
  const keyBudget = useBudgetCalculator("key", keyOptions);

  const scholarshipOptions = Array.from({ length: 17 }, (_, i) => 20 + i * 5);

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* UDB Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              Universidad Don Bosco
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <label className="text-sm font-medium flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                ¿Tengo apoyo para el 1° año?
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setUdbOptions({ hasFirstYearSupport: true })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    udbOptions.hasFirstYearSupport
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Sí
                </button>
                <button
                  onClick={() => setUdbOptions({ hasFirstYearSupport: false })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    !udbOptions.hasFirstYearSupport
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Institute Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-600" />
              Key Institute
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium flex items-center gap-2 mb-2">
                  <Calculator className="w-4 h-4" />
                  ¿Tengo beca?
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setKeyOptions({ ...keyOptions, hasScholarship: true })
                    }
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      keyOptions.hasScholarship
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Sí
                  </button>
                  <button
                    onClick={() =>
                      setKeyOptions({ ...keyOptions, hasScholarship: false })
                    }
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      !keyOptions.hasScholarship
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              {keyOptions.hasScholarship && (
                <div>
                  <label className="text-sm font-medium flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4" />
                    Porcentaje de beca
                  </label>
                  <select
                    value={keyOptions.scholarshipPercentage}
                    onChange={(e) =>
                      setKeyOptions({
                        ...keyOptions,
                        scholarshipPercentage: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {scholarshipOptions.map((percentage) => (
                      <option key={percentage} value={percentage}>
                        {percentage}%
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Comparación de Costos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-semibold">
                    Concepto
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <GraduationCap className="w-4 h-4 text-blue-600" />
                      UDB
                      <Badge variant="outline" className="text-xs">
                        {udbBudget?.years} años
                      </Badge>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <GraduationCap className="w-4 h-4 text-purple-600" />
                      Key Institute
                      <Badge variant="outline" className="text-xs">
                        {keyBudget?.years} años
                      </Badge>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">Gasto Mensual</td>
                  <td className="py-4 px-4 text-center">
                    <div className="font-semibold text-blue-600">
                      {formatCurrency(udbBudget?.monthly || 0)}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="font-semibold text-purple-600">
                      {formatCurrency(keyBudget?.monthly || 0)}
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">Gasto Anual</td>
                  <td className="py-4 px-4 text-center">
                    <div className="font-semibold text-blue-600">
                      {formatCurrency(udbBudget?.yearly || 0)}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="font-semibold text-purple-600">
                      {formatCurrency(keyBudget?.yearly || 0)}
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50 bg-gray-50">
                  <td className="py-4 px-4 font-bold">Total de la Carrera</td>
                  <td className="py-4 px-4 text-center">
                    <div className="font-bold text-lg text-blue-600">
                      {formatCurrency(udbBudget?.total || 0)}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="font-bold text-lg text-purple-600">
                      {formatCurrency(keyBudget?.total || 0)}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4 text-center">
                <div className="text-sm text-blue-600 font-medium mb-1">
                  Diferencia Total
                </div>
                <div className="text-xl font-bold text-blue-700">
                  {formatCurrency(
                    (keyBudget?.total || 0) - (udbBudget?.total || 0)
                  )}
                </div>
                <div className="text-xs text-blue-500 mt-1">
                  {(keyBudget?.total || 0) - (udbBudget?.total || 0) > 0
                    ? "Key es más caro"
                    : "UDB es más caro"}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4 text-center">
                <div className="text-sm text-green-600 font-medium mb-1">
                  Ahorro Mensual UDB
                </div>
                <div className="text-xl font-bold text-green-700">
                  {formatCurrency(
                    (keyBudget?.monthly || 0) - (udbBudget?.monthly || 0)
                  )}
                </div>
                <div className="text-xs text-green-500 mt-1">
                  vs Key Institute
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-4 text-center">
                <div className="text-sm text-purple-600 font-medium mb-1">
                  Tiempo de Estudio
                </div>
                <div className="text-xl font-bold text-purple-700">
                  {udbBudget?.years} vs {keyBudget?.years} años
                </div>
                <div className="text-xs text-purple-500 mt-1">
                  {udbBudget?.years < keyBudget?.years
                    ? "UDB es más rápido"
                    : "Key es más rápido"}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
