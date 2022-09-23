const taxes = ["iva,2", "iva,2", "iva,3", "ieps,10"];

const arr = [];
let sum;
for (let i = 0; i < taxes.length; i++) {
    const e = taxes[i];
    const info = {};
    info[e.split(',')[0]] = e.split(',')[1];
    arr.push(info);
}

console.log(arr);
const value = arr.reduce( (acc, item) => acc + Number(item.iva) , 0);
console.log(value);
// arr.forEach((e, i) => {

// });





