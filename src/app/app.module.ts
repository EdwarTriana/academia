import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyhomeComponent } from './components/bodyhome/bodyhome.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { PoliticaDePrivacidadComponent } from './components/politica-de-privacidad/politica-de-privacidad.component';
import { TerminosyCondicionesComponent } from './components/terminosy-condiciones/terminosy-condiciones.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { Page404Component } from './components/page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BodyhomeComponent,
    YoutubeComponent,
    CursosComponent,
    QuienesSomosComponent,
    PoliticaDePrivacidadComponent,
    TerminosyCondicionesComponent,
    ContactanosComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
