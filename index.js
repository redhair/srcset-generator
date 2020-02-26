/**
 * Converts a file to base64
 *
 * @param {File} file
 */
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = err => reject(err);
  });
}

/**
 * Calculates the aspect ratio for an image
 *
 * @param {Image} img
 */
function getAspectRatio(img) {
  return img.width / img.height;
}

/**
 * Converts an image to base64 format
 *
 * @param {String} base64
 */
function base64ToImage(base64) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = base64;
    img.onload = () => resolve(img);
    img.onerror = err => reject(err);
  });
}

async function convertFileToImage(source) {
  try {
    let base64 = await toBase64(source);
    let img = await base64ToImage(base64);
    return img;
  } catch (err) {
    console.error('Convert File To Image Error', { err });
  }
}

/**
 * Generates image sizes for a source image
 *
 * @param {File} source - Source file
 * @param {Object} config - configuration
 */
async function generateImageSizes(source, sizes = { thumb: 100, sm: 400, md: 600, lg: 1024, xl: 1280 }) {
  if (!source) throw new Error('Please provide a valid source image.');

  try {
    let result = {};
    let img = await convertFileToImage(source);
    for (let size in sizes) {
      result[size] = resize(img, sizes[size]);
    }

    return result;
  } catch (err) {
    console.error('Generate Image Error: ', err);
  }
}

/**
 * Resizes the image's width to the specified limit
 * while preserving the aspect ratio.
 *
 * @param {Image} img - The image to resize
 * @param {Number} limit - The resize width limit
 */
function resize(img, limit) {
  let aspectRatio = getAspectRatio(img);
  let width = limit;
  let height = width / aspectRatio;
  let canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  let ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, width, height);

  return ctx.canvas; //.toDataURL();
}

export default generateImageSizes;
