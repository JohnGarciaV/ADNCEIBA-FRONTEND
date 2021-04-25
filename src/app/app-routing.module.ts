import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/jugadores', pathMatch: 'full' },
  { path: 'jugadores', loadChildren: () => import('@jugador/jugador.module').then(mod => mod.JugadorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
