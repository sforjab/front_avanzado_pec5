import { Component, Input } from '@angular/core';
import { Country } from 'src/app/models/country.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  columns: string[] = ['countryId', 'name', 'capital'];
  @Input() countries: Country[] = [];

/*   ngOnInit(): void {
    // Imprimir los identificadores para verificar su existencia y valor
    console.log('Country IDs:', this.countries.map(country => country.id));
  } */

  constructor() {}
}
