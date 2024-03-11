/* eslint-disable @typescript-eslint/no-extra-semi */
import { Characters } from './character';
export class Squire extends Characters {
  boss: string;
  servility = servility;
  sentence: string;

  constructor(
    name: string,
    family: string,
    age: number,
    action: string,
    boss: string,
    sentence: string = 'Soy un loser'
  ) {
    super(name, family, age, action);
    this.boss = boss;
    this.sentence = sentence;
    this.servility = servility;
  }
}
