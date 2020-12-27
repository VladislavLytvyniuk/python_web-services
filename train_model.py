from sklearn import model_selection
from sklearn import datasets
import numpy as np
from sklearn.neighbors import KNeighborsClassifier
import pickle

np.random.seed(0)

iris_data = datasets.load_iris()
iris_X = iris_data.data
iris_y = iris_data.target
indices = np.random.permutation(len(iris_X))
iris_X_train = iris_X[indices[:-10]]
iris_y_train = iris_y[indices[:-10]]
iris_X_test = iris_X[indices[-10:]]
iris_y_test = iris_y[indices[-10:]]
# Create and fit a nearest-neighbor classifier

knn = KNeighborsClassifier()
knn.fit(iris_X_train, iris_y_train)

pickle.dump(knn, open('finalized_model.sav', 'wb'))