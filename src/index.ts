interface User {
  name: string;
  age: number;
}

const sumOfAge = (user1: User, user2: User) => {
  return user1.age + user2.age;
};

// const result = sumOfAge(
//   {
//     name: "Aswin",
//     age: 22,
//   },
//   {
//     name: "ABC",
//     age: 54,
//   }
// );
// console.log(result);

interface User {
  name: string;
  age: number;
  email: string;
  pass: string;
}

type updateOnly = Pick<User, "name" | "age">;
type partialUpdate = Partial<updateOnly>;

const display = (updated: partialUpdate) => {
  console.log(updated.name + " " + updated.age);
};

display({
  name: "Aswin",
});

type user1 = {
  readonly name: string;
  readonly age: number;
};

const users: user1 = {
  age: 21,
  name: "Aswin",
};

// users.name = "ABC";

console.log(users.name);
type users = {
  name: string;
  age: number;
};

type user = Record<string, users>;

const user1: user = {
  abc: { name: "ABCS", age: 21 },
};
console.log(user1);

interface useer {
  name: string;
  age: number;
}

const user = new Map<string, useer>();
user.set("id1", { name: "ABC", age: 21 });

console.log(user.get("id1"));
