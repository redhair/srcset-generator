import generateImageSizes from '.';

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

describe('srcset-generator', () => {
  it('should return images with default sizes', async () => {
    let defaultSizes = { thumb: 100, sm: 400, md: 600, lg: 1024, xl: 1280 };
    let file = dataURLtoFile(
      'data:image/jpeg;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7',
      'smile.png'
    );

    const { thumb, sm, md, lg, xl } = await generateImageSizes(file);

    expect(thumb.width).toBe(defaultSizes.thumb);
    expect(sm.width).toBe(defaultSizes.sm);
    expect(md.width).toBe(defaultSizes.md);
    expect(lg.width).toBe(defaultSizes.lg);
    expect(xl.width).toBe(defaultSizes.xl);
  });
});
