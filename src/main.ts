import { sum } from "./lib";

// Top-level await [read more](https://stackoverflow.com/a/46515787)
const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log(`result: `, await result.json());

console.log(`1 + 2 = ${sum(1, 2)}`);