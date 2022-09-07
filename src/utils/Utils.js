function renameKey(objs, oldKey, newKey) {
  let newObjs = [];
  for (let i = 0; i < objs.length; i++) newObjs[i] = copy(objs[i]);
  for (let i = 0; i < newObjs.length; i++) {
    for (let key in newObjs[i]) {
      if (key == oldKey) {
        newObjs[i][newKey] = newObjs[i][oldKey];
        delete newObjs[i][oldKey];
      }
    }
  }
  return newObjs;
}
function copy(mainObj) {
  let objCopy = {}; // objCopy будет хранить копию mainObj
  let key;

  for (key in mainObj) {
    objCopy[key] = mainObj[key]; // копирует каждое свойство objCopy
  }
  return objCopy;
}
function pagesArr(count) {
  let pages = [];
  for (let i = 0; i < count; i++) {
    pages.push(i + 1);
  }
  return pages;
}
export { renameKey, pagesArr };
