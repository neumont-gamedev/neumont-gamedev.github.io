---
title: AI Learning
date: 2024-05-18 14:00:00 +/-TTTT
categories: [AI]
tags: [ai]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/ai
---
#### A collection of AI-related information on learning AI algorithms and training models.

### Word Embeddings
*Word embeddings* are a type of word representation that allows words with similar meaning to have a similar representation. They are a class of techniques where individual words are represented as real-valued vectors in a predefined vector space. Each word is mapped to one vector, and the vector values are learned in a way that resembles a neural network, and hence they are often derived by training a neural network on a large corpus of text.

Advancements in *word embeddings* continue with the development of contextual embeddings from models like BERT and GPT, where the representation of words can dynamically change based on the sentence context. This represents a significant shift from fixed embeddings to more flexible and context-aware models in natural language processing.

The *Word Embedding Demo* shows how words are stored as vectors in space. Words that are closely related are closer in space to each other.

[https://www.cs.cmu.edu/~dst/WordEmbeddingDemo/index.html](https://www.cs.cmu.edu/~dst/WordEmbeddingDemo/index.html)

+ **Controls**
  + Click and drag to rotate the view
  + Use the scroll wheel to zoom in and out
  + Hold down the control key and click and drag to pan the view
+ Put the mouse pointer over a word in the 3D plot. A window will pop up showing the 10 closest words.
+ Type a word in the text box below the 3D plot to add it to the plot.
+ Click on a word to activate it and show its (cosine) similarity to the words in the slots in red.
+ Click on a slot when a word is active to add it to the slots.

### Train a Neural Network

This tutorial is designed for beginners and provides a straightforward introduction to the basics of neural networks, specifically focusing on the task of image recognition. Using the MNIST dataset and Google Colab, you will train a neural network (NN) to recoginize digits. This is the equivalent to the "Hello, World!" program in many computer languages.

##### MNIST

The MNIST dataset is a large collection of handwritten digits that is commonly used for training various image processing systems. It includes 70,000 grayscale images, each containing a digit from 0 to 9. This dataset is widely used because it's small enough to train on any computer, yet rich enough to demonstrate the nuances of working with neural networks.

##### Google Colab

Google Colab is a free cloud service that supports free GPU and TPU usage. It's based on Jupyter Notebooks and requires no setup to use while providing free access to computing resources, making it widely popular for machine learning education and prototyping.

**The program includes numerous comments that will guide you through each step and explain the purpose and function of the code.**

+ Open [https://colab.research.google.com/](https://colab.research.google.com/)
+ Create a new project
+ Add the following code
<br>

```text
import tensorflow as tf
from tensorflow.keras.utils import to_categorical

# Load MNIST data from TensorFlow datasets
# The MNIST database is a large database of handwritten digits (70,000)

mnist = tf.keras.datasets.mnist

# Load the data into the training and testing sets

(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Normalize the pixel values from 0-255 to 0-1
# Neural Networks use floating point values

x_train, x_test = x_train / 255.0, x_test / 255.0

# Optionally, convert class vectors to binary class matrices (for categorical_crossentropy)
# Sets the number of category labels to 10 (0-9)

y_train = to_categorical(y_train, 10)
y_test = to_categorical(y_test, 10)

# Create sequential model layers
# Flatten - Convert the 2D image (28x28) into a 1D array
# Dense - Fully connected layer, every neuron is connected to the previous layer
#   Activation function is the type of non-linear function
#   RELU (Rectified Linear Unit) = Output value if positive or else 0
# Dropout - Randomly set 20% (0.2) of the neurons to 0 each step
#   Used to improve performance.
# Dense - Output layer has 10 neurons (0-9)
#   Softmax converts output values into a range [0, 1] and sum to 1

model = tf.keras.models.Sequential([
  tf.keras.layers.Flatten(input_shape=(28, 28)),
  tf.keras.layers.Dense(128, activation='relu'),
  tf.keras.layers.Dropout(0.2),
  tf.keras.layers.Dense(10, activation='softmax')
])

# optimizer - Optimizers are algorithms used to change the weights and learing rate of the NN
# loss - The loss function is what the optimizer aims to minimize.
#   'categorical crossentropy' is used when instance can only belong to one category (0-9)
# metrics - Metrics are used to evaluate the performance/effectiveness of the model.
#   'accuracy' measures the percentage of correct predictions

model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# fit - Performs the training on the NN defined above
# x_train - Contains the training data (inputs = pixels in the digit image)
# y_train - Contains the labels of the actual number ('0'-'9') to test the loss
# epochs - An epoch is one complete presentation of the dataset
#   'epochs=5' means that the entire dataset will be passed through the NN 5 times

model.fit(x_train, y_train, epochs=5)

# evaluate the trained model using a separate testing dataset not seen
#   x_test - Contains the testing data (inputs = pixels in the digit image)
#   y_test - Contains the labels of the actual number ('0'-'9') to test the loss
# test_acc is the % the model correctly identified using the trained NN on the test dataset

test_loss, test_acc = model.evaluate(x_test, y_test)
print(f"Test Accuracy: {test_acc}")

```

### Train a Neural Network (Extra)

This additional code will visually show a digit from the training dataset and predict a value from the test dataset.

+ Add to the top of the program to import visualization and number (math) libraries
```text
import matplotlib.pyplot as plt
import numpy as np
```

+ Add to show the first number of the training dataset
<br>
_Add after normalization of data (x_train, x_test = x_train / 255.0, x_test / 255.0)_

```text
# Show first number in training data and print the number value
# x_train - Pixel values of the training data digit
# y_train - Name of the value of the training data digit

plt.imshow(x_train[0], cmap='gray')  # 'gray' ensures the image is plotted in grayscale
plt.title(f'Label: {y_train[0]}')
plt.colorbar()  # Optionally add a colorbar to show the pixel value scale
plt.show()
```
+ Add to the bottom of the program to show test digit to predict with prediction result

```text
# Read a test image and use in model to predict the digit value
# test_image - Test the first image from the dataset
# prediction - Use the model to make a prediction on the test image
# predicted_digit - Return the predicted digit value

test_image = x_test[0]
test_image = np.expand_dims(test_image, axis=0)  # Reshape image to have batch dimension
prediction = model.predict(test_image)
predicted_digit = np.argmax(prediction)
print(f'Predicted digit: {predicted_digit}')

# Show the test digit with the predicted digit

plt.imshow(test_image.reshape(28, 28), cmap='gray')  # Remove batch dimension before showing
plt.title(f'Predicted Digit: {predicted_digit}')
plt.show()
```
