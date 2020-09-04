import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component'
import { WeddingComponent } from './components/wedding/wedding.component'

import { AsistenciaComponent } from './components/asistencia/asistencia.component'
import { VestuarioComponent } from './components/vestuario/vestuario.component'
import { DiversionComponent } from './components/diversion/diversion.component'
import { RegaloComponent } from './components/regalo/regalo.component'
import { UbicacionComponent } from './components/ubicacion/ubicacion.component'


const routes: Routes = [
  {path: '', component: WelcomeComponent },
  {path: 'wedding', component: WeddingComponent },
  {path: 'asistencia', component: AsistenciaComponent },
  {path: 'vestuario', component: VestuarioComponent },
  {path: 'diversion', component: DiversionComponent },
  {path: 'regalo', component: RegaloComponent },
  {path: 'ubicacion', component: UbicacionComponent },
  // {path: '/', component: WelcomeComponent },
  // {path: '/', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
