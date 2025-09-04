import { useMemo } from "react";

export const useBudgetCalculator = (type, options = {}) => {
  return useMemo(() => {
    const fixedIncome = 75; // Pensión de sobrevivencia

    if (type === "udb") {
      const { hasFirstYearSupport = false } = options;

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
      const totalCycleExpenses = totalMonthlyFixed * 6 + totalCycleFixed;
      const totalYearlyExpenses = totalCycleExpenses * 2;
      const averageMonthlyExpenses = totalYearlyExpenses / 12;

      const careerLength = hasFirstYearSupport ? 2 : 3;
      const totalCareerExpenses = totalYearlyExpenses * careerLength;

      return {
        monthly: averageMonthlyExpenses,
        yearly: totalYearlyExpenses,
        total: totalCareerExpenses,
        years: careerLength,
        fixedIncome,
      };
    }

    if (type === "key") {
      const { hasScholarship = false, scholarshipPercentage = 50 } = options;

      const baseMensuality = 750;
      const transportCost = 35;
      const foodCost = 100;

      // Calcular mensualidad con beca
      const scholarshipDiscount = hasScholarship
        ? scholarshipPercentage / 100
        : 0;
      const discountedMensuality = baseMensuality * (1 - scholarshipDiscount);

      // Calcular totales de gastos
      const totalMonthlyExpenses =
        discountedMensuality + transportCost + foodCost;
      const totalYearly = totalMonthlyExpenses * 12;
      const totalCareer = totalYearly * 5; // 5 años de carrera

      return {
        monthly: totalMonthlyExpenses,
        yearly: totalYearly,
        total: totalCareer,
        years: 5,
        fixedIncome,
      };
    }

    return null;
  }, [type, options]);
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
};
