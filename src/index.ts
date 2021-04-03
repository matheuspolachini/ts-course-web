import { User } from "./models/User";

const user: User = new User({
  id: 1,
});

user.on("change", () => {
  console.log(user);
});

user.fetch();
