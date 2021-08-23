export const checkLocalStorage = () => {
  if (localStorage && localStorage.getItem('data')) {
    return JSON.parse(localStorage.getItem('data'));
  } else {
    localStorage.setItem('data', '');
    return [];
  }
}

export const addToLocalStorage = (addThis) => {
  localStorage.setItem('data', JSON.stringify(addThis));
}