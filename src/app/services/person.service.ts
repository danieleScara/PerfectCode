import { Injectable } from '@angular/core';
import { IPerson } from '../models/IPerson';

@Injectable()
export class PersonService {

  private persons: IPerson[]=[
    {
      id : 0,
      name : 'Daniele',
      surname : 'Scaramuzzi',
      birthDate : new Date(1994,1,10)
    },
    {
      id : 1,
      name : 'Mario',
      surname : 'Rossi',
      birthDate : new Date(1988,10,7)
    },
    {
      id : 2,
      name : 'Nicola',
      surname : 'Verde',
      birthDate : new Date(1972,4,24)
    },
    {
      id : 3,
      name : 'Luca',
      surname : 'Giallo',
      birthDate : new Date(1982,9,1)
    },
    {
      id : 4,
      name : 'Andrea',
      surname : 'Blu',
      birthDate : new Date(1992,7,13)
    }
  ]

  constructor() { }

  public getPersons(){
    return this.persons;
  }

  public generateId(): number {
    let newId: number;
    if(this.persons.length!=0)
      newId =  this.persons[this.persons.length-1].id+ 1;
    else
      newId = 0;
    return newId;
  }
}
