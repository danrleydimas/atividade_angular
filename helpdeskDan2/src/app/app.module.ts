import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { AdicionaCategoriaComponent } from './adiciona-categoria/adiciona-categoria.component';

@NgModule({
  declarations: [
    AppComponent,

    AdicionaCategoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
