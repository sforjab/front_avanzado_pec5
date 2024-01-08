import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from 'src/app/models/country.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() item: Country = {
    abbreviation: '',
    capital: '',
    currency: '',
    name: '',
    phone: '',
    population: 0,
    media: {
      flag: '',
      emblem: '',
      orthographic: ''
    },
    id: 0
  };

  constructor() {}
}