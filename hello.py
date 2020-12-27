from flask import Flask, jsonify, render_template, request
from sklearn import model_selection
import numpy as np
from sklearn.neighbors import KNeighborsClassifier
import pickle
from sklearn import datasets

with open('finalized_model.sav', 'rb') as file:
    knn = pickle.load(file)

app = Flask(__name__, template_folder='template')

@app.route('/')
def hello_world():
    print("hi friend")
    return '<h1> Hello, word </h1>'


@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User %s' % username


@app.route('/iris/')
def iris_func():
    iris_data = datasets.load_iris()
    iris_X = iris_data.data
    iris_y = iris_data.target
    iris_y_unique = np.unique(iris_y)
    return str(iris_y_unique)

@app.route('/iris_predict/')
def iris_pred():
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
    return str(knn.predict(iris_X_test))


@app.route('/iris_predict_my/<params>')
def iris_pred_own_params(params):

    arr = params.split(',')
    arr = [float (x) for x in arr]
    arr = np.array(arr).reshape(1, -1)

    predict = knn.predict(arr)
    return str(predict)

@app.route('/my_json')
def my_json():
    e = {
    "username": "admin",
    "email": "admin@localhost",
    "id": 42
    }
    return jsonify(e)




@app.route('/site')
def site():
    site = 'index.html'
    return render_template(site)


@app.route('/curl_json', methods=['POST'])
def curl_json():
    e = request.get_json()
    
    return jsonify(e)
    
