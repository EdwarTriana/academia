import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importacion de componentes
import { HomeComponent } from './components/home/home.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { BodyhomeComponent } from './components/bodyhome/bodyhome.component'
import { CursosComponent } from './components/cursos/cursos.component'
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component'
import { PoliticaDePrivacidadComponent } from './components/politica-de-privacidad/politica-de-privacidad.component'
import { TerminosyCondicionesComponent } from './components/terminosy-condiciones/terminosy-condiciones.component'
import { ContactanosComponent } from './components/contactanos/contactanos.component'
import { FooterComponent } from './components/footer/footer.component'
import { Page404Component } from './components/page404/page404.component'

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'footer', component: FooterComponent},
  {path:'bodyhome', component: BodyhomeComponent},
  {path:'cursos', component: CursosComponent},
  {path:'quienessomos', component: QuienesSomosComponent},
  {path:'politicadeprivacidad', component: PoliticaDePrivacidadComponent},
  {path:'terminosycondiciones', component: TerminosyCondicionesComponent},
  {path:'contactanos', component: ContactanosComponent},
  {path:'**', component: Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
