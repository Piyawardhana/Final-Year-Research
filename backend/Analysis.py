import numpy as np
import pandas as pd
from matplotlib import pyplot as plt

fileObject = open("Temp_saver.txt", "r")
disease_data = fileObject.read()
list_out = disease_data.split()
outdata = pd.value_counts(np.array(list_out))

L1 = [(k) for k, v in outdata.items()]
L2 = [(v) for k, v in outdata.items()]


fig = plt.figure()
ax = fig.add_axes([0,0,1,1])
ax.axis('equal')
ax.pie(L2, labels = L1,autopct='%1.2f%%')
plt.show()