import { pets } from "./pet";

const users = [
  { name: "minsu", age: 1 },
  { name: "cheolsu", age: 20 },
];

function selectPet(name) {
  return pets.find(({ name: _name }) => name === _name);
}

function feedPet(pet) {
  return `${pet.name}에게 밥을 줬습니다.`;
}
