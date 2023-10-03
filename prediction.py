import pandas as pd
import joblib

import updated_python_script

# values = [7.66857169, 7.06e-08, 7.541255359, 198.1312335, 1.31e-95,
#        0.767179279, 'Colorless', 0.137766996, 1.008886456, 2.391833449,
#        0.750761234, 148.9474344, 242.7039915, 3.709734571, 2.301398715,
#        100.9851033, 'Stream', 9.674425593, 35.25315137, 12.0, 1.0]

def predict(values):
    rfc_classifier = joblib.load('trained_RDF_model_3.joblib')

    le1 = updated_python_script.le1
    le2 = updated_python_script.le2

    ct1 = updated_python_script.ct1
    ct2 = updated_python_script.ct2

    sc = updated_python_script.sc

    # Convert the input values to a DataFrame
    input_data = pd.DataFrame([values])

    # Preprocess the input data
    input_data = input_data.values  # Convert to NumPy array

    # label encode the values
    input_data[:, 6] = le1.transform(input_data[:, 6])
    input_data[:, 16] = le2.transform(input_data[:, 16])

    # column transform the values
    input_data = ct1.transform(input_data)
    input_data = ct2.transform(input_data)

    # scale the values
    input_data[:, 13:] = sc.transform(input_data[:, 13:])

    y_single = rfc_classifier.predict(input_data)

    print('ysingle', y_single)
    return y_single