import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country : Country | null = null;

  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Leemos el parámetro id de la url
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    if (identifier !== null) {
      this.countriesService.getCountryById(identifier).subscribe((country) => {
        if(!country) {
          this.router.navigateByUrl('/');
          return;
        }

        this.country = country;
      })
    }
  }
}
