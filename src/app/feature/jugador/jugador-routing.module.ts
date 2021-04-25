import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearJugadorComponent } from './components/crear-jugador/crear-jugador.component';
import { GridJugadoresComponent } from './components/grid-jugadores/grid-jugadores.component';
import { VerDetallesComponent } from './components/ver-detalles/ver-detalles.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GridJugadoresComponent
      },
      {
        path: 'crear',
        component: CrearJugadorComponent
      },
      {
        path: 'detalles',
        component: VerDetallesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugadorRoutingModule { }
