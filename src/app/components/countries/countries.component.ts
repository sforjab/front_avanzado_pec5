import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.5,
        })
      ),
      transition('void <=> *', animate(3000))
    ]),
  ],
})
export class CountriesComponent implements OnInit {

  countries: Country[] = [];
  currentView: string = 'table';
  loading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    // Se activa el spinner antes de llamar al servicio
    this.loading = true;

    this.countriesService.
      getAllCountries().
      subscribe((countries) => {
        this.countries = countries;
        // Se desactiva el spinner cuando recuperamos el listado
        this.loading = false;
      });
  }

  // Método para modificar la vista en el 'home'
  changeView(view: string): void {
    this.currentView = view;
}

}
