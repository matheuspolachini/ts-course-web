import { User } from "./models/User";

const user = new User({ name: "Matheus", age: 21 });

console.log(`Name: ${user.get("name")}`);
console.log(`Age: ${user.get("age")}`);
