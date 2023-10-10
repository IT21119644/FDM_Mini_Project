import pandas as pd
import joblib

import updated_python_script_2

# values = [7.66857169, 0.020272253, 4.665769038, 106.7763838,
#         'Light Yellow', 0.577121406, 0.391623321, 0.012384522,
#        2.951640615, 264.3387584, 428.813495, 4.778219736, 0.527222432,
#        194.5130257, 20.48237253, 73.7719982, 28.0]

def predict(values):
    # print(f"This is from the updatedpython_script_2 {values[0]}")
    rfc_classifier = joblib.load('trained_RDF_model_6.joblib')

    le1 = updated_python_script_2.le1
    le2 = updated_python_script_2.le2

    ct1 = updated_python_script_2.ct1
    ct2 = updated_python_script_2.ct2

    sc = updated_python_script_2.sc

    # Convert the input values to a DataFrame
    input_data = pd.DataFrame([values])

    # Preprocess the input data
    input_data = input_data.values  # Convert to NumPy array

    # label encode the values
    input_data[:, 4] = le1.transform(input_data[:, 4])
    input_data[:, 16] = le2.transform(input_data[:, 16])

    # column transform the values
    input_data = ct1.transform(input_data)
    input_data = ct2.transform(input_data)

    # scale the values
    input_data[:, 17:] = sc.transform(input_data[:, 17:])

    y_single = rfc_classifier.predict(input_data)

    print('ysingle', y_single)
    return y_single