//Data types: boolean, number, bigint, string, symbol, null, undefined

let fullName:string = "Dalia Shaman";

//objects are a way of grouping data together
//example
// let car = {
//     make: "Cheverolet",
//     model: "Escalade",
//     year: 2020,
//     isUsed: true
// }

//interface
interface Mountain {
    name: string,
    height: number
}

let newMountain: Mountain = {
    name: "Kilimanjaro",
    height: 19341
}

//the only thing that can go in the brackets are the objects that are for Mountain
let mountains: Mountain[] = [{ name:"Kilimanjaro", height: 19341}, 
                            {name: "Everest", height: 29029},
                            {name: "Denali", height: 20310}];

//function signature 
function findNameOfTallestMountain(mountain: Mountain[]) : string {
    if (mountain.length === 0) {
        return "";
      } else {
        let tallestMountain: Mountain = mountain[0];
        mountain.forEach((item) => {
          if (item.height > tallestMountain.height) {
            tallestMountain = item;
          }
        });
        return tallestMountain.name;
      }
    };

    console.log(findNameOfTallestMountain(mountains));

    //or
//     function findNameOfTallestMountain(mountain: Mountain[]) : string {
//     let currentTallest = 0;
//     let currentName = "";

//     for(let mountain of mountains){
//         if(mountain.height > currentTallest){
//             currentTallest = mountain.height;
//             currentName = mountain.name;
//         } 
//     }
//     return currentName;
// }
//     console.log(findNameOfTallestMountain(mountains));


export {findNameOfTallestMountain, Mountain}; 

