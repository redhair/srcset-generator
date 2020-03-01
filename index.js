function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

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
 * Converts a base64 image to a JavaScript Image
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
    throw new Error('Could not convert source to image');
  }
}

/**
 * Generates image sizes for a source image
 *
 * @param {File} source - Source file
 * @param {Object} options
 */
async function getSrcset(
  source,
  {
    sizes = {
      thumb: 100,
      sm: 400,
      md: 600,
      lg: 1024,
      xl: 1280
    },
    output = 'srcset',
    quality = 100
  } = {}
) {
  if (!source) throw new Error('Please provide a valid source image');

  let result = [];
  let img = await convertFileToImage(source);
  for (let size in sizes) {
    result = result.concat([resize(img, sizes[size])]);
  }

  return formatOutput(result, output);
}

/**
 *
 * @param {Object} result
 * @param {String} outputType
 */
function formatOutput(result, outputType) {
  switch (outputType) {
    case 'file':
      return result.map(size => dataURLtoFile(size.toDataURL()));
    case 'uri':
      return result.map(size => size.toDataURL());
    case 'canvas':
      return result;
    default:
      return result;
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

  return ctx.canvas;
}

export default getSrcset;
