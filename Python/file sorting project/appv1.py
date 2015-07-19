import os
import shutil

photoDicts = [];

path = './Photos/'
dest = './Categories/'

photos = os.listdir('./Photos')
#empty string at the beginning of the list for some reason
renamedPhotos = [i[9:-4].lower() for i in photos if i]
renamedPhotos = [x for x in renamedPhotos if x]
renamedPhotosCopy = [i[9:-4].lower() for i in photos if i]
renamedPhotosCopy = [x for x in renamedPhotos if x]

folders = os.listdir('./Categories')
renamedFolders = [i.lower() for i in folders]

while len(renamedPhotos) > 0:
  for i in renamedPhotos:
    if len(i) == 3:
      photoDicts.append({'num': i, 'size': None, 'color': None})
      renamedPhotos.remove(i)

  for i in renamedPhotos:
    if i[4:] == 'x-small' or i[4:] == 'small' or i[4:] == 'medium' or i[4:] == 'large' or i[4:] == 'x-large':
      photoDicts.append({'num': i[:3], 'size': i[4:], 'color': None})
      renamedPhotos.remove(i)

  for i in renamedPhotos:
    if i[4:11] == 'x-small' or i[4:11] == 'x-large':
      photoDicts.append({'num': i[:3], 'size': i[4:11], 'color': i[12:]})
      renamedPhotos.remove(i)
    elif i[4:9] == 'small' or i[4:9] == 'large':
      photoDicts.append({'num': i[:3], 'size': i[4:9], 'color': i[10:]})
      renamedPhotos.remove(i)
    elif i[4:10] == 'medium':
      photoDicts.append({'num': i[:3], 'size': i[4:10], 'color': i[11:]})
      renamedPhotos.remove(i)
    else:
      photoDicts.append({'num': i[:3], 'color': i[4:], 'size': None})
      renamedPhotos.remove(i)

def moveFile(photo, folder):
  shutil.move(path + photo, dest + folder)

def detectFolder(photoDict):
  num = photoDict["num"]
  color = photoDict["color"]
  size = photoDict["size"]
  if color and num and size:
    if "macguffin" + num + "-" + size + "-" + color +"" in renamedFolders:
      folderName = folders[renamedFolders.index("macguffin" + num + "-" + size + "-" + color)]
      photoName = photos[renamedPhotosCopy.index(num + "-" + size + "-" + color) + 1]
      moveFile(photoName,folderName)
    elif "macguffin" + num + "-" + size +"" in renamedFolders:
      folderName = folders[renamedFolders.index("macguffin" + num + "-" + size)]
      photoName = photos[renamedPhotosCopy.index(num + "-" + size + "-" + color) + 1]
      moveFile(photoName,folderName)
    elif "macguffin" + num + "-" + color +"" in renamedFolders:
      folderName = folders[renamedFolders.index("macguffin" + num + "-" + color)]
      photoName = photos[renamedPhotosCopy.index(num + "-" + size + "-" + color) + 1]
      moveFile(photoName,folderName)
    else:
      folderName = folders[renamedFolders.index("macguffin" + num)]
      photoName = photos[renamedPhotosCopy.index(num + "-" + size + "-" + color) + 1]
      moveFile(photoName,folderName)

  if num and color and size == None:
    if "macguffin" + num + "-" + color in renamedFolders:
      folderName = folders[renamedFolders.index("macguffin" + num + "-" + color)]
      photoName = photos[renamedPhotosCopy.index(num + "-" + color) + 1]
      moveFile(photoName,folderName)
    else:
      folderName = folders[renamedFolders.index("macguffin" + num)]
      photoName = photos[renamedPhotosCopy.index(num + "-" + color) + 1]
      moveFile(photoName,folderName)

  if num and size and color == None:
    if "macguffin" + num + "-" + size in renamedFolders:
      folderName = folders[renamedFolders.index("macguffin" + num + "-" + size)]
      photoName = photos[renamedPhotosCopy.index(num + "-" + size) + 1]
      moveFile(photoName,folderName)
    else:
      folderName = folders[renamedFolders.index("macguffin" + num)]
      photoName = photos[renamedPhotosCopy.index(num + "-" + size) + 1]
      moveFile(photoName,folderName)

  if num and color == None and size == None:
    folderName = folders[renamedFolders.index("macguffin" + num)]
    photoName = photos[renamedPhotosCopy.index(num) + 1]
    moveFile(photoName,folderName)

for i in photoDicts:
  detectFolder(i)
