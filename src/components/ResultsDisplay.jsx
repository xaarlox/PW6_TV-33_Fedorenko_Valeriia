//Файл містить компонент ResultsDisplay, який відповідає за відображення результатів розрахунків

const ResultsDisplay = ({ sr1Results, workshopResults }) => (
  <div className="results">
    <h2>Результати розрахунків</h2>

    <div className="results-section">
      <h3>Результати для ШР1</h3>
      <div className="result-item">
        <p>Груповий коефіцієнт використання: {sr1Results.kv.toFixed(4)}</p>
      </div>
      <div className="result-item">
        <p>Ефективна кількість ЕП: {sr1Results.ne}</p>
      </div>
      <div className="result-item">
        <p>
          Розрахунковий коефіцієнт активної потужності:{" "}
          {sr1Results.kp.toFixed(2)}
        </p>
      </div>
      <div className="result-item">
        <p>Розрахункове активне навантаження: {sr1Results.pp.toFixed(2)} кВт</p>
      </div>
      <div className="result-item">
        <p>
          Розрахункове реактивне навантаження: {sr1Results.qp.toFixed(2)} квар
        </p>
      </div>
      <div className="result-item">
        <p>Повна потужність: {sr1Results.sp.toFixed(2)} кВ·А</p>
      </div>
      <div className="result-item">
        <p>Розрахунковий груповий струм: {sr1Results.ip.toFixed(2)} А</p>
      </div>
    </div>

    {workshopResults && (
      <div className="results-section">
        <h3>Результати для цеху</h3>
        <div className="result-item">
          <p>
            Груповий коефіцієнт використання цеху:{" "}
            {workshopResults.kvWorkshop.toFixed(4)}
          </p>
        </div>
        <div className="result-item">
          <p>
            Ефективна кількість ЕП цеху: {workshopResults.neWorkshopRounded}
          </p>
        </div>
        <div className="result-item">
          <p>
            Розрахунковий коефіцієнт активної потужності:{" "}
            {workshopResults.kpWorkshop.toFixed(2)}
          </p>
        </div>
        <div className="result-item">
          <p>
            Розрахункове активне навантаження:{" "}
            {workshopResults.ppWorkshop.toFixed(2)} кВт
          </p>
        </div>
        <div className="result-item">
          <p>
            Розрахункове реактивне навантаження:{" "}
            {workshopResults.qpWorkshop.toFixed(2)} квар
          </p>
        </div>
        <div className="result-item">
          <p>Повна потужність: {workshopResults.spWorkshop.toFixed(2)} кВ·А</p>
        </div>
        <div className="result-item">
          <p>
            Розрахунковий груповий струм:{" "}
            {workshopResults.ipWorkshop.toFixed(2)} А
          </p>
        </div>
      </div>
    )}
  </div>
);

export default ResultsDisplay;
