import getSrcset from '.';

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

let defaultSizes = {
  thumb: 100,
  sm: 400,
  md: 600,
  lg: 1024,
  xl: 1280
};
let mockFile = dataURLtoFile(
  'data:image/jpeg;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7',
  'smile.png'
);

describe('srcset-generator', () => {
  it('should return images as files', async () => {
    const [thumb, sm, md, lg, xl] = await getSrcset(mockFile, {
      output: 'file'
    });
    expect.assertions(5);
    expect(thumb.constructor).toBe(new File([], '').constructor);
    expect(sm.constructor).toBe(new File([], '').constructor);
    expect(md.constructor).toBe(new File([], '').constructor);
    expect(lg.constructor).toBe(new File([], '').constructor);
    expect(xl.constructor).toBe(new File([], '').constructor);
  });

  it('should return images as data uris', async () => {
    const [thumb, sm, md, lg, xl] = await getSrcset(mockFile, { output: 'uri' });
    expect.assertions(5);
    expect(thumb).toContain('base64');
    expect(sm).toContain('base64');
    expect(md).toContain('base64');
    expect(lg).toContain('base64');
    expect(xl).toContain('base64');
  });

  it('should return images with default sizes', async () => {
    const [thumb, sm, md, lg, xl] = await getSrcset(mockFile, { output: 'canvas' });
    expect.assertions(5);
    expect(thumb.width).toBe(defaultSizes.thumb);
    expect(sm.width).toBe(defaultSizes.sm);
    expect(md.width).toBe(defaultSizes.md);
    expect(lg.width).toBe(defaultSizes.lg);
    expect(xl.width).toBe(defaultSizes.xl);
  });

  it('should throw an invalid source error', async () => {
    expect.assertions(1);
    try {
      await getSrcset();
    } catch (e) {
      expect(e).toEqual(new Error('Please provide a valid source image'));
    }
  });

  it('should throw a conversion error', async () => {
    expect.assertions(1);
    try {
      await getSrcset(2);
    } catch (e) {
      expect(e).toEqual(new Error('Could not convert source to image'));
    }
  });
});
