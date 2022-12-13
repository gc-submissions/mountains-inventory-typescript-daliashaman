import { Product } from "../src/products";

interface InventoryItem {
    product: Product,
    quantity: number
}

let inventory: InventoryItem[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20}
]

function calcInventoryValue(array: InventoryItem[]) :number {
    if(array.length === 0){
        return 0;
    }
    else {
        let totalValue:number = 0;
        array.forEach((item) => {
            let newTotal: number = item.product.price * item.quantity;
            totalValue = totalValue + newTotal;
        });
        return totalValue;
    }
}

console.log(calcInventoryValue(inventory));

export interface InventoryItem {
    product: Product,
    quantity: number
}