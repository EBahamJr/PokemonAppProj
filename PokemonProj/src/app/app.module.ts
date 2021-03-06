import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeAPIserveService } from './services/poke-apiserve.service';
import { CapitalizePipe } from './services/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  // providers: [PokeAPIserveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
