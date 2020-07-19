import noImage from '../images/no-image.png';

export const setPercentage = (originalPrice, currentPrice) => {
  const difference = originalPrice - currentPrice;
  const discount = difference * 100 / originalPrice;
  return parseInt(discount);
}

export const defaultImage = (ev) => {
  ev.target.src = noImage;
}
