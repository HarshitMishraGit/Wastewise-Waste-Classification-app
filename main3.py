import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.preprocessing import image
output_class = ["batteries", "clothes", "e-waste", "glass", "light bulbs", "metal", "organic", "paper", "plastic"]
def waste_prediction(new_image):
    model = tf.keras.saving.load_model('model.h5')
    test_image = image.load_img(new_image, target_size = (224,224))
    plt.axis("off")
    plt.imshow(test_image)
    # plt.show()

    test_image = image.img_to_array(test_image) / 255
    test_image = np.expand_dims(test_image, axis=0)

    predicted_array = model.predict(test_image)
    predicted_value = output_class[np.argmax(predicted_array)]
    predicted_accuracy = round(np.max(predicted_array) * 100, 2)
    return predicted_value,predicted_accuracy


typ,conf = waste_prediction("F:\mini2\img\Medical_waste\medical001.jpg")
print(typ, conf)