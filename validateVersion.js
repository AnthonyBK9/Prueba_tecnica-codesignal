const data = "name:kevin,age:10,state:arizona";
// const data = "name:kevin,age:25,state:arizona,zipcode:21000,status:Soltero";
// const data = "name:kevin,age:25,state:texas,zipcode:29876,status:Divorciado";
// const data = "name: ,age:43,state:arizona";
// const data = "name:kevin,age:0,state:arizona,zipcode:-99999,status:Soltero";
// const data = "state:arizona,status:Soltero,name:kevin,age:18,zipcode:99999";

function solution(data) {
    const result = data.split(',');
    let info = {};
    for (let i = 0; i < result.length; i++) {
        const e = result[i];
        info[e.split(':')[0]] = e.split(':')[1];
    }
    const zipcode = Math.sign(info.zipcode);
        const status = info.hasOwnProperty('status') && (info.status === 'Soltero' || info.status === 'Casado');
        if ( info.name.length >= 5 && info.age >= 18 && info.state.length >= 5 && zipcode > 0 && status) {
            return 'Version 4.0 - Success';
        } else if( info.state.length && status && info.name.length >= 5 && info.age >= 18){
            return 'Version 4.0 - Success';
        } else if(info.name.length >= 5 && info.age >= 18 && info.state.length >= 5 && zipcode > 0 && status === false){
            return 'Version 4.0 - Error';
        } else if (info.state.length >= 5 && status && info.name.length >= 5 && zipcode) {
            return 'Version 4.0 - Error';
        } else if( info.age === 0 ){
            return 'Version 4.0 - Error';
        } else {
            return 'Version 3.3 - Error';
        }
}

const value = solution(data);
console.log(value);
