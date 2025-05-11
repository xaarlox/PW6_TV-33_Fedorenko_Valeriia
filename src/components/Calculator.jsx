//Файл містить компонент Calculator, який є основним контейнером для веб-калькулятора

import { useState, useEffect } from "react";
import CalculatorForm from "./CalculatorForm";
import ResultsDisplay from "./ResultsDisplay";
import {
  calculateRow,
  calculateSR1Results,
  calculateWorkshopResults,
} from "../utils/calculations";
import "./Calculator.css";

const initialData = [
  {
    name: "Шліфувальний верстат (1-4)",
    n: 4,
    p: 20,
    eta: 0.92,
    cosphi: 0.9,
    k: 0.15,
    tgphi: 1.33,
  },
  {
    name: "Свердлильний верстат (5-6)",
    n: 2,
    p: 14,
    eta: 0.92,
    cosphi: 0.9,
    k: 0.12,
    tgphi: 1,
  },
  {
    name: "Фугувальний верстат (9-12)",
    n: 4,
    p: 42,
    eta: 0.92,
    cosphi: 0.9,
    k: 0.15,
    tgphi: 1.33,
  },
  {
    name: "Циркулярна пила (13)",
    n: 1,
    p: 36,
    eta: 0.92,
    cosphi: 0.9,
    k: 0.3,
    tgphi: 1.52,
  },
  {
    name: "Прес (16)",
    n: 1,
    p: 20,
    eta: 0.92,
    cosphi: 0.9,
    k: 0.5,
    tgphi: 0.75,
  },
  {
    name: "Полірувальний верстат (24)",
    n: 1,
    p: 40,
    eta: 0.92,
    cosphi: 0.9,
    k: 0.2,
    tgphi: 1,
  },
  {
    name: "Фрезерний верстат (26-27)",
    n: 2,
    p: 32,
    eta: 0.92,
    cosphi: 0.9,
    k: 0.2,
    tgphi: 1,
  },
  {
    name: "Вентилятор (36)",
    n: 1,
    p: 20,
    eta: 0.92,
    cosphi: 0.9,
    k: 0.65,
    tgphi: 0.75,
  },
];

function Calculator() {
  const [data, setData] = useState(initialData);
  const [totals, setTotals] = useState({
    n: 0,
    np: 0,
    ip: 0,
    npk: 0,
    npktg: 0,
    np2: 0,
  });
  const [sr1Results, setSR1Results] = useState(null);
  const [workshopResults, setWorkshopResults] = useState(null);

  useEffect(() => {
    const calculatedData = initialData.map(calculateRow);
    setData(calculatedData);
  }, []);

  useEffect(() => {
    const calculatedTotals = data.reduce(
      (acc, item) => ({
        n: acc.n + item.n,
        np: acc.np + item.np,
        ip: acc.ip + item.ip,
        npk: acc.npk + item.npk,
        npktg: acc.npktg + item.npktg,
        np2: acc.np2 + item.np2,
      }),
      { n: 0, np: 0, ip: 0, npk: 0, npktg: 0, np2: 0 }
    );
    setTotals(calculatedTotals);
  }, [data]);

  const handleInputChange = (index, field, value) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      [field]: parseFloat(value) || 0,
    };
    newData[index] = calculateRow(newData[index]);
    setData(newData);
  };

  const handleCalculateResults = () => {
    const sr1 = calculateSR1Results(totals);
    const workshop = calculateWorkshopResults();
    setSR1Results(sr1);
    setWorkshopResults(workshop);
  };

  return (
    <div className="calculator-container">
      <h1>Калькулятор електричних навантажень</h1>
      <CalculatorForm
        data={data}
        totals={totals}
        onChange={handleInputChange}
        onCalculate={handleCalculateResults}
      />
      {sr1Results && (
        <ResultsDisplay
          sr1Results={sr1Results}
          workshopResults={workshopResults}
        />
      )}
    </div>
  );
}

export default Calculator;
