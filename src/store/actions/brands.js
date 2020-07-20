const brands = require('../../database/brands.json');

export const getBrands = () => ({
  type: 'GET_ALL_BRANDS',
  payload: brands,
});
