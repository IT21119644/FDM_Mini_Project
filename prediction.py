import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import confusion_matrix, accuracy_score
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
import joblib

import python_script

def predict():
    rfc_classifier = joblib.load('trained_RDF_model.joblib')

    le1 = python_script.le1
    le2 = python_script.le2

    ct1 = python_script.ct1
    ct2 = python_script.ct2

    sc = python_script.sc

    values = [8.510801988, 9.16E-05, 5.920902064, 304.4845891, 3.60E-07, 1.635760979, 'Faint Yellow', 3.739693, 0.559295096, 0.880587373, 3.965759996, 62.38685835, 580.4796606, 3.84064004, 2.00E-09, 346.8499604, 'Reservoir', 12.80967626, 61.24561392]

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