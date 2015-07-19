import os
import shutil

photos = os.listdir('./Photos')
renamedPhotos = [i[9:-4].lower() for i in photos if i]
renamedPhotos = [x for x in renamedPhotos if x]

folders = os.listdir('./Categories')
renamedFolders = [i.lower() for i in folders]

photoDicts = []

def fileToDict(fileName):
  afterNum = fileName[4:]
  afterNumX = fileName[4:11]
  afterNumLS = fileName[4:9]
  if len(fileName) == 3:
    return {'num': fileName, 'size': None, 'color': None}
  if afterNum == 'x-small' or afterNum == 'small' or afterNum == 'medium' or afterNum == 'large' or afterNum == 'x-large':
    return {'num': fileName[:3], 'size': fileName[3:], 'color': None}
  if afterNumX == 'x-small' or afterNumX == 'x-large':
    return {'num': fileName[:3], 'size': fileName[3:11], 'color': fileName[11:]}
  elif afterNumLS == 'small' or afterNumLS == 'large':
    return {'num': fileName[:3], 'size': fileName[3:9], 'color': fileName[9:]}
  elif fileName[4:10] == 'medium':
    return {'num': fileName[:3], 'size': fileName[3:10], 'color': fileName[10:]}
  else:
    return {'num': fileName[:3], 'color': fileName[3:], 'size': None}

def possibleDirNames(photoDict):
  dirNames = []
  num = photoDict['num']
  color = photoDict['color'] or ''
  size = photoDict['size'] or ''
  dirNames.append('macguffin' + num + size + color)
  dirNames.append('macguffin' + num + size)
  dirNames.append('macguffin' + num + color)
  dirNames.append('macguffin' + num)
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




