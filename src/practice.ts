class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age:number, gender:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

interface Human {
  name: string,
  age: number,
  gender: string
};

const alpha = new Human("alpha", 15, "female");


const person = {
  name: "nicolas",
  gender: "male",
  age: 22
};


const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
}


console.log((sayHi(alpha)));

export {};