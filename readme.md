docker exec -it flask-hellow_flask_1 bash

docker exec -it flask-hellow_flask_1 python train_model.py

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"xyz","password":"xyz"}' \
http://localhost:5000/curl_json 