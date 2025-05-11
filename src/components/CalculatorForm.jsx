//Файл містить компонент CalculatorForm, який є формою для введення даних

const CalculatorForm = ({ data, totals, onChange, onCalculate }) => {
  return (
    <div className="calculator-form">
      <h2>Вхідні дані</h2>
      <table>
        <thead>
          <tr>
            <th>Найменування ЕП</th>
            <th>n</th>
            <th>P, кВт</th>
            <th>η</th>
            <th>cosφ</th>
            <th>Кв</th>
            <th>tgφ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <input
                  type="number"
                  value={item.n}
                  onChange={(e) => onChange(index, "n", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.p}
                  onChange={(e) => onChange(index, "p", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.eta}
                  onChange={(e) => onChange(index, "eta", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.cosphi}
                  onChange={(e) => onChange(index, "cosphi", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.k}
                  onChange={(e) => onChange(index, "k", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.tgphi}
                  onChange={(e) => onChange(index, "tgphi", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Загальні значення</th>
            <th>{totals.n}</th>
            <th colSpan="3"></th>
            <th>{totals.npk.toFixed(2)}</th>
            <th>{totals.npktg.toFixed(2)}</th>
          </tr>
        </tfoot>
      </table>
      <button className="calculate-button" onClick={onCalculate}>
        Розрахувати
      </button>
    </div>
  );
};

export default CalculatorForm;
