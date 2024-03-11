/* eslint-disable @typescript-eslint/parameter-properties */
export class Characters {
  name: string;
  family: string;
  age: number;
  action: string;

  constructor(name: string, family: string, age: number, action: string) {
    this.name = name;
    this.age = age;
    this.family = family;
    this.action = action;
  }
}
