interface Product {
    name: string,
    price: number
}

let products: Product[] = [
   {name: "apples", price: 5},
   {name: "oranges", price: 5},
   {name: "mangoes", price: 11}]

function calcAverageProductPrice(array: Product[]): number {
    let sum = 0;
    if(array.length == 0){
        return 0;
    } 
    else {
        array.forEach((item) => {
            sum += item.price;
        });
        return sum/array.length; 
    }
};

console.log(calcAverageProductPrice([]));

export {calcAverageProductPrice, Product};