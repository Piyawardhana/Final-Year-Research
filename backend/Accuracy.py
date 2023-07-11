import keras
from keras.models import load_model
from keras.preprocessing.image import ImageDataGenerator

# Load the saved model
model = load_model('model/VGG16-M.h5')

# Define the test data generator
test_datagen = ImageDataGenerator(rescale=1./255)

# Load the test data
test_data = test_datagen.flow_from_directory(
        'DataSet/Stem/test',
        target_size=(224, 224),
        batch_size=32,
        class_mode='categorical')

# Evaluate the model on the test data
test_loss, test_acc = model.evaluate(test_data)

print('Test accuracy:', test_acc)