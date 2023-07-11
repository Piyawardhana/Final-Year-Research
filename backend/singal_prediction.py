import warnings
warnings.filterwarnings('ignore', category=FutureWarning)
import tensorflow as tf
import numpy as np
from keras.preprocessing import image
import warnings
warnings.filterwarnings('ignore')

trained_model = "Rough_Bark_Model/Rough_Bark_Model.h5"
stem_model = "model/Stem_Model.h5"

imagein = "DataSet/train/Healthy Stem/IMG_2670.JPG"
TestPath = image.load_img(imagein, target_size=(180, 180))

kerasmodel = tf.keras.models.load_model(trained_model)
kerasmodel1 = tf.keras.models.load_model(stem_model)

TestPath = np.expand_dims(TestPath, axis=0)

Stem = kerasmodel1.predict(TestPath)
Diseases = kerasmodel.predict(TestPath)

if Stem[0][0] == 1:
    print("Not a Cinnamon Stem")

elif Stem[0][1] == 1:
    if Diseases[0][0] == 1:
        print("Final Stage")

    elif Diseases[0][1] == 1:
        print("Healthy Stem")

    elif Diseases[0][2] == 1:
        print("Initial Stage")

    elif Diseases[0][3] == 1:
        print("Middle")

    else:
        print("Identification Failed")

else:
    print("Cinnamon Stem Identification Failed")

