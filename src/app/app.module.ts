import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
