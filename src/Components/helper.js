export const checkLocalStorage = () => {
  if (localStorage && localStorage.getItem('data')) {
    // console.log('Local storage exists!');
    return JSON.parse(localStorage.getItem('data'));
  } else {
    // console.log('Local storage does not exist!');
    localStorage.setItem('data', '[]');
    return [];
  }
}

export const updateLocalStorage = (addThis) => {
  // console.log('Local storage changed:', localStorage);
  localStorage.setItem('data', JSON.stringify(addThis));
}