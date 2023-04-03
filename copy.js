const originalObject = { a: 1, b: 2, c: 3 };
const replicaObject = Object.assign({}, originalObject);
console.log(replicaObject);


const originalObject2 = { a: 1, b: 2, c: 3 };
const replicaObject2 = { ...originalObject2 };
console.log(replicaObject2);


const originalObject3 = { a: 1, b: 2, c: 3 };
const replicaObject3 = JSON.parse(JSON.stringify(originalObject3));
console.log(replicaObject3); 


