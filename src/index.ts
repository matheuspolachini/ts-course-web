import { User } from "./models/User";

const user = new User({ name: "Matheus", age: 21 });

user.set({ name: "Math" });

console.log(`Name: ${user.get("name")}`);
console.log(`Age: ${user.get("age")}`);
