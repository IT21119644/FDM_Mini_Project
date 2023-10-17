import pandas as pd
import joblib
import pickle

# values = [1.004799273, 6.13e-06, 7.114755278, 120.5277688, 'Colorless', 0.613997908,
#        1.758450685, 0.255472008, 2.092090468, 120.745502, 241.4468855,
#        3.099393646, 0.044697746, 257.7175114, 22.90091727, 54.31051792, 'January',
#        7.0]

def predict(values):
    # print(f"This is from the updatedpython_script_2 {values[0]}")
    rfc_classifier = joblib.load('trained_RDF_model_6.joblib')
    # xgb_classifier = joblib.load('trained_XGBoost.joblib')

    with open('le1.pkl', 'rb') as file:
        le1 = pickle.load(file)

    with open('le2.pkl', 'rb') as file:
        le2 = pickle.load(file)

    with open('ct1.pkl', 'rb') as file:
        ct1 = pickle.load(file)

    with open('ct2.pkl', 'rb') as file:
        ct2 = pickle.load(file)

    with open('sc.pkl', 'rb') as file:
        sc = pickle.load(file)

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