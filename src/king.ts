import { Characters } from './character';
export class King extends Characters {
  reignYears: number;
  sentence: string;

  constructor(
    name: string,
    family: string,
    age: number,
    action: string,
    reignYears: number,
    sentence: string = 'Vais a morir todos'
  ) {
    super(name, family, age, action);
    this.reignYears = reignYears;
    this.sentence = sentence;
  }
}
