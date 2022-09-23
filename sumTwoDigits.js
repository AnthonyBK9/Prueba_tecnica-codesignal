// const n = [36, 10, 11, 22, 50, 41];
const n = [55, 91, 92, 94, 95, 96, 97, 98, 99,];
function solution(n) {
    const result = [];
    for (let i = 0; i < n.length; i++) {
        const arr = (n[i]).toString(10).split('').map(Number);
        let data = arr[0] + arr[1];
        if(data < 10) {
            result.push(data);
        } else if (data >= 10) {
            let num = Number(arr.toString().split(",").sort().slice(0,1).map(Number).toString());
            result.push(num);
        } 
    }
    const array =[...result];
    let sum = array.sort().reverse().slice(0,2).reduce((a,b) => a + b);
    result.push(sum);
    return result;
}

const data = solution(n);
console.log(data);


