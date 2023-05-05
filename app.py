from __future__ import division, print_function
# coding=utf-8
import sys
import os
import glob
import re
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt
import random
import string
# Keras
from keras.applications.imagenet_utils import preprocess_input, decode_predictions
# from keras.preprocessing import image
from tensorflow.keras.preprocessing import image
output_class = ["batteries", "clothes", "e-waste", "glass", "light bulbs", "metal", "organic", "paper", "plastic"]


# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer
# Define a flask app
app = Flask(__name__)

def waste_prediction(new_image):
    model = tf.keras.saving.load_model('models/model.h5')
    test_image = image.load_img(new_image, target_size = (224,224))
    test_image = image.img_to_array(test_image) / 255
    test_image = np.expand_dims(test_image, axis=0)

    predicted_array = model.predict(test_image)
    predicted_value = output_class[np.argmax(predicted_array)]
    predicted_accuracy = round(np.max(predicted_array) * 100, 2)
    return predicted_value,predicted_accuracy

def generate_random_string():
    # generate a random string of length 10
    return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(10))

@app.route('/', methods=['GET'])
def index():
    # Main page
    return render_template('index.html')

@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']
        random_string = generate_random_string()
        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'uploads', secure_filename(f.filename))
        new_path =file_path.split('.')[0] + random_string + '.'+ file_path.split('.')[1] 
        f.save(new_path)
       
        # result = model.predict(file_path)
        # print(type(result))
        # model_predict(file_path,model)
        typ,conf = waste_prediction(new_path)
        response = {'waste_type': typ, 'accuracy': conf}
        return response
    return None

if __name__ == '__main__':
    app.run(debug=True)


