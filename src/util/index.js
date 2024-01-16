export const createItemDescArray = (itemTypes) => {
    let itemDesc = {};
  
    for (let item of itemTypes) {
      if (itemDesc[item]) {
        itemDesc[item]++;
      } else {
        itemDesc[item] = 1;
      }
    }
  
    const itemDescArr = [];
  
    for (const [key, value] of Object.entries(itemDesc)) {
      itemDescArr.push({ type: key, count: value });
    }
  
    return itemDescArr;
  };
  

  export const findSubTotalOfCart = (items) => {
    if(items.length === 0) {
      return 0;
    }

    const priceList = items.map((item) => parseInt(item.product.price));
// [1999, 1999]

let sum = 0;
for(let prices of priceList) {
sum+= prices;
}

return sum;
  }