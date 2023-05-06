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
from PIL import Image, ImageOps  # Install pillow instead of PIL

# Keras
from keras.applications.imagenet_utils import preprocess_input, decode_predictions
# from keras.preprocessing import image
# from tensorflow.keras.preprocessing import image
output_class = ["batteries", "clothes", "e-waste", "glass", "light bulbs", "metal", "organic", "paper", "plastic"]


# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer
# Define a flask app
app = Flask(__name__)

def waste_prediction(new_image):
    # Disable scientific notation for clarity
    np.set_printoptions(suppress=True)
    model = tf.keras.saving.load_model('models/v4/v4.h5',compile=False)
    # Load the labels
    class_names = open("models/v4/labels.txt", "r").readlines()
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
    image = Image.open(new_image).convert("RGB")
    size = (224, 224)
    image = ImageOps.fit(image, size, Image.Resampling.LANCZOS)
    # turn the image into a numpy array
    image_array = np.asarray(image)
    # Normalize the image
    normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1
    # Load the image into the array
    data[0] = normalized_image_array
    # Predicts the model
    prediction = model.predict(data)
    index = np.argmax(prediction)
    class_name = class_names[index]
    confidence_score = prediction[0][index]
    # Print prediction and confidence score 
    print("Confidence Score:", confidence_score)
    print("class:", class_name[2:])
    # return class_name[2:], confidence_score
    t = str(class_name[2:]).split('\n')[0]
    c = float(confidence_score)
    return t,c
    



def generate_random_string():
    # generate a random string of length 10
    return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(10))

@app.route('/', methods=['GET'])
def index():
    # Main page
    return render_template('index.html')

@app.route('/view', methods=['GET'])
def view():
    # Main page
    return render_template('preview.html')
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
        # delete the file
        os.remove(new_path)
        response = {'waste_type': typ, 'accuracy': conf}
        return response
    return None

if __name__ == '__main__':
    app.run(debug=True)


