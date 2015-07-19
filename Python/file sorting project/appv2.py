import os
import shutil

photos = os.listdir('./Photos')
renamedPhotos = [i[9:-4].lower() for i in photos if i]
renamedPhotos = [x for x in renamedPhotos if x]

folders = os.listdir('./Categories')
renamedFolders = [i.lower() for i in folders]

photoDicts = []

def fileToDict(fileName):
  if len(fileName) == 3:
    return {'num': fileName, 'size': None, 'color': None}
  if fileName[4:] == 'x-small' or fileName[4:] == 'small' or fileName[4:] == 'medium' or fileName[4:] == 'large' or fileName[4:] == 'x-large':
    return {'num': fileName[:3], 'size': fileName[4:], 'color': None}
  if fileName[4:11] == 'x-small' or fileName[4:11] == 'x-large':
    return {'num': fileName[:3], 'size': fileName[4:11], 'color': fileName[12:]}
  elif fileName[4:9] == 'small' or fileName[4:9] == 'large':
    return {'num': fileName[:3], 'size': fileName[4:9], 'color': fileName[10:]}
  elif fileName[4:10] == 'medium':
    return {'num': fileName[:3], 'size': fileName[4:10], 'color': fileName[11:]}
  else:
    return {'num': fileName[:3], 'color': fileName[4:], 'size': None}

def possibleDirNames(photoDict):
  dirNames = []
  num = photoDict["num"] or ""
  color = photoDict["color"] or ""
  size = photoDict["size"] or ""
  if color and size:
    dirNames.append("macguffin" + num + "-" + size + "-" + color)
    dirNames.append("macguffin" + num + "-" + size)
    dirNames.append("macguffin" + num + "-" + color)
    dirNames.append("macguffin" + num)
  elif color and size == None:
    dirNames.append("macguffin" + num + "-" + color)
    dirNames.append("macguffin" + num)
  elif size and color == None:
    dirNames.append("macguffin" + num + "-" + size)
    dirNames.append("macguffin" + num)
  elif size == None and color == None:
    dirNames.append("macguffin" + num)
  return dirNames

def moveFile(photo, folder):
  path = './Photos/'
  dest = './Categories/'
  shutil.move(path + photo, dest + folder)

def selectDir(dirNames):
  for i in dirNames:
    if i in renamedFolders:
      folderName = folders[renamedFolders.index(i)]
      photoName = photos[renamedPhotos.index(dirNames[0][9:]) + 1]
      moveFile(photoName, folderName)
      break

for j in renamedPhotos:
  photoDicts.append(fileToDict(j))

for k in photoDicts:
  names = possibleDirNames(k)
  selectDir(names)





