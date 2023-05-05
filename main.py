from flask import Flask, render_template, request
from keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np

app = Flask(__name__)
model = load_model('models/model.h5')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    img = request.files['file']
    img_path = "uploads/" + img.filename
    img.save(img_path)
    img = image.load_img(img_path, target_size=(224, 224))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = img/255

    model.predict(img)
    # pred_class = np.argmax(pred, axis=1)
    # print(pred_class);
    # pass
    return
    # return pred_class

if __name__ == '__main__':
    app.run(debug=True)
