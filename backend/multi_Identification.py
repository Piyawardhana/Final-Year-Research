import warnings
warnings.filterwarnings('ignore', category=FutureWarning)
import tensorflow as tf
import numpy as np
from keras.preprocessing import image
import warnings
warnings.filterwarnings('ignore')
import glob
import os

#  Clear all external files
open(os.path.expanduser('Temp_saver.txt'), 'w').close()


TestImg_dir = "TestImg"
pdf_files = glob.glob("%s/*.JPG" % TestImg_dir)
for file in pdf_files:
    trained_model = "model/Rough_Bark_Model.h5"
    imagein = file
    TestPath = image.load_img(imagein, target_size=(180, 180))
    kerasmodel = tf.keras.models.load_model(trained_model)
    TestPath = np.expand_dims(TestPath, axis=0)
    Diseases = kerasmodel.predict(TestPath)

    if Diseases[0][0] == 1:
        print("Final Stage")
        result = "Final"
        with open(os.path.expanduser('Temp_saver.txt'), "a") as file1:
            file1.write(str(result) + " ")

    elif Diseases[0][1] == 1:
        print("Healthy Stem")
        result = "Healthy"
        with open(os.path.expanduser('Temp_saver.txt'), "a") as file1:
            file1.write(str(result) + " ")

    elif Diseases[0][2] == 1:
        print("Initial Stage")
        result = "Initial"
        with open(os.path.expanduser('Temp_saver.txt'), "a") as file1:
            file1.write(str(result) + " ")

    elif Diseases[0][3] == 1:
        print("Middle")
        result = "Middle"
        with open(os.path.expanduser('Temp_saver.txt'), "a") as file1:
            file1.write(str(result) + " ")

    else:
        print("Identification Failed")



