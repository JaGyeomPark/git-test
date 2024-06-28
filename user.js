import { pets } from "./pet";

const users = [
  { name: "minsu", age: 1 },
  { name: "cheolsu", age: 20 },
];

function selectPet(name) {
  return pets.find(({ name: _name }) => name === _name);
}
