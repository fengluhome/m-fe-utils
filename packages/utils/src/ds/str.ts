import uuid from 'uuid-random';

export function genId() {
  return uuid();
}

// https://github.com/darkskyapp/string-hash/blob/master/index.js
export function hash(str: string) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
  return hash >>> 0;
}

export function parseJson(str: string, defaultValue = {}) {
  try {
    return JSON.parse(str) || defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

/** 从路径中获取到文件名 */
export function getFileNameFromPath(str: string = '') {
  return str.split(/(\\|\/)/g).pop();
}

export function searchWithTextTransform(targetStr = '', featStr = '') {
  return `${targetStr.toLowerCase()}`.indexOf(featStr.toLowerCase()) > -1;
}
