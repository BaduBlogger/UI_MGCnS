import os

path = "C:\\Users\\Vishnu\\Downloads"
dir_list = os.listdir(path)
for x in dir_list:
    if x.endswith(".mp3"):
        # Prints only text file present in My Folder
        print(x)