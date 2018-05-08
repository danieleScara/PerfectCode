import { Component, OnInit } from '@angular/core';

import { IPerson } from './models/IPerson';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  persons: IPerson[];
  person: IPerson;
  label: string;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.persons = this.personService.getPersons();
    this.person = this.persons[0];
    this.label = "Persone";
  }

}
