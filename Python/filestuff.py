import os

duplicates = []
files = os.listdir('/Users/kevinberg/downloads')

print files

path = '/Users/kevinberg/downloads'

# fileInfo = open('/Users/kevinberg/downloads/Veep.S04E10.HDTV.x264-KILLERS.nzb')

# fileInfo2 = open('/Users/kevinberg/downloads/Veep.S04E10.HDTV.x264-KILLERS.nzb')



# print fileInfo.read() == fileInfo2.read()

for i in files:
  if os.path.isfile(path + '/' + i):
    fileCompare = open(path + '/' + i).read()
    files.remove(i)
    for j in files:
      if os.path.isfile(path + '/' + j):
        otherFile = open(path + '/' + j)
        if fileCompare == otherFile.read():
          duplicates.append((i, j))

print duplicates
