# %%
import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
# %%
df = pd.read_csv('Water Quality Prediction.csv')
df.head()

# %%
# get a sample of 1000 rows
df = df.sample(n=100000, random_state=42)

# %%
df.isna().sum()

# %%
df.shape

# %%
# remove all rows with Nan values

df.dropna(inplace=True) # modifies the dataframe in place

# %%
# check for duplicate rows
duplicate_rows = df[df.duplicated()]
if duplicate_rows.count().sum() == 0:
   print("No duplicate rowa")
else:
   print("Duplicate rows are present")

# %%
# split the dataset into x and y
X = df.drop(['Potability', 'Month', 'Day', 'Time of Day', 'Index'], axis=1) # axis=1 indicates we are dropping a column, not a row
Y = df['Potability']
X

# %%
cols = X.columns
cols = cols.to_list()

categorical_cols = ['Color', 'Source']

# Create a new list that contains only non-string elements
new_list = [item for item in cols if item not in categorical_cols]
new_list

# %%
# we need x, y values as numpy arrays
X = df.iloc[:, 1:-4].values
Y = df.iloc[:, -1].values

X

# %%
# Label Encode categorical values (1, 2, 3 ... values)
le1 = LabelEncoder()
X[:, 6] = le1.fit_transform(X[:, 6])

le2 = LabelEncoder()
X[:, 16] = le2.fit_transform(X[:, 16])
X[0]


# %%
# Column transform categorical columns (0, 1, 0 ...)
ct1 = ColumnTransformer(transformers=[('encode', OneHotEncoder(), [6])], remainder='passthrough')
X = ct1.fit_transform(X)

ct2 = ColumnTransformer(transformers=[('encode', OneHotEncoder(), [20])], remainder='passthrough')
X = ct2.fit_transform(X)


# %%
# Splitting the data set
x_train, x_test, y_train, y_test = train_test_split(X, Y, test_size=0.2, random_state=1)
x_train

# %%
# Normalize input values

sc = StandardScaler()  # range: -3 to +3
x_train[:, 13:] = sc.fit_transform(x_train[:, 13:])  # 0,1,2 are dummy variables
x_test[:, 13:] = sc.transform(x_test[:, 13:])

print("X TRAIN", x_train[0])
print("Y TRAIN", y_train)
