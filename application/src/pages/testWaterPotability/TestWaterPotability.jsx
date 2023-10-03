import React, { useState } from "react";
import "./TestWaterPotability.css";

function TestWaterPotability() {
  document.title = "FDM | water potability";

  const [phValue, setPhValue] = useState(1);
  const [ironAmt, setIronAmt] = useState(1);
  const [nitrateAmt, setNitrateAmt] = useState(1);
  const [chlorideAmt, setChlorideAmt] = useState(1);
  const [leadAmt, setLeadAmt] = useState(1);
  const [zincAmt, setZincAmt] = useState(1);
  const [color, setColor] = useState("");
  const [turbidityAmt, setTurbidityAmt] = useState(1);
  const [fluorideAmt, setFluorideAmt] = useState(1);
  const [copperAmt, setCopperAmt] = useState(1);
  const [odorAmt, setOdorAmt] = useState(1);
  const [sulfateAmt, setSulfateAmt] = useState(1);
  const [conductivityAmt, setConductivityAmt] = useState(1);
  const [chlorineAmt, setChlorineAmt] = useState(1);
  const [manganeseAmt, setManganeseAmt] = useState(1);
  const [TDS, setTDS] = useState(1);
  const [source, setSource] = useState("");
  const [waterTemp, setWaterTemp] = useState(1);
  const [airTemp, setAirTemp] = useState(1);
  const [day, setDay] = useState(1);
  const [timeOfDay, setTimeOfDay] = useState(1);

  return (
    <>
      <div className="container-fluid">
        <form className="formContainer">
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
                      setPhValue(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{phValue}</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="Iron" class="form-label">
                  Iron
                </label>
                <div className="horizontal-slider">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={ironAmt}
                    onChange={(e) => {
                      setIronAmt(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{ironAmt}</div>
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
                    max="10"
                    step="0.1"
                    value={nitrateAmt}
                    onChange={(e) => {
                      setNitrateAmt(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{nitrateAmt}</div>
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
                    max="10"
                    step="0.1"
                    value={chlorideAmt}
                    onChange={(e) => {
                      setChlorideAmt(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{chlorideAmt}</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="Lead" class="form-label">
                  Lead
                </label>
                <div className="horizontal-slider">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={leadAmt}
                    onChange={(e) => {
                      setLeadAmt(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{leadAmt}</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="Zinc" class="form-label">
                  Zinc
                </label>
                <div className="horizontal-slider">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={zincAmt}
                    onChange={(e) => {
                      setZincAmt(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{zincAmt}</div>
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
                  <option value="">Select Color</option>
                  <option value="Red">Red</option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="Turbidity" class="form-label">
                  Turbidity
                </label>
                <div className="horizontal-slider">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={turbidityAmt}
                    onChange={(e) => {
                      setTurbidityAmt(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{turbidityAmt}</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="Fluoride" class="form-label">
                  Fluoride
                </label>
                <div className="horizontal-slider">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={fluorideAmt}
                    onChange={(e) => {
                      setFluorideAmt(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{fluorideAmt}</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="Copper" class="form-label">
                  Copper
                </label>
                <div className="horizontal-slider">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={copperAmt}
                    onChange={(e) => {
                      setCopperAmt(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{copperAmt}</div>
                </div>
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
                      setOdorAmt(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{odorAmt}</div>
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
                      setSulfateAmt(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{sulfateAmt}</div>
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
                      setConductivityAmt(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{conductivityAmt}</div>
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
                      setChlorineAmt(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{chlorineAmt}</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="Manganese" class="form-label">
                  Manganese
                </label>
                <div className="horizontal-slider">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={manganeseAmt}
                    onChange={(e) => {
                      setManganeseAmt(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{manganeseAmt}</div>
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
                      setTDS(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{TDS}</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="Source" class="form-label">
                  Source
                </label>
                <select
                  className="form-select"
                  id="Color"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                >
                  <option value="">Select Source</option>
                  <option value="Red">Red</option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                </select>
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
                      setWaterTemp(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{waterTemp}</div>
                </div>
              </div>

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
                      setAirTemp(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{airTemp}</div>
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
                      setDay(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{day}</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="Time of day" class="form-label">
                  Time of day
                </label>
                <div className="horizontal-slider">
                  <input
                    type="range"
                    min="1"
                    max="24"
                    value={timeOfDay}
                    onChange={(e) => {
                      setTimeOfDay(e.target.value);
                    }}
                    className="slider"
                  />
                  <div className="slider-value">{timeOfDay}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 text-center">
            {" "}
            {/* Add text-center class */}
            <button type="submit" className="btn btn-primary submitBtn">
              Predict Water Quality
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TestWaterPotability;
