// Only 1 default export allowed in a file
export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
export const printName = (user) => {
  console.log(user.name);
};
export const printAge = (user) => {
  console.log(user.age);
};
