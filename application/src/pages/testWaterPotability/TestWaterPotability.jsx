import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TestWaterPotability.css";
import { BarLoader } from "react-spinners";

function TestWaterPotability() {
  document.title = "FDM | water potability";

  const [phValue, setPhValue] = useState(1);

  const [ironAmt, setIronAmt] = useState(1);
  const [ironDec, setIronDec] = useState(1);
  const [finalIronValue, setFinalIronValue] = useState(1);

  const [nitrateAmt, setNitrateAmt] = useState(1);
  const [chlorideAmt, setChlorideAmt] = useState(1);
  const [color, setColor] = useState("Colorless");
  const [month, setMonth] = useState("January");

  const [turbidityAmt, setTurbidityAmt] = useState(1);
  const [turbidityDec, setTurbidityDec] = useState(1);
  const [finalTurbidityValue, setFinalTurbidityValue] = useState(1);

  const [fluorideAmt, setFluorideAmt] = useState(1);
  const [fluorideDec, setFluorideDec] = useState(1);
  const [finalfluorideValue, setFinalFluorideValue] = useState(1);

  const [copperAmt, setCopperAmt] = useState(1);
  const [copperDec, setCopperDec] = useState(1);
  const [finalCopperValue, setFinalCopperValue] = useState(1);

  const [odorAmt, setOdorAmt] = useState(1);
  const [sulfateAmt, setSulfateAmt] = useState(1);
  const [conductivityAmt, setConductivityAmt] = useState(1);
  const [chlorineAmt, setChlorineAmt] = useState(1);

  const [manganeseAmt, setManganeseAmt] = useState(1);
  const [manganeseDec, setManganeseDec] = useState(1);
  const [finalManganeseValue, setFinalManganeseValue] = useState(1);
  const [TDS, setTDS] = useState(1);
  const [waterTemp, setWaterTemp] = useState(1);
  const [airTemp, setAirTemp] = useState(1);
  const [day, setDay] = useState(1);

  const [predictionRes, setPredictionRes] = useState("None");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFinalIronValue(ironAmt * Math.pow(10, ironDec));
    setFinalTurbidityValue(turbidityAmt * Math.pow(10, turbidityDec));
    setFinalFluorideValue(fluorideAmt * Math.pow(10, fluorideDec));
    setFinalCopperValue(copperAmt * Math.pow(10, copperDec));
    setFinalManganeseValue(manganeseAmt * Math.pow(10, manganeseDec));
  }, [ironAmt, ironDec, turbidityAmt, turbidityDec, fluorideAmt, fluorideDec, copperAmt, copperDec, manganeseAmt, manganeseDec]);

  let predValues;

  async function getPrediction(e) {
    e.preventDefault();
    setIsLoading(true);

    predValues = {
      pH: phValue,
      iron: finalIronValue,
      nitrate: nitrateAmt,
      chloride: chlorideAmt,
      color: color,
      turbidity: finalTurbidityValue,
      fluoride: finalfluorideValue,
      copper: finalCopperValue,
      odor: odorAmt,
      sulfate: sulfateAmt,
      conductivity: conductivityAmt,
      chlorine: chlorineAmt,
      manganese: finalManganeseValue,
      totalDissolvedSolids: TDS,
      waterTemp: waterTemp,
      airTemp: airTemp,
      month: month,
      day: day,
    };

    console.log("FINAL VAL", predValues);

    const response = await axios
      .post(
        `https://wqp-function.azurewebsites.net/api/http_trigger_fdm_wqp?code=W4-e2qmVv887cVROqiUiBKJkOUSpAd8ih-YmxNCh5u5uAzFuhetIFQ==`,
        predValues,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        console.log("pred value ", res.data);
        setPredictionRes(res.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Response Data:", error.response.data);
          console.error("Response Status:", error.response.status);
        } else if (error.request) {
          console.error("Request:", error.request);
        } else {
          console.error("Error Message:", error.message);
        }
      });

    setIsLoading(false);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <form className="formContainer" onSubmit={getPrediction}>
              <div className="row">
                <div className="col-md-6">
                  {/* Left Column */}
                  <div class="mb-3">
                    <label for="ph" class="form-label">
                      pH value
                    </label>
                    <div className="horizontal-slider">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={phValue}
                        onChange={(e) => {
                          setPhValue(parseFloat(e.target.value));
                        }}
                        className="slider"
                      />
                      <div className="slider-value">{phValue} pH</div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="Iron" class="form-label">
                      Iron
                    </label>
                    <div className="horizontal-slider">
                      <div className="iron-inputs">
                        <div className="slider-container">
                          <input
                            type="range"
                            min="0"
                            max="10"
                            step="1"
                            value={Math.floor(ironAmt)} // Integer part of ironAmt
                            onChange={(e) => {
                              setIronAmt(Math.floor(e.target.value));
                            }}
                            className="slider"
                          />
                          <div className="slider-value">
                            {Math.floor(ironAmt)}
                          </div>
                        </div>
                        <div className="slider-container">
                          <input
                            type="range"
                            min="-53"
                            max="2"
                            step="1"
                            value={ironDec} // Decimal part of ironAmt
                            onChange={(e) => {
                              setIronDec(Math.floor(e.target.value));
                            }}
                            className="slider"
                          />
                          <div className="slider-value">
                            {parseFloat(ironDec)}
                          </div>
                        </div>
                      </div>
                      <div className="slider-value">
                        {ironAmt * Math.pow(10, ironDec)} ppm
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="Nitrate" class="form-label">
                      Nitrate
                    </label>
                    <div className="horizontal-slider">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="0.1"
                        value={nitrateAmt}
                        onChange={(e) => {
                          setNitrateAmt(parseFloat(e.target.value));
                        }}
                        className="slider"
                      />
                      <div className="slider-value">{nitrateAmt} mg/L</div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="Chloride" class="form-label">
                      Chloride
                    </label>
                    <div className="horizontal-slider">
                      <input
                        type="range"
                        min="0"
                        max="2000"
                        step="1"
                        value={chlorideAmt}
                        onChange={(e) => {
                          setChlorideAmt(parseFloat(e.target.value));
                        }}
                        className="slider"
                      />
                      <div className="slider-value">{chlorideAmt}  mg/L</div>
                    </div>
                  </div>



                  <div class="mb-3">
                    <label for="Turbidity" class="form-label">
                      Turbidity
                    </label>
                    <div className="horizontal-slider">
                      <div className="iron-inputs">
                        <div className="slider-container">
                          <input
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            value={Math.floor(turbidityAmt)} // Integer part of ironAmt
                            onChange={(e) => {
                              setTurbidityAmt(Math.floor(e.target.value));
                            }}
                            className="slider"
                          />
                          <div className="slider-value">
                            {Math.floor(turbidityAmt)}
                          </div>
                        </div>
                        <div className="slider-container">
                          <input
                            type="range"
                            min="-14"
                            max="2"
                            step="1"
                            value={turbidityDec} // Decimal part of ironAmt
                            onChange={(e) => {
                              setTurbidityDec(Math.floor(e.target.value));
                            }}
                            className="slider"
                          />
                          <div className="slider-value">
                            {parseFloat(turbidityDec)}
                          </div>
                        </div>
                      </div>
                      <div className="slider-value">
                        {turbidityAmt * Math.pow(10, turbidityDec)} NTU
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="Copper" class="form-label">
                      Copper
                    </label>
                    <div className="horizontal-slider">
                      <div className="iron-inputs">
                        <div className="slider-container">
                          <input
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            value={copperAmt}
                            onChange={(e) => {
                              setCopperAmt(parseFloat(e.target.value));
                            }}
                            className="slider"
                          />
                          <div className="slider-value">
                            {Math.floor(fluorideAmt)}
                          </div>
                        </div>
                        <div className="slider-container">
                          <input
                            type="range"
                            min="-9"
                            max="2"
                            step="1"
                            value={copperDec} // Decimal part of ironAmt
                            onChange={(e) => {
                              setCopperDec(Math.floor(e.target.value));
                            }}
                            className="slider"
                          />
                          <div className="slider-value">
                            {parseFloat(copperDec)}
                          </div>
                        </div>
                      </div>
                      <div className="slider-value">
                        {copperAmt * Math.pow(10, copperDec)} ppm
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="Sulfate" class="form-label">
                      Sulfate
                    </label>
                    <div className="horizontal-slider">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={sulfateAmt}
                        onChange={(e) => {
                          setSulfateAmt(parseFloat(e.target.value));
                        }}
                        className="slider"
                      />
                      <div className="slider-value">{sulfateAmt}  mg/L</div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="Conductivity" class="form-label">
                      Conductivity
                    </label>
                    <div className="horizontal-slider">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={conductivityAmt}
                        onChange={(e) => {
                          setConductivityAmt(parseFloat(e.target.value));
                        }}
                        className="slider"
                      />
                      <div className="slider-value">{conductivityAmt} uS/cm</div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="Color" class="form-label">
                      Color
                    </label>
                    <select
                      className="form-select"
                      id="Color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    >
                      <option value="Colorless">Colorless</option>
                      <option value="Near Colorless">Near Colorless</option>
                      <option value="Faint Yellow">Faint Yellow</option>
                      <option value="Light Yellow">Light Yellow</option>
                      <option value="Yellow">Yellow</option>
                    </select>
                  </div>

                </div>

                <div className="col-md-6">
                  {/* Right Column */}

                  <div class="mb-3">
                    <label for="Odor" class="form-label">
                      Odor
                    </label>
                    <div className="horizontal-slider">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={odorAmt}
                        onChange={(e) => {
                          setOdorAmt(parseFloat(e.target.value));
                        }}
                        className="slider"
                      />
                      <div className="slider-value">{odorAmt} mg/L</div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="Fluoride" class="form-label">
                      Fluoride
                    </label>
                    <div className="horizontal-slider">
                      <div className="iron-inputs">
                        <div className="slider-container">
                          <input
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            value={fluorideAmt}
                            onChange={(e) => {
                              setFluorideAmt(parseFloat(e.target.value));
                            }}
                            className="slider"
                          />
                          <div className="slider-value">
                            {Math.floor(fluorideAmt)}
                          </div>
                        </div>
                        <div className="slider-container">
                          <input
                            type="range"
                            min="-6"
                            max="2"
                            step="1"
                            value={fluorideDec} // Decimal part of ironAmt
                            onChange={(e) => {
                              setFluorideDec(Math.floor(e.target.value));
                            }}
                            className="slider"
                          />
                          <div className="slider-value">
                            {parseFloat(ironDec)}
                          </div>
                        </div>
                      </div>
                      <div className="slider-value">
                        {fluorideAmt * Math.pow(10, fluorideDec)} ppm
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="Manganese" class="form-label">
                      Manganese
                    </label>
                    <div className="horizontal-slider">
                      <div className="iron-inputs">
                        <div className="slider-container">
                          <input
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            value={manganeseAmt}
                            onChange={(e) => {
                              setManganeseAmt(parseFloat(e.target.value));
                            }}
                            className="slider"
                          />
                          <div className="slider-value">
                            {Math.floor(manganeseAmt)}
                          </div>
                        </div>
                        <div className="slider-container">
                          <input
                            type="range"
                            min="-46"
                            max="2"
                            step="1"
                            value={manganeseDec}
                            onChange={(e) => {
                              setManganeseDec(Math.floor(e.target.value));
                            }}
                            className="slider"
                          />
                          <div className="slider-value">
                            {parseFloat(ironDec)}
                          </div>
                        </div>
                      </div>
                      <div className="slider-value">
                        {manganeseAmt * Math.pow(10, manganeseDec)} mg/L
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="Chlorine" class="form-label">
                      Chlorine
                    </label>
                    <div className="horizontal-slider">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={chlorineAmt}
                        onChange={(e) => {
                          setChlorineAmt(parseFloat(e.target.value));
                        }}
                        className="slider"
                      />
                      <div className="slider-value">{chlorineAmt} mg/L</div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="Total Dissolved Solids" class="form-label">
                      Total Dissolved Solids
                    </label>
                    <div className="horizontal-slider">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={TDS}
                        onChange={(e) => {
                          setTDS(parseFloat(e.target.value));
                        }}
                        className="slider"
                      />
                      <div className="slider-value">{TDS} mg/L</div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="Water Temperature" class="form-label">
                      Water Temperature
                    </label>
                    <div className="horizontal-slider">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={waterTemp}
                        onChange={(e) => {
                          setWaterTemp(parseFloat(e.target.value));
                        }}
                        className="slider"
                      />
                      <div className="slider-value">{waterTemp} °C</div>
                    </div>
                  </div>
                  <br/>

                  <div class="mb-3">
                    <label for="Air Temperature" class="form-label">
                      Air Temperature
                    </label>
                    <div className="horizontal-slider">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={airTemp}
                        onChange={(e) => {
                          setAirTemp(parseFloat(e.target.value));
                        }}
                        className="slider"
                      />
                      <div className="slider-value">{airTemp} °F</div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="Day" class="form-label">
                      Day
                    </label>
                    <div className="horizontal-slider">
                      <input
                        type="range"
                        min="1"
                        max="31"
                        value={day}
                        onChange={(e) => {
                          setDay(parseFloat(e.target.value));
                        }}
                        className="slider"
                      />
                      <div className="slider-value">{day}</div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="month" class="form-label">
                      Month
                    </label>
                    <select
                      className="form-select"
                      id="month"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                    >
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-12 text-center">
                {" "}
                {/* Add text-center class */}
                <button
                  type="submit"
                  className="btn btn-primary submitBtn"
                  disabled={isLoading}
                >
                  Predict Water Quality
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <div className="predictionContainer">
              <h2>Prediction Result</h2>
              <br/>

              <div className="indented-text">
                <h4>Model Accuracy - 86.9%</h4>
                <h4>Model Precision - 64.1%</h4>
                <h4>Model F1 - 76.5%</h4>
                <h4>Model Recall - 94.8%</h4>

                <br />
              </div>

              <br />
              <br />
              <div className="loading-spinner">
                <BarLoader
                  size={25}
                  color={"#123abc"}
                  loading={isLoading}
                  width={200}
                />
              </div>


              <br />
              <h4>Prediction Result: {predictionRes}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestWaterPotability;
