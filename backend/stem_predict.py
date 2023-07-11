import warnings
warnings.filterwarnings('ignore', category=FutureWarning)
import tensorflow as tf
import numpy as np
from keras.preprocessing import image
import warnings
warnings.filterwarnings('ignore')

trained_model = "model/Stem_Model.h5"
imagein = "DataSet/train/Final Stage/IMG_1778.JPG"
TestPath = image.load_img(imagein, target_size=(180, 180))
kerasmodel = tf.keras.models.load_model(trained_model)
TestPath = np.expand_dims(TestPath, axis=0)
Diseases = kerasmodel.predict(TestPath)

if Diseases[0][0] == 1:
    print("Not a Cinnamon Stem")

elif Diseases[0][1] == 1:
    print("Cinnamon Stem")

else:
    print("Identification Failed")