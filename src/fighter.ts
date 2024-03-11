import { Characters } from "./character";
export class Fighter extends Characters{
  weapon: string;
  skill: number, 
  sentence: string 

  constructor( name: string, family: string, age: number, action: string, weapon: string, skill: number, sentence: string = 'Primero pego y luego pregunto'){
    super(name, family, age, action)
    this.weapon = weapon
    this.skill = skill
    this.sentence = sentence
  }
}
