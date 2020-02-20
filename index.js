function isFileImage(file) {
  const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

  return file && acceptedImageTypes.includes(file.type);
}

function resize(source) {
  if (!source || !isFileImage(source)) {
    throw new Error('Please provide a valid source image.');
  }

  return true;
}

module.exports = resize;
