

// Add Image base Url to the coin image url.
export const appendBaseUrl = (coin) => {
  if (coin.ImageUrl){
     return { ...coin, ImageUrl: `https://cryptocompare.com${coin.ImageUrl}` };
  }
  if (coin.RAW){
  const USD = { ...coin.RAW.USD, IMAGEURL: `https://cryptocompare.com${coin.RAW.USD.IMAGEURL}` };
  const RAW = { ...coin.RAW, USD: USD };
  return { ...coin, RAW: RAW };
     }
   return 
}
