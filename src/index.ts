import { User } from "./models/User";

const user: User = new User({
  id: 5,
  name: "asda",
  age: 20,
});

user.on("change", () => {
  console.log("change");
});

user.trigger("change");

console.log(user.get("name"));
