import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import pandas as pd
from sklearn.impute import SimpleImputer

df = pd.read_csv('Water Quality Prediction.csv')

numeric_columns = df.select_dtypes(include=['number'])

min_values = numeric_columns.min()
max_values = numeric_columns.max()

print("Minimum Values:")
print(min_values)
print("\nMaximum Values:")
print(max_values)