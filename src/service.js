export const isEmpty = (obj) => {
  /* for (const key in obj) {
      if (obj.getOwnPropertyNames(key)) return false;
    }
    return true; */
  for (const key in obj) {
    if (hasOwnProperty.call(obj, key)) { console.log('false'); return false;}
  }
    return true;
};
