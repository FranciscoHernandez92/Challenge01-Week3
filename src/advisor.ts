import { Characters } from './character';
export class Advisor extends Characters {
  boss: string;
  sentence: string;

  constructor(
    name: string,
    family: string,
    age: number,
    action: string,
    boss: string,
    sentence: string = 'No sé por qué, pero creo que voy a morir pronto'
  ) {
    super(name, family, age, action);
    this.boss = boss;
    this.sentence = sentence;
  }
}
