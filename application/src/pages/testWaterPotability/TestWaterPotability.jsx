import "./TestWaterPotability.css";

function TestWaterPotability() {
  document.title = "FDM | water potability";

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
            <input
              type="text"
              class="form-control inputClass"
              id="ph"
              aria-describedby="emailHelp"
            />
          </div>

          <div class="mb-3">
            <label for="Iron" class="form-label">
              Iron
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Iron"
            />
          </div>

          <div class="mb-3">
            <label for="Nitrate" class="form-label">
            Nitrate
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Nitrate"
            />
          </div>

          <div class="mb-3">
            <label for="Chloride" class="form-label">
            Chloride
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Chloride"
            />
          </div>

          <div class="mb-3">
            <label for="Lead" class="form-label">
            Lead
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Lead"
            />
          </div>

          <div class="mb-3">
            <label for="Zinc" class="form-label">
            Zinc
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Zinc"
            />
          </div>

          <div class="mb-3">
            <label for="Color" class="form-label">
            Color
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Color"
            />
          </div>

          <div class="mb-3">
            <label for="Iron" class="form-label">
              Iron
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Iron"
            />
          </div>

          <div class="mb-3">
            <label for="Turbidity" class="form-label">
            Turbidity
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Turbidity"
            />
          </div>

          <div class="mb-3">
            <label for="Fluoride" class="form-label">
            Fluoride
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Fluoride"
            />
          </div>
            </div>

            <div className="col-md-6">
              {/* Right Column */}
              <div class="mb-3">
            <label for="Copper" class="form-label">
            Copper
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Copper"
            />
          </div>

          <div class="mb-3">
            <label for="Odor" class="form-label">
            Odor
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Odor"
            />
          </div>

          <div class="mb-3">
            <label for="Sulfate" class="form-label">
            Sulfate
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Sulfate"
            />
          </div>

          <div class="mb-3">
            <label for="Conductivity" class="form-label">
            Conductivity
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Conductivity"
            />
          </div>

          <div class="mb-3">
            <label for="Chlorine" class="form-label">
            Chlorine
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Chlorine"
            />
          </div>

          <div class="mb-3">
            <label for="Manganese" class="form-label">
            Manganese
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Manganese"
            />
          </div>

          <div class="mb-3">
            <label for="Total Dissolved Solids" class="form-label">
            Total Dissolved Solids
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Total Dissolved Solids"
            />
          </div>

          <div class="mb-3">
            <label for="Source" class="form-label">
            Source
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Source"
            />
          </div>

          <div class="mb-3">
            <label for="Water Temperature" class="form-label">
            Water Temperature
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Water Temperature"
            />
          </div>

          <div class="mb-3">
            <label for="Air Temperature" class="form-label">
            Air Temperature
            </label>
            <input
              type="text"
              class="form-control inputClass"
              id="Air Temperature"
            />
          </div>
              {/* Add more inputs (12-20) here */}
            </div>
          </div>

          {/* Add more inputs (11-20) here */}

          <div className="col-md-12 text-center"> {/* Add text-center class */}
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
