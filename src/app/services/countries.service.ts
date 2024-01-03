import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://api.sampleapis.com/countries/countries');
  }

  getCountryById(id: string): Observable<Country> {
    return this.http.get<Country>('https://api.sampleapis.com/countries/countries/' + id);
  }
}
