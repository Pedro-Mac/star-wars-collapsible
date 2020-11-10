export const handleCategory = (header: string, index: number) => {
  let categoryName = '';
  if (!index) {
    categoryName = 'name';
  } else if (header.includes(' ')) {
    const arrayOfStrings = header.split(' ');
    categoryName = arrayOfStrings
      .map((value, index) => (!index ? value.toLowerCase() : value))
      .join('');
  } else {
    categoryName = header.toLowerCase();
  }

  return categoryName;
};
