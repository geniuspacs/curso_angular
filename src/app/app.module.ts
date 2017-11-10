import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { appRoutingProviders, routing } from './app.routing';

import { FormsModule } from '@angular/forms';

import { ModuloEmailModule } from './moduloemail/modulo-email.module';

import { Parques,
  Tienda, 
  AnimalsComponent, 
  ContactComponent, 
  HomeComponent, 
  KeepersComponent,
  SimpleTinyComponent } from '../components/index.components';

@NgModule({
  /* En Declaration se cargan los Pipes y los Components */
  declarations: [
    AppComponent,
    Parques,
    Tienda,
    HomeComponent,
    AnimalsComponent,
    ContactComponent,
    KeepersComponent,
    SimpleTinyComponent
  ],
  /* En Imports se cargan los modulos */
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    appRoutingProviders,
    ModuloEmailModule
  ],
  /* En Providers se cargan servicios */
  providers: [
    appRoutingProviders
  ],
  /* Componente principal de la aplicación */
  bootstrap: [AppComponent]
})
export class AppModule { }
