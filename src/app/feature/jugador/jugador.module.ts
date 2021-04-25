import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { JugadorRoutingModule } from './jugador-routing.module';
import { CrearJugadorComponent } from '@jugador/components/crear-jugador/crear-jugador.component';
import { GridJugadoresComponent } from '@jugador/components/grid-jugadores/grid-jugadores.component';
import { VerDetallesComponent } from './components/ver-detalles/ver-detalles.component';

@NgModule({
  declarations: [
    CrearJugadorComponent,
    GridJugadoresComponent,
    VerDetallesComponent
  ],
  imports: [
    CommonModule,
    JugadorRoutingModule,
    SharedModule
  ]
})
export class JugadorModule { }
