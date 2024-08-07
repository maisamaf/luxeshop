export const PriceAfterDiscount = (price: number, discount: number) => {
  let discountAmount = price * (discount / 100);
  let discountedPrice = (price - discountAmount).toFixed(2);

  return discountedPrice;
};
