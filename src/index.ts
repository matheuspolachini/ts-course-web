import { User } from "./models/User";

const user = new User({ name: "Matheus", age: 21 });

user.on("change", () => {});
user.on("change", () => {});
user.on("create", () => {});

console.log(user);
