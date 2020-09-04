import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WeddingComponent } from './components/wedding/wedding.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { VestuarioComponent } from './components/vestuario/vestuario.component';
import { RegaloComponent } from './components/regalo/regalo.component';
import { DiversionComponent } from './components/diversion/diversion.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    WelcomeComponent,
    WeddingComponent,
    UbicacionComponent,
    VestuarioComponent,
    RegaloComponent,
    DiversionComponent,
    AsistenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
